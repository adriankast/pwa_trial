console.log("hello from the worker!");

// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

setInterval(() => {
  console.log("intervall hello from sw worker!!");
}, 5000);

self.addEventListener("fetch", (event) => {
  console.log(`fetch listener 1: ${event.request.url}`);
});

self.addEventListener("fetch", (event) => {
  console.log(`fetch listener 2 (active): ${event.request.url}`);
  if (event.request.url.startsWith("http://example.com")) {
    event.respondWith(new Response("my sw response"));
  }
});

self.addEventListener("fetch", (event) => {
  console.log(`fetch listener 3 (should not be called): ${event.request.url}`);
});
