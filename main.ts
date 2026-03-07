Deno.serve(() => {
  return new Response("Static content that rarely changes", {
    headers: {
      "Cache-Control": "public, s-maxage=1",
      // This response survives redeployments
      "Deno-CDN-Cache-Control": "public, s-maxage=1",,
    },
  });
});