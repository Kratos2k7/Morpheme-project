
export const fontApiKey = "AIzaSyBEtcajDi8t77hD6TKWdebtw3ZAOy6PgIM"


export const morphemes = [
  {
    morpheme: "فَعَلَ",
    meaning: "to do",
  },
  {
    morpheme: "فَعَّلَ",
    meaning:
      "the doer does the verb frequently or does the action with someone else",
  },
  {
    morpheme: "فَاعَلَ",
    meaning:
      "to share between two, since the subject does something with the object and the object does the same with the subject",
  },
  {
    morpheme: "أَفْعَلَ",
    meaning: "",
  },
  {
    morpheme: "تَفَعَّلَ",
    meaning: " it tends to have a passive or reflexive meaning.",
  },
  {
    morpheme: "تَفَاعَلَ",
    meaning: " it tends to have a reflexive or reciprocal meaning. ",
  },
  {
    morpheme: "اِنْفَعَلَ",
    meaning: "it tends to have a reflexive or passive meaning. ",
  },
  {
    morpheme: "اِفْتَعَلَ",
    meaning: " It often has a reflexive or passive meaning,",
  },
  {
    morpheme: "اِفْعَلَّ",
    meaning:
      "occurs with a few verbs that describe color and physical defects, ",
  },
  {
    morpheme: "اسْتَفْعَلَ",
    meaning: "often have a meaning related to requesting or seeking something",
  },
  {
    morpheme: "Broken Plurals",
    meaning: "",
  },
 
];

export const pronouns = [
  {
    key: 0,
    pronoun: "-",
    meaning: "-",
  },
  {
    key: 1,
    pronoun: "-",
    meaning: "-",
  },
  {
    key: 2,
    pronoun: "أنا",
    meaning: "I (m)",
  },
  {
    key: 3,
    pronoun: "نَحْنُ",
    meaning: "we (m)",
  },
  {
    key: 4,
    pronoun: "أنْتَ",
    meaning: "you (m)",
  },
  {
    key: 5,
    pronoun: "أنْتِ",
    meaning: "You (f)",
  },
  {
    key: 6,
    pronoun: "أنْتُما",
    meaning: "You (2m)",
  },
  {
    key: 7,
    pronoun: "أنْتُما",
    meaning: "You (2f)",
  },
  {
    key: 8,
    pronoun: "أنْتُم",
    meaning: "You (pm)",
  },
  {
    key: 9,
    pronoun: "أنْتُنَّ",
    meaning: "you(pf)",
  },
  {
    key:10,
    pronoun: "هُوَ",
    meaning: "he",
  },
  {
    key: 11,
    pronoun: "هِيَ",
    meaning: "she",
  },
  {
    key: 12,
    pronoun: "هُمَا",
    meaning: "they(2m)",
  },
  {
    key: 13,
    pronoun: "هُما",
    meaning: "they(2f)",
  },
  {
    key: 14,
    pronoun: "هُمْ",
    meaning: "they(pm)",
  },
  {
    key: 15,
    pronoun: "هُنَّ",
    meaning: "they(pf)",
  },
];

