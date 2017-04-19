var coders = [{name:"Arantza Burga", url: "img/arantza-burga.jpg"},{name:"Daguiana Revoredo", url: "img/daguiana-revoredo.jpg"},
              {name:"Elizabeth Condori", url: "img/elizabeth-condori.jpg"},{name:"Grecia Rayme", url: "img/grecia-rayme.jpg"},
              {name:"Janine Vega", url: "img/janine-vega.jpg"},{name:"Michelle More", url: "img/michelle-more.jpg"}];
window.addEventListener("load", function(){

  var body = document.getElementsByTagName("body")[0];
  var docFrag = document.createDocumentFragment();
  var box = crear("div", "caja-1");
  var titulo = crear("h2", "titulo");
  titulo.textContent = "Nuestras Coders";
  var barra = crear("div","barra");


  box.appendChild(titulo);
  box.appendChild(barra);
  var imgConteiner = crear("div", "imgConteiner");
  box.appendChild(divImg(coders, imgConteiner));
  docFrag.appendChild(box);
  body.insertBefore(docFrag, body.childNodes[0]);
});
function crear(tag, clase, ruta, text){
  var elemento = document.createElement(tag);
      elemento.className = clase;

      if(ruta != ""){
        elemento.src = ruta;
      }
      if(text != ""){
        elemento.textContent = text;
      }
      return elemento;
}
function divImg(array, div){
    array.forEach(function(item){
      var divI = crear("div", "coder");
      var img = crear("img", "img-coder", item.url);
      var span = crear("span", "span-coder","" ,item.name);
      divI.appendChild(img);
      divI.appendChild(span);
      div.appendChild(divI);
    });
    return div;
}
