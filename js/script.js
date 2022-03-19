

$(".workers_card").click(function(){



    $(".workers_card").children("div").animate({
        top:"0px"
    },400)
    $(".workers_card").children("div").css("box-shadow","none");


    if($(this).children("div").css("top")=="0px"){
    $(this).children("div").animate({
        top:"-120px"
    },400)
    $(this).children("div").css("box-shadow","0px 5px 5px grey");
}
})


let geoTop;

$(".where_to_go").click(function(){
    geoTop = $("#our_geo").position();
    $('html, body').animate({
        scrollTop: geoTop.top,
      }, 800);
});

$("#about_desc_btn").click(function(){
    geoTop = $("#our_geo").position();
    $('html, body').animate({
        scrollTop: geoTop.top,
      }, 800);
});


let aboutUsTop;
$(".about_us").click(function(){
    aboutUsTop = $(".about_cont").position();
    $('html, body').animate({
        scrollTop: aboutUsTop.top + $("header").height(),
      }, 800);
});

// let pricesTop ;
$(".prices_btn").click(function(){
    pricesTop = $(".prices").offset();
   
    $('html, body').animate({
        scrollTop: pricesTop.top,
      }, 800);
});





$("#go_up").hide(0);

$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if(scroll>800) $("#go_up").show(500);
    if(scroll<800) $("#go_up").hide(500);
});


let goUpTop = $("#header").position();
$("#go_up").children("img").click(function(){
    $('html, body').animate({
        scrollTop: goUpTop.top,
      }, 800);
});







$("#menu_burger").slideToggle(0);


$("#burger_btn").click(function(){

    $(this).animate({
        opacity:"0"
        // transform:"rotate(360deg)"
    },300);

    $("#menu_burger").slideToggle(500);

    $(this).animate({
        // transform:"scale(1)",
        opacity:"1"
    });
})



$("#burger_geo").click(function(){
    geoTop = $("#our_geo").position();
    $('html, body').animate({
        scrollTop: geoTop.top,
      }, 800);

      $("#menu_burger").slideToggle(500);
});

$("#burger_about").click(function(){
    aboutUsTop = $(".about_cont").position();
    $('html, body').animate({
        scrollTop: aboutUsTop.top  + $("header").height(),
      }, 800);

      $("#menu_burger").slideToggle(500);
});

$("#prices_btn_burger").click(function(){
    pricesTop = $(".prices").offset();
    $('html, body').animate({
        scrollTop: pricesTop.top ,
      }, 800);

      $("#menu_burger").slideToggle(500);
});




$("#geo_pic").click(function(){
    window.open('https://yandex.by/maps/20729/bobruisk/house/ZkAYdAVmTkwBQFtpfX10cH9qZg==/?ll=29.226796%2C53.151392&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=17', '_blank');
    
})




$(".main_page").click(function(){
    location.href="index.html";
})
$(".maneq_page").click(function(){
    location.href="maneq.html";
})


$("#service_maneq").click(function(){
    
    location.href="maneq.html";
})
$("#service_solar").click(function(){
    
    location.href="solar.html";
})
$(".solar_page").click(function(){
    
    location.href="solar.html";
})



    $("#insta_name").click(function(){
        window.open("https://www.instagram.com/pink_panthera_pink/","_blank");
    })






// console.log(smoothTop);

// let smoothBlocks = $(".smooth");
// let k =0;
// let  smoothTop = $(".smooth").eq(k).position();

// $(".smooth").css({
//     opacity:"0",
//     transform:"translateY(100px)"
// });

// $(window).scroll(function() {
    
//     if($(window).scrollTop() >=smoothTop.top-500) {

//         if(k< smoothBlocks.length){
//             $(".smooth").eq(k).css({
//                 opacity:"1",
//                 transform:"translateY(0px)"
//             });
         
//            if(k!= smoothBlocks.length-1)   k++;
          
//             smoothTop = $(".smooth").eq(k).position();
//         }
       
//     }
// });

