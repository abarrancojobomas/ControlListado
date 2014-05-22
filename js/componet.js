/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var UlPrototype = Object.create(HTMLUListElement.prototype);
var LiPrototype = Object.create(HTMLLIElement.prototype);
var JoboLi = document.registerElement('jobo-li',{
  prototype: LiPrototype
});
UlPrototype.appendLi = function(id,urlphoto,name){
    var li = new JoboLi();
    var img = document.createElement('img');
    var p = document.createElement('p');
    var span = document.createElement('span');
    img.setAttribute('src',urlphoto);
    p.textContent = name;
    span.textContent = 'x';
    li.id = id;
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(span);
    span.addEventListener('click',function (){
        this.parentNode.parentNode.removeChild(this.parentNode);
        },false);
    this.appendChild(li);
    console.log('agregado li jobo');
};
UlPrototype.createdCallback = function() {
    this.id = "IdRefiniciondeUl";
   this.appendLi('ooo','images/perfil.jpg','alfredo Barranco Gomez');
   this.appendLi('ooo','images/perfil.jpg','alfredo Barranco G.');
   this.appendLi('ooo','images/perfil.jpg','alfredo ');
   this.appendLi('ooo','images/perfil.jpg','alfredo Barranco Gomez');
   this.appendLi('ooo','images/perfil.jpg','alfredo Barranco G.');
   this.appendLi('ooo','images/perfil.jpg','alfredo ');
   this.appendLi('ooo','images/perfil.jpg','alfredo Barranco Gomez');
   this.appendLi('ooo','images/perfil.jpg','alfredo Barranco G.');
   this.appendLi('ooo','images/perfil.jpg','alfredo ');
};
var JoboUl = document.registerElement('jobo-ul',{
  prototype: UlPrototype
});



var div = document.getElementById('mensaje');
var ul = new JoboUl();
div.appendChild(ul);  
var input = document.createElement('input');
input.type= 'text';
div.appendChild(input);