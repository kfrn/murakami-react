const initialState = {
  books: [
    {
      id: 1,
      title: 'Hear the Wind Sing',
      year: 1979,
      cover: '/images/Hear_the_wind_sing.JPG',
      titleJP: '風の歌を聴け',
      titleRomaji: 'Kaze no uta o kike',
      synopsis:
        "Hear the Wind Sing is the first novel by Haruki Murakami; it first appeared in the June 1979 issue of Gunzo, one of the most influential literary magazines in Japan.<br/>It is the first of the 'boku' tetralogy; translated by Alfred Birnbaum.",
      price: 35
    },
    {
      id: 2,
      title: 'Pinball, 1973',
      year: 1980,
      cover: '/images/Pinball_english.jpg',
      titleJP: '1973年のピンボール',
      titleRomaji: '1973-nen no pinbōru',
      synopsis:
        "The plot centers on the narrator's brief but intense obsession with pinball, his life as a freelance translator, and his later efforts to reunite with the old pinball machine that he used to play. He describes living with a pair of identical unnamed female twins, who mysteriously appear in his apartment one morning, and disappear at the end of the book. Interspersed with the narrative are his memories of the Japanese student movement, and of his old girlfriend Naoko. The plot alternates between describing the life of narrator and that of his friend, The Rat.",
      price: 35
    },
    {
      id: 3,
      title: 'A Wild Sheep Chase',
      year: 1982,
      cover: '/images/Haruki_murakami_a_wild_sheep_chase.jpg',
      titleJP: '羊をめぐる冒険',
      titleRomaji: 'Hitsuji o meguru bōken',
      synopsis:
        'A marvelous hybrid of mythology and mystery, <em>A Wild Sheep Chase</em> is the extraordinary literary thriller that launched Haruki Murakami’s international reputation.<br/>It begins simply enough: A twenty-something advertising executive receives a postcard from a friend, and casually appropriates the image for an insurance company’s advertisement. What he doesn’t realize is that included in the pastoral scene is a mutant sheep with a star on its back, and in using this photo he has unwittingly captured the attention of a man in black who offers a menacing ultimatum: find the sheep or face dire consequences. Thus begins a surreal and elaborate quest that takes our hero from the urban haunts of Tokyo to the remote and snowy mountains of northern Japan, where he confronts not only the mythological sheep, but the confines of tradition and the demons deep within himself. Quirky and utterly captivating, <em>A Wild Sheep Chase</em> is Murakami at his astounding best.',
      price: 15
    },
    {
      id: 4,
      title: 'Hard-Boiled Wonderland and the End of the World',
      year: 1985,
      cover: '/images/Haruki_murakami_hardboiled.jpg',
      titleJP: '世界の終りとハードボイルド・ワンダーランド',
      titleRomaji: 'Sekai no owari to Hādo-boirudo Wandārando',
      synopsis:
        "'A narrative particle accelerator that zooms between Wild Turkey Whiskey and Bob Dylan, unicorn skulls and voracious librarians, John Coltrane and <em>Lord Jim</em>. Science fiction, detective story and post-modern manifesto all rolled into one rip-roaring novel, <em>Hard-Boiled Wonderland and the End of the World</em> is the tour de force that expanded Haruki Murakami's international following. Tracking one man's descent into the Kafkaesque underworld of contemporary Tokyo, Murakami unites East and West, tragedy and farce, compassion and detachment, slang and philosophy.'",
      price: 15
    },
    {
      id: 5,
      title: 'Norwegian Wood',
      year: 1987,
      cover: '/images/Norwegian_wood.jpg',
      titleJP: 'ノルウェイの森',
      titleRomaji: 'Noruwei no mori',
      synopsis:
        'Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. Toru begins to adapt to campus life and the loneliness and isolation he faces there, but Naoko finds the pressures and responsibilities of life unbearable. As she retreats further into her own world, Toru finds himself reaching out to others and drawn to a fiercely independent and sexually liberated young woman.',
      price: 15
    },
    {
      id: 6,
      title: 'Dance Dance Dance',
      year: 1988,
      cover: '/images/DanceDanceDance.jpg',
      titleJP: 'ダンス・ダンス・ダンス',
      titleRomaji: 'Dansu dansu dansu',
      synopsis:
        "High-class call girls billed to Mastercard. A psychic 13-year-old dropout with a passion for Talking Heads. A hunky matinee idol doomed to play dentists and teachers. A one-armed beach-combing poet, an uptight hotel clerk and one very bemused narrator caught in the web of advanced capitalist mayhem. Combine this offbeat cast of characters with Murakami's idiosyncratic prose and out comes <em>Dance Dance Dance</em>.",
      price: 15
    },
    {
      id: 7,
      title: 'South of the Border, West of the Sun',
      year: 1992,
      cover: '/images/SouthBorderWestSun.jpg',
      titleJP: '国境の南、太陽の西',
      titleRomaji: 'Kokkyō no minami, taiyō no nishi',
      synopsis:
        "Growing up in the suburbs of post-war Japan, it seemed to Hajime that everyone but him had brothers and sisters. His sole companion was Shimamoto, also an only child. Together they spent long afternoons listening to her father's record collection. But when his family moved away, the two lost touch. Now Hajime is in his thirties. After a decade of drifting he has found happiness with his loving wife and two daughters, and success running a jazz bar. Then Shimamoto reappears. She is beautiful, intense, enveloped in mystery. Hajime is catapulted into the past, putting at risk all he has in the present.",
      price: 15
    },
    {
      id: 8,
      title: 'The Wind-Up Bird Chronicle',
      year: 1994 - 5,
      cover: '/images/Wind-up_Bird_Chronicle.jpg',
      titleJP: 'ねじまき鳥クロニクル',
      titleRomaji: 'Nejimaki-dori kuronikuru',
      synopsis:
        "Japan's most highly regarded novelist now vaults into the first ranks of international fiction writers with this heroically imaginative novel, which is at once a detective story, an account of a disintegrating marriage, and an excavation of the buried secrets of World War II.<br/>In a Tokyo suburb a young man named Toru Okada searches for his wife's missing cat. Soon he finds himself looking for his wife as well in a netherworld that lies beneath the placid surface of Tokyo. As these searches intersect, Okada encounters a bizarre group of allies and antagonists: a psychic prostitute; a malevolent yet mediagenic politician; a cheerfully morbid sixteen-year-old-girl; and an aging war veteran who has been permanently changed by the hideous things he witnessed during Japan's forgotten campaign in Manchuria.",
      price: 18
    },
    {
      id: 9,
      title: 'Sputnik Sweetheart',
      year: 1999,
      cover: '/images/sputnik-sweetheart.jpg',
      titleJP: 'スプートニクの恋人',
      titleRomaji: 'Supūtoniku no koibito',
      synopsis:
        'Sumire is in love with a woman seventeen years her senior. But whereas Miu is glamorous and successful, Sumire is an aspiring writer who dresses in an oversized second-hand coat and heavy boots like a character in a Kerouac novel.<br/>Sumire spends hours on the phone talking to her best friend K about the big questions in life: what is sexual desire, and should she ever tell Miu how she feels for her? Meanwhile K wonders whether he should confess his own unrequited love for Sumire.<br/>Then, a desperate Miu calls from a small Greek island: Sumire has mysteriously vanished.',
      price: 15
    },
    {
      id: 10,
      title: 'Kafka on the Shore',
      year: 2002,
      cover: '/images/KafkaontheShore.jpg',
      titleJP: '海辺のカフカ',
      titleRomaji: 'Umibe no Kafuka',
      synopsis:
        '<em>Kafka on the Shore</em> is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now is drawn toward Kafka for reasons that, like the most basic activities of daily life, he cannot fathom.<br/>As their paths converge, and the reasons for that convergence become clear, Haruki Murakami enfolds readers in a world where cats talk, fish fall from the sky, and spirits slip out of their bodies to make love or commit murder. <em>Kafka on the Shore</em> displays one of the world’s great storytellers at the peak of his powers.',
      price: 25
    },
    {
      id: 11,
      title: 'After Dark',
      year: 2004,
      cover: '/images/afterdark.jpg',
      titleJP: 'アフターダーク',
      titleRomaji: 'Afutā dāku',
      synopsis:
        'A short, sleek novel of encounters set in Tokyo during the witching hours between midnight and dawn, and every bit as gripping as Haruki Murakami’s masterworks <em>The Wind-Up Bird Chronicle</em> and <em>Kafka on the Shore</em>.<br/>At its center are two sisters—Eri, a fashion model slumbering her way into oblivion, and Mari, a young student soon led from solitary reading at an anonymous Denny’s toward people whose lives are radically alien to her own: a jazz trombonist who claims they’ve met before, a burly female “love hotel” manager and her maid staff, and a Chinese prostitute savagely brutalized by a businessman. These “night people” are haunted by secrets and needs that draw them together more powerfully than the differing circumstances that might keep them apart, and it soon becomes clear that Eri’s slumber—mysteriously tied to the businessman plagued by the mark of his crime—will either restore or annihilate her.',
      price: 10
    },
    {
      id: 12,
      title: '1Q84',
      year: 2009 - 10,
      cover: '/images/1Q84bookcover.jpg',
      titleJP: '1Q84',
      titleRomaji: 'Ichi-kyū-hachi-yoni',
      synopsis:
        'A young woman named Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’ A world that bears a question.” Meanwhile, an aspiring writer named Tengo takes on a suspect ghostwriting project. He becomes so wrapped up with the work and its unusual author that, soon, his previously placid life begins to come unraveled.<br/>As Aomame’s and Tengo’s narratives converge over the course of this single year, we learn of the profound and tangled connections that bind them ever closer: a beautiful, dyslexic teenage girl with a unique vision; a mysterious religious cult that instigated a shoot-out with the metropolitan police; a reclusive, wealthy dowager who runs a shelter for abused women; a hideously ugly private investigator; a mild-mannered yet ruthlessly efficient bodyguard; and a peculiarly insistent television-fee collector.',
      price: 20
    },
    {
      id: 13,
      title: 'Colorless Tsukuru Tazaki and His Years of Pilgrimage',
      year: 2013,
      cover: '/images/Colorless_Tsukuru_Tazaki_and_His_Years_of_Pilgrimage.jpg',
      titleJP: '色彩を持たない多崎つくると、彼の巡礼の年',
      titleRomaji:
        'Shikisai o motanai Tazaki Tsukuru to, kare no junrei no toshi',
      synopsis:
        '<em>Colorless Tsukuru Tazaki and His Years of Pilgrimage</em> is the long-awaited new novel-- a book that sold more than a million copies the first week it went on sale in Japan--from the award-winning, internationally best-selling author Haruki Murakami.<br/>Here he gives us the remarkable story of Tsukuru Tazaki, a young man haunted by a great loss; of dreams and nightmares that have unintended consequences for the world around us; and of a journey into the past that is necessary to mend the present. It is a story of love, friendship, and heartbreak for the ages.',
      price: 15
    },
    {
      id: 14,
      title: 'The Elephant Vanishes',
      year: 1993,
      cover: '/images/Haruki_murakami_elephant.jpg',
      titleJP: '象の消滅',
      titleRomaji: 'Zō no shōmetsu',
      synopsis:
        "With the same deadpan mania and genius for dislocation that he brought to his internationally acclaimed novels <em>A Wild Sheep Chase</em> and <em>Hard-Boiled Wonderland and the End of the World</em>, Haruki Murakami makes this collection of stories a determined assault on the normal. A man sees his favorite elephant vanish into thin air; a newlywed couple suffers attacks of hunger that drive them to hold up a McDonald's in the middle of the night; and a young woman discovers that she has become irresistible to a little green monster who burrows up through her backyard.<br/>By turns haunting and hilarious, <em>The Elephant Vanishes</em> is further proof of Murakami's ability to cross the border between separate realities -- and to come back bearing treasure.",
      price: 22
    },
    {
      id: 15,
      title: 'after the quake',
      year: 2000,
      cover: '/images/Afterthequake.jpg',
      titleJP: '神の子どもたちはみな踊る',
      titleRomaji: 'Kami no kodomo-tachi wa mina odoru',
      synopsis:
        'The six stories in Haruki Murakami’s mesmerizing collection are set at the time of the catastrophic 1995 Kobe earthquake, when Japan became brutally aware of the fragility of its daily existence. But the upheavals that afflict Murakami’s characters are even deeper and more mysterious, emanating from a place where the human meets the inhuman.',
      price: 15
    },
    {
      id: 16,
      title: 'Blind Willow, Sleeping Woman',
      year: 2006,
      cover: '/images/BlindWillowSleepingWoman.jpg',
      titleJP: 'めくらやなぎと眠る女',
      titleRomaji: 'Mekurayanagi to nemuru onna',
      synopsis:
        'Collection of twenty-four stories that generously expresses Murakami’s mastery of the form. From the surreal to the mundane, these stories exhibit his ability to transform the full range of human experience in ways that are instructive, surprising, and relentlessly entertaining. Here are animated crows, a criminal monkey, and an iceman, as well as the dreams that shape us and the things we might wish for. Whether during a chance reunion in Italy, a romantic exile in Greece, a holiday in Hawaii, or in the grip of everyday life, Murakami’s characters confront grievous loss, or sexuality, or the glow of a firefly, or the impossible distances between those who ought to be closest of all.',
      price: 15
    }
  ],
  cart: [
    { bookID: 4, quantity: 1 },
    { bookID: 6, quantity: 4 },
    { bookID: 8, quantity: 2 }
  ]
};

export default initialState;
