// $(document).ready(function() {

$('.knob').mousedown(function() {
    console.log('CLICKED')
    $(".letter-container").draggable();
    console.log('made draggable')
    // $(this).css('transform', 'scale(0.4)');
    // $(this).css({
    //     'transform':'scale(0.4)',
    //     'transition':'.4s'
    // })
    console.log('transformations applied')
});

// 'transform':'rotate('+direction+'360deg)', // stuck at 360, reset to 0 to allow for same thing again & again
// 'transition':'2s',



var rotation = 0;
$(".ring.ul").click(function() {
    rotation += 90;
    $(".ring.ul").css({ 'transform': 'rotate(' + rotation + 'deg)' });
});
$(".ring.ur").click(function() {
    rotation += 90;
    $(".ring.ur").css({ 'transform': 'rotate(' + rotation + 'deg)' });
});
$(".ring.ll").click(function() {
    rotation += 90;
    $(".ring.ll").css({ 'transform': 'rotate(' + rotation + 'deg)' });
});
$(".ring.lr").click(function() {
    rotation += 90;
    $(".ring.lr").css({ 'transform': 'rotate(' + rotation + 'deg)' });
});



var rotationlineleft = 0;
$(".line-left").click(function() {
    rotationlineleft += 90;
    $(".line-left").css({ 'transform': 'rotate(' + rotationlineleft + 'deg)' });
    $(".line-left").animate({ height: "70px" }, 200, function() {});
});

var rotationlineright = 0;
$(".line-right").click(function() {
    rotationlineright += 90;
    $(".line-right").css({ 'transform': 'rotate(' + rotationlineright + 'deg)' });
    $(".line-right").animate({ height: "60px" }, 200, function() {});
});

//horizontal lines
$(".line-horizontal-1").click(function() {
    rotation += 90;
    $(".line-horizontal-1").css({ 'transform': 'rotate(' + rotation + 'deg)' });
    $(".line-horizontal-1").animate({ width: "60px" }, 200, function() {});
});

$(".line-horizontal-2").click(function() {
    rotation += 90;
    $(".line-horizontal-2").css({ 'transform': 'rotate(' + rotation + 'deg)' });
    $(".line-horizontal-2").animate({ width: "60px" }, 200, function() {});
});

$(".line-horizontal-3").click(function() {
    rotation += 90;
    $(".line-horizontal-3").css({ 'transform': 'rotate(' + rotation + 'deg)' });
    $(".line-horizontal-3").animate({ width: "60px" }, 200, function() {});
});

//vertical lines
$(".line-vertical-1").click(function() {
    rotation += 90;
    $(".line-vertical-1").css({ 'transform': 'rotate(' + rotation + 'deg)' });
    $(".line-vertical-1").animate({ height: "60px" }, 200, function() {});
});
$(".line-vertical-2").click(function() {
    rotation += 90;
    $(".line-vertical-2").css({ 'transform': 'rotate(' + rotation + 'deg)' });
    $(".line-vertical-2").animate({ height: "60px" }, 200, function() {});
});

//circle
// $(".circle").mouseover(function() {
//     $(".circle").animate({ height: "60px", width: "60px" }, 200, function() {});
// });
// $(".circle").mouseout(function() {
//     $(".circle").animate({ height: "40px", width: "40px" }, 200, function() {});
// });
// $(".circle").click(function() {
//     $(".circle").animate({ height: "0px", width: "0px" }, 200, function() {});
//     $(".circle").css("transform", "translateX(20px)");
// });


//A

$(".a .line-right").click(function() {
    $(this).css('top', '120px');
    $(this).css('left', '135px');
})
$(".a .line-left").click(function() {
    $(this).css('top', '115px');
    $(this).css('left', '10px');
})

//B

$(".b .line-horizontal-1").click(function() {
    rotation += 90;
    $(this).css('left', '45px');
    $(this).animate({ width: "80px" }, 200, function() {});
});

$(".b .line-horizontal-2").click(function() {
    $(".line-horizontal-2").animate({ width: "70px" }, 200, function() {});
    $(this).css('left', '45px');
});