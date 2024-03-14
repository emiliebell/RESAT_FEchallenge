document.addEventListener("DOMContentLoaded", function() {
    // 햄버거 메뉴 버튼을 선택합니다.
    const hamburger = document.querySelector('.hamburger-menu');
    // 네비게이션 바의 ul 태그를 선택합니다.
    const navUL = document.querySelector('#navbar ul');

    // 햄버거 메뉴 버튼에 클릭 이벤트 리스너를 추가합니다.
    hamburger.addEventListener('click', () => {
        // 클릭 시 ul 태그에 'active' 클래스를 토글합니다.
        navUL.classList.toggle('active');
    });

    // 모든 'a' 태그에 대해 클릭 이벤트 리스너를 추가합니다.
    document.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function(event) {
            const hrefAttribute = event.target.getAttribute('href');
            // href 속성이 '#'로 시작하는지 확인합니다.
            if (hrefAttribute.startsWith('#')) {
                // '#'를 제거하여 섹션 ID를 얻습니다.
                const sectionId = hrefAttribute.substring(1);
                // 해당 섹션 ID를 가진 요소를 찾습니다.
                const sectionElement = document.getElementById(sectionId);
                // 해당 요소가 존재하는 경우에만 스크롤을 수행합니다.
                if (sectionElement) {
                    sectionElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // 기본 이벤트(링크 이동)를 방지합니다.
                    event.preventDefault();
                }
            }
        });
    });
});
