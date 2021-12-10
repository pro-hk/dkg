Splitting();

const header = $("#header");
const gnbList = $("#gnb .list > li");

gnbList.on("mouseenter", function () {
  header.addClass("open");
});
gnbList.on("mouseleave", function () {
  header.removeClass("open");
});

const line = $("#main .section titleBox p strong:after");

const happenTl = gsap.timeline();
happenTl
  .from("#happen .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "back",
    stagger: 0.05,
  })
  .from(
    "#happen .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "back",
      stagger: 0.05,
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#happen .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 1,
  });

const businessTl = gsap.timeline();
businessTl.pause();
businessTl
  .from("#business .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "back",
    stagger: 0.05,
  })
  .from(
    "#business .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "back",
      stagger: 0.05,
    },
    "-=1"
  )
  .from(
    "#business .listBox li",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "back",
      stagger: 0.1,
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#business .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 1,
  });

const portfolio = gsap.timeline();
portfolio.pause();
portfolio
  .from("#portfolio .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3",
    stagger: 0.05,
  })
  .from(
    "#portfolio .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=1"
  )
  .from(
    "#portfolio .listBox",
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "back",
      stagger: 0.1,
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#portfolio .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 1,
  });

const community = gsap.timeline();
community.pause();
community
  .from("#community .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3",
    stagger: 0.05,
  })
  .from(
    "#community .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=1"
  )
  .from(
    "#community .listBox",
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "back",
      stagger: 0.1,
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#community .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 1,
  });

$("#main").fullpage({
  // scrollBar: true,
  onLeave: function (origin, destination, direction) {
    const leavingSection = this;
    switch (destination.index) {
      case 0:
        happenTl.restart();
        break;
      case 1:
        businessTl.restart();
        break;
      case 2:
        portfolio.restart();
        break;
      case 3:
        community.restart();
        break;
      default:
        console.log("이제 없어요");
    }
    // switch : if와 비슷
    // if (destination.index === 0) {
    //   happenTl.restart();
    // } else if (destination.index === 1) {
    //   businessTl.restart();
    // } else if (destination.index === 2) {
    //   portfolio.restart();
    // }
  },
  // afterLoad: function () {
  //   $.fn.fullpage.moveTo(3);
  // },
});

const portfolioSlider = new Swiper("#portfolio .mask", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#portfolio .next",
    prevEl: "#portfolio .prev",
  },
  pagination: {
    el: "#portfolio .pagination",
    clickable: true,
  },
});
