const urlMap = {};

function set(shortId, longUrl) {
    urlMap[shortId] = longUrl;
}

function get(shortId) {
  return urlMap[shortId];
}

module.exports = { set, get };