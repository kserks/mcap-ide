import { writable } from 'svelte/store';





export let current = writable({
  target: "CT",
  id: "",
  path: "%ID%",
  name: "*.*",
})

