//alert("enlazado!");
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector("ul");
const empty = document.querySelector('.vacio');

addBtn.addEventListener('click', (e) => { 
	
	e.preventDefault();//para que no se recargue la pagina al hacer click en agregar

	const text = input.value;

	if (text !== '') {
			const li = document.createElement('li');
			const p = document.createElement('p');
			p.textContent = text;

			li.appendChild(p);
			li.appendChild(addBorrarBtn());
			ul.appendChild(li);

			input.value = "";
			vacio.style.display = "none";//esto para que cada vez q haya una tarea, el .vacio no se vea
	}

});

function addBorrarBtn(){

	const borrarBtn = document.createElement('button');

	borrarBtn.textContent = "-";
	borrarBtn.className = "btn-borrar";//como es un elemento creado aca le asignamos una clase


	borrarBtn.addEventListener('click', (e) => {

		const item = e.target.parentElement;
		ul.removeChild(item);

		const items = document.querySelectorAll('li');

		if (items.length === 0) {
			vacio.style.display = "block";//para volver a ver el .vacio
		}


	});
	return borrarBtn;

}