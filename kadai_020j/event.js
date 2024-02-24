// // ボタン要素を作成
// let btn = document.createElement("button");

// // ボタンのテキストを設定
// btn.innerHTML = "Click Me";

// // ボタンを追加する場所を選択
// let target = document.getElementById("target");

// // ボタンを追加
// target.appendChild(btn);

// const addBtn = document.getElementById('btn');

// const parentList = document.getElementById('text');


const addBtn = document.getElementById('btn');

const parentList = document.getElementById('text');


addBtn.addEventListener('click', () => {
    

  // li要素を新しく作成する
  const childList = document.createElement('text');

  childList.textContent = 'ボタンをクリックしました';

  
  parentList.appendChild(childList);
});


addBtn.addEventListener('click', () => {
    
    // li要素を新しく作成する
    const childList = document.createElement('text');
    childList.textContent = 'ボタンをクリックしました';
  
    // parentListの子要素全てを削除する
    while (parentList.firstChild) {
      parentList.removeChild(parentList.firstChild);
    }
  
    // childListを追加する
    parentList.appendChild(childList);
  });