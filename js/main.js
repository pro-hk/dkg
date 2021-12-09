const header = $("#header");
const gnbList = $("#gnb .list > li");

gnbList.on("mouseenter", function () {
  header.addClass("open");
});
gnbList.on("mouseleave", function () {
  header.removeClass("open");
});

$("#main").fullpage({
  // autoScrolling: true,
  // scrollHorizontally: true,
});
