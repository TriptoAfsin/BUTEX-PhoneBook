let database = [
  {
    name: "Prof. Dr. Nargish Jahan Ara",
    contact: "+8801552404762",
    faculty: "Faculty of Science & Engineering(Chemistry)",
    terms: "nargis chemistry madam",
  },
  {
    name: "Khatoon-E-Zannat",
    contact: "8801963843312",
    faculty: "Faculty of Science & Engineering (Administrative Officer)",
    terms: "office admin",
  },
  {
    name: "Md. Asaduz-Zaman",
    // contact: "+8801916545148",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "asad eee",
  },
  {
    name: "Prof. Dr. Shaikh Md. Mominul Alam",
    // contact: "+8801713171365",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "tmdm momin tmdm",
  },
  {
    name: "A.N.M. Bazlur Rashid",
    // contact: "+8801712617264",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "bajlur tmdm",
  },
  {
    name: "Md. Mafizul Islam",
    // contact: "+8801673552198",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "mofij mofiz tmdm eee",
  },
  {
    name: "Tanjheel Hasan Mahdi",
    // contact: "+8801675465156",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "tanjil tangil tmdm mechanical mp",
  },
  {
    name: "Anupom Mondol",
    // contact: "+8801719308577",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "onupom tmdm cp programming AM",
  },
  {
    name: "Ariful Haque Ashik",
    // contact: "+8801743184840",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "ashik asik ashiq tmdm yarn machine AHA",
  },
  {
    name: "Md. Golam Kibria",
    // contact: "+8801787870678",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "tmdm",
  },
  {
    name: "Tarik Reza Toha",
    // contact: "+8801517902913",
    contact: "Removed on Request",
    faculty: "Faculty of Science & Engineering, Dept. of TMDM",
    terms: "tmdm cp TRT",
  },
  {
    name: "Md. Nurul Islam Miah",
    contact: "+8801819212275",
    faculty:
      "Faculty of Science & Engineering, Electrical Lab(Technical Officer)",
    terms: "eee lab",
  },
  {
    name: "Mohammad Alauddin",
    contact: "+8801731488206",
    faculty:
      "Faculty of Science & Engineering, Computer Lab(Technical Officer)",
    terms: "lab",
  },
  {
    name: "Dr. Abu Mohammad Azmal Morshed",
    contact: "+8801674643058",
    faculty: "Faculty of Science & Engineering, (Chemistry)",
    terms: "chemistry ajmol azmol",
  },
  {
    name: "Mohammad Farhadur Rahman",
    contact: "+8801687413408",
    faculty: "Faculty of Science & Engineering, (Chemistry)",
    terms: "chemistry forhad",
  },
  {
    name: "Farzana Yesmin",
    contact: "+8801937126127",
    faculty: "Faculty of Science & Engineering, (Chemistry)",
    terms: "farjana chemistry",
  },
  {
    name: "Sadia Salsabil Bristy",
    contact: "+8801795112913",
    faculty: "Faculty of Science & Engineering, (Chemistry)",
    terms: "bristy chemistry ssb",
  },
  {
    name: "Md. Jahangir Hossain",
    contact: "+8801915089677",
    faculty: "Faculty of Science & Engineering, (Chemistry lab)",
    terms: "chemistry",
  },
  {
    name: "Md. Ataur Rahman",
    contact: "+8801911760812",
    faculty: "Faculty of Science & Engineering, (Chemistry lab)",
    terms: "chemistry technical",
  },
  {
    name: "Tanu Shree Roy",
    contact: "+8801734645996",
    faculty: "Faculty of Science & Engineering,(Physics)(Hasina Hall Provost)",
    terms: "physics tonusree tanusree tonushree tonu TSR provost",
  },
  {
    name: "Dr. Hasina Akhter",
    contact: "+8801552358130",
    faculty: "Faculty of Science & Engineering,(Physics)",
    terms: "physics Dr.HA",
  },
  {
    name: "Md. Hedayet Ullah",
    contact: "+8801816111561",
    faculty: "Faculty of Science & Engineering,(Physics)",
    terms: "physics MHU",
  },
  {
    name: "M.S. Zobaer",
    contact: "+8801743786486",
    faculty: "Faculty of Science & Engineering,(Physics)",
    terms: "jubayer physics MSZ",
  },
  {
    name: "Md. Harun-Or-Rashid",
    contact: "+8801717156042",
    faculty: "Faculty of Science & Engineering,(Physics)",
    terms: "harun physics HOR",
  },
  {
    name: "Lincoln Paik",
    contact: "+8801521576509",
    faculty: "Faculty of Science & Engineering,(Physics)",
    terms: "linkon lingkon physics LP",
  },
  {
    name: "Md. Zakaria Rahman",
    contact: "+8801721899773",
    faculty: "Faculty of Science & Engineering,(Physics Lab)",
    terms: "lab technical",
  },
  {
    name: "Md. Abdur Razzak",
    contact: "+8801712008629",
    faculty: "Faculty of Science & Engineering,(Physics Lab)",
    terms: "lab technical",
  },
  {
    name: "Md. Rukonuzzaman",
    contact: "+8801835566194",
    faculty: "Faculty of Science & Engineering,(Mathematics)",
    terms: "rokon rokun math",
  },
  {
    name: "Anup Kumar Datta",
    contact: "+8801680039213",
    faculty: "Faculty of Science & Engineering,(Mathematics)",
    terms: "onup math",
  },
  {
    name: "Marzia Yesmin",
    contact: "+8801534105955",
    faculty: "Faculty of Science & Engineering,(Mathematics)",
    terms: "marjia math margia",
  },
  {
    name: "Ahbab Md. Fazle Rabbi",
    contact: "+8801712842420",
    faculty: "Faculty of Science & Engineering,(Mathematics & Stat)",
    terms: "stat math FR",
  },
  {
    name: "Md. Mawsarul Islam",
    contact: "+8801674618044",
    faculty: "Faculty of Science & Engineering,(Mathematics & Stat)",
    terms: "stat math MMI",
  },
  {
    name: "Md. Anowar Hossain",
    contact: "+8801719296229",
    faculty: "Faculty of Science & Engineering,(Mathematics & Stat)",
    terms: "stat math MAH",
  },
  {
    name: "Md. Kawserul Islam",
    contact: "+8801674618044",
    faculty: "Faculty of Science & Engineering,(Mathematics & Stat)",
    terms: "stat math MKI",
  },
  {
    name: "Prof.Dr.Shah Alimuzzaman",
    contact: "+8801715769607",
    faculty: "Faculty of Textile Eng.",
    terms: "alim",
  },
  {
    name: "Khatoon -E-Zannat",
    contact: "+8801963843312",
    faculty: "Faculty of Textile Eng.(Admin Officer)",
    terms: "admin",
  },
  {
    name: "Prof.Dr.Hosne Ara Begum",
    contact: "+8801821490355",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "HAB",
  },
  {
    name: "S.M Farhana Iqbal",
    contact: "+8801711784619",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "SMFI",
  },
  {
    name: "S.M Farhana Iqbal",
    contact: "+8801711784619",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "SMFI",
  },
  {
    name: "Sharif Ahmed",
    contact: "+8801677755760",
    faculty: "Faculty of Textile Eng.(Yarn)(SA Hall Provost)",
    terms: "SA shorif aziz provost",
  },
  {
    name: "Taufiqua Sidiqua",
    contact: "+8801923609060",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "TS toufiqa toufika",
  },
  {
    name: "Dr.Ahmed Zalal Uddin",
    contact: "+8801716451225",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "Dr. AZU jalal ttqc tp",
  },
  {
    name: "Md.Masum Reza",
    contact: "+8801705184876",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "MMR",
  },
  {
    name: "Md.Rubel Khan",
    contact: "+8801991071876",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "MRK",
  },
  {
    name: "Mohammad Farhad Mahmud Chowdhury",
    contact: "+8801719101699",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "MFMC forhad",
  },
  {
    name: "Md.Bashar Uddin",
    contact: "+8801684132207",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "MBU basar ntf",
  },
  {
    name: "Samara Islam Nishi",
    contact: "+8801761198699",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "nisi SIN",
  },
  {
    name: "Samara Islam Nishi",
    contact: "+8801761198699",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "nisi SIN",
  },
  {
    name: "Tanima Rahman Tanni",
    contact: "+8801902449635",
    faculty: "Faculty of Textile Eng.(Yarn)",
    terms: "TRT tonima",
  },
  {
    name: "Abdul Barek Mia",
    contact: "+8801716063087",
    faculty: "Faculty of Textile Eng.(Yarn Lab)",
    terms: "lab",
  },
  {
    name: "Md. Omar Faruk Bhuiyan",
    contact: "+8801716815784",
    faculty: "Faculty of Textile Eng.(Yarn Lab)",
    terms: "lab",
  },
  {
    name: "Md. Tufail Hossain Khan",
    contact: "+8801938078232",
    faculty: "Faculty of Textile Eng.(Jute Lab)",
    terms: "lab",
  },
  {
    name: "Prof Dr. Shah Alimuzzaman",
    contact: "+8801715769607",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "alim",
  },
  {
    name: "Shilpi Akhter",
    contact: "+8801711376763",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "silpi",
  },
  {
    name: "Prof. Engr. Mashud Ahmed",
    contact: "+8801718235559",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "masud",
  },
  {
    name: "Dewan Murshed Ahmed",
    contact: "+8801746433992",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "morshed",
  },
  {
    name: "A K.M Ashiqur Rahman Mazumder",
    contact: "+8801710965518",
    faculty: "Faculty of Textile Eng.(Fabric)(Osmani Hall Provost)",
    terms: "ashik provost",
  },
  {
    name: "Md. Faisal Abedin",
    contact: "+8801670529372",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "foysal foisal MFA",
  },
  {
    name: "Md. Abdullah Al Mamun",
    contact: "+8801916076216",
    faculty: "Faculty of Textile Eng.(Fabric)(Osmani Hall Provost(Asst.))",
    terms: "MAAM provost",
  },
  {
    name: "Md. Aswad Al Haque Sarkar",
    contact: "+8801722552784",
    faculty: "Faculty of Textile Eng.(Fabric)(Nazrul Hall Provost)",
    terms: "MAAHS provost",
  },
  {
    name: "Md Jawed Ibn Amin",
    contact: "+8801939877307",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "fabric MJIA jawad zawad",
  },
  {
    name: "A.N.M. Masudur Rahman",
    contact: "+8801553342607",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "fabric masud",
  },
  {
    name: "Faisal Ahmed",
    contact: "+8801720167907",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "foysal",
  },
  {
    name: "Md. Mohaddesh Hosen",
    contact: "+8801761025664",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "mohaddes MMH",
  },
  {
    name: "Shamima Akter Smriti",
    contact: "+8801683032609",
    faculty: "Faculty of Textile Eng.(Fabric)",
    terms: "SAS sriti smrity",
  },
  {
    name: "Engr M.M.AminuI Ikram",
    contact: "+8801916271861",
    faculty: "Faculty of Textile Eng.(Knitting Lab)",
    terms: "lab knit",
  },
  {
    name: "Md. Khorshed Alam",
    contact: "+8801717238163",
    faculty: "Faculty of Textile Eng.(Fabric Lab)",
    terms: "lab",
  },
  {
    name: "Prof. Dr. Sharfun Nahar Arju",
    contact: "+8801746247058",
    faculty: "Faculty of Textile Chemicals Eng.",
    terms: "",
  },
  {
    name: "Md. Faruq Hossain",
    contact: "+8801718916991",
    faculty: "Faculty of Textile Chemicals Eng.(Section Officer)",
    terms: "faruk",
  },
  {
    name: "Prof. Dr. Md.Zulhash Uddin",
    contact: "+8801819250719",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "zulhash julhash proctor",
  },
  {
    name: "Kawser Parveen Chowdhury",
    contact: "+8801716167777",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "KPC",
  },
  {
    name: "Rasheda Begum Dina",
    contact: "+8801913518137",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "RBD",
  },
  {
    name: "Dr. Shekh Md. Mamun Kabir",
    contact: "+8801918422394",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "DR. SMMK",
  },
  {
    name: "Md. Shakirul Islam",
    contact: "+8801711128232",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "piash MSI",
  },
  {
    name: "Md. Rashedul Islam",
    contact: "+8801914224399",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "rased MRI",
  },
  {
    name: "Mst. Tania Akter",
    contact: "+8801721338106",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "MTA",
  },
  {
    name: "Rifat Jahan",
    contact: "+8801878790055",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "RJ",
  },
  {
    name: "Solaiman Bin Ali",
    contact: "+8801798744954",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "SBA",
  },
  {
    name: "Md. Motakabbir Hasan Tomal",
    contact: "+8801727651408",
    faculty: "Faculty of Textile Chemicals Eng.(WPE)",
    terms: "MMHT",
  },
  {
    name: "Md. Hossain Shahid Shrwardi",
    contact: "+8801818881178",
    faculty: "Faculty of Textile Chemicals Eng.(WPE lab)",
    terms: "lab",
  },
  {
    name: "Md. Younus Ali",
    contact: "+8801714539127",
    faculty: "Faculty of Textile Chemicals Eng.(WPE lab)",
    terms: "lab",
  },
  {
    name: "Md. Babul Akhtar",
    contact: "+8801716582576",
    faculty: "Faculty of Textile Chemicals Eng.(WPE lab)",
    terms: "lab",
  },
  {
    name: "Prof. Dr. Mohd. Forhad Hossain",
    contact: "+8801714322070",
    faculty: "Faculty of Textile Chemicals Eng.(DCE)",
    terms: "farhad",
  },
  {
    name: "Dr. Mohammad Abbas Uddin Shiyak",
    contact: "+8801952918323",
    faculty: "Faculty of Textile Chemicals Eng.(DCE)",
    terms: "shayek shaek sayek",
  },
  {
    name: "Mustafijur Rahman",
    contact: "+8801913061184",
    faculty: "Faculty of Textile Chemicals Eng.(DCE)",
    terms: "mostafiz MR",
  },
  {
    name: "Dr. Ummul Khair Fatema",
    contact: "+8801714412369",
    faculty: "Faculty of Textile Chemicals Eng.(ESE)",
    terms: "fatima Dr. UKF",
  },
  {
    name: "Shuvo Brahma",
    contact: "+8801733767475",
    faculty: "Faculty of Textile Chemicals Eng.(ESE)",
    terms: "SB",
  },
  {
    name: "Humayra Akhter Himu",
    contact: "+8801674060667",
    faculty: "Faculty of Textile Chemicals Eng.(ESE)",
    terms: "HAH",
  },
  {
    name: "Prof. Dr. Mohammad Ali",
    contact: "+8801711260521",
    faculty: "Faculty of Textile Management & Business Studies",
    terms: "Dr. MA",
  },
  {
    name: "Khatoon-E-Zannat",
    contact: "+8801963843312",
    faculty: "Faculty of Textile Management & Business Studies(Admin)",
    terms: "admin",
  },
  {
    name: "Prof. Md. Monirul Islam",
    contact: "+8801715066387",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "registor register",
  },
  {
    name: "Mohammad Shayekh Munir",
    contact: "+8801715679333",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MSM",
  },
  {
    name: "Md. Masum",
    contact: "+8801532519810",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MM",
  },
  {
    name: "Md. Nurun Nabi",
    contact: "+8801762489317",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MNN nobi",
  },
  {
    name: "Md. Arif Iqbal",
    contact: "+8801717987379",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MAI",
  },
  {
    name: "Marzia Dulal",
    contact: "+8801622607026",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MD",
  },
  {
    name: "Ahsan Habib",
    contact: "+8801937342074",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "AH",
  },
  {
    name: "Md. Hasan Sheikh",
    contact: "+8801830631569",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MHS",
  },
  {
    name: "Farzana Sakila",
    contact: "+8801670653995",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "FS farjana",
  },
  {
    name: "Maeen Md. Khairul Akter",
    contact: "+8801780369736",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MMKA",
  },
  {
    name: "Md. Rezaul Karim",
    contact: "+8801706081234",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MRK",
  },
  {
    name: "Asma Ansary Asha",
    contact: "+8801725624982",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "AAA",
  },
  {
    name: "Ayesha Shiddika Emu",
    contact: "+8801926738203",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "ASE",
  },
  {
    name: "Md. Golam Shrower Rayhan",
    contact: "+8801675184548",
    faculty: "Faculty of Textile Management & Business Studies(TEM)",
    terms: "MGSR",
  },
  {
    name: "Md. Abu Sayeed Biswas",
    contact: "+8801931167374",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "MASB",
  },
  {
    name: "Salima Sultana Shimo",
    contact: "+8801713506721",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "SSS simo shimu",
  },
  {
    name: "Dr. Rafiqur Rashid",
    contact: "+8801717122408",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "Dr. RR rafik rofik",
  },
  {
    name: "Md. Mamunur Rashid",
    contact: "+8801916150778",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "MMR ipe mamun",
  },
  {
    name: "Md. Ahsan Ahmed",
    contact: "+8801717126031",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "MAA",
  },
  {
    name: "Rashid Anzoom",
    contact: "+8801937592543",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "RA",
  },
  {
    name: "Sourav Kumar Ghosh",
    contact: "+8801521253404",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "SKG ipe sourov",
  },
  {
    name: "Farhatul Janan",
    contact: "+8801799205535",
    faculty: "Faculty of Textile Management & Business Studies(IPE)",
    terms: "FJ ipe jenan",
  },
  {
    name: "Sarmin Akhter",
    contact: "+8801716384336",
    faculty: "Faculty of Textile Management & Business Studies(Mechanical Lab)",
    terms: "IPE sharmin",
  },
  {
    name: "Dilara Hossain",
    contact: "+8801718164012",
    faculty:
      "Faculty of Textile Management & Business Studies(Humanities & Social Science)",
    terms: "DH HSS",
  },
  {
    name: "Shahid Md. Adnan",
    contact: "+8801717064028",
    faculty:
      "Faculty of Textile Management & Business Studies(Humanities & Social Science)",
    terms: "english bce SMA HSS",
  },
  {
    name: "Tania Akhter Ite",
    contact: "+8801682262535",
    faculty:
      "Faculty of Textile Management & Business Studies(Humanities & Social Science)",
    terms: "iti economics HSS",
  },
  {
    name: "Md. Salah Uddin",
    contact: "+8801722669736",
    faculty:
      "Faculty of Textile Management & Business Studies(Humanities & Social Science)",
    terms: "MSU bce english HSS",
  },
  {
    name: "Shamima Akter Rozy",
    contact: "+8801750886728",
    faculty:
      "Faculty of Textile Management & Business Studies(Humanities & Social Science)",
    terms: "SAR sociology",
  },
  {
    name: "Ruhul Amin Vai",
    contact: "+8801923536968",
    faculty: "Staff",
    terms: "rohol staff",
  },
  {
    name: "Babul Vai",
    contact: "+8801720172506",
    faculty: "Staff(Mechanical Lab)",
    terms: "msp lab staff",
  },
  {
    name: "Prof. Md. Abul Kashem",
    contact: "+8801816851849",
    faculty: "Faculty of Fashion Design & Apparel Eng. (VC Sir)",
    terms: "VC apparel1",
  },
  {
    name: "Prof. Md. Mashiur Rahman Khan",
    contact: "+8801782440486",
    faculty: "Faculty of Fashion Design & Apparel Eng. ",
    terms: "MMRK apparel1",
  },
  {
    name: "Hossain Mohammad Akbar",
    contact: "+8801843591495",
    faculty: "Faculty of Fashion Design & Apparel Eng.(Section Officer)",
    terms: "admin apparel1",
  },
  {
    name: "Adnan Maroof Khan",
    contact: "+8801671438336",
    faculty: "Faculty of Fashion Design & Apparel Eng. (AE)",
    terms: "AMK apparel1",
  },
  {
    name: "Farzana Rahman",
    contact: "+8801716189364",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "FR apparel1",
  },
  {
    name: "Jesmin Nahar Kamona",
    contact: "+8801571796757",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "JNK apparel1",
  },
  {
    name: "Md. Kamrul Hasan Chowdhury",
    contact: "+8801915580677",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "MKHC apparel1",
  },
  {
    name: "Upama Nasrin Haq",
    contact: "+8801792795686",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "UNH apparel1 upoma",
  },
  {
    name: "Smita Rani Debnath",
    contact: "+8801679008410",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "SRD apparel1",
  },
  {
    name: "Nurunnesa Orpa",
    contact: "+8801764679560",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "NNO apparel1 arpa am1",
  },
  {
    name: "Sazid Elahi",
    contact: "+8801521203475",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "SE apparel1 apparel sajid am1",
  },
  {
    name: "Shah Md. Maruf Hasan",
    contact: "+8801728750234",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "SMMH apparel1",
  },
  {
    name: "Mst. Farzana Sultana",
    contact: "+8801793162202",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE)",
    terms: "MFS apparel1",
  },
  {
    name: "Palash Chandra Nath",
    contact: "+8801552484264",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE Lab)",
    terms: "lab apparel1",
  },
  {
    name: "Md. Abu Sayed",
    contact: "+8801521432502",
    faculty: "Faculty of Fashion Design & Apparel Eng.(AE Lab)",
    terms: "lab apparel1",
  },
  {
    name: "Sutapa Chowdhury",
    contact: "+8801715865515",
    faculty: "Faculty of Fashion Design & Apparel Eng.(TFD)",
    terms: "tfd shutapa",
  },
  {
    name: "Md. Mahmudul Hasan",
    contact: "+8801918974162",
    faculty: "Faculty of Fashion Design & Apparel Eng.(TFD)",
    terms: "tfd MMH",
  },
  {
    name: "Md. Kamrul Hasan",
    contact: "+8801723652024",
    faculty: "Faculty of Fashion Design & Apparel Eng.(TFD)",
    terms: "tfd MKH",
  },
  {
    name: "Mozahida Akhter",
    contact: "+8801818981506",
    faculty: "Faculty of Fashion Design & Apparel Eng.(TFD)",
    terms: "tfd MA",
  },
  {
    name: "Naila Sharin Kanta",
    contact: "+8801681097933",
    faculty: "Faculty of Fashion Design & Apparel Eng.(TFD)",
    terms: "tfd NSK",
  },
  {
    name: "Bristi Sarker",
    contact: "+8801790889839",
    faculty: "Faculty of Fashion Design & Apparel Eng.(TFD)",
    terms: "tfd BS brishti brishty",
  },
  {
    name: "Kabari Majumder",
    contact: "+8801832363335",
    faculty: "Academic Section",
    terms: "kaberi office",
  },
  {
    name: "Dr. Md. Abul Ishaque",
    contact: "+8801711981046",
    faculty: "Medical officer",
    terms: "doctor",
  },
  {
    name: "Dr. Bonna Biswas",
    contact: "+8801992012020",
    faculty: "Medical officer",
    terms: "doctor",
  },
  {
    name: "Afshin Nahian Tripto",
    contact: "+8801936396220",
    faculty: "CR IPE-44",
    terms: "ipe44 CR ipe 44",
  },
  {
    name: "Mehedi Bhuiyan Sakib",
    contact: "+8801871513363",
    faculty: "CR IPE-44",
    terms: "ipe44 CR ipe 44",
  },
  {
    name: "Abir Mohammad Sadi",
    contact: "+8801753926399",
    faculty: "CR TEM-44",
    terms: "tem44 TEM 44",
  },
  {
    name: "Nadim Mahmud",
    contact: "+8801759674245",
    faculty: "CR TEM-44",
    terms: "tem44 TEM 44",
  },
  {
    name: "SABBIR OSMANI ",
    contact: "+8801864314011",
    faculty: "CR WPE-44",
    terms: "WPE44 WPE 44 bus bunon",
  },
  {
    name: "Ryhad",
    contact: "+8801956423857",
    faculty: "Bunon Bus Batch-43",
    terms: "bus bunon",
  },
  {
    name: "Robin",
    contact: "+8801521330084",
    faculty: "Chorka Bus Batch-42",
    terms: "bus chorka",
  },
  {
    name: "Shovon",
    contact: "+8801521332173",
    faculty: "Tontu Bus Batch-42",
    terms: "bus tontu",
  },
  {
    name: "Biplob",
    contact: "+8801521439362",
    faculty: "Tontu Bus Batch-42",
    terms: "bus tontu",
  },
  {
    name: "Md.Mujibul Haque Opu",
    contact: "+8801638395260",
    faculty: "CR YE-44",
    terms: "ye44 CR YE 44",
  },
  {
    name: "Shafi Bin Faisal",
    contact: "+8801790602558",
    faculty: "CR YE-44",
    terms: "ye44 CR YE 44",
  },
  {
    name: "Fahmida Akter Tisha",
    contact: "+8801642472935",
    faculty: "CR DCE-44",
    terms: "DCE44 CR YE 44",
  },
  {
    name: "Fahim Khan Bappy",
    contact: "+8801521560308",
    faculty: "CR DCE-44",
    terms: "DCE44 CR YE 44",
  },
  {
    name: "S.M.Zohayer Akhter.(Priym)",
    contact: "+8801675020974",
    faculty: "CR TEM-45",
    terms: "tem45 CR TEM 45",
  },
  {
    name: "Ahsan Kabir Joy",
    contact: "+8801864621915",
    faculty: "CR TEM-45",
    terms: "tem45 CR TEM 45",
  },
  {
    name: "Md.Sakib Ahmed Rajib ",
    contact: "+8801724428595",
    faculty: "CR TEM-45",
    terms: "tem45 CR TEM 45",
  },
  {
    name: "Asif Iqbal",
    contact: "+8801772234574",
    faculty: "CR CR IPE-45",
    terms: "ipe45 IPE 45",
  },
  {
    name: "MD. Mahmudul Huq Talukder",
    contact: "+8801632886593",
    faculty: "CR CR IPE-45",
    terms: "ipe45 IPE 45",
  },
  {
    name: "Amirul Islam Sheam",
    contact: "+8801860489860",
    faculty: "CR AE-45",
    terms: "AE45 CR AE 45",
  },
  {
    name: "Mohammad Saiful Islam ",
    contact: "+8801733046277",
    faculty: "CR FE-45",
    terms: "FE45 CR FE 45",
  },
  {
    name: "Minhajul Islam",
    contact: "+8801751911992",
    faculty: "CR TMDM-45",
    terms: "TMDM45 CR TMDM 45",
  },
  {
    name: "Enamul Muyeed Latifi ",
    contact: "+8801951434528",
    faculty: "CR ESE-45",
    terms: "ESE45 CR ESE 45",
  },
  {
    name: "Robayet Al Hamim",
    contact: "+8801987860015",
    faculty: "CR YE-45",
    terms: "YE45 CR YE 45",
  },
  {
    name: "Safi Ahmed",
    contact: "+8801302441968",
    faculty: "CR FE-45",
    terms: "FE45 CR FE 45",
  },
  {
    name: "Shoaib Ahmed Shimul",
    contact: "+8801829774680",
    faculty: "CR WPE-45",
    terms: "WPE45 CR WPE 45",
  },
  {
    name: "Rizwan Khan Shishir",
    contact: "+8801880880489",
    faculty: "CR AE-45",
    terms: "AE45 CR YE 45",
  },
  {
    name: "Atiquzzaman Sazal",
    contact: "+8801889383537",
    faculty: "CR DCE-45",
    terms: "DCE45 CR DCE 45",
  },
  {
    name: "S. A. S Mehshan-UL-Islam",
    contact: "+8801757498885",
    faculty: "CR TMDM-45",
    terms: "TMDM45 CR TMDM 45",
  },
  {
    name: "Hasib Hossain",
    contact: "+8801930089131",
    faculty: "CR WPE-43",
    terms: "WPE43 CR WPE 43",
  },
  {
    name: "MD EMUM HOSSAIN MOLLA",
    contact: "+8801521429301",
    faculty: "CR YE-43",
    terms: "YE43 CR YE 43",
  },
  {
    name: "Yeamin",
    contact: "+8801521428857",
    faculty: "CR FE-43",
    terms: "FE43 CR FE 43",
  },
  {
    name: "Md Tanvir Hasan Meraz",
    contact: "+8801787541473",
    faculty: "CR WPE-43",
    terms: "WPE43 CR WPE 43 bus ovijatrik",
  },
  {
    name: "Nafis Azad",
    contact: "+8801995864607",
    faculty: "CR DCE-43",
    terms: "DCE43 CR DCE 43",
  },
  {
    name: "Mahi Nuzzaman",
    contact: "+8801521433901",
    faculty: "CR TEM-43",
    terms: "TEM43 CR TEM 43",
  },
  {
    name: "Tawsif Adnan",
    contact: "+8801978188230",
    faculty: "CR TMDM-43",
    terms: "TMDM43 CR TMDM 43",
  },
  {
    name: "Reshawat Hossain",
    contact: "+8801645485000",
    faculty: "CR IPE-43",
    terms: "IPE43 CR IPE 43",
  },
  {
    name: "Md. Delwar Hossain",
    contact: "+8801630364940",
    faculty: "CR FE-44",
    terms: "FE44 CR FE 44",
  },
  {
    name: "Tonmoy Sarkar",
    contact: "+8801876896973",
    faculty: "CR FE-44",
    terms: "FE44 CR FE 44",
  },
  {
    name: "Saidul Islam",
    contact: "+8801876279164",
    faculty: "CR FE-44",
    terms: "FE44 CR FE 44",
  },
  {
    name: "Md. Anowar Hossain Romman",
    contact: "+8801710388448",
    faculty: "CR TEM-44",
    terms: "TEM44 CR TEM 44",
  },
  {
    name: "Fazle Rabbe",
    contact: "+8801709035279",
    faculty: "CR TEM-43",
    terms: "TEM43 CR TEM 43 management cr TEM cr",
  },
  {
    name: "MD FOYEZ MAHMUD",
    contact: "+8801536137065",
    faculty: "CR YE-43",
    terms: "YE43 CR YE 43 yarn cr YE cr",
  },
  {
    name: "Md Zakaria Bin Hossain",
    contact: "+8801531948883",
    faculty: "CR AE-44",
    terms: "AE44 CR AE 44 apparel cr aparel cr",
  },
  {
    name: "Shahid Hosne Rabbi Zihan",
    contact: "+8801706293035",
    faculty: "CR TFD-44",
    terms: "TFD44 CR TFD 44 Fashion cr TFD cr",
  },
  {
    name: "Shariful Islam Akash",
    contact: "+8801521566529",
    faculty: "CR TFD-45",
    terms: "TFD45 CR TFD 45 Fashion cr TFD cr",
  },
  {
    name: "Md. Mehedi Hasan",
    contact: "+8801795529664",
    faculty: "CR AE-44",
    terms: "AE44 CR AE 44 apparel cr aparel cr",
  },
  {
    name: "Dewan Kawser Shuvo",
    contact: "+8801631908195",
    faculty: "CR AE-43",
    terms: "AE43 CR AE 43 apparel cr aparel cr",
  },
  {
    name: "Istiaque Ahammed Joy",
    contact: "+8801745118617",
    faculty: "CR TMDM-44",
    terms: "TMDM44 CR TMDM 44 TMDM cr TMDM cr",
  },
  {
    name: "Nasaya Haider",
    contact: "+8801303397253",
    faculty: "CR TMDM-44",
    terms: "TMDM44 CR TMDM 44 TMDM cr TMDM cr",
  },
  {
    name: "Iftekhar Morshed Arafat",
    contact: "+8801303336506",
    faculty: "CR TMDM-43",
    terms: "TMDM43 CR TMDM 43 TMDM cr TMDM cr",
  },
  {
    name: "S.M.Alvi Salman",
    contact: "+8801638368031",
    faculty: "CR WPE-46",
    terms: "WPE46 CR WPE 46 Wet cr WPE cr",
  },
  {
    name: "Prokash Kumar Das ",
    contact: "+8801761434725",
    faculty: "CR WPE-46",
    terms: "WPE46 CR WPE 46 Wet cr WPE cr",
  },
  {
    name: "Shadman",
    contact: "+8801631735866",
    faculty: "CR WPE-46",
    terms: "WPE46 CR WPE 46 Wet cr WPE cr",
  },
  {
    name: "Zumana Tasnin",
    contact: "+8801632828301",
    faculty: "CR YE-46",
    terms: "YE46 CR YE 46 Yarn cr YE cr",
  },
  {
    name: "Md. Rafiqul  Islam",
    contact: "+8801828830078",
    faculty: "CR YE-46",
    terms: "YE46 CR YE 46 Yarn cr YE cr",
  },
  {
    name: "Mhamudul Islam Mhafuz",
    contact: "+8801911661876",
    faculty: "CR YE-46",
    terms: "YE46 CR YE 46 Yarn cr YE cr",
  },
  {
    name: "F M Sazzad Hossain",
    contact: "+8801777222330",
    faculty: "CR FE-46",
    terms: "FE46 CR FE 46 Fabric cr FE cr",
  },
  {
    name: "Hafizur Sabbir",
    contact: "+8801521202735",
    faculty: "CR FE-46",
    terms: "FE46 CR FE 46 Fabric cr FE cr",
  },
  {
    name: "PULOCK DATTA",
    contact: "+8801552458921",
    faculty: "CR FE-46",
    terms: "FE46 CR FE 46 Fabric cr FE cr",
  },
  {
    name: "MD Niamuzzaman Sun",
    contact: "+8801789644278",
    faculty: "CR AE-46",
    terms: "AE46 CR AE 46 Apparel cr AE cr",
  },
  {
    name: "Md Atiqur Rahman",
    contact: "+8801968471374",
    faculty: "CR AE-46",
    terms: "AE46 CR AE 46 Apparel cr AE cr",
  },
  {
    name: "Anan Sarker Fiza",
    contact: "+8801840258724",
    faculty: "CR AE-46",
    terms: "AE46 CR AE 46 Apparel cr AE cr",
  },
  {
    name: "Borhan Uddin Khan",
    contact: "+8801634018376",
    faculty: "CR AE-46",
    terms: "AE46 CR AE 46 Apparel cr AE cr",
  },
  {
    name: "Rajesh Majumder",
    contact: "+8801312349877",
    faculty: "CR ESE-46",
    terms: "ESE46 CR ESE 46 Environment cr ESE cr",
  },
  {
    name: "Rasuliya Rayan Salin",
    contact: "+8801406567427",
    faculty: "CR ESE-46",
    terms: "ESE46 CR ESE 46 Environment cr ESE cr",
  },
  {
    name: "Afif Islam Sajid",
    contact: "+8801743766119",
    faculty: "CR TEM-46",
    terms: "TEM46 CR TEM 46 Management cr TEM cr",
  },
  {
    name: "Mariya Islam Bhuiyan Nidhe",
    contact: "+8801517812014",
    faculty: "CR TEM-46",
    terms: "TEM46 CR TEM 46 Management cr TEM cr",
  },
  {
    name: "Md. Nahid Hasan Talukder",
    contact: "+8801678033596",
    faculty: "CR TEM-46",
    terms: "TEM46 CR TEM 46 Management cr TEM cr",
  },
  {
    name: "Md Abdur Rof Torun",
    contact: "+8801712625888",
    faculty: "CR TFD-46",
    terms: "TFD46 CR TFD 46 Fashion cr TFD cr",
  },
  {
    name: "Gulshan Ara Tasnim ",
    contact: "+8801728011850",
    faculty: "CR TFD-46",
    terms: "TFD46 CR TFD 46 Fashion cr TFD cr",
  },
  {
    name: "Minhajul Islam Shakib",
    contact: "+8801730233078",
    faculty: "CR DCE-46",
    terms: "DCE46 CR DCE 46 Dyes cr DCE cr",
  },
  {
    name: "Alfayed Akash",
    contact: "+8801705379036",
    faculty: "CR TMDM-46",
    terms: "TMDM46 CR TMDM 46 Machine cr TMDM cr",
  },
  {
    name: "Rahil Hasan",
    contact: "+8801882541561",
    faculty: "CR TMDM-46",
    terms: "TMDM46 CR TMDM 46 Machine cr TMDM cr",
  },
  {
    name: "Mahin safa",
    contact: "+8801638113370",
    faculty: "CR TMDM-46",
    terms: "TMDM46 CR TMDM 46 Machine cr TMDM cr",
  },
  {
    name: "M K Hasan Rabby",
    contact: "+8801734489197",
    faculty: "CR IPE-46",
    terms: "IPE46 CR IPE 46 Production cr IPE cr",
  },
  {
    name: "Nafis Sarwar Khan",
    contact: "+8801883440500",
    faculty: "CR IPE-46",
    terms: "IPE46 CR IPE 46 Production cr IPE cr",
  },
];

