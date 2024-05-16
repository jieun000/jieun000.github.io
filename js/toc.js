// 특정 태그명을 가진 노드들을 반환하는 함수
function getNodesByTagName(master, tagName) {
  return Array.from(master.getElementsByTagName(tagName));
}

// 페이지의 헤더 노드 가져오는 함수
function getHeaderNodes(master) {
  return Array.from(master.querySelectorAll("h1, h2, h3, h4, h5, h6"));
}

// 페이지 요소들 및 미디어 쿼리 설정
var article = document.querySelector(".post-article");
var articleY_top = window.pageYOffset + article.getBoundingClientRect().top;
var articleY_bottom = window.pageYOffset + article.getBoundingClientRect().bottom;
var toc = document.querySelector(".toc");
var mq = window.matchMedia("(max-width: 74em)");

// 페이지의 헤더 노드들과 목차 노드들 가져오기
var headerNodes = getHeaderNodes(article);
var tocNodes = Array.from(toc.getElementsByTagName("a"));
var before = undefined;

// 현재 스크롤 위치를 기준으로 목차 업데이트
function updateTOC() {
  var currentSection = null;
  headerNodes.forEach(function(header) {
    var headerY = window.pageYOffset + header.getBoundingClientRect().top;
    if (window.scrollY >= headerY - 60) {
      currentSection = tocNodes.find(function(tocNode) {
        return tocNode.innerHTML == header.innerHTML;
      });
    }
  });
  tocNodes.forEach(function(tocNode) {
    tocNode.classList.remove("toc-active");
  });
  if (currentSection) {
    currentSection.classList.add("toc-active");
  }
}

// 스크롤 이벤트 처리
document.addEventListener('scroll', function(e) {
  if (articleY_bottom >= window.scrollY && window.scrollY >= articleY_top) {
    if (!mq.matches) {
      var parentWidth = document.querySelector('.c-content').getBoundingClientRect().width;
      var tocWidth = (parentWidth * 16) / 100; 
      toc.style.cssText = "position: fixed; top: 60px; width: " + tocWidth + "px; transition: width 0s;";
    } else {
      toc.style.cssText = "";
    }
  } else {
    toc.style.cssText = "";
  }
  updateTOC();
}, false);

// 페이지 로드 시 콘텐츠 레이아웃 너비 조정
function adjustContentWriteWidth() {
  var tocWidth = toc.classList.contains('show') ? '85%' : '100%';
  document.querySelector('.c-wrap-content-write').style.width = mq.matches ? '100%' : tocWidth;
}

// 창 크기 조정 이벤트 처리
window.addEventListener('resize', adjustContentWriteWidth);

// 목차 버튼 클릭 이벤트
document.getElementById('toc_btn').addEventListener('click', function() {
  toc.classList.toggle('show');
  document.getElementById('toc_content').style.display = toc.classList.contains('show') ? 'block' : 'none';
  adjustContentWriteWidth();
});

document.addEventListener('DOMContentLoaded', function() {
  adjustContentWriteWidth();
});
