document.addEventListener("keydown", (e) => {
  // only fire on plain “n”
  const Pressedkey = e.key.toLocaleLowerCase();
  if (
    !["s", "a"].includes(Pressedkey) ||
    e.ctrlKey ||
    !e.altKey ||
    e.metaKey ||
    e.shiftKey
  )
    return;

  // your full Spotify DOM path
  const el = document.querySelector('a[data-testid="context-item-link"]');
  const artistEl = document.querySelector(
    'a[data-testid="context-item-info-artist"]'
  );
  if (el || artistEl) {
    if (Pressedkey === "s") {
      const song = el.innerText.trim();
      // navigator represent the browser itself
      navigator.clipboard
        .writeText(song)
        .then(() => console.log("🎵 Copied song:", song))
        .catch(console.error);
    } else if (Pressedkey === "a") {
      const artist = artistEl.innerText.trim();
      navigator.clipboard
        .writeText(artist)
        .then(() => console.log("Copied artist name", artist))
        .catch(console.error);
    }
  } else {
    console.warn("Spotify Copy: element not found for selector");
  }
});
