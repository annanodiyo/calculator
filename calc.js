const form = document.getElementById("calc_form");
const output = document.getElementById("display");
const calc_keys = document.querySelectorAll("button.number");
const operators_btn = document.querySelectorAll("button.operator");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let is_operator = false;

operators_btn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

   output.value += e.target.textContent;
   is_operator = true;
 
    })

})

calc_keys.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (output.value === "0") {
      output.value = e.target.value;
    } else if (is_operator) {
      is_operator = false;
      output.value = e.target.value;
    } else if (output.value.includes(".")) {
      output.value = output.value + "" + e.target.value.replace(".", "");
    } else {
      output.value = output.value + "" + e.target.value;
    }
  });
});

let equation = []
operators_btn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
 e.curremtTarget.classList.add("active")

    switch (e.target.value){
        case "=":
            equation.push(output.value)
            output.value = evaluateEquation(equation)
            equation=[]
            break
            default:
            let last_item = equation[equation.length - 1]
            if (["*", "÷", "+", "-"].includes(last_item) && is_operator) {
              equation.pop();
              equation.push(e.target.value);
            } else {
              equation.push(output.value);
              equation.push(e.target.value);
            }is_operator = true
            break

    }
    })
})

function evaluateEquation(equationArray){
    try{
        return eval(equationArray.join(""))
    }catch(error){
        return "Error"
    }
}

const remove_active = () => {
  operators_btn.forEach((btn) => {
    btn.classList.remove("active");
  });
};
