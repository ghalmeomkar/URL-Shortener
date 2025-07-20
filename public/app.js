async function shortenUrl() {
      const longUrl = document.getElementById('longUrl').value;
      const response = await fetch('/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl })
      });

      const data = await response.json();
      const resultDiv = document.getElementById('result');

      if (data.shortUrl) {
        resultDiv.innerHTML = `
          Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>
        `;
      } else {
        resultDiv.textContent = "Error shortening URL.";
      }
    }