var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    deleteAll = document.getElementById('deleteAll')
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  //submits things in the todolist
  field.value=""
  evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  //makes items disapear in the list disapear when clicking
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);

deleteAll.addEventListener( 'click', function(evt) {
  //deletes the entire list
  todo.innerHTML = "";
  evt.preventDefault();
});