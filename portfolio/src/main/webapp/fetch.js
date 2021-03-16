async function showHello() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('hello-container');
  dateContainer.innerText = textFromResponse;
}
