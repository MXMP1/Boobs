//Boobs animation
const boobs = function() {
    anime({
    targets: '.tits',
    opacity: [0, 1],
    duration: 1,
    });

    anime({
    targets: '.tit--left',
    opacity: [0, 1],
    translateY: [-50, 0],
    rotate: ['-10deg', '0deg'],
    duration: 1000,
    ease: 'outElastic(1,0.3)'
    });



    anime({
    targets: '.tit--right',
    opacity: [0, 1],
    translateY: [-70, 0],
    rotate: ['-10deg', '0deg'],
    duration: 1400,
    ease: 'outElastic(1,0.3)'
    });



    anime({
    targets: '.niple_left',
    opacity: [0, 1],
    translateY: [-20, 0, -3, 0],
    rotate: ['-10deg', '0deg'],
    duration: 1200,
    delay: 650,
    easing: 'easeOutCubic',
    });



    anime({
    targets: '.niple_right',
    opacity: [0, 1],
    translateY: [-20, 0, -3, 0],
    rotate: ['-10deg', '0deg'],
    duration: 1200,
    delay: 650,
    easing: 'easeOutCubic',
    });


    anime({
    targets: '.niple1',
    opacity: [0, 1],
    translateY: [-20, 0, -10, 0],
    rotate: ['-10deg', '0deg'],
    duration: 1200,
    delay: 700,
    easing: 'easeOutCubic',

    });



    anime({
    targets: '.niple2',
    opacity: [0, 1],
    translateY: [-20, 0, -10, 0],
    rotate: ['-10deg', '0deg'],
    duration: 1200,
    delay: 700,
    easing: 'easeOutCubic'
    });
};

document.addEventListener('DOMContentLoaded', boobs);