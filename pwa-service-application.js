import { App } from "/app/Application.js"

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-service-worker.js');
}

/* Choose some Modules to import */
let mods = ["/base/master_manifest.json"]

/* Start App w/ Game */
const session = new App();
await session.init();
session.run_game();

console.log("Hello World!")