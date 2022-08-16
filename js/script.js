$(document).ready(function(){
    // header slider
    let heroSlider = $('.hero-slider');
    let sliderIdx3 = $('.slider-idx-3');
    let sliderIdx6 = $('.slider-idx-6');
    let sliderIdx10 = $('.slider-idx-10');
    let sliderGallery = $('.gallery-itm-thumbs');

    heroSlider.owlCarousel({
        loop:true,
        margin: 0,
        dots: false,
        nav:false,
        autoplay: true,
        items: 1,
    });

    // side navigation toggle
    const navbarOverlayModal = $('.navbar-overlay-modal');
    const sideNavbarDiv = $('.sc-side-navbar');
    $('#show-sidenav-btn').click(() => {
        sideNavbarDiv.addClass('js-show-navbar');
        navbarOverlayModal.addClass('js-show-navbar-modal');
    });
    $('#hide-sidenav-btn').click(() => {
        sideNavbarDiv.removeClass('js-show-navbar');
        navbarOverlayModal.removeClass('js-show-navbar-modal');
    });

    $(document.body).click(function(e){
        if($(e.target).hasClass('js-show-navbar-modal') || $(e.target).hasClass('side-nav-link')){
            sideNavbarDiv.removeClass('js-show-navbar');
            navbarOverlayModal.removeClass('js-show-navbar-modal');
        }
    })

    sliderIdx3.owlCarousel({
        center: true,
        autoplay: true,
        items: 2,
        dots: false,
        nav: true,
        loop:true,
        margin: 25,
        responsive:{
            800:{
                items: 3
            },
            1000:{
                items: 4
            }
        }
    });

    sliderIdx6.owlCarousel({
        center: false,
        autoplay:true,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        margin: 25,
        stagePadding: 15,
        navText: ["<i class='fa fa-chevron-left fa-xl'></i>","<i class='fa fa-chevron-right fa-xl'></i>"]
    })

    sliderIdx10.owlCarousel({
        autoplay: true,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        margin: 10,
        navText: ["<i class='fa fa-chevron-left fa-xl'></i>","<i class='fa fa-chevron-right fa-xl'></i>"],
        responsive:{
            600: {
                items: 2
            },
            800:{
                items: 3
            },
            1200:{
                items: 4,
                stagePadding: 70,
            }
        }
    });

    /* ###### Gallery part ###### */
    // gallery slider
    sliderGallery.owlCarousel({
        autoplay: false,
        items: 2,
        dots: true,
        nav: true,
        loop: false,
        margin: 10,
        slideBy: 1,
        navText: ["<i class='fa fa-chevron-left fa-xl'></i>","<i class='fa fa-chevron-right fa-xl'></i>"],
        responsive:{
            800:{
                items: 3
            },
            1200:{
                items: 4,
            }
        }
    });

    // gallery content change
    const itemDisplayContainer = $('#gallery-itm-display .itm-card');
    const itemList = $('#gallery-itm-list .itm-card');
    itemList.each(function(index, element){
        $(element).click(function(){
            let tempContent = $(element).children().clone();
            itemDisplayContainer.html(tempContent);
            let url = $(element).children('.itm-card-body').attr('data-url');
            let imgpath = $(element).children('.itm-card-body').attr('data-img');
            setContent(url, imgpath);
        })
    })

    const setContent = (url, imgpath) => {
        itemDisplayContainer.children(".display-img").attr('src', imgpath);
        itemDisplayContainer.attr('href', url);
        itemDisplayContainer.children().children(".display-title").addClass('gallery-item-title');
        itemDisplayContainer.children().children('.display-info').removeClass('d-none')
    }

    const intitalContent = () => {
        let tempContent = $(itemList[0]).children().clone();
        itemDisplayContainer.html(tempContent);
        let url = $(itemList[0]).children('.itm-card-body').attr('data-url');
        let imgpath = $(itemList[0]).children('.itm-card-body').attr('data-img');
        setContent(url, imgpath);
    }
    intitalContent();
})