
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/3dp-landing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/3dp-landing"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1117, hash: 'f6b69bc583a8e06e1e8029707aaf515c87ec1a1fc1839df81787e679cb430955', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1215, hash: '2e58e7f3281945bddc606bd088f026bec40de90dd3ce9989ade08206017736c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29711, hash: '910131d296b85d4111d7068b9e871d5d9799a7ca620a0d6bc4e01b3c979b3bdd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZSJAK55T.css': {size: 297, hash: 'w0p3t75Mx5g', text: () => import('./assets-chunks/styles-ZSJAK55T_css.mjs').then(m => m.default)}
  },
};
