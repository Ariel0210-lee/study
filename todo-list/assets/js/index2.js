const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
// 할 일 추가 함수

const addTodo = () => {
    const text = input.value.trim();
    if (!text) return;
    // input.value 는 입력창에 사용자가 쓴 텍스트
    // .trim() 앞뒤 공백을 제거
    // if(!text) return; 아무것도 적지 않으면 끝

    const li = document.createElement('li');
    li.textContent = text;
    // li 영역 안에 글자를 추가

    list.appendChild(li);
    // ul>li 자식요소로 추가
    input.value = '';
};

// 버튼 클릭 시 추가
button.addEventListener('click', addTodo);

// 엔터키로도 추가 가능
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
});