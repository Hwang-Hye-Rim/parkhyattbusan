$(document).ready(function(){

    let slide = 0;

    $('.sec4_button>.right').click(function(){
        slide++
        if(slide > 12){
            slide = 0;
        };
        // console.log(slide);

        $('.sec4_img_wrap').animate({
            left: (-100 * slide) + "%"
        });

        $('.text_wrap').animate({
            left: (-100 * slide) + "%"
        });
    })

    $('.sec4_button>.left').click(function(){
        slide--
        if(slide < 0){
            slide = 12;
        };
        // console.log(slide);

        $('.sec4_img_wrap').animate({
            left: (-100 * slide) + "%"
        });

        $('.text_wrap').animate({
            left: (-100 * slide) + "%"
        });

    })
    // section_5 end


    let sec5_slide = 0;

    $('.sec5_button>button:nth-child(2)').click(function(){
        sec5_slide++
        if(sec5_slide > 1){
            sec5_slide = 0;
        };
        // console.log(sec5_slide);

        $('.sec5_con_wrap').animate({
            left: (-100 * sec5_slide) + "%"
        });

        $('.sec5_button>button:nth-child(1)').css({
            opacity: 1,
        })

        $('.sec5_button>button:nth-child(2)').css({
            opacity: 0.3,
        })
    })

    $('.sec5_button>button:nth-child(1)').click(function(){
        sec5_slide--
        if(sec5_slide < 0){
            sec5_slide = 1;
        };
        // console.log(sec5_slide);

        $('.sec5_con_wrap').animate({
            left: (-100 * sec5_slide) + "%"
        });

        $('.sec5_button>button:nth-child(1)').css({
            opacity: 0.3,
        });

        $('.sec5_button>button:nth-child(2)').css({
            opacity: 1,
        });
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
})