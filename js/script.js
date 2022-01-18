$(document).ready(() => {
  Adjust();
  $(window).on("resize", () => {
    Adjust();
  });
});

const Adjust = () => {
  var myContainerHeight = $("#MyContainer").outerHeight();
  var chatHeadHeight =$("#menu .chat-header").outerHeight()+$("#search-section").outerHeight();
  $("#chat-list").css("height", myContainerHeight - chatHeadHeight);
  console.log(chatHeadHeight);
};
