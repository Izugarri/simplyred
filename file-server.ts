import { serveDir } from "@std/http/file-server";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("./")) {
    return serveDir(req, {
      fsRoot: "path/to/static/files/dir",
    });
  }
  return new Response();
});