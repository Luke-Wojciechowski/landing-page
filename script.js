var modal = document.getElementById('modal');//modal all
var modalFuse = document.getElementById('modal-item');//Fuse 
var modalClose = document.getElementById('modal-close');//X
//open
modalFuse.addEventListener('click',()=>{
	modal.style.display= 'block'
})

//close
modalClose.addEventListener('click',()=>{
	modal.style.display= 'none'
})