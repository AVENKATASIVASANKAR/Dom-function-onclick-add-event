var Tobtn=document.getElementById('todo-btn');
var TodoList=document.getElementById('todo-list');
var todoItem=document.getElementById('todo-item');
Tobtn.addEventListener('click',function(){
   var newElement= document.createElement('li');
   console.log(newElement);

   //console.log(Textnode);
  
   TodoList.appendChild(newElement);
   var count =TodoList.childElementCount;
   
   var Textnode=document.createTextNode("list item" + count);
   newElement.append(Textnode);
   newElement.id="li "+count;
   var todoItem=TodoList.firstElementChild;
   TodoList.insertBefore(newElement,todoItem);
   
   if (count % 2 == 0){
       document.getElementById('body').style.backgroundImage="url('images/bg1.jpg')"
   }
   else{
       document.getElementById('body').style.backgroundImage="url('images/bg2.jpg')";
   }
})