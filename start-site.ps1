$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$url = "http://localhost:4173/"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js was not found. Install Node.js 22.13 or newer first."
}

$pnpm = Get-Command pnpm.cmd -ErrorAction SilentlyContinue
if (-not $pnpm) {
    $corepack = Get-Command corepack.cmd -ErrorAction SilentlyContinue
    if (-not $corepack) {
        throw "pnpm was not found. Run: corepack enable"
    }
    & $corepack.Source pnpm --version | Out-Null
    $pnpm = Get-Command pnpm.cmd -ErrorAction SilentlyContinue
}

if (-not $pnpm) {
    throw "pnpm is unavailable. Run: corepack enable"
}

Set-Location -LiteralPath $projectRoot

if (-not (Test-Path -LiteralPath (Join-Path $projectRoot "node_modules"))) {
    & $pnpm.Source install
    if ($LASTEXITCODE -ne 0) {
        throw "Dependency installation failed."
    }
}

function Test-Site {
    try {
        return (Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2).StatusCode -eq 200
    }
    catch {
        return $false
    }
}

if (-not (Test-Site)) {
    Start-Process `
        -FilePath $pnpm.Source `
        -ArgumentList @("exec", "vinext", "dev", "--host", "0.0.0.0", "--port", "4173", "--strictPort") `
        -WorkingDirectory $projectRoot `
        -WindowStyle Hidden `
        -RedirectStandardOutput (Join-Path $projectRoot "launcher.stdout.log") `
        -RedirectStandardError (Join-Path $projectRoot "launcher.stderr.log")

    for ($attempt = 0; $attempt -lt 30; $attempt++) {
        Start-Sleep -Seconds 1
        if (Test-Site) { break }
    }
}

if (-not (Test-Site)) {
    throw "The site did not start within 30 seconds. Check launcher.stderr.log."
}

Start-Process -FilePath "explorer.exe" -ArgumentList $url
