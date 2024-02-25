const addBtn = document.getElementById('btn');

const parentList = document.getElementById('text');


const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = "ボタンをクリックしました";
    }, 2000);
});