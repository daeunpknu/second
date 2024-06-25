$(document).ready(function(){
    var $slider = $('.slider');

    $slider.on('init', function(event, slick){
        $(slick.$slides[0]).find('.slide-content').addClass('slick-current');
    });

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(slick.$slides).find('.slide-content').removeClass('slick-current');
    });

    $slider.on('afterChange', function(event, slick, currentSlide){
        $(slick.$slides[currentSlide]).find('.slide-content').addClass('slick-current');
    });

    $slider.slick({
        autoplay: true,
        autoplaySpeed: 4000,  // 슬라이더가 한 페이지당 5초 머물도록 설정
        speed: 1000,  // 슬라이더 전환 속도를 1초로 설정하여 부드러운 전환 효과
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        centerMode: true,
        centerPadding: '3%'
    });

    $slider.on('touchend mouseup', function() {
        $slider.slick('slickPlay');
    });

    $slider.slick('slickPlay');

    setTimeout(function() {
        $('.slider').css('opacity', '1');
    }, 500);
});




// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 300) { // 페이지가 300픽셀 이상 스크롤되면 버튼 표시
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// 버튼 클릭 이벤트 리스너 추가
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0, // 페이지 맨 위로 스크롤
        behavior: 'smooth' // 부드럽게 스크롤
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const titleLines = document.querySelectorAll('.top-title');
    const options = {
        root: null,
        rootMargin: '0px 0px -200px 0px', // 타겟 요소가 뷰포트 하단에서 200px 위로 올라올 때 작동
        threshold: 0.5
    };

    function handleIntersection(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 500); // 각 요소마다 0.5초의 지연 시간 추가
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, options);

    titleLines.forEach(line => {
        observer.observe(line);
    });
});


document.addEventListener('scroll', function() {
    const verticalLine = document.querySelector('.vertical-line');
    const additionalText = document.querySelector('.additional-text');
    const circleWrappers = document.querySelectorAll('.circle-wrapper');
    
    if (window.scrollY > 450) {
        verticalLine.classList.add('active');
    }
    
    if (window.scrollY > 450) {
        additionalText.classList.add('active');
        
        // circle 애니메이션은 추가 텍스트 애니메이션 후에 시작
        setTimeout(() => {
            circleWrappers.forEach(wrapper => {
                wrapper.classList.add('active');
            });
        }, 200); // 2초 딜레이
    }
});

