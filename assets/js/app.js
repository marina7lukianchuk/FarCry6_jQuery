
const tabsBtn = $('.tabs_nav-btn');
const tabsItems = $('.tabs_item');

tabsBtn.each(function(index, item) {
  $(item).click(function () {
    let btn = $(this);
    let tabItems = btn.attr("data-tab");
    let tab = $(tabItems);

    if (!btn.hasClass('active')) {
      tabsBtn.removeClass('active');
      tabsItems.removeClass('active');
      btn.addClass('active');
      tab.addClass('active');
    }
  });
});




const stars = $('.rating_star');

stars.each(function(index, item) {
  let i;
  let starsLength = stars.length;
  $(item).click(function () {
    i = stars.index(item);
   
    if ($(item).hasClass('unchecked_star')) {
      for (i; i >= 0; --i) {
        $(stars[i]).addClass('checked_star').removeClass('unchecked_star');
      }
    }
    else {
      for (i; i < starsLength; ++i) {
        $(stars[i]).addClass('unchecked_star').removeClass('checked_star');
      }
    }
  })
});  


/* const raitNum = $('.ratingNum'); */
/* const starsIndex = $(stars).attr('data-index'); */

let activeIndex = null;

stars.each(function(index, item) {
  const starsIndex = $(item).attr('data-index');
  $(item).click(function() {
    if ($(item).hasClass('checked_star')) {
      activeIndex = starsIndex;
    }
   else {
    activeIndex = starsIndex - 1;
    }
    $('.ratingNum').text(activeIndex);
  });
});
