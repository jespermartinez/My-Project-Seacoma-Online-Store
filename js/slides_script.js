
/* Banner Slder */

    var sec_1_box_image_right = document.querySelector(".sec_1_box_image_right").children;
    var banner_counter = 0;
    
    setInterval(function(){

        banner_counter++;
        
        var total_slides = 0; 
        for(var x=0;x<sec_1_box_image_right.length;x++){
            sec_1_box_image_right[x].classList.remove("active");
            total_slides++;
        }

        if(banner_counter == total_slides){
            banner_counter = 0;
        }

        sec_1_box_image_right[banner_counter].classList.add("active");

    }, 3000);


/* Home Categories Slider */

     var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

/* Home TOP Product */

      var swiper = new Swiper('.swiper-container_top_sec_4_product', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

/* Home Treding Product Slider */

    var swiper = new Swiper('.swiper-container_sec_6_trending_search', {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 30,
        pagination: {
        el: '.swiper-sec_6_pagination',
        clickable: true,
        },
    });    

