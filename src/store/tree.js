import { writable } from 'svelte/store';
/*
const tree2 = {
    name: "NJS", children: [
      { name: "src", children: [
        { name: "static.txt"},
        { name: "plugins", children: [
          { 
            name: "dialog-box",
            children: [
                { name: "index.js"},
                { name: "style.css"},
                { name: "tpl.html"},
            ]
          },
          { 
            name: "wiki",
            children: [
                { name: "index.js"},
                { name: "style.css"},
                { name: "tpl.html"},
            ]
          },
          { 
            name: "status-bar",
            children: [
                { name: "index.js"},
                { name: "style.css"},
                { name: "tpl.html"},
            ]
          },
        ]},
        { name: "file-name.txt"},
      ]},
      { name: "public", children: [
        { name: "index.html" },
        { name: "style.css" },
        { 
          name: "lib", 
          children: [
              { name: "jquery.min.js" },
              { name: "p5.js" },
              { name: "undescore.js" },
              { name: "module-a3s80sd93j.js" },
          ]
        },
      ]},
    ],
}
*/
export let tree = writable([]);