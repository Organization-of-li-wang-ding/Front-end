//通过jQuery 根据图片的数量创建下面的按钮
//获取图片数量
var img_num = $(".img li").length;
var i = 0;
for (var j = 0; j < img_num; j++) {
    $(".num").append("<li></li>")
}
// 为第一个小点加成active
$(".num li").eq(0).addClass('active')

//手动轮播
$(" .num li").mouseover(function () {
    var i = $(this).index();
    //siblings 找到该元素的同胞元素
    // 小按钮变红
    $(this).addClass('active').siblings().removeClass("active");
    //显示图片 stop 去掉其他图片的的特效
    $(".img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut()
})
//自动轮播
//设置定时器 1.5秒
var c = setInterval(GO_RUN, 1500)
var i = 0;
function GO_RUN() {
    if (i == img_num - 1) {
        i = -1
    }
    i++;
    $(".num li").eq(i).addClass('active').siblings().removeClass("active");
    //显示图片 stop 去掉其他图片的的特效
    $(".img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut()
}

function GO_lift() {
    if (i == 0) {
        i = img_num - 1
    }
    i--;
    $(".num li").eq(i).addClass('active').siblings().removeClass("active");
    //显示图片 stop 去掉其他图片的的特效
    $(".img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut()
}
//鼠标停在上面，停止轮播，鼠标拿开，开始轮播
$(".outer").hover(function () {
    clearInterval(c)
}, function () {
    c = setInterval(GO_RUN, 1500)
})
// button 加定播 ,对右边走
$(".right").click(GO_RUN)
// button 加定播 ,对左边走
$(".left").click(GO_lift)