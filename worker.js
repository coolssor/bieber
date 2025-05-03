export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/today') {
      const random = Math.floor(Math.random() * 20) + 1; // 1–20
      return Response.redirect(`https://get.bieber.party/bieber${random}.jpg`, 302);
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You’ve been Biebered!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    header {
      background-color: #ff3b30;
      color: white;
      text-align: center;
      padding: 20px 0;
      font-size: 2em;
    }
    .container {
      width: 90%;
      max-width: 1000px;
      margin: 30px auto;
    }
    .script-box {
      background-color: white;
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .script-box h2 {
      font-size: 1.3em;
      margin-bottom: 10px;
    }
    .script-box pre {
      background-color: #f7f7f7;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      font-size: 1em;
      margin: 0;
    }
    .copy-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      font-size: 1em;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
    }
    .copy-button:hover {
      background-color: #0056b3;
    }
    .copy-button:active {
      background-color: #004085;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 0.9em;
      color: #777;
    }
  </style>
</head>
<body>
  <header>
    You’ve been Biebered!
  </header>
  <div class="container">
    <p>Bieber someone by using one of these commands:</p>
    <div class="script-box">
      <h2>Windows</h2>
      <pre>iex (iwr 'https://get.bieber.party/windows')</pre>
      <button class="copy-button" onclick="copyToClipboard('iex (iwr \\'https://get.bieber.party/windows\\')')">Copy</button>
    </div>
    <div class="script-box">
      <h2>macOS</h2>
      <pre>bash <(curl -s https://get.bieber.party/macos)</pre>
      <button class="copy-button" onclick="copyToClipboard('bash <(curl -s https://get.bieber.party/macos)')">Copy</button>
    </div>
    <div class="script-box">
      <h2>GNOME (Linux)</h2>
      <pre>bash <(curl -s https://get.bieber.party/gnome)</pre>
      <button class="copy-button" onclick="copyToClipboard('bash <(curl -s https://get.bieber.party/gnome)')">Copy</button>
    </div>
    <div class="script-box">
      <h2>KDE Plasma (Linux)</h2>
      <pre>bash <(curl -s https://get.bieber.party/kde)</pre>
      <button class="copy-button" onclick="copyToClipboard('bash <(curl -s https://get.bieber.party/kde)')">Copy</button>
    </div>
    <div class="script-box">
      <h2>ChromeOS</h2>
      <pre>Sorry, ChromeOS is too locked down to allow this to work :(</pre>
    </div>
  </div>
  <div class="footer">
    Created with love for pranks.
  </div>
  <script>
    function copyToClipboard(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  </script>
</body>
</html>`;
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

