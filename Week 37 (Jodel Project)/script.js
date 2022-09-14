const url =
  "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/notes.json";

document.querySelector("#my-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = document.querySelector("#jodel").value;
  postData({ jodel: text });
});

async function postData(content) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (response.status == 200) {
    methodWithCreateElement(content);
    methodWithTemplate(content);
  } else {
  }
}

function methodWithCreateElement(content) {
  const container = document.querySelector("#all-new-elements");

  const parent = document.createElement("div");
  const p = document.createElement("p");

  p.innerHTML = content.jodel;

  parent.appendChild(p);
  container.appendChild(parent);
}

function methodWithTemplate(content) {
  const template = document.querySelector("#jodel-template");

  const newNode = document.importNode(template.content, true);

  newNode.querySelector("p").innerHTML = content.jodel;

  const container = document.querySelector("#all-new-elements");
  container.appendChild(newNode);
}
