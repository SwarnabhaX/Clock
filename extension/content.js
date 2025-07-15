chrome.runtime.sendMessage({
  action: "getCookies",
  url: window.location.href
}, response => {
  if (response && response.status === "success") {
    console.log("Cookies retrieved and sent.");
  } else {
    console.error("Failed to retrieve and send cookies.");
  }
});
