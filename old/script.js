$(function () {
    $(".container > .section:eq(2) .text").hide();
    $("#result").hide();
    $(".menu-background").hide();

    $(".menu-button").click(function () {
        $(".menu-background").slideToggle();
    });

    $("#close").click(function () {
        $(".menu-background").slideToggle();
    });

    $("#goTop").click(function () {
        $(".container").animate({scrollTop:0},2500);
    });

    $(".container > .section:eq(2)").click(function (){
        $(".container > .section:eq(2) .text").slideToggle("slide");
    });

    $(".container > .section:eq(2) .text").click(function(event){
        event.stopPropagation();
    });

    $(".container :nth-child(2) :nth-child(1)").click(function (){
        window.location.href = "dungeons";
    });
    $(".container :nth-child(2) :nth-child(2)").click(function (){
        window.location.href = "blog";
    });
    $(".container :nth-child(2) :nth-child(3)").click(function (){
        window.location.href = "math";
    });

    let counter = 0;
    $(".container > .section:eq(2) .button").click(function (){
        $(".container > .section:eq(2) .button").text("ごめんなさい。まだ準備中です。");
        counter ++;
        if(counter >= 100){
            $(".container > .section:eq(2) .button").text(counter+" 回もクリックしても意味ないです。");
            $("#result").text(`実績 あなたはボタンを ${ counter } 回もクリックした！`);
        }else if(counter >= 20){
            $(".container > .section:eq(2) .button").text("本当にないですからね。");
        }else if(counter >= 10){
            $(".container > .section:eq(2) .button").text("そんなにクリックしてもありませんよ?");
        }
        $("#result").show();
        $("#result").text("実績 あなたは隠し要素を見つけた！");
    });
    const mes = ["こんにちは!","ワン！","よく見つけたね！","ウェイ！","いえい","地球を回ってるなう","地球に回られてるなう"];
    $(".ATD").click(function (){
        $("#mes").text(mes[Math.floor(Math.random() * (mes.length))]);
        $("#result").show();
        $("#result").text(`実績 あなたはATDと話をした！`);
    });
/*
    $('a[href^="#"]').click(function(){
        var speed = 0;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $(".container").animate({scrollTop:position}, speed);
        return false;
    });*/

})