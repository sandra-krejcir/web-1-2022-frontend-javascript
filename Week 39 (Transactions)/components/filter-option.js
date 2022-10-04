function createOptionDiv(option) {
  const div = document.createElement("div");
  const input = createRadioInput(option);
  const label = createRadioLabel(option);
  div.append(input, label);
  return div;
}

function createRadioInput(optionValue) {
  const input = document.createElement("input");
  input.type = "radio";
  input.value = optionValue;
  input.name = "option";
  input.id = optionValue;
  return input;
}

function createRadioLabel(optionValue) {
  const label = document.createElement("label");
  label.htmlFor = optionValue;
  label.textContent = optionValue;
  return label;
}
