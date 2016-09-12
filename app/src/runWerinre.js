// hacky for weinre: node_modules/weinre/lib/utils.js#L11
process.argv = ['node', 'hacky']
const weinreDelegate = require('../lib/weinre/weinreDelegate');
// const weinre = require('weinre');
// weinre.run({
//     httpPort: 9990,
//     boundHost: '-all-',
//     verbose: false,
//     debug: false,
//     readTimeout: 5,
//     deathTimeout: 15
// });

weinreDelegate.run({
    cusSpyProxyPort: 9990,
    cusShowIframe: false,
    cusAutoDetectBrowser: true,
    cusCache: true
});
