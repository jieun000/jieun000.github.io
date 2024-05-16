(function() {
  // 테마 전환 스위치와 HTML 요소, 로고 요소 가져오기
  var themeSwitch = document.getElementById('theme-switch');
  var html = document.getElementsByTagName('html')[0];
  var logo = document.getElementById('logo');
  // 초기 테마 설정 값 정의
  var nightModeOption = ('auto').toLowerCase();
  var loadThemeCnt = true;

  // 저장소 설정: 수동 모드인 경우 로컬 저장소 사용, 아닌 경우 세션 저장소 사용
  var storage = nightModeOption === 'manual' ? localStorage : sessionStorage; 
  var themeData = loadThemeData(); // 로컬 저장소에서 테마 데이터 로드

  // 저장소 테마 데이터 저장 함수
  function saveThemeData(data) {
    storage.setItem('theme', JSON.stringify(data));
  }

  // 저장된 테마 데이터를 로드 & 파싱 함수
  function loadThemeData() {
    var data = storage.getItem('theme');
    try {
      data = JSON.parse(data ? data : '');
    } catch(e) {
      // 예외 처리: 로컬 저장소에 데이터가 없거나 파싱할 수 없는 경우 기본값 설정
      data = { nightShift: undefined, autoToggleAt: 0 };
      saveThemeData(data);
    }
    return data;
  }
  
  // 테마를 전환 & 테마 데이터 업데이트 함수
  function handleThemeToggle(nightShift) {
    // 테마 데이터 업데이트 및 저장
    themeData.nightShift = nightShift; 
    saveThemeData(themeData);
    // HTML 요소에 테마 적용
    html.dataset.theme = nightShift ? 'dark' : 'light';
    // 아이콘 색상 및 로고 이미지 업데이트
    var authorImage = nightShift ? '/images/profile-night.png' : '/images/profile-light.png';
    var authorImage = nightShift ? '/images/profile-night.png' : '/images/profile-light.png';
    var moonIcon = document.querySelector('.fa-moon');
    var sunIcon = document.querySelector('.fa-sun');
    moonIcon.style.color = nightShift ? 'yellow' : '#7C7E7B';
    sunIcon.style.color = nightShift ? '#7C7E7B' : 'rgb(255, 155, 6)';
    if (authorImage) {
      logo.setAttribute("src", authorImage);
    }
    // 테마 전환 스위치 상태 업데이트
    setTimeout(function() {
      themeSwitch.checked = nightShift ? true : false;
    }, 50);
    loadThemeCnt = false; // 테마 로드 플래그 업데이트
  }

  // 자동 테마 전환 함수 (현재 시간을 기준으로 함)
  function autoThemeToggle() {
    var now = new Date();
    var toggleAt = new Date();
    var hours = now.getHours();
    var nightShift = hours >= 19 || hours <=7;
    // 자동 전환 시간 계산
    if (nightShift) {
      if (hours > 7) {
        toggleAt.setDate(toggleAt.getDate() + 1);
      }
      toggleAt.setHours(7);
    } else {
      toggleAt.setHours(19);
    }

    toggleAt.setMinutes(0);
    toggleAt.setSeconds(0);
    toggleAt.setMilliseconds(0)

    var delay = toggleAt.getTime() - now.getTime();

    // 자동 테마 전환 실행
    setTimeout(function() {
      handleThemeToggle(!nightShift);
    }, delay);

    return {
      nightShift: nightShift,
      toggleAt: toggleAt.getTime()
    };
  }
  
  // 테마 전환 스위치 이벤트 핸들러
  function themeToggleListener() {
    themeSwitch.addEventListener('change', function(event) {
      handleThemeToggle(event.target.checked);
    });
  }

  // 초기 테마 설정 함수
  function initializeTheme() {
    if (nightModeOption == 'auto') {
      // 자동 테마 전환
      var data = autoThemeToggle();
      if (data.toggleAt > themeData.autoToggleAt) {
        themeData.autoToggleAt = data.toggleAt;
        handleThemeToggle(data.nightShift);
      } else {
          handleThemeToggle(themeData.nightShift);
      }
    } else if (nightModeOption == 'manual') {
      // 수동 테마 전환
      handleThemeToggle(themeData.nightShift);
    } else {
      var nightShift = themeData.nightShift;
      if (nightShift === undefined) {
        nightShift = nightModeOption === 'on';
      }
      handleThemeToggle(nightShift);
    }
  }

  themeToggleListener(); // 테마 전환 스위치 이벤트 핸들러
  initializeTheme(); // 초기 테마 설정 함수
})();
