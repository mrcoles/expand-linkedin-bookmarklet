// ==Bookmarklet==
// @name Expand LinkedIn
// @author Peter Coles
// @repo https://github.com/mrcoles/expand-linkedin-bookmarklet/blob/master/src/expand-linkedin.js
// ==/Bookmarklet==

let wait = 0;

if (window.scrollY < 1000) {
  window.scrollTo(0, document.body.offsetHeight || 1500);
  wait = 300;
}

window.setTimeout(() => {
  const clickSelectors = [
    ".pv-profile-section__see-more-inline",
    ".lt-line-clamp__more"
  ];

  clickSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(elt => {
      elt.click();
    });
  });
}, wait);
