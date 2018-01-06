// register the event at the lis of the ul, let us 
// register the evelt for all future lis in ul 
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
});

$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); 
	});
	event.stopPropagation(); // avoid bubbling parant event from li
});

$("#add").on("click", function(){
	$("#newTodo").fadeToggle();
});

$("#newTodo").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val(); 
		$("ul").append("<li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

