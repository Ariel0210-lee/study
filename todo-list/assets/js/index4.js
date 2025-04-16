const input = document.querySelector('#todo-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#todo-list');

// ✅ 저장된 할 일 불러오기
const loadTodos = () => {
    const saved = localStorage.getItem('todos');
    // localStorage.getItem 브라우저가 저장된 '할 일을 만드는 단계'
    return saved ? JSON.parse(saved) : [];
    // JSON.parse : 문자열을 배열로 변경
};

// ✅ 할 일 저장하기
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
// 우리가 할 일 목록을 저장하는 부분입니다.
// 문자처럼 바꿔서 넣어야 돼요.

// ✅ 리스트에 표시하는 함수
const renderTodos = (todos) => {
    list.innerHTML = ''; // 기존 내용 초기화
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        // 화면에 있는 리스트를 다시 작성 전 새로 만드는 과정

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.className = 'delete-btn';

        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1); // 배열에서 제거
            saveTodos(todos); // 저장소에 반영
            renderTodos(todos); // 화면 다시 그리기
        });
        
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};

// ✅ 할 일 추가 함수
const addTodo = () => {
    const text = input.value.trim();
    if (!text) return;

    const todos = loadTodos();
    todos.push(text); // 배열에 추가
    saveTodos(todos); // 저장소에 저장
    renderTodos(todos); // 화면 다시 그리기

    input.value = '';
};

// ✅ 이벤트 등록
button.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
});

// ✅ 시작할 때 저장된 목록 보여주기
renderTodos(loadTodos());