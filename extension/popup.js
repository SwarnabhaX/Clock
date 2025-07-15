document.addEventListener("DOMContentLoaded", () => {
  const scanButton = document.getElementById("scanButton");

  scanButton.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ["content.js"]
      });
    });
  });
});
