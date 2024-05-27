/* =======================
// Loading Overlay
======================= */

function setSessionCookie(name, value) {
  document.cookie = `${name}=${escape(value)}; path=/`;
}

function getSessionCookie(name) {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = cookieValue;
    return acc;
  }, {});

  return cookies[name];
}

const loadingOverlay = $('.loading-overlay');
const loadingBar = $('.loading-bar');

const loadingBarLeft = $('<div>').addClass('loading-bar-left');
loadingBar.append(loadingBarLeft);

const loadingText = $('<div>').addClass('loading-text').text(`Tech Author`);
loadingBar.append(loadingText);

const loadingBarRight = $('<div>').addClass('loading-bar-right');
loadingBar.append(loadingBarRight);

const hasVisited = getSessionCookie('mycookie');

if (!hasVisited) {
  loadingBar.on('animationend', function() {
    loadingBar.addClass('animation-complete');

    const randomValue = Math.random().toString(36).substr(2, 5);
    setSessionCookie('mycookie', randomValue);

    setTimeout(function() {
      let opacity = 1;
      const fadeOutInterval = setInterval(function() {
        opacity -= 0.05;
        loadingOverlay.css('opacity', opacity);

        if (opacity <= 0) {
          clearInterval(fadeOutInterval);
          loadingOverlay.css('display', 'none');
        }
      }, 30);
    }, 2000);
  });
} else {
  loadingOverlay.css('display', 'none');
}

$(document).ready(function () {

  'use strict';

  /* =======================
  // Simple Search Settings
  ======================= */

  SimpleJekyllSearch({
    searchInput: document.getElementById('js-search-input'),
    resultsContainer: document.getElementById('js-results-container'),
    json: '/search.json',
    templateMiddleware: function(prop, value) {
        if (prop === 'contents') {
            return value.substring(0, 150) + ' ...';
        }
    },
    searchResultTemplate: `
        <div class="c-posts o-opacity">
            <article class="c-post">
                <div class="c-post-content">
                    <h2 class="c-post-title">
                        <a href="{url}">{title}</a>
                    </h2>
                    <div class='search_content'>{contents}</div>
                    <div><i class="fas fa-tag"></i> {tags}</div>
                </div>
            </article>
        </div>
    `,
    noResultsText: '<li>검색 결과가 없습니다.</li>'
  });

  /* =======================
  // Responsive videos
  ======================= */
  
  $('.c-wrap-content').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  /* =======================================
  // Switching between posts and categories
  ======================================= */

  $('.c-nav__list > .c-nav__item').click(function() {
    $('.c-nav__list > .c-nav__item').removeClass('is-active');
    $(this).addClass('is-active');
    if ($('.c-nav__item:last-child').hasClass('is-active')) {
      $('.c-posts, .c-article').css('display', 'none').removeClass('o-opacity');
      $('.c-load-more').css('display', 'none')
      $('.c-categories').css('display', '').addClass('o-opacity');
    } else {
      $('.c-posts, .c-article').css('display', '').addClass('o-opacity');
      $('.c-load-more').css('display', '')
      $('.c-categories').css('display', 'none').removeClass('o-opacity');
    }
  });
  
  /* ==============================
  // Smooth scroll to the tags page
  ============================== */
  
  $('.c-tag__list a').on('click', function (e) {
    e.preventDefault();

    var currentTag = $(this).attr('href'),
      currentTagOffset = $(currentTag).offset().top;

    $('html, body').animate({
      scrollTop: currentTagOffset - 10
    }, 400);

  });
  
  /* =======================
  // Scroll to top
  ======================= */
  
  $('.c-top').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('.c-top').addClass("c-top--active");
    } else {
      $('.c-top').removeClass("c-top--active");
    };
  });
  
  /* =======================
  // menu-trigger
  ======================= */
  
  document.querySelector('.menu-trigger').addEventListener("click", function(e) {
    e.preventDefault();
    var menuTrigger = this;
    var isActive = menuTrigger.classList.contains('active');
    
    menuTrigger.classList.toggle('active');
  
    var sidebar = document.querySelector('.c-sidebar');
    sidebar.style.transition = 'right 0.5s, opacity 0.5s';
    sidebar.style.right = isActive ? '-20%' : '0';
    sidebar.style.opacity = isActive ? 0 : 1;
  
    var content = document.querySelector('.c-content');
    content.style.transition = 'margin-left 0.5s';
    content.style.marginLeft = isActive ? '4rem' : '360px';
  });
  
});
