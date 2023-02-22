$("nav .nav-item .nav-link").click(function(){
    $("nav .nav-item").find("a.active").removeClass("active");
    $(this).addClass("active");
 });
