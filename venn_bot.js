(function (g, e, n, es, ys) {
  g["_genesysJs"] = e;
  g[e] =
    g[e] ||
    function () {
      (g[e].q = g[e].q || []).push(arguments);
    };
  g[e].t = 1 * new Date();
  g[e].c = es;
  ys = document.createElement("script");
  ys.async = 1;
  ys.src = n;
  ys.charset = "utf-8";
  document.head.appendChild(ys);
})(
  window,
  "Genesys",
  "https://apps.mypurecloud.de/genesys-bootstrap/genesys.min.js",
  {
    environment: "prod-euc1",
    deploymentId: "d8015269-6c55-4bf8-bfc8-027b12dbc473",
  }
);

const clearCacheButton = document.getElementById("clearCacheButton");
const instructionsContainer = document.getElementById("instructionsContainer");
const closeButton = document.getElementById("closeButton");

clearCacheButton.addEventListener("click", () => {
  instructionsContainer.style.display = "block";
});

closeButton.addEventListener("click", () => {
  instructionsContainer.style.display = "none";
});
