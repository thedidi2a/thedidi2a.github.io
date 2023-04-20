// fichier: script-site-general.js
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>    
<script src="js/templatemo-script.js"></script>

function registerServiceWorker() {
  // enregistre le script sw avec les navigateurs qui le gèrent
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker enregistré correctement.');
    }).catch(error => {
      console.log('Erreur lors de l''enregistrement du Service Worker : ', error);
    });
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Service worker registered successfully
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // Service worker registration failed
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
