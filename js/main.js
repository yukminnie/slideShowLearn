// 最终发现其实transform也是可以的, 是浏览器缩放造成了抖动
$(p1).on('click', function() {
    $(images).css({
        'margin-left': 0
    })
})
 $(p2).on('click', function() {
    $(images).css({
        'margin-left': '-500px'
    })
})
$(p3).on('click', function() {
    $(images).css({
        'margin-left': '-1000px'
    })
})
