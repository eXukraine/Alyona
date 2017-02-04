

$(document).ready(function() {
    $("#nav").on("click", "li", function(){
    	$("#nav li").removeClass("active"); //удаляем класс во всех вкладках
    	$(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
});