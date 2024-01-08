//Debouncing in js
//It is powerfull technique that used to optimize event handling by delaying the execution of a f
//unction untill after a specified period of activity
//it helps prevent excessive function calls triggered by rapid events, like keystrokes or scroll 
//movements

let counter = 0;
function getData() {
  //calls an api and gets data
  console.log("Fetching data....", counter++);
}
const debouncMethod = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const betterFunction = debouncMethod(getData, 300); //So it is making api call while entering text after 1 sec

function handleInput(event) {
  console.log("input event occured: ", event.target.value);
}
const debouncedInputHandler = debouncMethod(handleInput, 300);
const inputElement = document.querySelector("#input");
inputElement.addEventListener("input", debouncedInputHandler);
