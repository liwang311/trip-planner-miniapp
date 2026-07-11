import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const serverDir = path.join(root, "dist", "server");
const pagesDir = path.join(root, "dist", "pages");

await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });

await cp(clientDir, pagesDir, { recursive: true });

await build({
  entryPoints: [path.join(serverDir, "index.js")],
  outfile: path.join(pagesDir, "_worker.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*"],
  logLevel: "info",
});

await writeFile(
  path.join(pagesDir, "_routes.json"),
  `${JSON.stringify(
    {
      version: 1,
      include: ["/*"],
      exclude: ["/assets/*", "/*.svg", "/og.png", "/favicon.svg"],
    },
    null,
    2,
  )}\n`,
);

console.log("Cloudflare Pages output prepared at dist/pages");
