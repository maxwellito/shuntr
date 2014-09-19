/**
 * Here is the background script.
 *
 * Documentation available here
 * https://developer.chrome.com/extensions/webRequest
 */

/**
 * Make a copy of the following snippet to define your
 * own proxy rules. In this example, the code redirect
 * http://example.com/app.js to http://localhost/app.js
 *
 * The domain were the proxy must work must be defined
 * in your manifest file.
 *
 * A little trick is available to redirect to full content with
 * return {redirectUrl: "data:text/html," + encodeURIComponent(responseData)};
 */
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
  	return {redirectUrl: "http://localhost/app.js"};
	}, {urls: ["http://example.com/app.js"]}, ["blocking"]);
