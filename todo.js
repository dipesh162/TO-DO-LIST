$("ul").on("click", "li", function(){
	
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	
	$(this).parent().fadeOut(500,function(){
		console.log("Paneer3");
		$(this).remove();
	});
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	;
if(event.which === 13)
{
	
	var todotext = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>")
}
	});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});