$(document).ready(function() {
    // 라디오 버튼 클릭 이벤트 리스너 추가
    $('input[name="category"]').on('change', function() {
        var selectedCategory = $(this).val();
        $('.section').hide(); // 모든 섹션 숨기기
        $('#' + selectedCategory + '-content').show(); // 선택된 카테고리의 섹션만 표시
    });

    // 페이지 로드 시 상체 섹션을 기본으로 표시
    $('#upper-content').show();

    // 스크롤 이벤트 리스너 추가
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) { // 페이지가 300픽셀 이상 스크롤되면 버튼 표시
            $('#scrollToTopButton').fadeIn();
        } else {
            $('#scrollToTopButton').fadeOut();
        }
    });

    // 버튼 클릭 이벤트 리스너 추가
    $('#scrollToTopButton').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
