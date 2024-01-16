import createLayoutComponents from './util.js';

const { headerEl, mainEl, footerEl } = createLayoutComponents();

/* initApp */
const body = document.body;

body.appendChild(headerEl);
body.appendChild(mainEl);
body.appendChild(footerEl);
