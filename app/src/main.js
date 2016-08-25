const weinreDelegate = require('../../lib/weinre/weinreDelegate');
weinreDelegate.run({
    cusSpyProxyPort: 9990,
    cusShowIframe: false,
    cusAutoDetectBrowser: true,
    cusCache: true
});
