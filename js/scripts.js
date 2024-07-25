document.addEventListener('DOMContentLoaded', () => {
    // すべてのトグルボタンを取得
    const toggleButtons = document.querySelectorAll('.toggle-button');
    
    // 各ボタンにクリックイベントリスナーを追加
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // ボタンの親要素である<dt>を取得
            const dtElement = button.parentElement;
            // 同じ<dt>内の<dd>要素を取得
            const ddElement = dtElement.nextElementSibling;
            
            // <dd>要素の表示/非表示をトグル
            if (ddElement.style.display === 'block') {
                ddElement.style.display = 'none';
                button.textContent = '詳細を見る'; // ボタンのテキストを「詳細を見る」に変更
            } else {
                ddElement.style.display = 'block';
                button.textContent = '閉じる'; // ボタンのテキストを「閉じる」に変更
            }
        });
    });
});