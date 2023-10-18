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
    deploymentId: "ae0603d2-288b-4883-aa3f-15f923722475",
  }
);

const clearCacheButton = document.getElementById("clearCacheButton");
const instructionsContainer = document.getElementById("instructionsContainer");
const closeButton = document.getElementById("closeButton");

clearCacheBtn.addEventListener("click", () => {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
});
