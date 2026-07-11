@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-site.ps1"
if errorlevel 1 (
  echo.
  echo Coastbound China could not be started.
  pause
)
endlocal

