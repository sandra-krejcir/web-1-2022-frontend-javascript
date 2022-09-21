window.addEventListener("load", async function () {
  const id = getIdFromUrl();
  const contact = await getSpecificContact(id);
});

function getIdFromUrl() {
  const location = window.location.toString();
  const splitQuestionmark = location.split("?");
  const routeParams = splitQuestionmark[1];
  const splitIdParam = routeParams.split("=");
  return splitIdParam[1];
}
