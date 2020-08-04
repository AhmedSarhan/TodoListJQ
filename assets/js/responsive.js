//check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});

//use the delete icon to delete Todos
$("ul").on("click", "span" ,function(event){
  $(this).parents("li").fadeOut(500, function(){
    $(this).remove(); 
  });
  event.stopPropagation();
});

//Entering a new Todo
$("input[type='text'").keypress(function(event){
    if (event.which === 13) {
        //grab new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>")
        $(this).val("");
    }
})
$(".fa-plus").click(function(){
     $("input[type='text'").fadeToggle();
});


