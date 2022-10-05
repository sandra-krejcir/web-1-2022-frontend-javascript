window.addEventListener("load", async () => {
  await loadAndShowData();
});

async function loadAndShowData() {
  // Get the html element
  const contactsListElement = document.querySelector(".contact-list");
  // Clear the html content
  contactsListElement.innerHTML = "";
  // Get data from backend
  const data = await getData();
  // Display each of the data elements.
  data.forEach((contact) => {
    const newNode = fillContactTemplate(contact);
    displayNewNode(newNode);
  });
}

/**
 * Takes a clone of the template, and fills the information from the Contact object,
 * into the template.
 * @param {object} contact
 * @returns {HTMLElement} Template with contact information
 */
function fillContactTemplate(contact) {
  // Get the template
  const template = document.querySelector("#contact-card");
  // Clone template
  const clone = document.importNode(template.content, true);
  // Fill information into the cloned templated
  clone.querySelector("#temp").id = contact.id;
  clone.querySelector("#name").textContent = contact.name;
  clone.querySelector("#surname").textContent = contact.surname;
  clone.querySelector("#company").textContent = contact.company;
  clone.querySelector("#phone").textContent = contact.phone;
  clone.querySelector("#email").textContent = contact.email;

  // Finish the edit button
  clone.querySelector("#edit-button").addEventListener("click", () => {
    window.location.replace(
      "/Week 38 (Phone book)/update.html?id=" + contact.id
    );
  });

  // Return the filled node
  return clone;
}

/**
 * Append node as child in the Contact List html element
 * @param newNode
 */
function displayNewNode(newNode) {
  const contactsList = document.querySelector(".contact-list");
  contactsList.appendChild(newNode);
}

/**
 * Function to clear the form
 */
function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#surname").value = "";
  document.querySelector("#company").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
}
