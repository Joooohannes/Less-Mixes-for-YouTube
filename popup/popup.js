const switches = [
  { id: "musicVideo", key: "musicVideoToggle" },
  { id: "genericMix", key: "genericMixToggle" },
  { id: "myMix", key: "myMixToggle" }
];

switches.forEach(({ id, key }) => {
  const checkbox = document.getElementById(id);

  chrome.storage.sync.get(key, (data) => {
    checkbox.checked = data[key] ?? false;
  });

  checkbox.addEventListener("change", () => {
    chrome.storage.sync.set({ [key]: checkbox.checked });
  });
});