window.onload = function () {
  const search = document.getElementById("search");
  const matchList = document.getElementById("list");
  let books;

  document.getElementById("database").innerHTML = database.length + " Contacts";
  registerSW(); //pwa service register function

  //this function searches the booklist
  const searchBooks = async searchText => {
    books = database;
    //get matches
    let matches = books.filter(book => {
      const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
      return (
        book.name.match(regex) ||
        book.faculty.match(regex) ||
        book.terms.match(regex) ||
        book.contact.match(regex)
      );
    });

    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = "";
    }

    outputHtml(matches);

    console.log(matches);
  };

  //show results in html

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches
        .map(
          match => `
        <div class="card">
        <p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br>
        <p><a href="tel:${match.contact}" id="url">${match.contact}</a></p><br>
        </div>
        `
        )
        .join("");
      console.log(html);
      document.getElementById("suggestion").style.display = "none";
      document.getElementById("emergency").style.display = "none";
      matchList.innerHTML = html;
    } else {
      matchList.innerHTML = null;
      document.getElementById("suggestion").style.display = "inline-block";
      document.getElementById("emergency").style.display = "inline-block";
    }
  };

  window.addEventListener("DOMContentLoaded", searchBooks);
  search.addEventListener("keyup", () => searchBooks(search.value));
  console.log(database.length);
};

