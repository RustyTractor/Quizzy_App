const isSupported = () => {
  return "serviceWorker" in navigator;
};

const registerServiceWorker = () => {
  if (isSupported) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then((res) => console.log("Service Worker: Registered"))
        .catch((err) => console.log(`Service Worker: Error ${err}`));
    });
  }
};

export default registerServiceWorker;
