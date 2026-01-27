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
  if (e.target.closest(".yt-lockup-metadata-view-model__menu-button, .dropdown-trigger, #channel-name, #channel-thumbnail, yt-decorated-avatar-view-model, .yt-core-attributed-string__link.yt-core-attributed-string__link--call-to-action-color, ytm-channel-thumbnail-with-link-renderer, .ytThumbnailHoverOverlayToggleActionsViewModelButton, .media-channel, .media-item-menu")) return; // ytm-channel-thumbnail-with-link-renderer, .media-channel, .media-item-menu: Support for Firefox for Android

  const container = e.target.closest("yt-lockup-view-model, ytd-video-renderer, ytm-video-with-context-renderer, ytm-compact-radio-renderer, ytm-rich-item-renderer"); // ytm-video-with-context-renderer, ytm-compact-radio-renderer, ytm-rich-item-renderer: Support for Firefox for Android
  let anchor = container?.querySelector("a");

  if(!container) {
    const player = e.target.closest("#media-container-link, #thumbnail");
    if(!player) return;

    anchor = player;
  }

  if (!anchor || !anchor.href.includes("/watch")) return;

  const url = new URL(anchor.href);
  const videoId = url.searchParams.get("v");
  const list = url.searchParams.get("list");
  const index = url.searchParams.get("index");
  const pp = url.searchParams.get("pp");

  if (!videoId) return;

  const shouldMusicVideoToggle = pp && list && list.startsWith("RD") && list.length == 13 && !index && musicVideoToggle;
  const shouldGenericMixToggle = !pp && list && list.startsWith("RD") && list.length != 15 && !index && genericMixToggle;
  const shouldMyMixToggle = list && list.startsWith("RDMM") && list.length == 15 && !index && myMixToggle;

  const shouldRedirect = shouldMusicVideoToggle || shouldGenericMixToggle || shouldMyMixToggle;
  
  if (shouldRedirect) {
    e.preventDefault(); // Only for Firefox
    e.stopPropagation(); // Only for Firefox
    const cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // Only for Chrome
    if(e.target.id === "dismissible") {
      window.location.href = cleanUrl;
      return;
    }

    window.location.replace(cleanUrl); // Firefox: window.location.href = cleanUrl;
  }
}, true);