//books

function displayBooks() {
  var search = document.getElementById("book-display-list").value;
  const matchList = document.getElementById("book-display");
  let books;
  console.log(search);

  //this function searches the booklist
  const searchBooks = async searchText => {
    books = database;
    //get matches
    let matches = books.filter(book => {
      const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
      return book.faculty.match(regex) || book.terms.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = "";
    }

    outputHtml(matches);

    console.log(matches);
  };

  //show results in html

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches
        .map(
          match => `
        <div class="card">
        <p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br>
        <p><a href="tel:${match.contact}" id="url">${match.contact}</a></p><br>
        </div>
        `
        )
        .join("");
      console.log(html);

      matchList.innerHTML = html;
    } else {
      matchList.innerHTML = null;
    }
  };

  window.addEventListener("DOMContentLoaded", searchBooks);
  searchBooks(search);
}

function displayCR() {
  var batch = document.getElementById("batch-display-list").value;
  if (batch === "batch45") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
            <option value="">Select Department</option>
              <option value="ye45">YE</option>
              <option value="FE45">FE</option>
              <option value="WPE45">WPE</option>
              <option value="AE45">AE</option>
              <option value="tem45">TEM</option>
              <option value="tfd45">TFD</option>
              <option value="ipe45">IPE</option>
              <option value="dce45">DCE</option>
              <option value="tmdm45">TMDM</option>
              <option value="ESE45">ESE</option>
            </select>`;
  } else if (batch === "batch46") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
          <option value="">Select Department</option>
            <option value="ye46">YE</option>
            <option value="FE46">FE</option>
            <option value="WPE46">WPE</option>
            <option value="AE46">AE</option>
            <option value="tem46">TEM</option>
            <option value="tfd46">TFD</option>
            <option value="ipe46">IPE</option>
            <option value="dce46">DCE</option>
            <option value="tmdm46">TMDM</option>
            <option value="ESE46">ESE</option>
          </select>`;
  } else if (batch == "batch44") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
            <option value="">Select Department</option>
              <option value="ye44">YE</option>
              <option value="FE44">FE</option>
              <option value="WPE44">WPE</option>
              <option value="AE44">AE</option>
              <option value="tem44">TEM</option>
              <option value="tfd44">TFD</option>
              <option value="ipe44">IPE</option>
              <option value="dce44">DCE</option>
              <option value="tmdm44">TMDM</option>
            </select>`;
  } else if (batch == "batch43") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
            <option value="">Select Department</option>
              <option value="ye43">YE</option>
              <option value="FE43">FE</option>
              <option value="WPE43">WPE</option>
              <option value="AE43">AE</option>
              <option value="tem43">TEM</option>
              <option value="tfd43">TFD</option>
              <option value="ipe43">IPE</option>
              <option value="dce43">DCE</option>
              <option value="tmdm43">TMDM</option>
            </select>`;
  }
}

