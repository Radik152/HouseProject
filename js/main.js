$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $('.home-img path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    counterUp.on('click', function() {
        if(currentFloor < 18) {
            currentFloor++;
            let usCurrentFloor = currentFloor.toLocaleString('on-US',
                {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function() {
        if(currentFloor > 2) {
            currentFloor--;
            let usCurrentFloor = currentFloor.toLocaleString('on-US',
                {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
}); 