export const groups = [
  {
    key: 1,
    group: "List of morpheme Verbs",
    subMainGroup: [
      {
        key: 1,
        subMainGroupName: "Active",
        subGroup: [
          {
            key: 1,
            subGroupName: "Past",
            MainWords: [
              {
                key: 1,
                heading: "past",
                words: [
                  {
                    word: "هَدَى",
                    morpheme: "فَعَلَ",
                  },
                  {
                    word: "هَدَيْتُ",
                    pronoun:1,
                    morpheme: "فَعَلتُ",
                  },
                  {
                    word: "هَدَيْنَا",
                    ref:true,
                    pronoun:2,
                    morpheme: "فَعَلْنَا",
                  },
                  {
                    word: "هَدَيْتَ",
                    pronoun:3,
                    morpheme: "فَعَلْتَ",
                  },
                  {
                    word: "هَدَيْتِ",
                    pronoun:4,
                    morpheme: "فَعَلْتِ",
                  },
                  {
                    word: "هَدَيْتُمَا",
                    pronoun:5,
                    morpheme: "فَعَلْتُما",
                  },
                  {
                    word: "هَدَيْتُمَا",
                    pronoun:6,
                    morpheme: "فَعَلْتُما",
                  },
                  {
                    word: "هَدَيْتُم",
                    pronoun:7,
                    morpheme: "فَعَلْتُمْ",
                  },
                  {
                    word: "هَدَيْتُنَّ",
                    pronoun:8,
                    morpheme: "فَعَلْتُنَّ",
                  },
                  {
                    word: "هَدَى",
                    ref:true,
                    pronoun:9,
                    morpheme: "فَعَلَ",
                  },
                  {
                    word: "هَدَتْ",
                    pronoun:10,
                    morpheme: "فَعَلَتْ",
                  },
                  {
                    word: "هَدَيَا",
                    pronoun:11,
                    morpheme: "فَعَلَا",
                  },
                  {
                    word: "هَدَتَا",
                    pronoun:12,
                    morpheme: "فَعَلَتَا",
                  },
                  {
                    word: "هَدَوْا",
                    pronoun:13,
                    morpheme: "فَعَلُوا",
                  },
                  {
                    word: "هَدَيْنَ",
                    pronoun:14,
                    morpheme: "فَعَلْنَ",
                  },
                ],
              },
              {
                key: 2,
                heading: "conj past",
                words: [
                  {
                    word: "فَهَدَى",
                    morpheme: "فَفَعَلَ",
                  },
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "فَفَعَلتُ",
                  },
                  {
                    word: "",
                    pronoun:2,
                    morpheme: "فَفَعَلْنَا",
                  },
                  {
                    word: "",
                    pronoun:3,
                    morpheme: "فَفَعَلْتَ",
                  },
                  {
                    word: "",
                    pronoun:4,
                    morpheme: "فَفَعَلْتِ",
                  },
                  {
                    word: "",
                    pronoun:5,
                    morpheme: "فَفَعَلْتُما",
                  },
                  {
                    word: "",
                    pronoun:6,
                    morpheme: "فَفَعَلْتُما",
                  },
                  {
                    word: "",
                    pronoun:7,
                    morpheme: "فَفَعَلْتُمْ",
                  },
                  {
                    word: "",
                    pronoun:8,
                    morpheme: "فَفَعَلْتُنَّ",
                  },
                  {
                    word: "فَهَدَى",
                    ref:true,
                    pronoun:9,
                    morpheme: "فَفَعَلَ",
                  },
                  {
                    word: "",
                    pronoun:10,
                    morpheme: "فَفَعَلَتْ",
                  },
                  {
                    word: "",
                    pronoun:11,
                    morpheme: "فَفَعَلَا",
                  },
                  {
                    word: "",
                    pronoun:12,
                    morpheme: "فَفَعَلَتَا",
                  },
                  {
                    word: "",
                    pronoun:13,
                    morpheme: "فَفَعَلُوا",
                  },
                  {
                    word: "",
                    pronoun:14,
                    morpheme: "فَفَعَلْنَ",
                  },
                ],
              },
              {
                key: 3,
                heading: "ماض pronoun (هـُ)",
                words: [
                  {
                    word: "",
                    morpheme: "فَعَلَهُ",
                  },
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "فَعَلتُهُ ",
                  },
                  {
                    word: "",
                    pronoun:2,
                    morpheme: "فَعَلْنَاهُ ",
                  },
                  {
                    word: "",
                    pronoun:3,
                    morpheme: "فَعَلْتَهُ ",
                  },
                  {
                    word: "",
                    pronoun:4,
                    morpheme: "فَعَلْتِيه ",
                  },
                  {
                    word: "",
                    pronoun:5,
                    morpheme: "فَعَلْتُماهُ ",
                  },
                  {
                    word: "",
                    pronoun:6,
                    morpheme: "فَعَلْتُماهُ ",
                  },
                  {
                    word: "",
                    pronoun:7,
                    morpheme: "فَعَلْتُمُوهُ ",
                  },
                  {
                    word: "",
                    pronoun:8,
                    morpheme: "فَعَلْتُنَّهُ ",
                  },
                  {
                    word: "",
                    pronoun:9,
                    morpheme: "فَعَلَهُ ",
                  },
                  {
                    word: "",
                    pronoun:10,
                    morpheme: "فَعَلَتْهُ ",
                  },
                  {
                    word: "",
                    pronoun:11,
                    morpheme: "فَعَلَاهُ ",
                  },
                  {
                    word: "",
                    pronoun:12,
                    morpheme: "فَعَلَتَاهُ ",
                  },
                  {
                    word: "",
                    pronoun:13,
                    morpheme: "فَعَلُوهُ ",
                  },
                  {
                    word: "",
                    pronoun:14,
                    morpheme: "فَعَلْنَهُ ",
                  },
                ],
              },
              {
                key: 4,
                heading: "ماض pronoun (هُمْ)",
                words: [
                  {
                    word: "",
                    morpheme: "فَعَلَ",
                  },
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "فَعَلتُهُمْ ",
                  },
                  {
                    word: "هَدَيْنَاهُمْ",
                    ref:true,
                    pronoun:2,
                    morpheme: "فَعَلْنَاهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:3,
                    morpheme: "فَعَلْتَهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:4,
                    morpheme: "فَعَلْتِيهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:5,
                    morpheme: "فَعَلْتُماهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:6,
                    morpheme: "فَعَلْتُماهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:7,
                    morpheme: "فَعَلْتُمُوهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:8,
                    morpheme: "فَعَلْتُنَّهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:9,
                    morpheme: "فَعَلَهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:10,
                    morpheme: "فَعَلَتْهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:11,
                    morpheme: "فَعَلَاهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:12,
                    morpheme: "فَعَلَتَاهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:13,
                    morpheme: "فَعَلُوهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:14,
                    morpheme: "فَعَلْنَهُمْ ",
                  },
                ],
              },
              {
                key: 5,
                heading:
                  " ماض pronoun (هُمْ)",
                words: [
                  {
                    word: "",
                    morpheme: "وَلَفَعَلَ",
                  },
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "وَلَفَعَلتُهُمْ ",
                  },
                  {
                    word: "وَلَهَدَيْنَاهُمْ",
                    ref:true,
                    pronoun:2,
                    morpheme: "وَلَفَعَلْنَاهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:3,
                    morpheme: "وَلَفَعَلْتَهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:4,
                    morpheme: "وَلَفَعَلْتِيهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:5,
                    morpheme: "وَلَفَعَلْتُماهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:6,
                    morpheme: "وَلَفَعَلْتُماهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:7,
                    morpheme: "وَلَفَعَلْتُمُوهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:8,
                    morpheme: "وَلَفَعَلْتُنَّهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:9,
                    morpheme: "وَلَفَعَلَهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:10,
                    morpheme: "وَلَفَعَلَتْهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:11,
                    morpheme: "وَلَفَعَلَاهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:12,
                    morpheme: "وَلَفَعَلَتَاهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:13,
                    morpheme: "وَلَفَعَلُوهُمْ ",
                  },
                  {
                    word: "",
                    pronoun:14,
                    morpheme: "وَلَفَعَلْنَهُمْ ",
                  },
                ],
              },
              {
                key: 6,
                heading: "ماض pronoun (نَاْ)",
                words: [
                  {
                    word: "هَدَانَا",
                    morpheme: "فَعَلَنَا",
                  },
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "",
                  },
                  {
                    word: "هَدَيْتَنَا",
                    ref:true,
                    pronoun:2,
                    morpheme: "فَعَلْتَنَا ",
                  },
                  {
                    word: "هَدَيْتِيْنَا",
                    pronoun:3,
                    morpheme: "فَعَلْتِينَا ",
                  },
                  {
                    word: "هَدَيْتُمَانَا",
                    pronoun:4,
                    morpheme: "فَعَلْتُمَانَا ",
                  },
                  {
                    word: "هَدَيْتُمَانَا",
                    pronoun:5,
                    morpheme: "فَعَلْتُمَانَا ",
                  },
                  {
                    word: "هَدَيْتُمُونَا",
                    pronoun:6,
                    morpheme: "فَعَلْتُمُونَا ",
                  },
                  {
                    word: "هَدَيْتُنَّنَا",
                    pronoun:7,
                    morpheme: "فَعَلْتُنَّنَا ",
                  },
                  {
                    word: "هَدَانَا",
                    pronoun:8,
                    morpheme: "فَعَلَنَا ",
                  },
                  {
                    word: "هَدَتْنَا",
                    pronoun:9,
                    morpheme: "فَعَلَتْنَا ",
                  },
                  {
                    word: "هَدَيَانَا",
                    ref:true,
                    pronoun:10,
                    morpheme: "فَعَلَانَا ",
                  },
                  {
                    word: "هَدَتَنَا",
                    pronoun:11,
                    morpheme: "فَعَلَتَانَا ",
                  },
                  {
                    word: "هَدَوْنَا",
                    pronoun:12,
                    morpheme: "فَعَلُونَا ",
                  },
                  {
                    word: "هَدَيْنَنَا",
                    pronoun:13,
                    morpheme: "فَعَلْنَنَا ",
                  },
                  {
                    word: "",
                    pronoun:14,
                    morpheme: "",
                  },
                ],
              },
              {
                key: 7,
                heading: "ماض pronoun (كُمْ)",
                words: [
                  {
                    word: "هَدَاكُمْ",
                    morpheme: "فَعَلَكُمْ",
                  },
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "فَعَلْتُكُمْ ",
                  },
                  {
                    word: "",
                    pronoun:2,
                    morpheme: "فَعَلْنَاكُم ",
                  },
                  {
                    word: "",
                    pronoun:3,
                    morpheme: "",
                  },
                  {
                    word: "",
                    pronoun:4,
                    morpheme: "",
                  },
                  {
                    word: "",
                    pronoun:5,
                    morpheme: "",
                  },
                  {
                    word: "",
                    pronoun:6,
                    morpheme: "",
                  },
                  {
                    word: "",
                    pronoun:7,
                    morpheme: "",
                  },
                  {
                    word: "",
                    pronoun:8,
                    morpheme: "",
                  },
                  {
                    word: "هَدَاكُمْ",
                    ref:true,
                    pronoun:9,
                    morpheme: "فَعَلَكُمْ ",
                  },
                  {
                    word: "هَدَتْكُمْ",
                    pronoun:10,
                    morpheme: "فَعَلَتْكُمْ ",
                  },
                  {
                    word: "هَدَيَاكُمْ",
                    pronoun:11,
                    morpheme: "فَعَلَاكُمْ ",
                  },
                  {
                    word: "هَدَتَكُمْ",
                    pronoun:12,
                    morpheme: "فَعَلَتَاكُمْ ",
                  },
                  {
                    word: "هَدَوْكُمْ",
                    pronoun:13,
                    morpheme: "فَعَلُوكُمْ ",
                  },
                  {
                    word: "هَدَيْنَكُمْ",
                    pronoun:14,
                    morpheme: "فَعَلْنَكُمْ ",
                  },
                ],
              },
            ],
          },
          {
            key: 2,
            subGroupName: "Present",
            MainWords: [
              {
                key: 1,
                heading: "past",
                words: [
                  {
                    word: "هَدَى",
                    pronoun:1,
                    morpheme: "فَعَلَ",
                  },
                  {
                    word: "هَدَيْتُ",
                    morpheme: "فَعَلتُ",
                  },
                  {
                    word: "هَدَيْنَا",
                    ref:true,
                    morpheme: "فَعَلْنَا",
                  },
                  {
                    word: "هَدَيْتَ",
                    morpheme: "فَعَلْتَ",
                  },
                  {
                    word: "هَدَيْتِ",
                    morpheme: "فَعَلْتِ",
                  },
                  {
                    word: "هَدَيْتُمَا",
                    morpheme: "فَعَلْتُما",
                  },
                  {
                    word: "هَدَيْتُمَا",
                    morpheme: "فَعَلْتُما",
                  },
                  {
                    word: "هَدَيْتُم",
                    morpheme: "فَعَلْتُمْ",
                  },
                  {
                    word: "هَدَيْتُنَّ",
                    morpheme: "فَعَلْتُنَّ",
                  },
                  {
                    word: "هَدَى",
                    ref:true,
                    morpheme: "فَعَلَ",
                  },
                  {
                    word: "هَدَتْ",
                    morpheme: "فَعَلَتْ",
                  },
                  {
                    word: "هَدَيَا",
                    morpheme: "فَعَلَا",
                  },
                  {
                    word: "هَدَتَا",
                    morpheme: "فَعَلَتَا",
                  },
                  {
                    word: "هَدَوْا",
                    morpheme: "فَعَلُوا",
                  },
                  {
                    word: "هَدَيْنَ",
                    morpheme: "فَعَلْنَ",
                  },
                ],
              },
              {
                key: 2,
                heading: "conj past",
                words: [
                  {
                    word: "فَهَدَى",
                    pronoun:1,
                    morpheme: "فَفَعَلَ",
                  },
                  {
                    word: "",
                    morpheme: "",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلتُ",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْنَا",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْتَ",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْتِ",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْتُما",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْتُما",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْتُمْ",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْتُنَّ",
                  },
                  {
                    word: "فَهَدَى",
                    ref:true,
                    morpheme: "فَفَعَلَ",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلَتْ",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلَا",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلَتَا",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلُوا",
                  },
                  {
                    word: "",
                    morpheme: "فَفَعَلْنَ",
                  },
                ],
              },
              {
                key: 3,
                heading: "ماض pronoun (هـُ)",
                words: [
                  {
                    word: "",
                    pronoun:1,
                    morpheme: "فَعَلَهُ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلتُهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْنَاهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْتَهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْتِيه ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْتُماهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْتُماهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْتُمُوهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْتُنَّهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلَهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلَتْهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلَاهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلَتَاهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلُوهُ ",
                  },
                  {
                    word: "",
                    morpheme: "فَعَلْنَهُ ",
                  },
                  {
                    word: "",
                    morpheme: "",
                  },
                ],
              },
              
            ],
          },
          {
            key: 3,
            subGroupName: "مُضَارِعْ مَجْزُوم",
          },
        ],
      },
      {
        key: 2,
        subMainGroupName: "imparative",
        subGroup: [
            {
              key: 1,
              subGroupName: "Group 1",
            },
          ],
      },
      {
        key: 3,
        subMainGroupName: "passive",
        subGroup: [
            {
              key: 2,
              subGroupName: "Group 1",
            },
           
          ],
      },
    ],
  },
];

