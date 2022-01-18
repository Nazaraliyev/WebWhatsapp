$(document).ready(() => {
  Adjust();
  $(window).on("resize", () => {
    Adjust();
  });
});

const Adjust = () => {
  //Menu
  var myContainerHeight = $("#MyContainer").outerHeight();
  var chatHeadHeight =$("#menu .chat-header").outerHeight()+$("#search-section").outerHeight();
  
  // Chat
  var chatMessagesOutHeight = $("#chat-profile-info-wrapper").outerHeight()+$("#message-input-wrapper").outerHeight();
  
  $("#chat-list").css("height", myContainerHeight - chatHeadHeight);
  $("#chat-messages-container").css("height", myContainerHeight - chatMessagesOutHeight);
};
