// 背景画像の読み込みを待つ
const bgImage = new Image();
bgImage.src = './hero.png';

bgImage.onload = () => {
    // 画像読み込み完了後、少し遅延してから文字を表示
    setTimeout(() => {
        const content = document.querySelector('.hero__content');
        content.classList.add('loaded');
    }, 300); // 300msの遅延で自然な表示
};

// 画像読み込みに失敗した場合でも文字は表示
bgImage.onerror = () => {
    const content = document.querySelector('.hero__content');
    content.classList.add('loaded');
};