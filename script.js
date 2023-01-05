
function onLoad() {
    //Eventをすべてリセット(下記に記述している以外を消す。)
    $("*").off();

    if(location.pathname.substring(-2) === "s"){
        console.log(location + "/");
        var loc = location.href + "/";
        history.replaceState({"pageURL": loc}, null, loc);
        console.log(loc);
    }else{
        var loc = location.href;
        history.replaceState({"pageURL": loc}, null, loc);
        console.log(loc);

    }

    $(".photo-view").hide();

    $(".menu-background").hide();

    $(".menu-button").on("click", function () {
        $(".menu-background").slideDown();
    });
    $("#close").on("click", function () {
        $(".menu-background").slideUp();
    });


    $(".member-button").on("click", function () {
        URLLoadContainer("member.html", "メンバー");
        stateUpdate("member.html");
    });

    $(".story-button").on("click", function () {
        URLLoadContainer("story.html", "ストーリー");
        stateUpdate("story.html");
    });

    $(".about-button").on("click", function () {
        URLLoadContainer("about.html", "アバウト");
        stateUpdate("about.html");
    });

    $(".photo-button").on("click", function () {
        URLLoadContainer("photo.html", "写真");
        stateUpdate("photo.html");
    });

    $(window).on("popstate", function (e) {
        var state = e.originalEvent.state;

        if (state) {
            var url = state.pageURL;

            URLLoadContainer(url, null);

        }
    });

    $("a").on("click", function (e) {
        e.preventDefault();
        var link = $(this).attr("href");
        console.log(link);
        URLLoadContainer(link, link);
        stateUpdate(link);
        $(".menu-background").slideUp();
    });

    $(".photo-view img").on("click", function () {
        $(".photo-view").fadeOut();
    });

    $(".photo-box img").on("click", function () {
        var image = $(this).attr("src");
        console.log(image + "画像がクリックされました");
        var replaceImage = image.replace("small", "large");
        $(".photo-view img").attr("src", replaceImage);
        $(".photo-view").fadeIn();
    });
};

window.addEventListener('DOMContentLoaded', onLoad);


function URLLoadContainer(URL,name){
    const container = $(".container");

    container.animate({
        opacity:0
    },500,function (){
        container.empty();
        $.ajax({
            beforeSend:function (jqXHR, settings) {
                jqXHR.overrideMimeType("text/html;charset=UTF-8");
            },
            url: URL,
            success:function (data){
                container.text("読み込み成功");
                var loadHTML = $(data).find(".container");

                console.log( loadHTML);
                // $(data).find("div").each(function (){
                //     if($(this).is(".container")){
                //         container.html($(this).text());
                //         console.log($(this).text());
                //     }
                // });

                container.html(loadHTML);

                container.animate({
                    opacity:1
                },500);

                onLoad();
            },
            error:function (data){
                container.text("読み込みに失敗しました。");
            }

        })


    });
}
function stateUpdate(URL){
    var state = {"pageURL": URL};

    history.pushState(state,null, URL);
}