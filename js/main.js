// 最终发现其实transform也是可以的, 是浏览器缩放造成了抖动
// $(p1).on('click', function() {
//     $(images).css({
//         'margin-left': 0
//     })
// })
//  $(p2).on('click', function() {
//     $(images).css({
//         'margin-left': '-500px'
//     })
// })
// $(p3).on('click', function() {
//     $(images).css({
//         'margin-left': '-1000px'
//     })
// })

// error汇总
// 1,jq变量没加#号 2, 点击事件不需要引号 3, 获取元素状态加给了遍历元素 4, translateX拼错
var log = console.log.bind(console)

var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(x) {
        var index = $(x.currentTarget).index()
        var n = index * -500
        log(n)
        $('#images').css({
            transform: 'translateX(' + n + 'px)'
        })
    })
}
