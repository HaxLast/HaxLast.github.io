# Souvik Singh Sardar Portfolio

## Project structure

- `index.html` — main portfolio entry point
- `assets/css/style.css` — page styles
- `assets/js/script.js` — page interactions
- `assets/img/` — place temporary profile images here
- `tools/` — utility scripts such as resume extraction
- `content/` — extracted resume or content source files

## How to use

1. Open `index.html` in a browser.
2. Update the `assets/css/style.css` and `assets/js/script.js` files for styling or behavior.
3. Add a profile image to `assets/img/` and update `index.html` if needed.

## Notes

- Keep `index.html` at the project root for simple deploy compatibility.
- Use `tools/extract_resume.py` only if you need to re-extract content from the resume PDF.
- The skills slider is plug-and-play: add or remove `.skill-card` items in `index.html`.