export const customFontList = [
  "Arial",
  "Helvetica Neue",
  "Romanesco",
  "Courier New",
  "Verdana",
  "Georgia",
  "Palatino Linotype",
  "Impact",
  "Comic Sans MS",
  "Tahoma",
  "Calibri",
  "Arial Arabic",
  "Amiri Quran",
  "Noto Naskh Arabic",
  "noorehuda",

];

export const arabicAlphabet = [
  { letter: 'إِ', transliteration: 'alif' },
  { letter: 'أ', transliteration: 'alif' },
  { letter: 'ا', transliteration: 'alif' },
  { letter: 'ب', transliteration: 'baa' },
  { letter: 'ت', transliteration: 'taa' },
  { letter: 'ث', transliteration: 'thaa' },
  { letter: 'ج', transliteration: 'jim' },
  { letter: 'ح', transliteration: 'hhaa' },
  { letter: 'خ', transliteration: 'khaa' },
  { letter: 'د', transliteration: 'daal' },
  { letter: 'ذ', transliteration: 'dhaal' },
  { letter: 'ر', transliteration: 'raa' },
  { letter: 'ز', transliteration: 'zaa' },
  { letter: 'س', transliteration: 'seen' },
  { letter: 'ش', transliteration: 'sheen' },
  { letter: 'ص', transliteration: 'saad' },
  { letter: 'ض', transliteration: 'daad' },
  { letter: 'ط', transliteration: 'taa' },
  { letter: 'ظ', transliteration: 'zaa' },
  { letter: 'ع', transliteration: 'ain' },
  { letter: 'غ', transliteration: 'ghain' },
  { letter: 'ف', transliteration: 'faa' },
  { letter: 'ق', transliteration: 'qaf' },
  { letter: 'ك', transliteration: 'kaf' },
  { letter: 'ل', transliteration: 'laam' },
  { letter: 'م', transliteration: 'meem' },
  { letter: 'ن', transliteration: 'noon' },
  { letter: 'ه', transliteration: 'haa' },
  { letter: 'و', transliteration: 'waw' },
  { letter: 'ي', transliteration: 'yaa' }
];
