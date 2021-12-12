$(document).ready(function () {
    let currentFloor = 02;
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let floorPAth = $('.home-image path');
    floorPAth.on('mouseover', function() {
        currentFloor = $(this).attr("data-floor");
        $('.counter').text(currentFloor);
        floorPAth.removeClass('current-floor');
    });

    counterUp.on('click', function() {
        if(currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPAth.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function() {
        if(currentFloor > 02) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPAth.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});