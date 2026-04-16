
// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-service-worker.js');
}

console.log("Hello World!")

/* Choose some Modules to import */
let mods = ["/base/master_manifest.json"]
