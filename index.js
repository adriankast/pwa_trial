document.getElementById("scriptIt").innerHTML = "(js works)";

window.addEventListener("DOMContentLoaded", registerWorkerIfNone);

async function registerWorkerIfNone() {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      showSwStatus("serviceWorker was already there");
    } else {
      showSwStatus("try to register serviceWorker");
      navigator.serviceWorker.register("./worker.js").then(
        () => showSwStatus("serviceWorker successfully registered"),
        () => showSwStatus("failed to register serviceWorker")
      );
    }
  } else {
    showSwStatus("no serviceWorker in navigator");
  }
}

function showSwStatus(input) {
  document.getElementById("swStatus").innerHTML = input;
}

document.getElementById("fetchButton").addEventListener("click", fetchExample);
async function fetchExample() {
  try {
    const res = await fetch("http://example.com/asdf");
    const txt = await res.text();
    console.log("body: " + txt);
  } catch (e) {
    console.error("cannot fetch example com");
  }
}
