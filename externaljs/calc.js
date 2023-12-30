const deleteBtn = document.querySelector(".delete");
const output = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");

function deleteDisplay() {
  let currentValue = output.value;
  output.value = currentValue.toString().slice(0, -1);
}

// deleteDisplay();
clearBtn.addEventListener("click", deleteDisplay() );
function clearDisplay() {
  output.value = "";
}
// clearDisplay();
