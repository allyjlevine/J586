$('#tabs').bind('show', function(e) {
    paneID = $(e.target).attr('href');
    src = $(paneID).attr('data-src');
    // if the iframe hasn't already been loaded once
    if($(paneID+" iframe").attr("src")=="")
    {
        $(paneID+" iframe").attr("src",src);
    }
});

function allIframe(){
    document.getElementById("liberalFrame").src='php/liberalListTopics.php';
    document.getElementById("conservativeFrame").src='php/conservativeListTopics.php';
}

function obamaIframe(){
    document.getElementById("liberalFrame").src='php/topics/obamaLiberal.php';
    document.getElementById("conservativeFrame").src='php/topics/obamaConservative.php';
}

function trumpIframe(){
    document.getElementById("liberalFrame").src='php/topics/trumpLiberal.php';
    document.getElementById("conservativeFrame").src='php/topics/trumpConservative.php';
}

// function gunsIframe(){
//     document.getElementById("liberalFrame").src='php/topics/gunsLiberal.php';
//     document.getElementById("conservativeFrame").src='php/topics/gunsConservative.php';
// }

function econIframe(){
    document.getElementById("liberalFrame").src='php/topics/econLiberal.php';
    document.getElementById("conservativeFrame").src='php/topics/econConservative.php';
}

function immigIframe(){
    document.getElementById("liberalFrame").src='php/topics/immigLiberal.php';
    document.getElementById("conservativeFrame").src='php/topics/immigConservative.php';
}