//cr

function showCR() {
  console.log("Show Cr Called");
  var search = document.getElementById("cr-display-list").value;
  const matchList = document.getElementById("book-display");
  let books;
  console.log(search);

  //this function searches the booklist
  const searchBooks = async searchText => {
    books = database;
    //get matches
    let matches = books.filter(book => {
      const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
      return book.faculty.match(regex) || book.terms.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = "";
    }

    outputHtml(matches);
    console.log(matches);
  };

  //show results in html

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches
        .map(
          match => `
<div class="card">
<p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br>
<p><a href="tel:${match.contact}" id="url">${match.contact}</a></p><br>
</div>
`
        )
        .join("");
      console.log(html);

      matchList.innerHTML = html;
    } else {
      matchList.innerHTML = null;
    }
  };

  window.addEventListener("DOMContentLoaded", searchBooks);
  searchBooks(search);
}

//bus

function displayCR() {
  var batch = document.getElementById("batch-display-list").value;
  if (batch == "batch45") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
        <option value="ye45">YE</option>
        <option value="FE45">FE</option>
        <option value="WPE45">WPE</option>
        <option value="AE45">AE</option>
        <option value="tem45">TEM</option>
        <option value="tfd45">TFD</option>
        <option value="ipe45">IPE</option>
        <option value="dce45">DCE</option>
        <option value="tmdm45">TMDM</option>
        <option value="ESE45">ESE</option>
      </select>`;
  } 
  else if (batch == "batch44") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
        <option value="ye44">YE</option>
        <option value="FE44">FE</option>
        <option value="WPE44">WPE</option>
        <option value="AE44">AE</option>
        <option value="tem44">TEM</option>
        <option value="tfd44">TFD</option>
        <option value="ipe44">IPE</option>
        <option value="dce44">DCE</option>
        <option value="tmdm44">TMDM</option>
      </select>`;
  } 

  else if (batch == "batch46") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
      <option value="YE46">YE</option>
      <option value="FE46">FE</option>
      <option value="WPE46">WPE</option>
      <option value="AE46">AE</option>
      <option value="TEM46">TEM</option>
      <option value="TFD46">TFD</option>
      <option value="IPE46">IPE</option>
      <option value="DCE46">DCE</option>
      <option value="TMDM46">TMDM</option>
      <option value="ESE46">ESE</option>
      </select>`;
  } 
  
  else if (batch == "batch43") {
    document.getElementById(
      "cr-holder"
    ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
        <option value="ye43">YE</option>
        <option value="FE43">FE</option>
        <option value="WPE43">WPE</option>
        <option value="AE43">AE</option>
        <option value="tem43">TEM</option>
        <option value="tfd43">TFD</option>
        <option value="ipe43">IPE</option>
        <option value="dce43">DCE</option>
        <option value="tmdm43">TMDM</option>
      </select>`;
  }
}

