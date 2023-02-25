$(".nav-link").click(function(){
    console.log("Hello world")
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
 });
