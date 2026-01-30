(function() {
  if (window.location.hostname === 'famekeeda.com' && window.location.hostname !== 'www.famekeeda.com') {
    window.location.href = 'http://www.famekeeda.com' + window.location.pathname;
  }
})();
