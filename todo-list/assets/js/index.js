function addTodo(){
    const input = document.getElementById('todo');
    // 입력창을 가져오기
    const text = input.value;
    // 입력한 글자를 텍스트로 변환하기
    if(text === '') return;
    // 입력창이 비어 있으면 그냥 끝!
    // 빈칸은 아무것도 안 하도록 막는 기능
    
    const li = document.createElement('li');
    // li 를 담는 공간
    li.innerText = text;
    // 우리가 입력한 글자를 박스 안에 추가
    document.getElementById('list').appendChild(li);
    // <ul id="list"> → 리스트를 찾아오고 li를 자식에게 추가
    input.value='';
    // 입력을 완료했으면 빈 값으로 처리
}