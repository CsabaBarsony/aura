# Page specific files

All page files MUST be contained in a directory with name same as the page (all lowercase).

Every directory MUST contain these files:
* `index.html` - Template of the page.
* `app.js` - Entry point of page scripts. MUST initialize a global namespace `app`. The initialization MUST occur before injecting own scripts.