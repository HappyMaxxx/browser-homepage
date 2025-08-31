let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Vinnytsia, Ukraine',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "і": "search-bar",
    // "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "jetiq",
            url: "https://iq.vntu.edu.ua/",
            icon: "brain",
            icon_color: "#2077E8",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
          {
            name: "travle",
            url: "https://travle.earth/",
            icon: "map",
            icon_color: "#DDC7A1",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "uakino",
            url: "https://uakino.best/",
            icon: "device-tv",
            icon_color: "#7daea3",
          },
          {
            name: "goojara",
            url: "https://ww1.goojara.to/",
            icon: "device-cctv",
            icon_color: "#e57373"
          },
          {
            name: "uafix",
            url: "https://uafix.net/",
            icon: "video",
            icon_color: "#e78a4e",
          },
          {
            name: "zetflix",
            url: "https://www.zetflix.ru.net/",
            icon: "player-play",
            icon_color: "#e78a4e",
          },
          {
            name: "southpark",
            url: "https://www.southparkstudios.com/",
            icon: "balloon",
            icon_color: "#4caf50"
          },
          {
            name: "bb",
            url: "https://big-bang-online.com/",
            icon: "atom",
            icon_color: "#2196f3"
          }
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/HappyMaxxx",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "w3",
              url: "https://w3schoolsua.github.io/#gsc.tab=0",
              icon: "school",
              icon_color: "#7daea3",
            },
            {
              name: "habr",
              url: "https://habr.com/ru/feed/",
              icon: "article",
              icon_color: "#ea6962",
            },
            {
              name: "geeksforgeeks",
              url: "https://www.geeksforgeeks.org/",
              icon: "code",
              icon_color: "#a9b665",
            },
            {
              name: "mit",
              url: "https://ocw.mit.edu/",
              icon: "books",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com/problemset/",
              icon: "brand-leetcode",
              icon_color: "#e78a4e",
            },
          ],
        },
      ],
    },
    {
      name: "other",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "grock",
              url: "https://grok.com/",
              icon: "robot",
              icon_color: "#161618",
            },
            {
              name: "easyeda",
              url: "https://easyeda.com/ru",
              icon: "tools",
              icon_color: "#7daea3",
            },
            // TODO CHANGE
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#d3869b",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "design",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "canva",
              url: "https://www.canva.com/",
              icon: "letter-c",
              icon_color: "#3A74DE",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "stuff",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "PYTEK",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com/pytekindustries/",
              icon: "brand-instagram",
              icon_color: "#E4405F",
            },
            {
              name: "X",
              url: "https://x.com/PytekIndustries",
              icon: "brand-twitter", 
              icon_color: "#000000",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@pytekindustries1",
              icon: "brand-tiktok",
              icon_color: "#69C9D0",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
