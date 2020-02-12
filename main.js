$(document).ready(function() {
  $("div #pop").on("click", function() {
    const bg = $(this)
      .css("background-image")
      .replace(/(?:^url\(["']?|["']?\)$)/g, "");
    $("#imagepreview").attr("src", bg); // here asign the image to the modal when the user click the enlarge link
    $("#imagemodal").modal("show"); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
  });
});
