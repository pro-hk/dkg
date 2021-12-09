Splitting();

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

const line = $("#main .section titleBox p strong:after");

gsap.from("#happen .char", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "back",
  stagger: 0.05,
  onComplete: function () {
    line.show();
  },
});
gsap.from("#business .char", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power 3",
  stagger: 0.05,
});
