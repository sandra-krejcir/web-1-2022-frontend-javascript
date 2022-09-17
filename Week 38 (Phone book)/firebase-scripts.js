const yourId = "-NC5IzR6u7xd3MTadvOh";
const url = `https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/web-update-project/${yourId}.json`;

async function postData() {
  const response = await fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/web-update-project.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contacts: [
          {
            name: "Test",
            surname: "Testersen",
            company: "Test APS",
            phone: "21212121",
            mail: "test@testersen.com",
          },
        ],
      }),
    }
  );
  console.log(response);

  const body = await response.json();
  console.log(body);
}

async function postAll() {
  for (let i = 0; i < 34; i++) {
    postData();
  }
}

async function getData() {
  const response = await fetch(url);
  const body = await response.json();
  console.log(body);
  return body;
}

async function updateData() {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contacts: [
        {
          name: "Anders",
          surname: "And",
          company: "Andeby Aps",
          phone: "11223344",
          mail: "anders@and.com",
        },
      ],
    }),
  });
  console.log(response);
}
