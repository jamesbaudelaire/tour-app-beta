//history, food, art, entertainment, activity

export const Interests = {
  history: [
    "western",
    "gangster",
    "military",
    "indigenous",
    "black",
    "asian",
    "latin",
    "ancestry",
    "viking",
    "german"
  ],
  art: ["theater", "symphony", "gallery", "mural", "statute", "concert"],
  activity: [
    "biking",
    "skateboarding",
    "hiking",
    "walking",
    "boating",
    "water sports",
    "swimming",
    "nature trail",
    "fishing",
    "camping",
    "sports"
  ],
  entertainment: [
    "brewery",
    "winery",
    "cigars",
    "jazz",
    "country",
    "rock",
    "r&b",
    "rap",
    "bluegrass",
    "night life"
  ],
  food: [
    "barbecue",
    "fine dining",
    "fast food",
    "seafood",
    "hispanic",
    "asian",
    "steak",
    "italian",
    "pizza",
    "cafe",
    "coffee"
  ]
};

export const InterestsIcons = {
  western: "🤠",
  seafood: "🦞",
  // black: "✊🏿",
  // murals: "🎨",
  // exhibit: "🗿",
  biking: "🚴"
  // hiking: "🥾"
};

export const SponsorsData = {
  stay: [
    {
      id: "comfort-inn",
      name: "Comfort Inn & Suites",
      site:
        "https://www.choicehotels.com/arkansas/little-rock/comfort-inn-hotels/ar115"
    },
    {
      id: "hampton-inn",
      name: "Hilton Inn",
      site: "https://www.hilton.com/en/hotels/fsmarhx-hampton-fort-smith/"
    }
  ]
};

export const LocationsData = [
  {
    id: "the-darby-house",
    name: "The Darby House",
    types: ["western"],
    hour: 15,
    categories: ["history"],
    // hour:[17,20,]
    area: "rivervalley",
    gps: "311 General Darby Street 72901",
    site: "https://www.fortsmith.org/the-darby-house/",
    phone: "4791234567"
  },
  {
    id: "rialto",
    name: "The Rialto Restaurant",
    types: ["western", "seafood"],
    hour: 17,
    categories: ["food", "history"],
    // hour:[17,20,]
    area: "downtown",
    gps: "720 Garrison Ave",
    site: "https://rialtofortsmith.com/",
    phone: "(479) 769-2406"
  },
  {
    id: "trolley-museum",
    name: "Trolley Museum",
    types: ["western"],
    hour: 12,
    categories: ["history"],
    // hour:[17,20,]
    area: "greater",
    gps: "720 Garrison Ave",
    site: "",
    phone: "(479) 769-2406"
  },
  {
    id: "skate-bike-park",
    name: "Riverfront Park",
    types: ["skateboarding", "biking"],
    hour: 12,
    categories: ["activity"],
    // hour:[17,20,]
    area: "rivervalley",
    gps: "720 Garrison Ave",
    site: "",
    phone: "(479) 769-2406"
  }
];
