function calculate(height, weight) {
  const heightInM = height / 100;
  return weight / (heightInM * heightInM);
}

const form = document.querySelector("#bmi-form");
form.addEventListener("", (event) => {
  event.preventDefault();
  const weightInput = document.querySelector("#weight");
  const heightInput = document.querySelector("#height");
  const bmi = calculate(heightInput.value, weightInput.value);
  document.querySelector("#bmi-placeholder").textContent = Math.round(bmi);
  weightInput.value = "";
  heightInput.value = "";
});
