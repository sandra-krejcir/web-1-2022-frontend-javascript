const yourId = "-NCAr6_xwydIcAcGho0P";
const url = `https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/web-update-project/${yourId}.json`;

async function getData() {
  const response = await fetch(url + ".json");
  const body = await response.json();
  return transformToArray(body);
}

async function getSpecificContact(id) {
  const response = await fetch(url + "/" + id + ".json");
  const body = await response.json();
  console.log(body);
  return body;
}

function putSpecificContact(id, contact) {
  console.log(id, contact);
  fetch(url + "/" + id + ".json", {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * A function that transform the Firebase Object in Object structure to Objects in Array.
 *
 * OBS! This is only needed due to the way Firebase works. OBS!
 *
 * @param {Object} data
 * @returns Array
 */
function transformToArray(data) {
  const toReturn = [];
  for (key in data) {
    const temp = {
      ...data[key],
      id: key,
    };
    toReturn.push(temp);
  }
  return toReturn;
}

async function postData(contact) {
  const response = await fetch(url + ".json", {
    method: "POST",
    body: JSON.stringify(contact),
  });
  return response;
}
