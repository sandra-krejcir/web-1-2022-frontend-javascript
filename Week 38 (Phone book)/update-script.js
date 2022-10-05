window.addEventListener("load", async function () {
  const id = getIdFromUrl();
  const contact = await getSpecificContact(id);
  fillInTheForm(contact);
});

function getIdFromUrl() {
  const location = window.location.toString();
  const splitQuestionmark = location.split("?");
  const routeParams = splitQuestionmark[1];
  const splitIdParam = routeParams.split("=");
  return splitIdParam[1];
}

function fillInTheForm(contact) {
  document.querySelector("#name").value = contact.name;
  document.querySelector("#surname").value = contact.surname;
  document.querySelector("#company").value = contact.company;
  document.querySelector("#phone").value = contact.phone;
  document.querySelector("#email").value = contact.email;
}

const form = document.querySelector("#new-contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hi, form is submitted");

  const contact = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    company: document.querySelector("#company").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  };

  const id = getIdFromUrl();

  putSpecificContact(id, contact);
});
