
    
/* Add Header Active */
     $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('header').addClass('active');  
            $('.sec_go_to_top').addClass('active');
            $('.mobile_header').addClass('active');               
        }else{
            $('header').removeClass('active');
            $('.sec_go_to_top').removeClass('active');
            $('.mobile_header').removeClass('active');
        }
    });

/* Section 1 Page Down & Up Process */

    $(document).ready(function(){
        var scrollLink = $('.scroll');
        //smooth Scrolling
        scrollLink.click(function(e){
            e.preventDefault();
            // console.log(this.hash);
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            },1000);
        });
    });    

/* Open Login Form */    

    var login_btn = document.querySelector(".login_btn");
    var sec_login = document.querySelector(".sec_login");
    var cancel_login = document.querySelector(".cancel_login");
    var log_case = document.querySelector(".log_case");
    var create_account = document.querySelector(".create_account");

    login_btn.onclick = function(){
        sec_login.classList.add("active");
    }

    cancel_login.onclick = function(){
        sec_login.classList.remove("active");
    }

    log_case.onclick = function(){
        sec_login.classList.add("active");
    }

/* Open Login Form */    

    var signup_btn = document.querySelector(".signup_btn");
    var sec_sign_up = document.querySelector(".sec_sign_up");
    var cancel_signup = document.querySelector(".cancel_signup");
    

    signup_btn.onclick = function(){
        sec_sign_up.classList.add("active");
    }

    cancel_signup.onclick = function(){
        sec_sign_up.classList.remove("active");
    }
   
    create_account.onclick = function(){
        sec_sign_up.classList.add("active");
        sec_login.classList.remove("active");
    }   