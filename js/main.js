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
        var p = index * -500
        $('#images').css({
            transform: 'translateX(' + p + 'px)'
        })
    })
}

// 实现了自动点击轮播
// eq会对已经出现过的封装, 自动封装一遍
// n % 3 结果,会循环为 0, 1, 2, 用于标明3个按钮
// 可以使用.click, 但是trigger后可以接任何方法,更加方便
// 将被除数提取为size, 方便将来添加按钮
// 使用addClass和removeClass来实现, 伴随按钮点击, 自动变色
// 此处的siblings是选择器, 添加找寻移除连接起来操作, 是jq中的链式操作
var n = 0;
var size = 3
allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')

setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
},1000)
