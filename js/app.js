$(function(){
    
    var header = $("#nav"),
        introH =  $("#header").innerHeight();
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    $(window).on("scroll",function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){ 
        
        if(scrollOffset>= introH){
            header.addClass("fixed")
        }else{
            header.removeClass("fixed")
        }
    }
    // smoth scroll обращение к data-scroll
    $("[data-scroll]").on("click",function(event){
        event.preventDefault(); 

        var $this =  $(this),
            blockid =$this.data('scroll'); 
            // -75 это чтоб был отступ и шапка не наезжала на текст 
            blockoffset =$(blockid).offset().top - 75; 
        // добавление класса актив для ссылок
        $("#nav a").removeClass("active");
        // $("grid_text").removeClass("active");
        $this.addClass("active");
        // плавная анимация 
        $("html, body").animate({
            scrollTop:blockoffset
        },1000)
    });

    // burger
    $("#nav_burger").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });

    // свое
    $("#nav a").on("click", function(event){
        event.preventDefault();
        $("#nav_burger").removeClass("active");
        $("#nav").removeClass("active");
    });

    

    
});