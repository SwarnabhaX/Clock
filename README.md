# Cookie Scanner Extension and Server

This project contains a browser extension that automatically scans for cookies on web pages and a Python server that receives the cookie data.

## Project Structure

- `extension/`: Contains the files for the browser extension.
- `server/`: Contains the files for the Python server.

## Setup and Usage

### Server

1.  **Navigate to the `server` directory:**
    ```bash
    cd server
    ```
2.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run the server:**
    ```bash
    python server.py
    ```
    The server will start and listen for incoming requests on port 443 using HTTPS.

### Extension

1.  **Open the `extension/background.js` file and replace `"https://your-server-ip/cookies"` with the actual IP address of the machine running the Python server.**
2.  **Load the extension in your browser:**
    - Open your browser's extension management page (e.g., `chrome://extensions`).
    - Enable "Developer mode".
    - Click "Load unpacked" and select the `extension` directory.

The extension will now automatically scan for cookies on every page you visit and send them to the server.

### Important Notes

- The Python server uses a self-signed SSL certificate (`cert.pem` and `key.pem`). When you access the server for the first time, your browser will likely show a warning about an insecure connection. You will need to tell your browser to proceed anyway.
- This project is for educational and cybersecurity research purposes only. Do not use it to collect user data without their explicit consent. The developers of this project are not responsible for any misuse.
