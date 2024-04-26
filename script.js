//your JS code here. If required.
function getCurrentURLLength() {
    // Get the current URL
    const currentURL = window.location.href;

    // Get the length of the current URL
    const urlLength = currentURL.length;

    // Return the length of the current URL
    return urlLength;
}
// Print the length of the current URL
console.log("Length of the current URL:", getCurrentURLLength());