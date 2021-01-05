$(function () {
    $('[data-toggle="popover"]').popover()
})

let side = true;

let copyFlag = true;

function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("output");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    setTimeout(() => {
        if (copyFlag) {
            $('#copy').click();
        }
        copyFlag = !copyFlag;
    },1000);
}

const tweet = () => {
    const text = document.getElementById('output').value
    console.log(text)
    window.open("https://twitter.com/intent/tweet?text="+`${encodeURIComponent(text+'\n\n'+'#ハッシュタグジェネレーター'+'\n')}`+'&url=https://hashgenerator.netlify.app/')
}

$(function () {
    // ラジオボタンを選択変更したら実行
    $('input[name="options"]').change(function () {
        // value値取得
        var val = $(this).val();
        // コンソールログで確認
        if (val === 'true'){
            side = true;
            change();
        }else{
            side = false;
            change();
        }
    });
});

const change = () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    if (side){
        output.value = '＃' + input.value.replace(/\s+/g,' ＃');
    }else{
        output.value = '＃' + input.value.replace(/\s+/g,'\n＃');
    }
    
    if (input.value.length === 0){
        output.value = ''
    }
}