(function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.de/genesys-bootstrap/genesys.min.js', {
    environment: 'euc1',
    deploymentId: 'f269c139-6462-43ce-a3bb-1bdbe6064c8e'
  }
Genesys("command", "Messenger.open"));