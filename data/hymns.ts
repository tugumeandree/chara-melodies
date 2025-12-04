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
