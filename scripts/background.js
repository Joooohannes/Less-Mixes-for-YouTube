const STORAGE_KEYS = [
  "musicVideoToggle",
  "genericMixToggle",
  "myMixToggle"
];

const RULE_IDS = {
  MUSIC_VIDEO: 1,
  GENERIC_MIX: 2,
  MY_MIX: 3,
};

const ALL_RULES = [
  {
    id: RULE_IDS.MUSIC_VIDEO,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]*)&list=RD(?:[^M]M|M[^M]|[^M][^M])[^&]{9}&start_radio=1&pp=.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]*)&list=RD(?:[^M]M|M[^M]|[^M][^M])[^&]*&start_radio=1",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.MY_MIX,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]*)&list=RDMM.*&start_radio=1",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  }
];

async function updateRules() {
  const toggles = await chrome.storage.sync.get(STORAGE_KEYS);

  const enabledIds = [
    toggles.musicVideoToggle && RULE_IDS.MUSIC_VIDEO,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX,
    toggles.myMixToggle && RULE_IDS.MY_MIX
  ].filter(Boolean);

  const rulesToAdd = ALL_RULES.filter(rule => enabledIds.includes(rule.id));
  const ruleIdsToRemove = Object.values(RULE_IDS);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIdsToRemove,
    addRules: rulesToAdd
  });
}

chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    await chrome.storage.sync.set({
      musicVideoToggle: true,
      genericMixToggle: false,
      myMixToggle: false
    });
  }

  await updateRules();
});

chrome.storage.onChanged.addListener((_, area) => {
  if (area === "sync") {
    updateRules();
  }
});