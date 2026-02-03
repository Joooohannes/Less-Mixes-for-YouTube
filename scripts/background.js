const STORAGE_KEYS = [
  "musicVideoToggle",
  "genericMixToggle",
  "myMixToggle"
];

const RULE_IDS = {
  MUSIC_VIDEO: 1,
  GENERIC_MIX_1: 2,
  GENERIC_MIX_2: 3,
  GENERIC_MIX_3: 4,
  GENERIC_MIX_4: 5,
  GENERIC_MIX_5: 6,
  GENERIC_MIX_6: 7,
  MY_MIX: 8,
  MUSIC_VIDEO_MOBILE: 11, // Support for Firefox for Android
  GENERIC_MIX_MOBILE_1: 12, // Support for Firefox for Android
  GENERIC_MIX_MOBILE_2: 13, // Support for Firefox for Android
  GENERIC_MIX_MOBILE_3: 14, // Support for Firefox for Android
  GENERIC_MIX_MOBILE_4: 15, // Support for Firefox for Android
  GENERIC_MIX_MOBILE_5: 16, // Support for Firefox for Android
  GENERIC_MIX_MOBILE_6: 17, // Support for Firefox for Android
  MY_MIX_MOBILE: 18, // Support for Firefox for Android
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
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{11}&start_radio=1&pp=.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX_1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{11}&start_radio=1([^&]|&[^p]|&p[^p]|&pp[^=])*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX_2,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{11}&start_radio=1&pp=.*&rv=.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX_3,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD([^&]{1}|[^&]{3,10})&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX_4,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{12,14}&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX_5,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{16,}&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: RULE_IDS.GENERIC_MIX_6,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD(M[^M]|[^M][^&])[^&]{11}&start_radio=1.*$",
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
      regexFilter: "^https://www\\.youtube\\.com/watch\\?v=([^&]*)&list=RDMM([^&]{11})?&start_radio=1",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.MUSIC_VIDEO_MOBILE,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{11}&start_radio=1&pp=.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.GENERIC_MIX_MOBILE_1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{11}&start_radio=1([^&]|&[^p]|&p[^p]|&pp[^=])*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.GENERIC_MIX_MOBILE_2,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{11}&start_radio=1&pp=.*&rv=.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.GENERIC_MIX_MOBILE_3,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD([^&]{1}|[^&]{3,10})&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.GENERIC_MIX_MOBILE_4,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{12,14}&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.GENERIC_MIX_MOBILE_5,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD[^&]{16,}&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.GENERIC_MIX_MOBILE_6,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]{11})&list=RD(M[^M]|[^M][^&])[^&]{11}&start_radio=1.*$",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  },
  { // Support for Firefox for Android
    id: RULE_IDS.MY_MIX_MOBILE,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://m.youtube.com/watch?v=\\1"
      }
    },
    condition: {
      regexFilter: "^https://m\\.youtube\\.com/watch\\?v=([^&]*)&list=RDMM([^&]{11})?&start_radio=1",
      isUrlFilterCaseSensitive: true,
      resourceTypes: ["main_frame"]
    }
  }
];

async function updateRules() {
  const toggles = await browser.storage.sync.get(STORAGE_KEYS);

  const enabledIds = [
    toggles.musicVideoToggle && RULE_IDS.MUSIC_VIDEO,
    toggles.musicVideoToggle && RULE_IDS.MUSIC_VIDEO_MOBILE, // Support for Firefox for Android
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_1,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_2,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_3,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_4,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_5,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_6,
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_MOBILE_1, // Support for Firefox for Android
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_MOBILE_2, // Support for Firefox for Android
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_MOBILE_3, // Support for Firefox for Android
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_MOBILE_4, // Support for Firefox for Android
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_MOBILE_5, // Support for Firefox for Android
    toggles.genericMixToggle && RULE_IDS.GENERIC_MIX_MOBILE_6, // Support for Firefox for Android
    toggles.myMixToggle && RULE_IDS.MY_MIX,
    toggles.myMixToggle && RULE_IDS.MY_MIX_MOBILE // Support for Firefox for Android
  ].filter(Boolean);

  const rulesToAdd = ALL_RULES.filter(rule => enabledIds.includes(rule.id));
  const ruleIdsToRemove = Object.values(RULE_IDS);

  await browser.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIdsToRemove,
    addRules: rulesToAdd
  });
}

browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    await browser.storage.sync.set({
      musicVideoToggle: true,
      genericMixToggle: false,
      myMixToggle: false
    });
  }

  await updateRules();
});

browser.storage.onChanged.addListener((_, area) => {
  if (area === "sync") {
    updateRules();
  }
});