//cr

function showCR() {
  console.log("Show Cr Called");
  var search = document.getElementById("cr-display-list").value;
  const matchList = document.getElementById("book-display");
  let books;
  console.log(search);

  //this function searches the booklist
  const searchBooks = async searchText => {
    books = database;
    //get matches
    let matches = books.filter(book => {
      const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
      return book.faculty.match(regex) || book.terms.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = "";
    }

    outputHtml(matches);
    console.log(matches);
  };

  //show results in html

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches
        .map(
          match => `
  <div class="card">
  <p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br>
  <p><a href="tel:${match.contact}" id="url">${match.contact}</a></p><br>
  </div>
  `
        )
        .join("");
      console.log(html);

      matchList.innerHTML = html;
    } else {
      matchList.innerHTML = null;
    }
  };

  window.addEventListener("DOMContentLoaded", searchBooks);
  searchBooks(search);
}

//bus

function showBus() {
  console.log("Show Bus Called");
  var search = document.getElementById("batch-display-list").value;
  const matchList = document.getElementById("book-display");
  let books;
  console.log(search);

  //this function searches the booklist
  const searchBooks = async searchText => {
    books = database;
    //get matches
    let matches = books.filter(book => {
      const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
      return book.faculty.match(regex) || book.terms.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = "";
    }

    outputHtml(matches);
    console.log(matches);
  };

  //show results in html

  const outputHtml = matches => {
    if (matches.length > 0) {
      const html = matches
        .map(
          match => `
  <div class="card">
  <p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br>
  <p><a href="tel:${match.contact}" id="url">${match.contact}</a></p><br>
  </div>
  `
        )
        .join("");
      console.log(html);

      matchList.innerHTML = html;
    } else {
      matchList.innerHTML = null;
    }
  };

  window.addEventListener("DOMContentLoaded", searchBooks);
  searchBooks(search);
}

//code for PWA

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.log("Service worker registration failed");
    }
  }
}
