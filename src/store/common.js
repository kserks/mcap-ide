import { writable } from 'svelte/store';



export let current = writable({
  target: "CT",
  id: "",
  path: "",//%ID%
  name: "*.*",
})

export let language = writable('text');
export let root = writable('');


export let ui = writable({
  showVideoPlayer: false,
  splitVideoScreen: false
})