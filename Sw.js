// Mínimo necesario para que Chrome y Edge ofrezcan "Instalar" en la compu.
// No guarda nada: todo se pide siempre a internet, como siempre.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sin caché: cada pedido va a internet */ });
