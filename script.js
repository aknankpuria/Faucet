// Time interval in milliseconds after which the history, cookies and cache will be cleared
const intervalInMilliseconds = 10000; // 10  seconds

// Function to clear browsing history, cookies, and cache
function clearData() {
  // Clear browsing history
  window.history.go(-(window.history.length));
  
  // Clear cookies
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  
  // Clear cache
  window.caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
      window.caches.delete(cacheName);
    });
  });
}

// Set a timer to clear browsing history, cookies, and cache
setTimeout(clearData, intervalInMilliseconds);
