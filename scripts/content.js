let musicVideoToggle = false;
let genericMixToggle = false;
let myMixToggle = false;

chrome.storage.sync.get(["musicVideoToggle", "genericMixToggle", "myMixToggle"], (data) => {
  musicVideoToggle = data.musicVideoToggle ?? false;
  genericMixToggle = data.genericMixToggle ?? false;
  myMixToggle = data.myMixToggle ?? false;
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync") {
    if (changes.musicVideoToggle) {
      musicVideoToggle = changes.musicVideoToggle.newValue;
    }
    if (changes.genericMixToggle) {
      genericMixToggle = changes.genericMixToggle.newValue;
    }
    if (changes.myMixToggle) {
      myMixToggle = changes.myMixToggle.newValue;
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".yt-lockup-metadata-view-model__menu-button, .dropdown-trigger")) return;

  const container = e.target.closest("yt-lockup-view-model, ytd-video-renderer");

  if(!container) {
    const player = e.target.closest("#inline-preview-player");
    const playerAnchor = player?.querySelector(".ytp-title-link");
    if(playerAnchor){
      e.preventDefault(); // Only for Firefox
      e.stopPropagation(); // Only for Firefox
      window.location.replace(playerAnchor.href);
    }
    return;
  }

  const anchor = container.querySelector("a");

  if (!anchor || !anchor.href.includes("/watch")) return;

  const url = new URL(anchor.href);
  const videoId = url.searchParams.get("v");
  const list = url.searchParams.get("list");
  const index = url.searchParams.get("index");
  const pp = url.searchParams.get("pp");

  if (!videoId) return;

  const shouldMusicVideoToggle = pp && list && list.startsWith("RD") && !list.startsWith("RDMM") && !index && musicVideoToggle;
  const shouldGenericMixToggle = !pp && list && list.startsWith("RD") && !list.startsWith("RDMM") && !index && genericMixToggle;
  const shouldMyMixToggle = list && list.startsWith("RDMM") && !index && myMixToggle;

  const shouldRedirect = shouldMusicVideoToggle || shouldGenericMixToggle || shouldMyMixToggle;
  
  if (shouldRedirect) {
    e.preventDefault(); // Only for Firefox
    e.stopPropagation(); // Only for Firefox
    const cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;

    if(e.target.id === "dismissible") {
      window.location.href = cleanUrl;
      return;
    }

    window.location.replace(cleanUrl);
  }
}, true);