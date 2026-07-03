import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const startPort = Number(process.argv[2] || process.env.PORT || 4173);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".otf": "font/otf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function safePath(urlPath) {
  const requested = decodeURIComponent(urlPath === "/" ? "/dashboard-redesign.html" : urlPath);
  const resolved = normalize(join(root, requested));
  return resolved.startsWith(root) ? resolved : join(root, "dashboard-redesign.html");
}

function listen(port) {
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url || "/", `http://${request.headers.host}`);
      const filePath = safePath(url.pathname);
      const data = await readFile(filePath);
      response.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
      response.end(data);
    } catch {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
    }
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, "127.0.0.1", async () => {
    const url = `http://127.0.0.1:${port}/dashboard-redesign.html`;
    await writeFile(join(root, "dashboard-server.log"), `${url}\n`, "utf8");
    console.log(url);
  });
}

listen(startPort);
