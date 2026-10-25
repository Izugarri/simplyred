import { serveDir } from "jsr:@std/http/file-server";

Deno.serve(async (req) => {
  const url = new URL(req.url);

  // 1. Obtenemos la respuesta por defecto de serveDir
  const response = await serveDir(req, {
    fsRoot: "./", 
    showDirListing: true,
    cleanUrls: true,    
  });

  // Clonamos la respuesta para poder modificar sus encabezados (son inmutables por defecto)
  const newResponse = new Response(response.body, response);

  // 2. Si la ruta es de la carpeta "control", PROHIBIMOS el caché
  if (url.pathname.startsWith("/Control/") || url.pathname === "/Control") {
    newResponse.headers.set(
      "Cache-Control", 
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    newResponse.headers.set("Pragma", "no-cache");
    newResponse.headers.set("Expires", "0");
    
    return newResponse;
  }

  // 3. Para el resto de archivos, aplicamos el caché agresivo (1 hora)
  newResponse.headers.set(
    "Cache-Control", 
    "public, max-age=3600, stale-while-revalidate=600"
  );

  return newResponse;
});
