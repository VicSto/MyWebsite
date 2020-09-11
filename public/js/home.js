const pages = {
    ABOUT_PAGE : 0,
    PROJECTS_PAGE : 1
}

const scrollDir = {
    UP: 0,
    DOWN: 1
}

var is_fading = false;
var fade_timeout = 750;

let currIndex = pages.ABOUT_PAGE;

let about_page = document.getElementById("home_about_page")
let projects_page = document.getElementById("home_projects_page")

$(document).ready(function () {

    // fade in initial element
    throttled_fade_in("#home_about_page");

    // bind our scroll event logic to all browser types
    $('html').bind('mousewheel DOMMouseScroll touchmove', function (e) {
        // console.log(e.type)
        var delta = 0;
        if (e.type === "mousewheel" || e.type === "DOMMouseScroll")
        {
            var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
        }
        else if (e.type === "touchmove"){
            // placeholder, need to add logic for touchscreen scrolling
            
        }
        if (is_fading === false){
            toggle_element_view((delta < 0) ? scrollDir.DOWN : scrollDir.UP);
        }
    });
});

function toggle_element_view(scroll_dir){
    is_fading = true;
    at_bottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    at_top = window.scrollY === 0;

    switch(currIndex)
    {
        case pages.ABOUT_PAGE:
            if (at_bottom && scroll_dir === scrollDir.DOWN)
            {
                throttled_fade_out("#home_about_page");
                setTimeout(
                    function () {
                        throttled_fade_in("#home_projects_page");
                    }, fade_timeout
                );
                currIndex = pages.PROJECTS_PAGE;
            }
            break;

        case pages.PROJECTS_PAGE:
            if (at_top && scroll_dir === scrollDir.UP)
            {
                throttled_fade_out("#home_projects_page");
                setTimeout(
                    function () {
                        throttled_fade_in("#home_about_page");
                    }, fade_timeout
                );
                currIndex = pages.ABOUT_PAGE;
            }
            break;
        
    }
    setTimeout(
        function () {
            is_fading = false;
            return;
        }, fade_timeout + 100
    );
}

function throttled_fade_in(ele, timeout=fade_timeout) {
    $(document).ready(function () {
        $(ele).fadeIn(timeout);
    });
    setTimeout(
        function()
        {
            return;
        }, timeout);
}

function throttled_fade_out(ele, timeout=fade_timeout) {
    $(document).ready(function () {
        $(ele).fadeOut(timeout);
    });
    setTimeout(
        function()
        {
            return;
        }, timeout);
}

function throttled_fade_toggle(ele, timeout=fade_timeout) {
    $(document).ready(function () {
        $(ele).fadeToggle(timeout);
    });
    setTimeout(
        function()
        {
            return;
        }, timeout);
}

function down_button_pressed() {
    if (is_fading === false){
        toggle_element_view(scrollDir.DOWN);
    }
}

function up_button_pressed() {
    if (is_fading === false){
        toggle_element_view(scrollDir.UP);
    }
}