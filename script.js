$(function (){
    $(".menu-background").hide();

    $(".menu-button").on("click",function(){
        $(".menu-background").slideToggle();
    });
    $("#close").on("click",function(){
        $(".menu-background").slideToggle();
    });


});


