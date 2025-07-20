const express = require('express');
const { nanoid } = require('nanoid');
const { set, get } = require('./urlMap');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: 'longUrl is required' });
  }

  const shortId = nanoid(6); // e.g., "abc123"
  set(shortId, longUrl); // Store in our HashMap

  res.json({
    shortUrl: `http://localhost:3000/${shortId}`,
    longUrl: longUrl,
  });
});

app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  const longUrl = get(shortId); // Lookup from HashMap

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

app.listen(3000, () => {
  console.log('URL Shortener running at http://localhost:3000');
});