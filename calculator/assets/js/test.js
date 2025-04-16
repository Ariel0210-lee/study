// // javaScript 변수 초기화
// let currentDisplay = "0";
// let resultDisplay = false;

// // 디스플레이 설정
// function press(value){
//     if (currentDisplay === "0" || resultDisplay) {
//         currentDisplay = value;
//     } else {
//         currentDisplay += value;
//     };

//     resultDisplay = false;
//     updateDisplay();
// };

// // 디스플레이 업데이트 : 버튼을 클릭하거나 계산 결과가 표시될 때마다 디스플레이를 업데이트
// function updateDisplay() {
//     const displayElement = document.getElementById("display");
//     displayElement.textContent = currentDisplay;
// };

// // 결과 계산
// function calculate() {
//     try{
//         const result = eval(currentDisplay);
        
//         currentDisplay += "/n=" + result.toString();
//         updateDisplay();
//     } catch (error) {
//         currentDisplay += "/nError";
//         updateDisplay();
//     };
//     // 예외 처리 : 프로그램 실행 시 발생할 수 있는 예기치 못한 예외 발생에 대비한 코드 작성
//     // 예의 발생으로 인한 실행 중인 프로그램의 갑작스런 비정상적인 동작을 막고, 복구를 시도하거나 회피하는 식으로 처리, 프로그램이 정상적인 실행 상태를 유지할 수 있도록 하는 것

//     // try 블록에는 예외 발생 가능 코드가 위치하고 코드에 오류가 발생하면
//     // 오류 종류(예외 클래스)에 맞는 catch문으로 가서 catch 블록 안의 코드를 실행
//     // 오류가 발생하지 않으면 catch문은 실행X

//     resultDisplay = true;
// };

// // 마지막 항목 지우기 : (입력 내용 삭제) 버튼을 눌렀을 때 마지막으로 입력한 요소를 삭제
// function clearLastElement() {
//     currentDisplay = currentDisplay.slice(0, -1);
//     // slice : 배열로부터 특정 범위를 복사한 값을 담고 있는 새로운 배열을 만듦
//     // 시작 인덱스(0) 값은 포함하지만 종료 인덱스(-1) 값은 포함X

//     if (currentDisplay === "") {
//         currentDisplay = "0";
//     };

//     updateDisplay();
// };

// // 디스플레이 지우기 : C 버튼 눌렀을 때 전체 디스플레이를 지우고 초기화 및 디스플레이 업데이트
// function clearDisplay() {
//     currentDisplay = "0"
//     resultDisplay = false;

//     updateDisplay();
// };

let display = document.getElementById('display');
// 변수 저장

function press(value){
    display.value += value;
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch (e) {
        display.value = '오류!';
    }
}

function clearDisplay() {
    display.value = '';
}