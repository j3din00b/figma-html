!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}({33:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function f(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,f)}l((i=i.apply(e,t||[])).next())})};function o(e){return i(this,void 0,void 0,function*(){const t=r(e);return t&&Promise.all(t.map(e=>i(this,void 0,void 0,function*(){e&&e.intArr&&(e.imageHash=yield figma.createImage(e.intArr).hash,delete e.intArr)})))})}function r(e){return Array.isArray(e.fills)&&e.fills.filter(e=>"IMAGE"===e.type)}figma.showUI(__html__,{width:500,height:300});const a=e=>e.toLowerCase().replace(/[^a-z]/gi,""),f={family:"Roboto",style:"Regular"};function l(e,t){return i(this,void 0,void 0,function*(){const n=e.split(/\s*,\s*/);for(const i of n){const n=a(i);for(const i of t){const t=a(i.fontName.family);if(t===n){const n=s[t];return n||(yield figma.loadFontAsync(i.fontName),s[e]=i.fontName,s[t]=i.fontName,i.fontName)}}}return f})}const s={};figma.ui.onmessage=e=>i(this,void 0,void 0,function*(){function t(e,t){for(const n in t){t[n]&&-1===["width","height","type"].indexOf(n)&&(e[n]=t[n])}}if("import"===e.type){const n=(yield figma.listAvailableFontsAsync()).filter(e=>"Regular"===e.fontName.style);yield figma.loadFontAsync(f);const{data:i}=e,{layers:a}=i,c=[];let u=figma.currentPage;for(const e of a)try{if("FRAME"===e.type){const t=figma.createFrame();t.x=e.x,t.y=e.y,t.resize(e.width,e.height),c.push(t),u.appendChild(t),u=t}else if("SVG"===e.type){const t=figma.createNodeFromSvg(e.svg);t.x=e.x,t.y=e.y,t.resize(e.width,e.height),c.push(t),u.appendChild(t)}else if("RECTANGLE"===e.type){const n=figma.createRectangle();r(e)&&(yield o(e)),t(n,e),n.resize(e.width,e.height),c.push(n),u.appendChild(n)}else if("TEXT"==e.type){const i=figma.createText();if(e.fontFamily){const t=s[e.fontFamily];if(t)i.fontName=t;else{const t=yield l(e.fontFamily||"",n);i.fontName=t}delete e.fontFamily}t(i,e),i.resize(e.width,e.height),i.textAutoResize="HEIGHT";const o=e.lineHeight&&e.lineHeight.value||e.height;let r=0;for(;"number"==typeof i.fontSize&&"number"==typeof e.fontSize&&(i.height>1.2*Math.max(e.height,o)||i.width>1.2*e.width);){if(r++>.3*e.fontSize){console.warn("Too many font adjustments",i,e);break}try{i.fontSize=i.fontSize-1}catch(t){console.warn("Error on resize text:",e,i,t)}}c.push(i),u.appendChild(i)}}catch(t){console.warn("Error on layer:",e,t)}figma.viewport.scrollAndZoomIntoView([u])}figma.closePlugin()})}});