$(document).ready(function () {
    $(".popUpShow a").click(function (ev) {
        ev.preventDefault();
        $(".popUp").fadeIn().css("display", "flex");

        chanImage($(this));
        toggleNextPrev($(this));

        setBodyEvents();
    })
    $(".popUp .next").click(function () {
       nextSlide();

    });

    $(".popUp .prev").click(function () {
        prevSlide();
    });
    $(".popUp .close").click(function () {
        closePopUp();
    });
    $(".popUp").click(function (ev) {
        if ($(ev.target).hasClass("popUp")) {
            closePopUp();
        }
    })
    $(document.body).keyup(function (ev) {
        if (ev.which == 27) {
            closePopUp();
        }
    })

    function nextSlide(){
        var next = $(".popUpShow a.active").next();
        if (next.length != 0) {
            $(".popUpShow a.active").removeClass("active");
            chanImage(next);
            toggleNextPrev(next);
        };
    }
    function prevSlide(){
        var prev = $(".popUpShow a.active").prev();
        if (prev.length != 0) {
            $(".popUpShow a.active").removeClass("active");
            chanImage(prev);
            toggleNextPrev(prev);
        }
       
    }




    function chanImage(elem) {
        let src = elem.attr("href");

        $(".popUp").find("img").attr("src", src);

        $(".popUp .info").find("span").eq(0).text((elem.index() + 1) + "/" + $(".popUpShow").children().length);

        $(".popUp .info").find("span").eq(1).text(elem.attr("title"));

        elem.addClass("active");
    }

    function toggleNextPrev(elem) {
        if (elem.next().length == 0) {
            $(".popUp .next").hide();
        } else {
            $(".popUp .next").show();
        }

        if (elem.prev().length == 0) {
            $(".popUp .prev").hide();
        } else {
            $(".popUp .prev").show();
        }
    }

    function closePopUp() {
        $(".popUp").fadeOut();
        $(document.body).off("keyup");
    }

    function setBodyEvents() {
        $(document.body).keyup(function (ev) {
// close PopUp with ESC key

            if (ev.which == 27) {
                closePopUp();
            };
            // next slide with right key
            if(ev.which==39){
                nextSlide();
            }
            // previous slide with left key

            if(ev.which==37){
                prevSlide();
            }
        })

        $(document.body).on("mousewheel", function(ev){
            if(ev.originalEvent.deltaY>0){
                nextSlide();
            }
            if(ev.originalEvent.deltaY<0){
                prevSlide();
            }
        });
    }















});