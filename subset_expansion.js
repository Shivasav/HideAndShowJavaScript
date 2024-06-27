$(document).ready(function () {
  $('a[href="#"]').click(function (event) {
    event.preventDefault();
    const clickedLink = $(this);

    clickedLink.prev().toggleClass("hide");

    if (clickedLink.prev().hasClass("hide")) {
      clickedLink.text("Show more");
    } else {
      clickedLink.text("Show less");
    }
  });
});
