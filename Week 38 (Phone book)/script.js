window.addEventListener("load", async () => {
  await loadAndShowData();
});

function fillContactTemplate(contact) {
  const template = document.querySelector("#contact-card");
  const clone = document.importNode(template.content, true);
  clone.querySelector("#name").textContent = contact.name;
  clone.querySelector("#surname").textContent = contact.surname;
  clone.querySelector("#company").textContent = contact.company;
  clone.querySelector("#phone").textContent = contact.phone;
  clone.querySelector("#mail").textContent = contact.mail;
  return clone;
}

function displayNewNode(newNode) {
  const list = document.querySelector(".contact-list");
  list.appendChild(newNode);
}

async function loadAndShowData() {
  const data = await getData();
  const contacts = data.contacts;
  contacts.forEach((contact) => {
    const newNode = fillContactTemplate(contact);
    displayNewNode(newNode);
  });
}
