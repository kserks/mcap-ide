import { writable } from 'svelte/store';





export let current = writable({
  target: "cct",
  id: "1",
  path: '',//"%ID%",
  name: "*.*",
})