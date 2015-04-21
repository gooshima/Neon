window.addEventListener("load", function () {
    console.log("app loaded...2");
});

$(document).ready(function () {

    var pageId = $('body').attr("id");

    //タイトル表示
    if (pageId == 'top') {
        startTittleAnim();
        $('#toSyncBtn').click(function () {
            window.location.href = "list.html";
        });

        //デバッグ用ボタン
        $('#debugBtn').click(function () {
            window.location.href = "debug.html";
        });

        //GPIO制御ボタン
        $('#gpioBtn').click(function () {
            window.location.href = "gpio.html";
        });

        //GPIO制御ボタン2
        $('#gpioBtn2').click(function () {
            window.location.href = "gpio2.html";
        });

    }

    //TODO デモページ
    if (pageId == 'demo') {
        $('#syncStartBtn').click(function(){
            window.location.href = "gpio2.html";
            /*
                途中から参加する場合
                アプリから同期願いを出す。
                管理者がパターンファイルと、現在の再生時間を送信する。
            */

            //

        });
    }

});


//TODO タイトル表示
function startTittleAnim() {
    var targetObj = $('.split');
    var delaySpeed = 100;
    var fadeSpeed = 0;
    var targetTxt = targetObj.html();

    targetObj.css({visibility: 'visible'}).children().addBack().contents().each(function () {
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    splitLength = $('.textSplitLoad').length;
    targetObj.find('.textSplitLoad').each(function (i) {
        splitThis = $(this);

        splitTxt = splitThis.text();

        splitThis.delay(i * (delaySpeed)).css({
            display: 'inline-block',
            opacity: '0'
        }).animate({opacity: '1'}, fadeSpeed);
    });

    setTimeout(function () {
        targetObj.html(targetTxt);
        $('#mainTitle').fadeOut('slow');
        $('#mainBox').fadeIn('slow');
    }, splitLength * delaySpeed + fadeSpeed);
}
