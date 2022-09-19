const form = document.querySelector("#new-contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const contact = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    company: document.querySelector("#company").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  };

  const response = await sendData(contact, "POST");
  console.log(response);

  if (response.status === 200) {
    clearForm();
    const newNode = fillContactTemplate(contact);
    displayNewNode(newNode);
  }
});
