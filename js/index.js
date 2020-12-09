$(function () {
  $(".search input").focus(function () {
    $(this).css('width', '500px')
    $(".quick-links").css('display', 'flex')

  }).blur(function () {
    $(this).css('width', '250px')
    $(".quick-links").css('display', 'none')
  })

  // $(".panel .container .item").mouseenter(function(){
  //   $(this).find(".circle").stop().animate({
  //     marginTop:'-15px',
  //     opacity: 1
  //   },300)
  // }).stop().mouseleave(function(){
  //   $(this).find(".circle").animate({
  //     marginTop:'5px',
  //     opacity: 0
  //   },300)
  // })

  // 控制nav 详细link显示
  let target = -1
  $(".nav-links ul li").mouseenter(function () {
    target = $(this).index()
    $(".detail-links").stop().slideDown();
    $(".detail-links .detail-link-item").eq(target).css('display', 'flex').siblings().css('display', 'none');
  });

  $(".detail-links").mouseleave(function () {
    $(this).stop().slideUp()
    setTimeout(()=>{
      $(".detail-links .detail-link-item").eq(target).css('display', 'none')
    },300)
    
  })

  $(".menu-bd ul>li").on('click', function (e) {
    if ($(this).children('ol').css('height') !== '0px') {
      $(this).children('ol').css('height', 0)
      $(this).find('a>span').removeClass('icon-jianhao').addClass('icon-jiahao')
    } else {
      let targetHeight = $(this).find('ol>li').length
      $(this).children('ol').css('height', targetHeight * 37)
      $(this).attr('open', 'true')
      $(this).find('a>span').removeClass('icon-jiahao').addClass('icon-jianhao')
      $(this).siblings().children('ol').css('height', 0)
      $(this).siblings().attr('open', 'false')
      $(this).siblings().find('a>span').removeClass('icon-jianhao').addClass('icon-jiahao')
    }

  })

  // show
  $('.header .menu>span').on('click', function () {
    $('.detail-menu').stop().animate({
      height: '100vh'
    })
    $('body').css('overflow','hidden')
  })

  // hide
  $('.menu-hd>span').on('click', function () {
    $('.detail-menu').stop().animate({
      height: '0vh'
    })
    $('body').css('overflow','scroll')
  })

  // 1280
  $(window).resize(function(){
    if($(this).innerWidth()>1278){
      $('.menu-hd>span').click()
    }
  })
})