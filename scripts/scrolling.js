$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: '#menu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        anchors: ['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){
            if (nextIndex == 7 && direction == 'down') {
                $.fn.pagepiling.moveTo(6);
            }
            if (index == 8 || index == 9 || index == 10 && nextIndex == 3) {
                $.fn.pagepiling.setAllowScrolling(true);
                $.fn.pagepiling.setKeyboardScrolling(true);
            }
            if (nextIndex == 8 || nextIndex == 9 || nextIndex == 10) {
                $.fn.pagepiling.setAllowScrolling(false);
                $.fn.pagepiling.setKeyboardScrolling(false);
                testScrollUp = false;
                testScrollDown = false;
            }
        },
		afterLoad: function(anchorLink, index){
            if(index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7) {
                testScrollUp = true;
                testScrollDown = true;
            };
        },
		afterRender: function(){},
	});
    $.fn.pagepiling.setScrollingSpeed(100);
    
});

testScrollUp = true;
testScrollDown = true;

function scrollUp() {
    if(testScrollUp == true) {
        $.fn.pagepiling.moveSectionUp();
    };
};

function scrollDown() {
    if(testScrollDown == true) {
        $.fn.pagepiling.moveSectionDown();
    };
};