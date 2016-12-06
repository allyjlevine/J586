$('#tabs').bind('show', function(e) {
    paneID = $(e.target).attr('href');
    src = $(paneID).attr('data-src');
    // if the iframe hasn't already been loaded once
    if($(paneID+" iframe").attr("src")=="")
    {
        $(paneID+" iframe").attr("src",src);
    }
});


// changes iframe on click in mobile
function allIframe(){
    var mq = window.matchMedia( "(max-width: 616px)" );
    if (mq.matches) {
        document.getElementById("liberalFrame").src='php/liberalListTopics.php';
        document.getElementById("conservativeFrame").src='php/conservativeListTopics.php';
    }
    else {
        document.getElementById("liberalWindow").src='php/liberalListTopics.php';
        document.getElementById("conservativeWindow").src='php/conservativeListTopics.php';
    }

}

function obamaIframe(){
    var mq = window.matchMedia( "(max-width: 616px)" );
    if (mq.matches) {
        document.getElementById("liberalFrame").src='php/topics/obamaLiberal.php';
        document.getElementById("conservativeFrame").src='php/topics/obamaConservative.php';
    }
    else {
      document.getElementById("liberalWindow").src='php/topics/obamaLiberal.php';
      document.getElementById("conservativeWindow").src='php/topics/obamaConservative.php';
    }
}


function trumpIframe(){
    var mq = window.matchMedia( "(max-width: 616px)" );
    if (mq.matches) {
        document.getElementById("liberalFrame").src='php/topics/trumpLiberal.php';
        document.getElementById("conservativeFrame").src='php/topics/trumpConservative.php';
    }
    else {
        document.getElementById("liberalWindow").src='php/topics/trumpLiberal.php';
        document.getElementById("conservativeWindow").src='php/topics/trumpConservative.php';
    }
}

function econIframe(){
    var mq = window.matchMedia( "(max-width: 616px)" );
    if (mq.matches) {
        document.getElementById("liberalFrame").src='php/topics/econLiberal.php';
        document.getElementById("conservativeFrame").src='php/topics/econConservative.php';
    }
    else {
        document.getElementById("liberalWindow").src='php/topics/econLiberal.php';
        document.getElementById("conservativeWindow").src='php/topics/econConservative.php';
    }
}

function immigIframe(){
    var mq = window.matchMedia( "(max-width: 616px)" );
    if (mq.matches) {
        document.getElementById("liberalFrame").src='php/topics/immigLiberal.php';
        document.getElementById("conservativeFrame").src='php/topics/immigConservative.php';
    }
    else {
      document.getElementById("liberalWindow").src='php/topics/immigLiberal.php';
      document.getElementById("conservativeWindow").src='php/topics/immigConservative.php';
    }
} // end of mobile



//changes iframe on click in desktop
// function allIframe(){
//     document.getElementById("liberalWindow").src='php/liberalListTopics.php';
//     document.getElementById("conservativeWindow").src='php/conservativeListTopics.php';
// }

// function obamaIframe(){
//     document.getElementById("liberalWindow").src='php/topics/obamaLiberal.php';
//     document.getElementById("conservativeWindow").src='php/topics/obamaConservative.php';
// }

// function trumpIframe(){
//     document.getElementById("liberalWindow").src='php/topics/trumpLiberal.php';
//     document.getElementById("conservativeWindow").src='php/topics/trumpConservative.php';
// }

// function econIframe(){
//     document.getElementById("liberalWindow").src='php/topics/econLiberal.php';
//     document.getElementById("conservativeWindow").src='php/topics/econConservative.php';
// }

// function immigIframe(){
//     document.getElementById("liberalWindow").src='php/topics/immigLiberal.php';
//     document.getElementById("conservativeWindow").src='php/topics/immigConservative.php';
// }
