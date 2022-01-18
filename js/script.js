$(document).ready(() => {
    var myContainerHeight = $("#MyContainer").outerHeight();
    var chatHeadHeight = $("#menu .chat-header").outerHeight() + $("#search-block").outerHeight();
    $("#chat-list").css("height", myContainerHeight-chatHeadHeight);
    console.log(chatHeadHeight);

})