# Shuntr

This repo is a minimalist Chrome extension to redirect files. I use it to redirect production scripts to local ones, but I can also be used for images, stylesheets, html...
Nothing is automatic, no interface, this is a simple dev tool: a boilerplate.

## Usage

Edit `app/manifest.json` to include your production domain.

Add rules in `app/js/background.js` to define your redirections.

Load the extension (or reload it). Go on chrome://extensions/ then enable `Developer mode`, then add your module via the button `Load unpacked extension`.

### Be careful

- Everytime you make changes to the extension, you have to reload the app in the extension page (via the button `reload` under the extension)
- If you redirect to localfile, they must be available via the same protocol for security reasons
