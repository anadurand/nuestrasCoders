var coders = [];
window.addEventListener("load", function(){

  var body = document.getElementsByTagName("body")[0];
  var docFrag = document.createDocumentFragment();
  var box = crear("div", "caja-1", "bigBox");
  var titulo = crear("h2", "titulo", "titulo");
  titulo.textContent = "Nuestras Coders";
  var barra = crear("div","barra");


  box.appendChild(titulo);
  box.appendChild(barra);
  box.appendChild(crear("div", "imgConteiner"));
  docFrag.appendChild(box);
  body.insertBefore(docFrag, body.childNodes[0]);
});
function crear(tag,clase, id){
  var elemento = document.createElement(tag);
      elemento.className = clase;
      if(id!=""){
        elemento.id = id;
      }
      return elemento;
}
function divImg(){
  for(i=0; i<coders.lenght; i++){

  }
}
