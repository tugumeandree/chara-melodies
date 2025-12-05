import { Hymn } from '@/types';

export const hymnsDatabase: Hymn[] = [
  {
    number: 1,
    title: "Holy, Holy, Holy",
    language: "English",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Holy, holy, holy! Lord God Almighty!",
          "Early in the morning our song shall rise to Thee;",
          "Holy, holy, holy, merciful and mighty!",
          "God in three Persons, blessèd Trinity!"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Holy, holy, holy! All the saints adore Thee,",
          "Casting down their golden crowns around the glassy sea;",
          "Cherubim and seraphim falling down before Thee,",
          "Which wert, and art, and evermore shalt be."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Holy, holy, holy! though the darkness hide Thee,",
          "Though the eye of sinful man Thy glory may not see;",
          "Only Thou art holy; there is none beside Thee,",
          "Perfect in power, in love, and purity."
        ]
      }
    ],
    note: "A classic hymn of adoration to the Holy Trinity, often sung on Trinity Sunday.",
    tags: ["Trinity", "Adoration", "Morning", "Traditional"],
    youtubeUrl: "https://www.youtube.com/embed/w3v3hJQqfUs"
  },
  // Hymns from Hymns & Dinner 2025 - Chara Experiences
  {
    number: 11,
    title: "Linda Yesu",
    language: "Luganda",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Abalindirira Yesu, tebawangulwa",
          "Ensi ne bwebeer' ekaye",
          "Tebamudduka (Repeat)"
        ]
      },
      {
        type: "chorus",
        lines: [
          "Linda Yesu, Linda Yesu",
          "Ya'lina amaanyi",
          "Agayamba abakoye",
          "Linda Yesu oyo"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Ekisa kye tokinyoma",
          "Kirina amaanyi",
          "Okulokola abakoye",
          "No'kubawonya"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Oyo atukuuma ye takowa",
          "Era teyebaka",
          "Obwesigwa bwe kye kigo ffe",
          "Mwetukwekebwa"
        ]
      }
    ],
    note: "Wait for Jesus - A traditional Luganda worship hymn reminding believers to trust in God's timing.",
    tags: ["Trust", "Patience", "Faith", "Luganda", "Traditional"],
    youtubeUrl: "https://www.youtube.com/embed/QHxN6r9ZE5Q"
  },
  {
    number: 2,
    title: "Amazing Grace",
    language: "English",
    category: "Praise",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Amazing grace! How sweet the sound",
          "That saved a wretch like me!",
          "I once was lost, but now am found;",
          "Was blind, but now I see."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "'Twas grace that taught my heart to fear,",
          "And grace my fears relieved;",
          "How precious did that grace appear",
          "The hour I first believed."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Through many dangers, toils and snares,",
          "I have already come;",
          "'Tis grace hath brought me safe thus far,",
          "And grace will lead me home."
        ]
      }
    ],
    note: "Written by John Newton, this hymn celebrates God's grace and redemption.",
    tags: ["Grace", "Salvation", "Testimony", "Traditional"],
    youtubeUrl: "https://www.youtube.com/embed/CDdvReNKKuk"
  },
  {
    number: 3,
    title: "Tukutendereza Yesu",
    language: "Luganda",
    category: "Praise",
    lyrics: [
      {
        type: "chorus",
        lines: [
          "Tukutendereza Yesu",
          "Tukutendereza Yesu",
          "Tukutendereza Yesu",
          "Omwana gw'endiga"
        ]
      },
      {
        type: "verse",
        number: 1,
        lines: [
          "Yesu yajja mu nsi",
          "Okutulokola ffe",
          "Natuwa obulamu",
          "Obutaggwaawo"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Tukwebaze Mukama",
          "Olw'okwagala kwo",
          "Tukwebaze Mukama",
          "Olw'okusaasira kwo"
        ]
      }
    ],
    note: "A beloved Luganda hymn praising Jesus, the Lamb of God.",
    tags: ["Jesus", "Lamb of God", "Praise", "Traditional Ugandan"],
    youtubeUrl: "https://www.youtube.com/embed/gAPzQG771Wk"
  },
  {
    number: 4,
    title: "Otwebembere",
    language: "Runyankore",
    category: "Invocation",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Ruhanga Ishitwe, Ruhanga Omwana",
          "Ruhanga Omwoyo Orikwera",
          "Halleluyah"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Otwebembere, otwebembere",
          "Otwebembere Mukama",
          "Halleluyah"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Turikwetegyereza, turikwetegyereza",
          "Turikwetegyereza Mukama",
          "Halleluyah"
        ]
      }
    ],
    note: "A traditional Runyankore invocation asking the Lord to go before us.",
    tags: ["Holy Spirit", "Invocation", "Processional", "Trinity"],
    youtubeUrl: "https://www.youtube.com/embed/vqGKMhq0JQI"
  },
  {
    number: 5,
    title: "Mungu yu Mwema",
    language: "Swahili",
    category: "Thanksgiving",
    lyrics: [
      {
        type: "chorus",
        lines: [
          "Mungu yu mwema, Mungu yu mwema",
          "Mungu yu mwema, ni mwema kwangu"
        ]
      },
      {
        type: "verse",
        number: 1,
        lines: [
          "Amenipa uzima, amenipa furaha",
          "Amenipa upendo, Mungu yu mwema"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Asante Baba, asante Yesu",
          "Asante Roho, Mungu yu mwema"
        ]
      }
    ],
    note: "A Swahili song of thanksgiving declaring God's goodness.",
    tags: ["Goodness of God", "Thanksgiving", "Testimony"],
    youtubeUrl: "https://www.youtube.com/embed/hNv5AHqQfPQ"
  },
  {
    number: 6,
    title: "Be Thou My Vision",
    language: "English",
    category: "Prayer",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Be Thou my Vision, O Lord of my heart;",
          "Naught be all else to me, save that Thou art.",
          "Thou my best thought, by day or by night,",
          "Waking or sleeping, Thy presence my light."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Be Thou my Wisdom, and Thou my true Word;",
          "I ever with Thee and Thou with me, Lord;",
          "Thou my great Father, I Thy true son;",
          "Thou in me dwelling, and I with Thee one."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Riches I heed not, nor man's empty praise,",
          "Thou mine Inheritance, now and always:",
          "Thou and Thou only, first in my heart,",
          "High King of Heaven, my Treasure Thou art."
        ]
      }
    ],
    note: "An ancient Irish hymn expressing complete devotion to Christ.",
    tags: ["Devotion", "Guidance", "Prayer", "Celtic"],
    youtubeUrl: "https://www.youtube.com/embed/YteoedRdWUI"
  },
  {
    number: 7,
    title: "How Great Thou Art",
    language: "English",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "O Lord my God, when I in awesome wonder",
          "Consider all the worlds Thy hands have made,",
          "I see the stars, I hear the rolling thunder,",
          "Thy power throughout the universe displayed."
        ]
      },
      {
        type: "chorus",
        lines: [
          "Then sings my soul, my Savior God, to Thee:",
          "How great Thou art! How great Thou art!",
          "Then sings my soul, my Savior God, to Thee:",
          "How great Thou art! How great Thou art!"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "When through the woods and forest glades I wander",
          "And hear the birds sing sweetly in the trees,",
          "When I look down from lofty mountain grandeur",
          "And hear the brook and feel the gentle breeze:"
        ]
      }
    ],
    note: "A powerful hymn declaring God's majesty in creation.",
    tags: ["Majesty", "Creation", "Worship", "Nature"],
    youtubeUrl: "https://www.youtube.com/embed/Cc8UkBDqN8E"
  },
  {
    number: 8,
    title: "Yesu Omulokozi",
    language: "Luganda",
    category: "Communion",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Yesu Omulokozi wange",
          "Nkwagala nnyo",
          "Wanfa ku musalaba",
          "Olw'ebibi byange"
        ]
      },
      {
        type: "chorus",
        lines: [
          "Nkwebaza Yesu, nkwebaza Mukama",
          "Olw'okwagala kwo okungi",
          "Nkwebaza Yesu, nkwebaza Mukama",
          "Wanfa olw'ebibi byange"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Omusaayi gwo ogutukuvu",
          "Guntukuza nze",
          "Amaziga go agenjula",
          "Gantukuza nze"
        ]
      }
    ],
    note: "A hymn about Jesus our Savior, often sung during communion.",
    tags: ["Salvation", "Cross", "Communion", "Blood of Jesus"],
    youtubeUrl: "https://www.youtube.com/embed/OPfR4AGFqI0"
  },
  {
    number: 9,
    title: "Webaza Mukama",
    language: "Runyankore",
    category: "Thanksgiving",
    lyrics: [
      {
        type: "chorus",
        lines: [
          "Webaza Mukama kuba ari mwiju",
          "Okugonza kwe kurikusiga emirembe n'emirembe"
        ]
      },
      {
        type: "verse",
        number: 1,
        lines: [
          "Natuhayo omwana we owomubango",
          "Kutugyeza omu bibi",
          "Atuhayo obugabe obutakwahurira",
          "Webaza Mukama"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Ahabw'okugonza kwe okutakoma",
          "Ahabw'okwehemba kwe okutakwahurira",
          "Turikumwebaza emyaka n'emyaka",
          "Webaza Mukama"
        ]
      }
    ],
    note: "Give thanks to the Lord for He is good - His love endures forever.",
    tags: ["Thanksgiving", "Goodness", "Love", "Eternal"],
    youtubeUrl: "https://www.youtube.com/embed/5TJeXkWI3O4"
  },
  {
    number: 10,
    title: "It Is Well With My Soul",
    language: "English",
    category: "Prayer",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "When peace, like a river, attendeth my way,",
          "When sorrows like sea billows roll;",
          "Whatever my lot, Thou hast taught me to say,",
          "It is well, it is well with my soul."
        ]
      },
      {
        type: "chorus",
        lines: [
          "It is well with my soul,",
          "It is well, it is well with my soul."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Though Satan should buffet, though trials should come,",
          "Let this blest assurance control,",
          "That Christ hath regarded my helpless estate,",
          "And hath shed His own blood for my soul."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "My sin, oh, the bliss of this glorious thought!",
          "My sin, not in part but the whole,",
          "Is nailed to the cross, and I bear it no more,",
          "Praise the Lord, praise the Lord, O my soul!"
        ]
      }
    ],
    note: "Written by Horatio Spafford after personal tragedy, expressing deep faith and peace.",
    tags: ["Peace", "Faith", "Trials", "Assurance"],
    youtubeUrl: "https://www.youtube.com/embed/zY5o9mP22V0"
  },
  {
    number: 12,
    title: "Eze Ebube",
    language: "English",
    category: "Praise",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "More than my mouth can testify,",
          "More than my mind can comprehend;",
          "See, I've seen the wonders of Your grace,",
          "I'm so sure that this is not the end."
        ]
      },
      {
        type: "chorus",
        lines: [
          "Eze Ebube,",
          "See how far You've brought me.",
          "Eze Ebube,",
          "I'm so glad You found me worthy.",
          "I can see, I can tell,",
          "And I know it's Your grace;",
          "All my days, I will sing Your praise."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "My heart is full of gratitude,",
          "To You — and no one else but You.",
          "(Thank You, Jesus)",
          "Lord, I'm here only by Your grace;",
          "Thank You, Jesus, for not giving up on me."
        ]
      },
      {
        type: "bridge",
        lines: [
          "Oh-oh-oh-oh-oh...",
          "Eze Ebube,",
          "See how far You've brought me.",
          "Eze Ebube,",
          "I'm so glad You found me worthy.",
          "I can see, I can tell,",
          "And I know it's Your grace;",
          "All my days, I will sing Your praise."
        ]
      }
    ],
    note: "You Are Wonderful - A contemporary African worship anthem that overflows with gratitude. Popularized by Neon Adejo from Nigeria.",
    tags: ["Gratitude", "Grace", "Testimony", "Contemporary", "Nigerian", "Igbo"],
    youtubeUrl: "https://www.youtube.com/embed/uPMx3n_WK1c"
  },
  {
    number: 13,
    title: "Otwebembere",
    language: "Runyankore",
    category: "Invocation",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Ruhanga Ishitwe, Ruhanga Omwana",
          "Ruhanga Omwoyo Orikwera",
          "Ruhanga Ishitwe, Ruhanga Omwana",
          "Ruhanga Omwoyo Orikwera",
          "Halleluyah!"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Twakushaba Omwoyo Orikwera",
          "Shuuma Oyiije Otwebembere",
          "Nitumanya ngu tury'abaana baawe",
          "Ai Mukama Otwebembere"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Iraka ryawe Ai Mukama",
          "Twarihurira niritweta",
          "Iraka ryawe Ai Mukama",
          "Twarihurira niritweta"
        ]
      },
      {
        type: "chorus",
        lines: [
          "Otwebembere, Ai Mukama",
          "Otwebembere, Omwoyo Orikwera",
          "Otwebembere, Ruhanga Omushoborora",
          "Tukuhikirize ebirungi byawe"
        ]
      }
    ],
    note: "Go Before Us, Lord - A heartfelt Runyankore-Rukiga invocation often sung at the beginning of worship gatherings, asking the Holy Spirit to lead, protect, and guide.",
    tags: ["Invocation", "Holy Spirit", "Processional", "Runyankore", "Traditional", "Trinity"],
    youtubeUrl: "https://www.youtube.com/embed/8wXRvvGr6bE"
  },
  {
    number: 14,
    title: "Yesu Gwe Mugga",
    language: "Luganda",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Yesu gwe mugga ogwo bulamu,",
          "Ggukulukuta nga gguva munze,",
          "Ggugulawo ezijji ez'ekkomera,",
          "Waliwo omugga ogw'obulamu."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Yesu gwe mugga ogw'obulamu,",
          "Ogwo gumuva mu kitiibwa kyo,",
          "Gusobola okw'awonya buli muntu,",
          "Gusobola okutukuza bonna."
        ]
      },
      {
        type: "chorus",
        lines: [
          "Yesu gwe mugga, mugga ogw'obulamu,",
          "Ndi munnyo mu mazzi go, Mukama,",
          "Nzigya mu mazzi go nga nkanya,",
          "Yesu gwe mugga ogw'obulamu."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Ggwe osukka buli mugga omulala,",
          "Ggwe osukkira mu bbugumu bwa Mwoyo,",
          "Ggwe onyweza omutima ogukooye,",
          "Ggwe ow'ensulo y'obulamu obutaggwaawo."
        ]
      },
      {
        type: "bridge",
        lines: [
          "Yongera okugulukuta, Mukama,",
          "Nzijjule obulamu bwo,",
          "Yesu gwe mugga, mugga ogw'obulamu."
        ]
      }
    ],
    note: "Jesus, You Are the River - A contemporary Luganda worship hymn expressing the refreshing, cleansing, and healing presence of Christ.",
    tags: ["River of Life", "Healing", "Refreshing", "Contemporary", "Luganda"],
    youtubeUrl: "https://www.youtube.com/embed/vLfAtCbE_Jc"
  },
  {
    number: 15,
    title: "Ruhanga Akantorana",
    language: "Runyankore",
    category: "Thanksgiving",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Ruhang' akantoorana",
          "Ntaine karungi koona,",
          "Yaanyekundira wenka,",
          "Yaanyozyaho ebibi;",
          "Mbwenu nkaamarayo nta",
          "Eibanja ryangye ryona?"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Akanyih' omu kufa,",
          "Yampindur' omwana we;",
          "Yaanyih' omu bugomi,",
          "Yampindur' orikwera;",
          "Mbwenu nkaamarayo nta",
          "Eibanja ryangye ryona?"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Ku ndihik' omu iguru",
          "Njwair' okuhikiirira",
          "Okwe, kutari kwangye,",
          "Naareeb' ezo nkojo ze,",
          "Obwo nibwo ndimanya",
          "Eibanja ryangye ryona."
        ]
      }
    ],
    note: "God Loved Me - A Runyankore hymn of thanksgiving for God's redemptive love and sacrifice.",
    tags: ["Love", "Redemption", "Thanksgiving", "Runyankore", "Traditional"],
    youtubeUrl: "https://www.youtube.com/embed/xvYBg6MWphI"
  },
  {
    number: 16,
    title: "Embabazi Zawe Yesu",
    language: "Runyankore",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Yes' akangirir' embabazi",
          "Nyingi ezitakareebwaga,",
          "Obu yanfeera Gologosa,",
          "Eshagama y' ekasheesheka.",
          "Embabazi zaawe, Yesu,",
          "Tizigira bugarukiro,",
          "Nizo zinsaasiz' ebibi",
          "Habw'eshagama yaawe yonka."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Nkaba naayehweir' amatsiko",
          "Habw'okugir' ebibi bingi,",
          "Kwonk' ezo mbabazi za Yesu",
          "Zampungiz' aha musharaba."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Twijwir' amabara g'ebibi,",
          "Mbwenu n'enki ekyakugatwozya?",
          "Kurek' ekyambu ky'eshagama",
          "Twejabikyemu, haza twere."
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Tuheerwa bush' ezo mbabazi",
          "Ahabw'okwikiriza kwonka;",
          "Imw' abamwiniir' ekihika,",
          "Nimurahukye muzaakiire"
        ]
      }
    ],
    note: "Your Mercies, Jesus - A hymn celebrating the abundant mercies of Christ shown at Calvary.",
    tags: ["Mercy", "Grace", "Cross", "Calvary", "Runyankore"],
    youtubeUrl: "https://www.youtube.com/embed/KnJiC7kJfPc"
  },
  {
    number: 17,
    title: "Rukundo Ya Yesu",
    language: "Runyankore",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Rukundo ya Yesu",
          "Nikyo kyeshongoro",
          "Kyangy' ou yaakunzire",
          "Haza ntashemeire.",
          "Nyowe niiny' oha, Mukama",
          "Kunkunda, kand' akanfeera?"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Akaija' omu ns' egi",
          "Ahabw'okutujuna,",
          "Kwonka sh' itwe titwamwetamu ka buntu!",
          "Bambe, Munywani wangy' ogwo",
          "Yaafa ngu naanye nshemere!"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Bamwe baamwarira",
          "Ebijwaro byabo,",
          "Baamuhimbisa ngu, Hosan' Iwe Kristo!",
          "Hakye boona baahinduka,",
          "Bati, Mumwiheho abambwe!"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Bakeshengyereza",
          "Ngu babambe Yesu,",
          "Baashaba kuheebwa Barabb' omunyagi;",
          "Kufa ngu bo bakaakira."
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Omu magara ge",
          "Taratungire nju,",
          "Kand' ekituuro kye kyab' eky'entiizano.",
          "Ow' ekab' eri omu iguru!",
          "Owangy' eri omu kituuro!"
        ]
      },
      {
        type: "verse",
        number: 6,
        lines: [
          "Ka mbeeshongorere",
          "Eby'orwo rukundo;",
          "Kandi nintangaar' ahabw'okunkund' atyo!",
          "Yes' ogwo ni Nkunzi yangye!",
          "Ndyaguma nimmuhimbisa."
        ]
      }
    ],
    note: "The Love of Jesus - A profound Runyankore hymn reflecting on Christ's sacrificial love and the believer's response.",
    tags: ["Love of Christ", "Sacrifice", "Devotion", "Runyankore", "Traditional"],
    youtubeUrl: "https://www.youtube.com/embed/J3QvAIR8p1g"
  },
  {
    number: 18,
    title: "Yesu Tinkiri Kyegyengye",
    language: "Runyankore",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Yesu, tinkiri kyegyengye;",
          "Hati nyowe ndi owaawe;",
          "Nkaba ndi owa Sitaane,",
          "Waija, waanyeihirayo.",
          "Ndi owaawe, ndi owaawe;",
          "Yesu nyowe ndi owaawe."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Amagara gangye goona",
          "Ningakuheera kimwe;",
          "Niiw' origuma nondinda,",
          "Okampitsy' omu iguru."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Eitungo ryangye n'empiiha",
          "N'ekitiinisa kyangye,",
          "N'abanyamukago boona,",
          "Noobinkirira byona."
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Omubiri gwangye gwona",
          "N'ebigyere n'engaro,",
          "N'amagara gangye goona,",
          "Byona, byona n'ebyawe."
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Mujuni, Munyambabazi,",
          "Nyeza, nkukuratire;",
          "Nyin' enjara, nyin' eiriho,",
          "Onduhuure, Mujuni."
        ]
      }
    ],
    note: "Jesus, I Am Nothing Without You - A hymn of complete surrender and dependence on Christ.",
    tags: ["Surrender", "Dedication", "Dependence", "Runyankore", "Consecration"],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    number: 19,
    title: "Ninyeshongora",
    language: "Runyankore",
    category: "Thanksgiving",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Ninyeshongora ebyokusima omujuni",
          "Nimpimbisa ahabwebi yesu akora"
        ]
      },
      {
        type: "chorus",
        lines: [
          "Halleluyah tingira kyikyena",
          "Asiimwe kandi asiimwe"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Obyonyoreka nisiima",
          "Ebyontugisa nisiima"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Ombereire omushana ogwakira omuhanda gwangye",
          "Oooh gyenda gye"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Omukono gwawe (gumbangira)",
          "Ekigambo kyawe (kimpamya)"
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Okubaho kwawe omumeisho gangye",
          "Omubyagye byoona",
          "Oooh ndinzirwe"
        ]
      },
      {
        type: "verse",
        number: 6,
        lines: [
          "Ondindire omukubaaho kwawe wampamya",
          "(Oooooooh)"
        ]
      },
      {
        type: "verse",
        number: 7,
        lines: [
          "Tiwareeka amajuu gangye kujyega",
          "(Oooooh)"
        ]
      },
      {
        type: "verse",
        number: 8,
        lines: [
          "Tiwareeka abazigu bangye kunsheka",
          "(Nisiima)"
        ]
      }
    ],
    note: "I Give Thanks - A Runyankore song of gratitude celebrating God's faithfulness and guidance.",
    tags: ["Thanksgiving", "Gratitude", "Praise", "Runyankore", "Testimony"],
    youtubeUrl: "https://www.youtube.com/embed/8k5oXbBjxKw"
  },
  {
    number: 20,
    title: "Kangume Niiwe",
    language: "Runyankore",
    category: "Worship",
    lyrics: [
      {
        type: "chorus",
        lines: [
          "Reka ngume niiwe",
          "Oryahanshembutysa"
        ]
      },
      {
        type: "verse",
        number: 1,
        lines: [
          "Abategereza yesu tweena",
          "(Kutujwe' ke kirunga kyamagara)"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Amaisho tugahangye yesu",
          "(Owatandikire kandi ohendera)"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Okwikiriza kweitu tweena",
          "(obutagwe nshazi)"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Obulungi nembabazi zawe",
          "Nebye biiro byona"
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Amaisho gangye",
          "Gari ahariwe wenka"
        ]
      },
      {
        type: "verse",
        number: 6,
        lines: [
          "Abolinda tibatengyesebwa",
          "Aboyembembera tibaterwa nstibo",
          "Abocungura bagira obusingye"
        ]
      }
    ],
    note: "Let Me Remain In You - A Runyankore hymn about abiding in Christ and trusting His faithfulness.",
    tags: ["Faith", "Abiding", "Trust", "Runyankore", "Perseverance"],
    youtubeUrl: "https://www.youtube.com/embed/Lq8v7vDXTH4"
  },
  {
    number: 21,
    title: "Tuhimbise Omugabe",
    language: "Runyankore",
    category: "Worship",
    lyrics: [
      {
        type: "chorus",
        lines: [
          "Tuhimbise omugabe",
          "Mwije tuhimbise omugabe"
        ]
      },
      {
        type: "verse",
        number: 1,
        lines: [
          "Abaikiriza murahi",
          "Abatooreinwe murahi",
          "Mwije tuhimbise omugabe"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Abetsirwe murahi",
          "Abanyabwenje murahi",
          "Mwije tuhimbise omugabe"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Abanyamurwa murahi",
          "Enganda zoona murahi",
          "Mwije tuhimbise omugabe"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Tuhimbise omugabe",
          "(Aaaaaah)",
          "Omugabe",
          "(Eeeeeeh)",
          "Mwije tuhimbise omugabe"
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Aaaahaaa (aaaah)",
          "Eeeeeeeh (eeeeeh)",
          "Mwije tuhimbise omugabe"
        ]
      },
      {
        type: "verse",
        number: 6,
        lines: [
          "Aryahakitebekye nategeka",
          "Aryahakitebekye nategeka",
          "Aryahakitebekye nategeka",
          "Omugabe wa sayuni nategeka"
        ]
      },
      {
        type: "verse",
        number: 7,
        lines: [
          "Yesu omugabe yesu omugabe",
          "Yesu omugabe wa sayuni nategeka"
        ]
      },
      {
        type: "verse",
        number: 8,
        lines: [
          "Herodi yayenda amwite timanya",
          "Abanyabwenje bija kumuramya",
          "Omugabe"
        ]
      },
      {
        type: "verse",
        number: 9,
        lines: [
          "Abategeki b'ensi egi timanya",
          "Rufu teramubasize"
        ]
      },
      {
        type: "verse",
        number: 10,
        lines: [
          "Sitani y'ensi timanya",
          "Omugabe ayimukire"
        ]
      },
      {
        type: "verse",
        number: 11,
        lines: [
          "Aryahakitebekye nategeka",
          "Aryahakitebekye nategeka",
          "Aryahakitebekye nategeka",
          "Omugabe wa sayuni nategeka"
        ]
      }
    ],
    note: "Let Us Praise the King - A powerful Runyankore worship anthem declaring Jesus as the victorious King of Zion.",
    tags: ["Worship", "Victory", "Kingship", "Runyankore", "Resurrection"],
    youtubeUrl: "https://www.youtube.com/embed/rH8q4O2yN8M"
  },
  {
    number: 22,
    title: "Osaanide",
    language: "Luganda",
    category: "Praise",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Olimusumba wange gwenesiga",
          "Gwenesiga gwenesiga"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Olimulwanyi wange anwanila",
          "Anwanila anwanila"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Olimulwanyi wange anwanila nempangula",
          "Anwanila anwanila"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Olimusuba wange atendeka kugwa gwenesiga",
          "Gwenesiga gwenesiga"
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Olimusuba wange gwenesiga ngakoye",
          "Gwenesiga gwenesiga"
        ]
      },
      {
        type: "verse",
        number: 6,
        lines: [
          "Olimusuba wange atanjabulila",
          "Gwenesiga gwenesiga"
        ]
      },
      {
        type: "chorus",
        lines: [
          "Osaanide ekitibwa na matendo",
          "Osaanide hallelujah byona bikugwana"
        ]
      },
      {
        type: "verse",
        number: 7,
        lines: [
          "Tumutende nga ye ye ye",
          "Tumusute nga ye ye ye",
          "Tumuwane nga ye ye"
        ]
      },
      {
        type: "verse",
        number: 8,
        lines: [
          "Asana kwebaza katonda wange",
          "Ye ye"
        ]
      },
      {
        type: "verse",
        number: 9,
        lines: [
          "Tumwagale nga",
          "Ye ye"
        ]
      },
      {
        type: "verse",
        number: 10,
        lines: [
          "Asana kwebaza katonda wange",
          "Ye ye"
        ]
      },
      {
        type: "verse",
        number: 11,
        lines: [
          "Yalina amanyi agasinga",
          "Ye ye"
        ]
      }
    ],
    note: "He Deserves - A Luganda praise song declaring God as our Rock, Warrior, and worthy of all glory.",
    tags: ["Praise", "Victory", "Trust", "Luganda", "Warfare"],
    youtubeUrl: "https://www.youtube.com/embed/P7oFdnXwjRY"
  },
  {
    number: 23,
    title: "Yesu Nkaragana Naiwe",
    language: "Runyankore",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Yesu, nkaragaana naiwe",
          "Kuguma ndi owaawe,",
          "Ongume haihi obutoosha,",
          "Ai Mukama wangye."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Tinditiina ngamba zoona,",
          "Waaba nondwanaho;",
          "Kandi tindihaba muhanda,",
          "Waaba onyebembeire."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Niinyenda kuguma naiwe;",
          "Ku ndaabeihwabeihw' ensi,",
          "Yaaguma neenyetayeta",
          "Kukuhemukaho;"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Abazigu bangotsire",
          "Nibenda kuunyita;",
          "Mbwenu ninkutakira, Yesu,",
          "Ondinde batangwisa."
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Abakukuratira, Yes'",
          "Okabaraganisa",
          "Kubahitsya gy'omu iguru",
          "Owaaw' ei otuura;"
        ]
      },
      {
        type: "verse",
        number: 6,
        lines: [
          "Kandi naanye nkaikiriza",
          "Kuguma ndi owaawe;",
          "Ompwere n'embabazi zaawe,",
          "Mukama wangye Yesu."
        ]
      },
      {
        type: "verse",
        number: 7,
        lines: [
          "Ai Yesu, ompwere ngyende",
          "Omu kirari kyawe;",
          "Kandi' amaani gaawe gonka",
          "Nigo ndikwesiga."
        ]
      },
      {
        type: "verse",
        number: 8,
        lines: [
          "Gum' ompabur' omuhanda,",
          "Nkiri omuri egi nsi,",
          "Obone kumpitsy' omu iguru,",
          "Mukam' owankunzire."
        ]
      }
    ],
    note: "Jesus, I Commune With You - A Runyankore hymn expressing devotion and desire to remain in fellowship with Christ.",
    tags: ["Fellowship", "Devotion", "Abiding", "Runyankore", "Commitment"],
    youtubeUrl: "https://www.youtube.com/embed/kLnhDFxOFo8"
  },
  {
    number: 24,
    title: "Blessed Assurance",
    language: "English",
    category: "Praise",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Blessed assurance, Jesus is mine;",
          "Oh, what a foretaste of glory divine!",
          "Heir of salvation, purchase of God,",
          "Born of His Spirit, washed in His blood."
        ]
      },
      {
        type: "chorus",
        lines: [
          "This is my story, this is my song,",
          "Praising my Savior all the day long.",
          "This is my story, this is my song,",
          "Praising my Savior all the day long."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Perfect submission, perfect delight,",
          "Visions of rapture now burst on my sight;",
          "Angels descending, bring from above",
          "Echoes of mercy, whispers of love."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Perfect submission, all is at rest,",
          "I in my Savior am happy and blest;",
          "Watching and waiting, looking above,",
          "Filled with His goodness, lost in His love."
        ]
      }
    ],
    note: "Written by Fanny Crosby in 1873, this hymn celebrates the joy and assurance of salvation in Christ.",
    tags: ["Assurance", "Salvation", "Joy", "Traditional", "Testimony"],
    youtubeUrl: "https://www.youtube.com/embed/aIg8Xklv-Tg"
  },
  {
    number: 25,
    title: "As the Deer Panteth",
    language: "English",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "As the deer panteth for the water",
          "So my soul longeth after Thee",
          "You alone are my heart's desire",
          "And I long to worship Thee"
        ]
      },
      {
        type: "chorus",
        lines: [
          "You alone are my Strength, my Shield",
          "To You alone may my spirit yield",
          "You alone are my heart's desire",
          "And I long to worship Thee."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "You're my Friend and You are my Brother",
          "Even though You are a King",
          "I love You more than any other",
          "So much more than anything"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "I want You more than gold or silver",
          "Only You can satisfy",
          "You alone are the real joy-giver",
          "And the apple of my eye"
        ]
      }
    ],
    note: "Based on Psalm 42:1, a contemporary worship song expressing deep longing and devotion to God.",
    tags: ["Longing", "Devotion", "Worship", "Psalm", "Contemporary"],
    youtubeUrl: "https://www.youtube.com/embed/YteoedRdWUI"
  },
  {
    number: 26,
    title: "Count Your Blessings",
    language: "English",
    category: "Thanksgiving",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "When upon life's billows you are tempest tossed,",
          "When you are discouraged, thinking all is lost,",
          "Count your many blessings name them one by one,",
          "And it will surprise you what the Lord hath done."
        ]
      },
      {
        type: "chorus",
        lines: [
          "Count your blessings, name them one by one;",
          "Count your blessings, see what God hath done;",
          "Count your blessings, name them one by one,",
          "And it will surprise you what the Lord hath done."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Are you ever burdened with a load of care?",
          "Does the cross seem heavy you are called to bear?",
          "Count your many blessings, every doubt will fly,",
          "And you will be singing as the days go by."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "When you look at others with their lands and gold,",
          "Think that Christ has promised you His wealth untold.",
          "Count your many blessings, money cannot buy",
          "Your reward in heaven, nor your Lord on high."
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "So amid the conflict, whether great or small,",
          "Do not be discouraged, God is over all;",
          "Count your many blessings, angels will attend,",
          "Help and comfort give you to your journey's end."
        ]
      }
    ],
    note: "Written by Johnson Oatman Jr. in 1897, this hymn encourages believers to focus on God's blessings during difficult times.",
    tags: ["Thanksgiving", "Encouragement", "Blessings", "Traditional", "Hope"],
    youtubeUrl: "https://www.youtube.com/embed/OKj45tT_V_0"
  },
  {
    number: 27,
    title: "Nsanyukira",
    language: "Luganda",
    category: "Praise",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Nsanyukira ekigambo kino;",
          "Yesu Mukama atwagala nnyo,",
          "Alina ebingi ebisanyusa;",
          "Naye ekisiinga nti, \"nze nkwagala.\""
        ]
      },
      {
        type: "chorus",
        lines: [
          "Anjagala, ye anjagala;",
          "Nga kitalo (O) kunjagala!",
          "Anjagala, olw'ekisa kye,",
          "Nange era mwagala."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Bwemba nnyonona",
          "Nemmwerabira,",
          "Yesu tandeka kubula ddala;",
          "Ampita mangu okumweyuna Ye",
          "Er(a) anjijukiz(a)",
          "Okwagala kwe."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Bwe nditunuulira",
          "Ekitiibwa kyo,",
          "Ndiyimba ntya",
          "Bwe siyimba bwentyo?",
          "Nnyimba emirembe",
          "n'emirembe;",
          "Yesu kiki ekyakunjagaza nze?"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "Anjagala nange mmwagala Ye,",
          "Yakka mu nsi",
          "Olw'okwagala kwe;",
          "(O)kwagala kwamuleeta",
          "Ku muti,",
          "Yesu atwagala ffe bwagazi"
        ]
      }
    ],
    note: "I Rejoice - A Luganda hymn celebrating Jesus' love and expressing mutual love between Christ and believers.",
    tags: ["Love", "Joy", "Jesus", "Luganda", "Devotion"],
    youtubeUrl: "https://www.youtube.com/embed/xJQF5xD3XYg"
  },
  {
    number: 28,
    title: "In Christ Alone",
    language: "English",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "In Christ alone, my hope is found",
          "He is my light, my strength, my song",
          "This Cornerstone, this solid ground",
          "Firm through the fiercest drought and storm",
          "What heights of love, what depths of peace",
          "When fears are stilled, when strivings cease",
          "My Comforter, my All in All",
          "Here in the love of Christ I stand"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "In Christ alone, who took on flesh",
          "Fullness of God in helpless babe",
          "This gift of love and righteousness",
          "Scorned by the ones He came to save",
          "'Til on that cross as Jesus died",
          "The wrath of God was satisfied",
          "For every sin on Him was laid",
          "Here in the death of Christ I live, I live"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "There in the ground His body lay",
          "Light of the world by darkness slain",
          "Then bursting forth in glorious Day",
          "Up from the grave He rose again",
          "And as He stands in victory",
          "Sin's curse has lost its grip on me",
          "For I am His and He is mine",
          "Bought with the precious blood of Christ"
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "No guilt in life, no fear in death",
          "This is the power of Christ in me",
          "From life's first cry to final breath",
          "Jesus commands my destiny",
          "No power of hell, no scheme of man",
          "Can ever pluck me from His hand",
          "Till He returns or calls me home",
          "Here in the power of Christ I'll stand"
        ]
      }
    ],
    note: "A powerful hymn declaring Christ as the foundation of faith, from incarnation through resurrection to final victory.",
    tags: ["Christ", "Foundation", "Resurrection", "Victory", "Atonement"],
    youtubeUrl: "https://www.youtube.com/embed/16KXaq87ou4"
  },
  {
    number: 29,
    title: "Here is Love",
    language: "English",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Here is love vast as the ocean,",
          "Loving-kindness as the flood,",
          "When the Prince of Life, our ransom,",
          "Shed for us His precious blood.",
          "Who His love will not remember?",
          "Who can cease to sing His praise?",
          "He can never be forgotten",
          "Throughout heav'n's eternal days."
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "On the Mount of Crucifixion,",
          "Fountains opened deep and wide;",
          "Through the flood-gates of God's mercy",
          "Flowed a vast and gracious tide.",
          "Grace and love like mighty rivers",
          "Poured incessant from above;",
          "Heaven's peace and perfect justice",
          "Kissed a guilty world in love."
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Here is love that conquered evil:",
          "Christ, the firstborn from the grave;",
          "Death has failed to be found equal",
          "To the life of Him Who saves.",
          "In the valley of our darkness",
          "Dawned His everlasting light;",
          "Perfect love in glorious radiance",
          "Has repelled death's hellish night."
        ]
      },
      {
        type: "verse",
        number: 4,
        lines: [
          "That same love beyond all measure,",
          "Mocked and slain by hateful men,",
          "Lives and reigns in resurrection",
          "And can never die again.",
          "Here is love for all the ages,",
          "Radiant Sun of Heav'n He stands,",
          "Calling home His Father's children,",
          "Holding forth His wounded hands."
        ]
      },
      {
        type: "verse",
        number: 5,
        lines: [
          "Here is love, vast as the heavens;",
          "Countless as the stars above",
          "Are the souls that He has ransomed,",
          "Precious daughters, treasured sons.",
          "We are called to feast forever on a love beyond our time;",
          "Glorious Father, Son, and Spirit",
          "Now with man are intertwined."
        ]
      }
    ],
    note: "A Welsh hymn celebrating the vast, immeasurable love of God demonstrated through Christ's sacrifice and resurrection.",
    tags: ["Love", "Sacrifice", "Cross", "Welsh", "Resurrection"],
    youtubeUrl: "https://www.youtube.com/embed/Ln81AJ9eakg"
  },
  {
    number: 30,
    title: "Wonderful Merciful Savior",
    language: "English",
    category: "Worship",
    lyrics: [
      {
        type: "verse",
        number: 1,
        lines: [
          "Wonderful, merciful Savior",
          "Precious Redeemer and Friend",
          "Who would have thought that a Lamb",
          "Could rescue the souls of men",
          "Oh, You rescue the souls of men"
        ]
      },
      {
        type: "verse",
        number: 2,
        lines: [
          "Counselor, Comforter, Keeper",
          "Spirit we long to embrace",
          "You offer hope when our hearts have",
          "Hopelessly lost our way",
          "Oh, we've hopelessly lost the way"
        ]
      },
      {
        type: "chorus",
        lines: [
          "You are the One that we praise",
          "You are the One we adore",
          "You give the healing and grace",
          "Our hearts always hunger for",
          "Oh, our hearts always hunger for"
        ]
      },
      {
        type: "verse",
        number: 3,
        lines: [
          "Almighty, infinite Father",
          "Faithfully loving Your own",
          "Here in our weakness You find us",
          "Falling before Your throne",
          "Oh, we're falling before Your throne"
        ]
      }
    ],
    note: "A worship hymn celebrating the many attributes of God - Savior, Redeemer, Counselor, Comforter, and Father.",
    tags: ["Worship", "Attributes of God", "Mercy", "Grace", "Adoration"],
    youtubeUrl: "https://www.youtube.com/embed/FUPcXRo_RCc"
  }
];

// Helper function to get hymn by number
export function getHymnByNumber(number: number): Hymn | undefined {
  return hymnsDatabase.find(hymn => hymn.number === number);
}

// Helper function to search hymns
export function searchHymns(query: string): Hymn[] {
  const lowercaseQuery = query.toLowerCase();
  return hymnsDatabase.filter(hymn => 
    hymn.title.toLowerCase().includes(lowercaseQuery) ||
    hymn.lyrics.some(section => 
      section.lines.some(line => line.toLowerCase().includes(lowercaseQuery))
    ) ||
    hymn.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Helper function to filter hymns by language
export function filterByLanguage(language: string): Hymn[] {
  return hymnsDatabase.filter(hymn => hymn.language === language);
}

// Helper function to filter hymns by category
export function filterByCategory(category: string): Hymn[] {
  return hymnsDatabase.filter(hymn => hymn.category === category);
}
