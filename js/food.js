$(document).ready(function() {
    // 페이지 로드 시 애니메이션 클래스 추가
    $('.hero-image-container, .hero-text, .hero-text2, .top-bar-container').addClass('animated');
    
    setTimeout(function() {
        $('.top-bar-container').addClass('show');
    }, 500); // 500ms 딜레이 후 상단바 애니메이션 시작

    var lastSelectedCategory = localStorage.getItem('lastSelectedCategory'); // 마지막으로 선택된 카테고리 로드

    // 라디오 버튼 클릭 이벤트 리스너 추가
    $('input[name="category"]').on('click', function() {
        var selectedCategory = $(this).data('category');
        
        if ($(this).prop('checked') && selectedCategory === lastSelectedCategory) {
            // 동일한 카테고리를 다시 클릭한 경우 선택 취소
            $(this).prop('checked', false);
            $('.food-item').show(); // 모든 음식 항목 보여주기
            lastSelectedCategory = null; // 마지막 선택된 카테고리 초기화
            localStorage.removeItem('lastSelectedCategory'); // 로컬 스토리지에서 삭제
        } else {
            // 다른 카테고리를 클릭한 경우
            $('.food-item').hide(); // 모든 음식 항목 숨기기
            $('.food-item.' + selectedCategory).show(); // 선택된 카테고리의 음식 항목만 표시
            lastSelectedCategory = selectedCategory; // 마지막 선택된 카테고리 업데이트
            localStorage.setItem('lastSelectedCategory', selectedCategory); // 로컬 스토리지에 저장
        }
    });

    // 이전에 선택한 카테고리가 있는 경우 해당 카테고리 선택 및 항목 표시
    if (lastSelectedCategory) {
        $('input[name="category"][data-category="' + lastSelectedCategory + '"]').prop('checked', true);
        $('.food-item').hide(); // 모든 음식 항목 숨기기
        $('.food-item.' + lastSelectedCategory).show(); // 선택된 카테고리의 음식 항목만 표시
    }

    // 스크롤 위치 복원
    const scrollY = localStorage.getItem('scrollY');
    if (scrollY !== null) {
        window.scrollTo(0, parseFloat(scrollY));
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        var scrollToTopButton = document.getElementById('scrollToTopButton');
        if (window.scrollY > 300) { // 페이지가 300픽셀 이상 스크롤되면 버튼 표시
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
        // 현재 스크롤 위치 저장
        localStorage.setItem('scrollY', window.scrollY);
    });

    // 버튼 클릭 이벤트 리스너 추가
    document.getElementById('scrollToTopButton').addEventListener('click', function() {
        window.scrollTo({
            top: 0, // 페이지 맨 위로 스크롤
            behavior: 'smooth' // 부드럽게 스크롤
        });
    });
});
