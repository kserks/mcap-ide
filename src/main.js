import App from './App.svelte';


const app = new App({
                	target: document.body
            });

export default app;



/*
function removeSelection (){
    let nodes = document.querySelectorAll('#tree_files li span.file-item');

    nodes.forEach(item=>{
      item.classList.remove('active-item')
    })
}

window.onload = function (){

  let t = window.document.querySelector('#tree_files');
  console.log(t)
  t.addEventListener('mousedown', e=>{
      alert(e.target.tagName)
      //e.target.classList.add('active-item')
  })

}
*/