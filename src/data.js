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

export const Sponsors = {
  stay: [
    {
      name: "",
      site: ""
    }
  ],
  eat: [],
  go: []
};

export const LocationsData = [
  {
    id: "the-darby-house",
    name: "The Darby House",
    types: ["western"],
    hour: 17,
    categories: ["history"],
    // hour:[17,20,]
    // location:'rivervalley',
    gps: "311 General Darby Street 72901",
    site: "https://www.fortsmith.org/the-darby-house/",
    phone: "4791234567"
  },
  {
    id: "rialto",
    name: "The Rialto Restaurant",
    types: ["western", "seafood"],
    hour: 15,
    categories: ["food", "history"],
    // hour:[17,20,]
    // location:'rivervalley',
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
    // location:'rivervalley',
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
    // location:'rivervalley',
    gps: "720 Garrison Ave",
    site: "",
    phone: "(479) 769-2406"
  }
];
