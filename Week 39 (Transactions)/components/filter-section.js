const sidebar = document.querySelector(".sidebar");

// The Filter section component
function filterSection(transactions) {
  const form = document.createElement("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const checked = document.querySelector("input[name='option']:checked");
    console.log(checked);
  });

  const options = findAllOptions(transactions);
  const fieldset = createFieldSet(options);

  form.appendChild(fieldset);
  form.appendChild(createSubmitInput());
  return form;
}

function findAllOptions(transactions) {
  const result = transactions.reduce((accumulator, current) => {
    accumulator.add(current.credit_card_company);
    return accumulator;
  }, new Set());

  return [...result];
}

function createSubmitInput() {
  const button = document.createElement("input");
  button.type = "submit";
  button.value = "Apply";
  return button;
}

function createFieldSet(options) {
  const fieldset = document.createElement("fieldset");

  const radios = options.map((option) => createOptionDiv(option));
  const noneOption = createOptionDiv("None");

  fieldset.append(...radios, noneOption);
  return fieldset;
}
