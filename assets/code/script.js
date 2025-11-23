function openPopup() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

// Inline include helper: replaces elements with `data-include="name"` by
// fetching `/assets/universal/{name}.html` and inserting the response HTML.
function inlineUniversalIncludes() {
  document.querySelectorAll('[data-include]').forEach(function (el) {
    var name = el.getAttribute('data-include');
    if (!name) return;
    var path = '/assets/universal/' + name + '.html';
    fetch(path).then(function (res) {
      if (!res.ok) throw new Error('Include fetch failed: ' + path);
      return res.text();
    }).then(function (html) {
      el.innerHTML = html;
    }).catch(function (err) {
      console.error(err);
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  inlineUniversalIncludes();
});