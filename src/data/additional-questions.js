// Additional questions use explicit difficulty groups so new rows do not change existing levels.
const bank = {
science: {
easy: `
Which star is closest to Earth?|کام ئەستێرە لە زەوی نزیکترە؟|The Sun;Sirius;Polaris;Betelgeuse|خۆر;سیریوس;ئەستێرەی جەمسەری;بێتەلگێز|The Sun is the star at the center of our solar system.|خۆر ئەستێرەی ناوەندی سیستەمی خۆرە.
What do bees collect from flowers to make honey?|هەنگ بۆ دروستکردنی هەنگوین چی لە گوڵەکان کۆ دەکاتەوە؟|Nectar;Sand;Salt;Bark|شیلەی گوڵ;لم;خوێ;توێکڵی دار|Bees turn the nectar they collect into honey.|هەنگ شیلەی گوڵ دەگۆڕێت بۆ هەنگوین.
Which sense do we use to detect sounds?|بۆ هەستکردن بە دەنگ کام هەست بەکاردەهێنین؟|Hearing;Taste;Smell;Touch|بیستن;تامکردن;بۆنکردن;دەستلێدان|Our ears detect vibrations that the brain interprets as sound.|گوێ لەرینەوەکان وەردەگرێت و مێشک وەک دەنگ لێکیان دەداتەوە.
What is water called when it freezes?|ئاو کاتێک دەبەستێت بەچی ناودەبرێت؟|Ice;Steam;Smoke;Oil|سەهۆڵ;هەڵم;دووکەڵ;ڕۆن|Freezing changes liquid water into solid ice.|بەستن ئاوی شل دەگۆڕێت بۆ سەهۆڵی ڕەق.
Which of these animals has feathers?|کام لەم ئاژەڵانە پەڕی هەیە؟|Parrot;Rabbit;Cat;Turtle|توتی;کەروێشک;پشیلە;کیسەڵ|Feathers are a defining feature of birds such as parrots.|پەڕ تایبەتمەندییەکی باڵندەکانە، وەک توتی.
Which part of a plant usually takes up water from the soil?|کام بەشی ڕووەک زۆرجار ئاو لە خاکەوە وەردەگرێت؟|Roots;Flowers;Fruit;Petals|ڕەگ;گوڵ;میوە;گەڵای گوڵ|Roots absorb water and dissolved minerals from the soil.|ڕەگ ئاو و کانزا تواوەکان لە خاکەوە وەردەگرێت.
`,
medium: `
Which blood cells carry oxygen?|کام خانەکانی خوێن ئۆکسجین دەگوازنەوە؟|Red blood cells;Platelets;White blood cells;Skin cells|خانە سوورەکانی خوێن;پڵێتلێت;خانە سپییەکانی خوێن;خانەکانی پێست|Red blood cells contain hemoglobin, which binds oxygen.|خانە سوورەکانی خوێن هیمۆگڵۆبینیان تێدایە کە ئۆکسجین پێوە دەبەستێت.
Which planet has the most prominent visible ring system?|کام هەسارە بە بازنە دیارەکانی ناسراوە؟|Saturn;Earth;Mars;Mercury|زوحەل;زەوی;مەریخ;عوتارد|Saturn’s bright rings are made mostly of countless pieces of ice.|بازنە ڕوونەکانی زوحەل زۆربەیان لە پارچە سەهۆڵی بێژمار پێکدێن.
What is the pH of pure water at 25°C?|بەهای pHی ئاوی پاک لە ٢٥ پلەی سیلیزی چەندە؟|7;1;10;14|٧;١;١٠;١٤|At 25°C, pure water is neutral with a pH of seven.|لە ٢٥ پلەی سیلیزیدا ئاوی پاک بێلایەنە و pHەکەی حەوتە.
Which human organ filters blood to produce urine?|کام ئەندامی مرۆڤ خوێن پاڵاوتە دەکات بۆ بەرهەمهێنانی میز؟|Kidney;Heart;Pancreas;Stomach|گورچیلە;دڵ;پانکریاس;گەدە|Kidneys remove wastes and excess water from the blood.|گورچیلە پاشماوە و ئاوی زیادە لە خوێن جیا دەکاتەوە.
Which travels faster in a vacuum: light or sound?|لە بۆشاییدا کام خێراتر دەگوازرێتەوە: ڕووناکی یان دەنگ؟|Light;Sound;Both equally;Neither can travel|ڕووناکی;دەنگ;هەردووکیان یەکسان;هیچ کامیان ناگوازرێتەوە|Light travels through a vacuum; sound needs a material medium.|ڕووناکی بە بۆشاییدا دەگوازرێتەوە؛ دەنگ پێویستی بە ناوەندێکی ماددی هەیە.
What causes the seasons on Earth?|هۆکاری وەرزەکانی ساڵ لە زەوی چییە؟|Earth’s tilted axis;The Moon’s shadow;Changes in the Sun’s size;Ocean tides|لاربوونی تەوەری زەوی;سێبەری مانگ;گۆڕانی قەبارەی خۆر;هەڵکشان و داکشانی دەریا|Earth’s axial tilt changes the sunlight each hemisphere receives during its orbit.|لاربوونی تەوەری زەوی لە کاتی سووڕانەوەیدا بڕی تیشکی خۆر بۆ هەر نیوەگۆیەک دەگۆڕێت.
`,
hard: `
What is the chemical symbol for tungsten?|هێمای کیمیایی تەنەی تۆنگستن چییە؟|W;Tg;Tu;Ts|W;Tg;Tu;Ts|W comes from wolfram, another name for tungsten.|هێمای W لە وشەی وۆڵفرامەوە هاتووە کە ناوێکی تری تۆنگستنە.
What is the SI unit of pressure?|یەکەی پەستان لە سیستەمی SI چییە؟|Pascal;Newton;Joule;Coulomb|پاسکاڵ;نیوتن;جوول;کولۆمب|One pascal equals one newton of force per square metre.|یەک پاسکاڵ یەکسانە بە یەک نیوتن هێز بۆ هەر مەتر چوارگۆشەیەک.
What happens to a radioactive sample after two half-lives?|دوای دوو نیوەتەمەن چەند لە ئەتۆمە ڕادیۆچالاکە سەرەتاییەکان دەمێننەوە؟|One quarter remains;One half remains;Three quarters remain;None remain|چارەکێک دەمێنێتەوە;نیوەی دەمێنێتەوە;سێ چارەکی دەمێنێتەوە;هیچی نامێنێتەوە|Each half-life halves the remaining radioactive atoms: one half, then one quarter.|هەر نیوەتەمەنێک ئەتۆمە ڕادیۆچالاکەکان بە نیوە کەم دەکاتەوە: نیوە، پاشان چارەک.
Which base pairs with adenine in DNA?|لە DNAدا کام بنەما لەگەڵ ئەدەنین جووت دەبێت؟|Thymine;Guanine;Cytosine;Uracil|تایمین;گوانین;سایتۆسین;یوراسیل|DNA pairs adenine with thymine and guanine with cytosine.|لە DNAدا ئەدەنین لەگەڵ تایمین و گوانین لەگەڵ سایتۆسین جووت دەبن.
What does Avogadro’s constant describe?|نەگۆڕی ئەڤۆگادرۆ چی دیاری دەکات؟|Particles per mole;Speed of light;Mass of an electron;Earth’s radius|ژمارەی تەنۆچکە لە هەر مۆلێکدا;خێرایی ڕووناکی;بارستایی ئەلیکترۆن;نیوەتیرەی زەوی|One mole contains exactly 6.02214076 × 10²³ elementary entities.|یەک مۆل بە وردی ٦٫٠٢٢١٤٠٧٦ × ١٠²³ یەکەی بنەڕەتی لەخۆ دەگرێت.
What is the main function of ribosomes?|ئەرکی سەرەکی ڕایبۆسۆمەکان چییە؟|Making proteins;Storing fat;Digesting food in the stomach;Pumping blood|دروستکردنی پرۆتین;هەڵگرتنی چەوری;هەرسکردنی خواردن لە گەدە;گەڕاندنی خوێن|Ribosomes translate messenger RNA into chains of amino acids.|ڕایبۆسۆم زانیاریی RNAی پەیامبەر دەگۆڕێت بۆ زنجیرەی ئەمینۆ ئاسید.
`,
},
world: {
easy: `
Which country is home to the Eiffel Tower?|تاوەری ئەیفڵ لە کام وڵاتە؟|France;Germany;Portugal;Sweden|فەڕەنسا;ئەڵمانیا;پورتوگال;سوید|The Eiffel Tower stands in Paris, France.|تاوەری ئەیفڵ لە پاریسی پایتەختی فەڕەنسایە.
What is the capital of Iraq?|پایتەختی عێراق کوێیە؟|Baghdad;Basra;Mosul;Najaf|بەغداد;بەسرە;موسڵ;نەجەف|Baghdad is Iraq’s capital, on the banks of the Tigris.|بەغداد پایتەختی عێراقە و لەسەر کەناری دیجلەیە.
Which continent is Brazil in?|بەڕازیل لە کام کیشوەردایە؟|South America;Africa;Europe;Asia|ئەمەریکای باشوور;ئەفریقا;ئەوروپا;ئاسیا|Brazil is the largest country by area in South America.|بەڕازیل لە ڕووی ڕووبەرەوە گەورەترین وڵاتی ئەمەریکای باشوورە.
Which country is shaped like a boot on many maps?|کام وڵات لە نەخشەدا شێوەی پۆستاڵی هەیە؟|Italy;Norway;Canada;India|ئیتاڵیا;نەرویج;کەنەدا;هیندستان|The Italian peninsula has a distinctive boot-like shape.|نیمچەدوورگەی ئیتاڵیا شێوەیەکی دیاری پۆستاڵئاسای هەیە.
Which direction does the Sun generally rise from?|خۆر بە گشتی لە کام ئاراستەوە هەڵدێت؟|East;West;North;South|ڕۆژهەڵات;ڕۆژئاوا;باکوور;باشوور|Earth’s west-to-east rotation makes the Sun appear to rise in the east.|سووڕانەوەی زەوی لە ڕۆژئاوا بۆ ڕۆژهەڵات وا دەکات خۆر لە ڕۆژهەڵات هەڵبێت.
Which of these is a continent?|کام لەمانە کیشوەرە؟|Antarctica;Greenland;Japan;Madagascar|ئەنتارکتیکا;گرینلاند;ژاپۆن;مەدەغەسقەر|Antarctica is the continent surrounding the South Pole.|ئەنتارکتیکا کیشوەری دەوروبەری جەمسەری باشوورە.
`,
medium: `
Which country is home to the ancient city of Petra?|شاری کۆنی پەترا لە کام وڵاتە؟|Jordan;Lebanon;Oman;Iran|ئوردن;لوبنان;عومان;ئێران|Petra is an ancient rock-cut city in southern Jordan.|پەترا شارێکی کۆنی هەڵکۆڵراوە لە بەرد، لە باشووری ئوردن.
Which river flows through London?|کام ڕووبار بە لەندەندا تێدەپەڕێت؟|Thames;Rhine;Seine;Volga|تێمز;ڕاین;سێن;ڤۆڵگا|The River Thames flows through London toward the North Sea.|ڕووباری تێمز بە لەندەندا بەرەو دەریای باکوور دەڕوات.
Which country has the capital Ottawa?|ئۆتاوا پایتەختی کام وڵاتە؟|Canada;New Zealand;Ireland;Finland|کەنەدا;نیوزیلەندا;ئیرلەندا;فینلەندا|Ottawa is Canada’s capital, in the province of Ontario.|ئۆتاوا پایتەختی کەنەدایە و لە پارێزگای ئۆنتاریۆیە.
Which mountain range runs along western South America?|کام زنجیرەچیا بە ڕۆژئاوای ئەمەریکای باشووردا درێژ دەبێتەوە؟|Andes;Himalayas;Alps;Caucasus|ئەندیز;هیمالایا;ئەڵپ;قەوقاز|The Andes run along the western edge of South America.|چیاکانی ئەندیز بە کەناری ڕۆژئاوای ئەمەریکای باشووردا درێژ دەبنەوە.
Which country has Portuguese as its main official language?|کام وڵات زمانی فەرمی سەرەکیی پورتوگالییە؟|Brazil;Argentina;Chile;Colombia|بەڕازیل;ئەرجەنتین;چیلی;کۆلۆمبیا|Portuguese is Brazil’s official language; its neighbors mainly speak Spanish.|پورتوگالی زمانی فەرمی بەڕازیلە؛ زۆربەی دراوسێکانی بە ئیسپانی دەدوێن.
Which continent has no permanent native human population?|کام کیشوەر دانیشتووانی مرۆیی ڕەسەنی هەمیشەیی نییە؟|Antarctica;Europe;Africa;Asia|ئەنتارکتیکا;ئەوروپا;ئەفریقا;ئاسیا|Antarctica has research stations but no permanent indigenous population.|ئەنتارکتیکا بنکەی توێژینەوەی هەیە، بەڵام دانیشتووانی ڕەسەنی هەمیشەیی نییە.
`,
hard: `
Which strait separates Alaska and Russia?|کام تەنگە ئەلاسکا و ڕووسیا جیا دەکاتەوە؟|Bering Strait;Bosporus;Strait of Dover;Strait of Magellan|تەنگەی بێرینگ;بۆسفۆر;تەنگەی دۆڤەر;تەنگەی ماژەلان|The Bering Strait separates Alaska from Russia’s Chukotka Peninsula.|تەنگەی بێرینگ ئەلاسکا لە نیمچەدوورگەی چووکۆتکای ڕووسیا جیا دەکاتەوە.
Which country has the capital Ulaanbaatar?|ئولانباتار پایتەختی کام وڵاتە؟|Mongolia;Kazakhstan;Nepal;Laos|مەنگۆلیا;کازاخستان;نیپاڵ;لاوس|Ulaanbaatar is the capital of Mongolia.|ئولانباتار پایتەختی مەنگۆلیایە.
Which African country was historically called Abyssinia?|کام وڵاتی ئەفریقی لە مێژوودا بە ئەبیسینیا ناودەبرا؟|Ethiopia;Ghana;Kenya;Senegal|ئەسیۆپیا;غانا;کینیا;سێنێگال|Abyssinia is a historical name associated with Ethiopia.|ئەبیسینیا ناوێکی مێژوویی پەیوەست بە ئەسیۆپیایە.
Which desert lies mainly in Mongolia and northern China?|کام بیابان زۆربەی لە مەنگۆلیا و باکووری چینە؟|Gobi;Namib;Sonoran;Thar|گۆبی;نامیب;سۆنۆران;تار|The Gobi spans parts of southern Mongolia and northern China.|گۆبی بەشێک لە باشووری مەنگۆلیا و باکووری چین دەگرێتەوە.
What is the capital of Bhutan?|پایتەختی بوتان کوێیە؟|Thimphu;Kathmandu;Dhaka;Vientiane|تیمفو;کاتماندو;داکا;ڤیێنتیان|Thimphu is the capital of Bhutan, a Himalayan country.|تیمفو پایتەختی بوتانە، وڵاتێک لە ناوچەی هیمالایا.
Which two countries share the island of Hispaniola?|کام دوو وڵات دوورگەی هیسپانیۆلا هاوبەش دەکەن؟|Haiti and the Dominican Republic;Cuba and Jamaica;Spain and Portugal;Indonesia and Malaysia|هایتی و کۆماری دۆمینیکان;کووبا و جامایکا;ئیسپانیا و پورتوگال;ئیندۆنیسیا و مالیزیا|Haiti occupies the western part and the Dominican Republic the eastern part of Hispaniola.|هایتی بەشی ڕۆژئاوا و کۆماری دۆمینیکان بەشی ڕۆژهەڵاتی هیسپانیۆلا دەگرنەوە.
`,
},
tech: {
easy: `
Which device displays a computer’s images and text?|کام ئامێر وێنە و دەقی کۆمپیوتەر پیشان دەدات؟|Monitor;Microphone;Keyboard;Scanner|شاشە;مایکرۆفۆن;تەختەکلیل;سکانەر|A monitor is an output device that displays visual information.|شاشە ئامێرێکی دەرچوونە کە زانیاریی بینراو پیشان دەدات.
What does a microphone capture?|مایکرۆفۆن چی تۆمار دەکات؟|Sound;Temperature;Weight;Distance|دەنگ;پلەی گەرمی;کێش;دووری|A microphone converts sound waves into electrical signals.|مایکرۆفۆن شەپۆلی دەنگ دەگۆڕێت بۆ نیشانەی کارەبایی.
What does Wi-Fi let devices connect to without a cable?|وایفای ڕێگە دەدات ئامێرەکان بێ کێبڵ بە چی پەیوەست بن؟|A wireless network;A paper notebook;A water pipe;A power socket|تۆڕێکی بێتەل;دەفتەرێکی کاغەزی;بۆڕیی ئاو;پریزێکی کارەبا|Wi-Fi provides a wireless network connection; internet access depends on that network.|وایفای پەیوەندیی تۆڕی بێتەل دەدات؛ دەستگەیشتن بە ئینتەرنێت بە تۆڕەکەوە بەستراوە.
What is the usual purpose of the trash or recycle bin?|ئامانجی ئاسایی سەتڵی پاشماوە لە کۆمپیوتەر چییە؟|Hold deleted files temporarily;Speed up the processor;Store only passwords;Charge the battery|هەڵگرتنی کاتیی فایلە سڕاوەکان;خێراکردنی پرۆسێسەر;هەڵگرتنی تەنها وشەی نهێنی;شەحنکردنی پاتری|Many systems keep deleted files in a bin so they can be restored before it is emptied.|زۆر سیستەم فایلە سڕاوەکان لە سەتڵدا هەڵدەگرن تا پێش بەتاڵکردنەوە بگەڕێنرێنەوە.
Which file type is commonly used for photographs?|کام جۆری فایل زۆرجار بۆ وێنەی فۆتۆگرافی بەکاردێت؟|JPEG;MP3;TXT;EXE|JPEG;MP3;TXT;EXE|JPEG is an image format; MP3 is audio and TXT is plain text.|JPEG فۆرماتێکی وێنەیە؛ MP3 بۆ دەنگ و TXT بۆ دەقی سادەیە.
What is a clickable link on a web page called?|بەستەرێکی کلیکپێکراو لە لاپەڕەی وێب بەچی ناودەبرێت؟|Hyperlink;Hard drive;Pixel;Battery|هایپەرلینک;هارددیسک;پیکسڵ;پاتری|A hyperlink connects to another page, file, or location.|هایپەرلینک پەیوەندی بە لاپەڕە، فایل یان شوێنێکی ترەوە دەکات.
`,
medium: `
What is CSS mainly used for?|CSS زۆرتر بۆ چی بەکاردێت؟|Styling web pages;Querying databases;Encrypting passwords;Building processors|ڕووکار و شێوازی لاپەڕەی وێب;گەڕان لە بنکەدراوە;کۆدکردنی وشەی نهێنی;دروستکردنی پرۆسێسەر|CSS controls presentation such as colors, spacing, and layout.|CSS ڕەنگ و بۆشایی و ڕێکخستنی لاپەڕە کۆنترۆڵ دەکات.
What does two-factor authentication add?|ڕەسەنایەتی‌پشکنینی دوو هەنگاوی چی زیاد دەکات؟|Another way to verify your identity;A second username only;A larger screen;More storage space|ڕێگایەکی تری پشتڕاستکردنەوەی ناسنامەت;تەنها ناوی بەکارهێنەری دووەم;شاشەیەکی گەورەتر;بۆشایی هەڵگرتنی زیاتر|It requires a second authentication factor in addition to the first.|سەرەڕای هۆکاری یەکەم، هۆکارێکی دووەم بۆ پشتڕاستکردنەوە داوا دەکات.
Which language is commonly used to query relational databases?|کام زمان زۆرجار بۆ گەڕان لە بنکەدراوەی پەیوەندیدار بەکاردێت؟|SQL;CSS;HTML;SVG|SQL;CSS;HTML;SVG|SQL retrieves and changes data in relational databases.|SQL داتا لە بنکەدراوەی پەیوەندیدار وەردەگرێت و دەیگۆڕێت.
What is an algorithm?|ئەڵگۆریتم چییە؟|A sequence of steps to solve a problem;A physical cable;A kind of monitor;An email address|زنجیرەیەک هەنگاو بۆ چارەسەرکردنی کێشە;کێبڵێکی ماددی;جۆرێکی شاشە;ناونیشانی ئیمەیڵ|An algorithm specifies a procedure for performing a task.|ئەڵگۆریتم ڕێگای ئەنجامدانی ئەرکێک دیاری دەکات.
What does open-source software make available?|سۆفتوێری سەرچاوەکراوە چی بەردەست دەکات؟|Source code under an open license;Everyone’s private data;Free hardware;All user passwords|کۆدی سەرچاوە بە مۆڵەتێکی کراوە;داتای تایبەتی هەموو کەس;ڕەقەکاڵای بەخۆڕایی;هەموو وشە نهێنییەکان|An open-source license allows people to inspect, modify, and redistribute the code under its terms.|مۆڵەتی سەرچاوەکراوە ڕێگە بە پشکنین و گۆڕین و دابەشکردنەوەی کۆد دەدات، بەپێی مەرجەکانی.
What is cloud storage?|هەڵگرتنی هەوری چییە؟|Saving files on remote servers;Saving files only on paper;Storing files inside a keyboard;Increasing screen resolution|هەڵگرتنی فایل لە ڕاژەکاری دوور;هەڵگرتنی فایل تەنها لە کاغەز;هەڵگرتنی فایل لە ناو تەختەکلیل;زیادکردنی وردیی شاشە|Cloud storage keeps data on servers accessed through a network.|هەڵگرتنی هەوری داتا لە ڕاژەکاردا هەڵدەگرێت کە بە تۆڕ دەستگەیشتنی پێ دەکرێت.
`,
hard: `
Which data structure follows last in, first out?|کام پێکهاتەی داتا بەپێی «دوا هاتوو، یەکەم دەرچوو» کار دەکات؟|Stack;Queue;Set;Graph|ستاک;ڕیز;کۆمەڵە;گراف|A stack removes the most recently added item first.|ستاک دوایین دانەی زیادکراو یەکەم جار دەردەهێنێت.
What is the hexadecimal representation of decimal 255?|٢٥٥ی دەیی لە سیستەمی شانزەیی چییە؟|FF;AA;100;F0|FF;AA;100;F0|Each F means 15, so FF equals 15 × 16 + 15 = 255.|هەر F بەهای ١٥ی هەیە، بۆیە FF دەکاتە ١٥ × ١٦ + ١٥ = ٢٥٥.
What does an HTTP 404 response indicate?|وەڵامی HTTP 404 چی دەگەیەنێت؟|The resource was not found;The request succeeded;The server is redirecting;The password is correct|سەرچاوەکە نەدۆزرایەوە;داواکارییەکە سەرکەوتوو بوو;ڕاژەکار ئاراستە دەگۆڕێت;وشەی نهێنی ڕاستە|404 means the server could not find the requested resource.|٤٠٤ واتە ڕاژەکار سەرچاوە داواکراوەکەی نەدۆزییەوە.
What does UTF-8 encode?|UTF-8 چی کۆد دەکات؟|Unicode text;Only photographs;Only sound;Network passwords|دەقی یونیکۆد;تەنها وێنە;تەنها دەنگ;وشەی نهێنیی تۆڕ|UTF-8 represents Unicode characters using one to four bytes.|UTF-8 نووسەکانی یونیکۆد بە یەک تا چوار بایت پیشان دەدات.
Which sort has O(n log n) worst-case time complexity?|کام ڕێکخستن لە خراپترین حاڵەتدا ئاڵۆزی کاتی O(n log n) هەیە؟|Merge sort;Bubble sort;Insertion sort;Selection sort|ڕێکخستنی تێکەڵکردن;ڕێکخستنی بڵق;ڕێکخستنی تێخستن;ڕێکخستنی هەڵبژاردن|Merge sort divides the input and merges sorted halves, giving O(n log n) worst-case time.|ڕێکخستنی تێکەڵکردن داتا دابەش دەکات و نیوە ڕێکخراوەکان تێکەڵ دەکات؛ کاتی خراپترین حاڵەت O(n log n)ە.
What is a database transaction meant to group?|مامەڵەی بنکەدراوە چی پێکەوە کۆ دەکاتەوە؟|Operations treated as one unit;Unrelated screen colors;Keyboard layouts;Audio tracks|کردارەکان وەک یەک یەکە;ڕەنگی ناپەیوەندیی شاشە;ڕێکخستنی تەختەکلیل;تراکی دەنگ|A transaction groups operations so they can be committed or rolled back together.|مامەڵە کردارەکان کۆ دەکاتەوە تا پێکەوە جێگیر بکرێن یان بگەڕێنرێنەوە.
`,
},
culture: {
easy: `
Which instrument usually has six strings and is strummed?|کام ئامێری مۆسیقا زۆرجار شەش ژێی هەیە و بە دەست دەژەنرێت؟|Guitar;Trumpet;Flute;Tambourine|گیتار;ترومپێت;فلوت;تەنبۆرین|A standard guitar has six strings, played by strumming or plucking.|گیتاری ئاسایی شەش ژێی هەیە و بە لێدان یان ڕاکێشانی ژێکان دەژەنرێت.
Where would you usually go to borrow books?|زۆرجار بۆ وەرگرتنی کتێب بە خواستن دەچیتە کوێ؟|Library;Airport;Stadium;Garage|کتێبخانە;فڕۆکەخانە;یاریگە;گەراج|Libraries lend books and provide access to information.|کتێبخانە کتێب بە خواستن دەدات و زانیاری بەردەست دەکات.
What is a person who performs a role in a play called?|کەسێک ڕۆڵێک لە شانۆدا دەگێڕێت بەچی ناودەبرێت؟|Actor;Editor;Translator;Curator|ئەکتەر;دەستکاریکەر;وەرگێڕ;بەڕێوەبەری مۆزەخانە|An actor portrays a character in a play or film.|ئەکتەر کەسایەتییەک لە شانۆ یان فیلمدا پیشان دەدات.
Which of these is a traditional Kurdish group dance?|کام لەمانە سەمایەکی بەکۆمەڵی نەریتیی کوردییە؟|Halparke;Ballet;Tango;Waltz|هەڵپەڕکێ;بالێ;تانگۆ;واڵس|In halparke, dancers often join hands and move together in a line or circle.|لە هەڵپەڕکێدا زۆرجار سەماکەران دەست دەگرن و بە ڕیز یان بازنە پێکەوە دەجووڵێن.
Which art focuses on beautiful handwriting?|کام هونەر گرنگی بە جواننووسین دەدات؟|Calligraphy;Pottery;Photography;Weaving|خۆشنووسی;گۆزەگری;فۆتۆگرافی;چنین|Calligraphy is the art of forming letters with expressive, careful strokes.|خۆشنووسی هونەری نووسینی پیتەکانە بە جووڵەی ورد و جوان.
What do we call a story that is made up rather than factual?|چیرۆکێکی داهێنراو کە ڕووداوی ڕاستەقینە نییە بەچی ناودەبرێت؟|Fiction;Biography;Dictionary;News report|خەیاڵی;ژیاننامە;فەرهەنگ;ڕاپۆرتی هەواڵ|Fiction describes imagined characters and events.|ئەدەبی خەیاڵی باس لە کەسایەتی و ڕووداوی داهێنراو دەکات.
`,
medium: `
Who wrote Pride and Prejudice?|کێ ڕۆمانی شانازی و دەمارگیریی نووسیوە؟|Jane Austen;Mary Shelley;Virginia Woolf;Emily Brontë|جەین ئۆستن;مەری شێلی;ڤیرجینیا وولف;ئێمیلی برۆنتی|Jane Austen published Pride and Prejudice in 1813.|جەین ئۆستن ڕۆمانی شانازی و دەمارگیریی لە ١٨١٣ بڵاو کردەوە.
Which artist is strongly associated with Cubism?|کام هونەرمەند بە ڕەوتی کیوبیزم ناسراوە؟|Pablo Picasso;Claude Monet;John Constable;Sandro Botticelli|پابلۆ پیکاسۆ;کلۆد مۆنێ;جۆن کۆنستەبڵ;ساندرۆ بۆتیچێلی|Picasso and Georges Braque developed Cubism in the early 20th century.|پیکاسۆ و جۆرج براک لە سەرەتای سەدەی بیستدا کیوبیزمیان گەشە پێدا.
What is a biography?|ژیاننامە چییە؟|An account of someone’s life;A book of maps;A list of words;A musical score|گێڕانەوەی ژیانی کەسێک;کتێبی نەخشە;لیستی وشە;نۆتەی مۆسیقا|A biography tells the life story of a person, usually written by someone else.|ژیاننامە چیرۆکی ژیانی کەسێک دەگێڕێتەوە، زۆرجار کەسێکی تر دەینووسێت.
Which composer wrote the famous Ninth Symphony with Ode to Joy?|کام دانەری مۆسیقا سیمفۆنی نۆیەمی لەگەڵ سروودی خۆشی نووسیوە؟|Ludwig van Beethoven;Antonio Vivaldi;Johann Strauss II;George Gershwin|لودڤیگ ڤان بێتهۆڤن;ئەنتۆنیۆ ڤیڤالدی;یۆهان شتراوس دووەم;جۆرج گێرشوین|Beethoven’s Ninth Symphony includes a choral finale based on Ode to Joy.|سیمفۆنی نۆیەمی بێتهۆڤن کۆتاییەکی کۆڕگۆرانی هەیە لەسەر سروودی خۆشی.
Which ancient civilization used hieroglyphs?|کام شارستانیەتی کۆن نووسینی هیڕۆگلیفی بەکاردەهێنا؟|Ancient Egypt;Ancient Rome;The Vikings;The Incas|میسری کۆن;ڕۆمای کۆن;ڤایکینگەکان;ئینکاکان|Egyptian hieroglyphs combined pictorial signs with sound and meaning.|هیڕۆگلیفی میسری نیشانەی وێنەیی لەگەڵ دەنگ و واتا بەکاردەهێنا.
Which Kurdish city is closely associated with the poet Nali?|کام شاری کوردستان بە شاعیر نالییەوە پەیوەندیی نزیکی هەیە؟|Sulaymaniyah;Rome;Tokyo;Madrid|سلێمانی;ڕۆما;تۆکیۆ;مەدرید|Nali is a major figure of the classical Sorani poetic tradition associated with Sulaymaniyah.|نالی یەکێکە لە شاعیرە گەورەکانی شیعری کلاسیکی سۆرانی و بە سلێمانییەوە پەیوەستە.
`,
hard: `
Who wrote The Metamorphosis?|کێ گۆڕانی نووسیوە؟|Franz Kafka;Albert Camus;Hermann Hesse;Thomas Mann|فرانتس کافکا;ئەلبێر کامو;هێرمان هێسە;تۆماس مان|Kafka’s novella begins with Gregor Samsa discovering a startling transformation.|نوڤێلەکەی کافکا بە گۆڕانێکی سەرسوڕهێنەری گرێگۆر سامسا دەست پێدەکات.
Which architectural style uses pointed arches and flying buttresses?|کام شێوازی تەلارسازی کەوانی نووکتیژ و پشتگیریی دەرەکیی بەکاردەهێنێت؟|Gothic;Brutalist;Art Deco;Bauhaus|گۆتیک;بڕووتالیزم;ئارت دێکۆ;باوهاوس|Gothic architecture uses these structures to support tall buildings and large windows.|تەلارسازیی گۆتیک ئەم پێکهاتانە بۆ پشتگیریی بینای بەرز و پەنجەرەی گەورە بەکاردەهێنێت.
Who painted The Persistence of Memory with melting clocks?|کێ تابلۆی بەردەوامیی بیرەوەریی بە کاتژمێرە تواوەکان کێشاوە؟|Salvador Dalí;René Magritte;Paul Cézanne;Edvard Munch|سالڤادۆر دالی;ڕێنە ماگریت;پۆڵ سێزان;ئەدڤارد مونک|Dalí painted this well-known surrealist work in 1931.|دالی ئەم بەرهەمە ناسراوەی سوریالیزمی لە ١٩٣١ کێشا.
What is a sonnet traditionally made up of?|سۆنێت بە نەریت چەند دێڕی هەیە؟|14 lines;8 lines;10 lines;20 lines|١٤ دێڕ;٨ دێڕ;١٠ دێڕ;٢٠ دێڕ|A sonnet traditionally has fourteen lines with a structured rhyme scheme.|سۆنێت بە نەریت چواردە دێڕ و ڕێکخستنێکی دیاریکراوی سەروا هەیە.
Which composer wrote the opera The Magic Flute?|کێ ئۆپێرای فلوتی جادویی داناوە؟|Wolfgang Amadeus Mozart;Giuseppe Verdi;Richard Wagner;Giacomo Puccini|وۆڵفگانگ ئەمادێوس مۆزارت;جوزێپە ڤێردی;ڕیچارد ڤاگنەر;جاکۆمۆ پووچینی|Mozart’s The Magic Flute premiered in Vienna in 1791.|فلوتی جادویی مۆزارت یەکەم جار لە ١٧٩١ لە ڤیەننا پیشان درا.
Which novel features the character Don Quixote?|دۆن کیشۆت کەسایەتیی ڕۆمانی کام نووسەرە؟|Miguel de Cervantes;Victor Hugo;Dante Alighieri;Honoré de Balzac|میگێل دێ سێرڤانتێس;ڤیکتۆر هوگۆ;دانتێ ئەلیگیێری;ئۆنۆرە دێ بالزاک|Cervantes created Don Quixote, a character whose adventures parody tales of chivalry.|سێرڤانتێس دۆن کیشۆتی داهێنا؛ سەرکێشییەکانی چیرۆکەکانی پاڵەوانێتی بە گاڵتە دەگرن.
`,
},
math: {
easy: `
What is 12 + 15?|١٢ + ١٥ چەندە؟|27;25;29;30|٢٧;٢٥;٢٩;٣٠|Add ten and then five to twelve: 22 + 5 = 27.|دە و پاشان پێنج زیاد بکە بۆ دوازدە: ٢٢ + ٥ = ٢٧.
How many sides does a square have?|چوارگۆشە چەند لای هەیە؟|4;3;5;8|٤;٣;٥;٨|A square has four equal sides and four right angles.|چوارگۆشە چوار لای یەکسان و چوار گۆشەی ڕاستی هەیە.
What is 100 − 37?|١٠٠ − ٣٧ چەندە؟|63;73;67;53|٦٣;٧٣;٦٧;٥٣|Subtract 30 to get 70, then seven to get 63.|٣٠ کەم بکەرەوە دەکاتە ٧٠، پاشان حەوت کەم بکەرەوە دەکاتە ٦٣.
What is one quarter of 20?|چارەکی ٢٠ چەندە؟|5;4;10;15|٥;٤;١٠;١٥|One quarter means dividing by four: 20 ÷ 4 = 5.|چارەک واتە دابەشکردن بە چوار: ٢٠ ÷ ٤ = ٥.
Which number is the largest?|کام ژمارە گەورەترینە؟|105;95;99;101|١٠٥;٩٥;٩٩;١٠١|105 is greater than each of the other three numbers.|١٠٥ لە هەر سێ ژمارەکەی تر گەورەترە.
What is 9 × 9?|٩ × ٩ چەندە؟|81;72;90;99|٨١;٧٢;٩٠;٩٩|Nine groups of nine make 81.|نۆ کۆمەڵەی نۆ دانە دەکاتە ٨١.
`,
medium: `
What is the perimeter of a square with side length 7 cm?|دەوری چوارگۆشەیەک بە درێژیی لای ٧ سم چەندە؟|28 cm;14 cm;49 cm;21 cm|٢٨ سم;١٤ سم;٤٩ سم;٢١ سم|A square’s perimeter is four times its side length: 4 × 7 = 28.|دەوری چوارگۆشە چوار جار درێژیی لایەکەیە: ٤ × ٧ = ٢٨.
What is 3/4 written as a decimal?|٣/٤ بە ژمارەی دەیی چەندە؟|0.75;0.34;0.25;0.5|٠٫٧٥;٠٫٣٤;٠٫٢٥;٠٫٥|Divide three by four to get 0.75.|سێ بە چوار دابەش بکە دەکاتە ٠٫٧٥.
What comes next: 3, 6, 12, 24, …?|چی دێت دوای: ٣، ٦، ١٢، ٢٤، …؟|48;30;36;42|٤٨;٣٠;٣٦;٤٢|Each number is twice the previous number.|هەر ژمارەیەک دوو هێندەی ژمارەی پێش خۆیەتی.
If 3x = 21, what is x?|ئەگەر 3x = ٢١ بێت، x چەندە؟|7;6;8;18|٧;٦;٨;١٨|Divide both sides by three: x = 21 ÷ 3 = 7.|هەردوو لا بە سێ دابەش بکە: x = ٢١ ÷ ٣ = ٧.
A bag has 3 red and 2 blue balls. What is the chance of drawing a blue ball?|جانتایەک ٣ تۆپی سوور و ٢ تۆپی شینی تێدایە. ئەگەری هەڵبژاردنی تۆپێکی شین چەندە؟|2/5;3/5;1/2;1/5|٢/٥;٣/٥;١/٢;١/٥|Two of the five equally likely balls are blue.|دوو لە پێنج تۆپەکە شینن و ئەگەری هەڵبژاردنی هەر تۆپێک یەکسانە.
What is the square root of 144?|ڕەگی دووجای ١٤٤ چەندە؟|12;14;11;16|١٢;١٤;١١;١٦|12 × 12 = 144, so its positive square root is 12.|١٢ × ١٢ = ١٤٤، بۆیە ڕەگی دووجای ئەرێنییەکەی ١٢یە.
`,
hard: `
What is the least common multiple of 12 and 18?|بچووکترین هاوبەشی چەندەکانی ١٢ و ١٨ چەندە؟|36;6;72;24|٣٦;٦;٧٢;٢٤|36 is the smallest positive number divisible by both 12 and 18.|٣٦ بچووکترین ژمارەی ئەرێنییە کە هەم بە ١٢ و هەم بە ١٨ دابەش دەکرێت.
If x² = 49, which pair gives all real solutions?|ئەگەر x² = ٤٩ بێت، کام جووت هەموو چارەسەرە ڕاستەقینەکان دەدات؟|−7 and 7;0 and 7;7 and 49;−49 and 49|−٧ و ٧;٠ و ٧;٧ و ٤٩;−٤٩ و ٤٩|Both 7² and (−7)² equal 49.|هەم ٧² و هەم (−٧)² یەکسانن بە ٤٩.
What is the area of a circle with radius 3?|ڕووبەری بازنەیەک بە نیوەتیرەی ٣ چەندە؟|9π;6π;3π;18π|9π;6π;3π;18π|Circle area is πr², so π × 3² = 9π.|ڕووبەری بازنە πr²یە، بۆیە π × ٣² = 9π.
How many diagonals does a hexagon have?|شەشگۆشە چەند تیرەی هەیە؟|9;6;12;15|٩;٦;١٢;١٥|A polygon with n vertices has n(n − 3)/2 diagonals: 6 × 3 ÷ 2 = 9.|چەندلایەکی n لووتکەدار n(n − ٣)/٢ تیرەی هەیە: ٦ × ٣ ÷ ٢ = ٩.
What is the sum of the first ten positive integers?|کۆی یەکەم دە ژمارەی تەواوی ئەرێنی چەندە؟|55;50;45;60|٥٥;٥٠;٤٥;٦٠|Pair the ends: 1 + 10 = 11. Five such pairs total 55.|ژمارەکانی سەرەتا و کۆتایی جووت بکە: ١ + ١٠ = ١١. پێنج جووت دەکاتە ٥٥.
How many different pairs can be chosen from five people?|لە پێنج کەس چەند جووتی جیاواز هەڵدەبژێردرێت؟|10;5;20;25|١٠;٥;٢٠;٢٥|There are 5 × 4 ÷ 2 = 10 pairs; dividing by two avoids counting each pair twice.|٥ × ٤ ÷ ٢ = ١٠ جووت هەیە؛ دابەشکردن بە دوو ڕێگە لە دووجار ژماردنی هەر جووتێک دەگرێت.
`,
},
sports: {
easy: `
Which sport is played with small bats on a table?|کام وەرزش بە ڕاکێتی بچووک لەسەر مێز ئەنجام دەدرێت؟|Table tennis;Golf;Rugby;Archery|تێنسی سەر مێز;گۆڵف;ڕەگبی;تیرهاویشتن|Table tennis players hit a small ball across a net on a table.|یاریزانانی تێنسی سەر مێز تۆپێکی بچووک بەسەر تۆڕی مێزەکەدا دەدەن.
Which sport uses a bow and arrows?|کام وەرزش کەوان و تیر بەکاردەهێنێت؟|Archery;Fencing;Cycling;Rowing|تیرهاویشتن;شمشێربازی;پاسکیلسواری;بەلەموانی|Archers use a bow to shoot arrows toward a target.|تیرهاوێژ بە کەوان تیر بەرەو ئامانج دەهاوێژێت.
Which sport is played in a swimming pool with a ball?|کام وەرزش بە تۆپ لە حەوزی مەلەوانی ئەنجام دەدرێت؟|Water polo;Handball;Cricket;Baseball|وۆتەرپۆلۆ;تۆپی دەست;کریکێت;بەیسبۆڵ|Water polo teams swim and try to score in the opposing goal.|لە وۆتەرپۆلۆدا تیمەکان مەلە دەکەن و هەوڵ دەدەن گۆڵ لە بەرامبەر بکەن.
What equipment is essential for cycling?|کام ئامێر بۆ پاسکیلسواری پێویستە؟|Bicycle;Skis;Racket;Surfboard|پاسکیل;سکی;ڕاکێت;تەختەی شەپۆلسواری|Cycling means riding a bicycle.|پاسکیلسواری واتە سواری پاسکیل بوون.
Which sport uses clubs to hit a ball toward a hole?|کام وەرزش دار بەکاردەهێنێت بۆ لێدانی تۆپ بەرەو کونێک؟|Golf;Boxing;Volleyball;Wrestling|گۆڵف;بۆکس;تۆپی بالە;زۆرانبازی|Golf players use different clubs to move the ball into a hole.|یاریزانانی گۆڵف بە داری جیاواز تۆپ دەخەنە ناو کونێک.
How many squares are on a standard chessboard?|تەختەی ئاسایی شەترەنج چەند خانەی هەیە؟|64;32;48;81|٦٤;٣٢;٤٨;٨١|A chessboard has eight rows and eight columns: 8 × 8 = 64.|تەختەی شەترەنج هەشت ڕیز و هەشت ستوونی هەیە: ٨ × ٨ = ٦٤.
`,
medium: `
Which chess piece moves diagonally only?|کام پارچەی شەترەنج تەنها بە لار دەجووڵێت؟|Bishop;Rook;Knight;King|فیل;قەڵا;ئەسپ;شا|A bishop moves along diagonals and stays on squares of the same color.|فیل بە هێڵی لار دەجووڵێت و هەمیشە لە خانەکانی هەمان ڕەنگدا دەمێنێتەوە.
Which chess piece combines the movement of a rook and a bishop?|کام پارچەی شەترەنج جووڵەی قەڵا و فیل کۆ دەکاتەوە؟|Queen;Pawn;Knight;King|وەزیر;پیادە;ئەسپ;شا|A queen moves any number of unobstructed squares along ranks, files, or diagonals.|وەزیر بە ڕیز و ستوون و لار، بەبێ بەربەست هەرچەند خانەیەک دەجووڵێت.
How many pins are set up in ten-pin bowling?|لە بۆڵینگی دە پینیدا چەند پین دادەنرێت؟|10;9;12;15|١٠;٩;١٢;١٥|Ten-pin bowling arranges ten pins in a triangle at the end of the lane.|لە بۆڵینگی دە پینیدا دە پین بە شێوەی سێگۆشە لە کۆتایی ڕێڕەو دادەنرێن.
Which city hosted the first modern Olympic Games in 1896?|کام شار یەکەم یارییە ئۆڵۆمپییە نوێیەکانی لە ١٨٩٦ میوانداری کرد؟|Athens;Paris;London;Rome|ئەسینا;پاریس;لەندەن;ڕۆما|The first modern Olympics took place in Athens, Greece.|یەکەم ئۆڵۆمپیادی نوێ لە ئەسینای یۆنان بەڕێوە چوو.
How many players from one basketball team are on court at a time?|لە تۆپی سەبەتەدا هەر تیمێک لە هەمان کاتدا چەند یاریزانی لە یاریگە هەیە؟|5;6;7;4|٥;٦;٧;٤|Standard basketball has five players per team on court.|لە تۆپی سەبەتەی ئاساییدا هەر تیمێک پێنج یاریزانی لە یاریگە هەیە.
What is a relay race?|پێشبڕکێی ڕیلەی چییە؟|A team race with successive runners;A solo jumping event;A chess tournament;A swimming lesson|پێشبڕکێی تیمێک بە ڕاکەری بەدوای یەکدا;بازدانی تاکەکەسی;پاڵەوانییەتیی شەترەنج;وانەی مەلەوانی|In a running relay, teammates run different stages and pass a baton.|لە ڕاکردنی ڕیلەیدا هاوتیمەکان قۆناغە جیاوازەکان ڕادەکەن و دارەکە دەگوازنەوە.
`,
hard: `
In chess, what is stalemate?|لە شەترەنجدا پات چییە؟|No legal move while the king is not in check;A captured king;A pawn reaching the last rank;A player taking two turns|هیچ جووڵەیەکی ڕەوا نییە و شا لە کیشدا نییە;گرتنی شا;گەیشتنی پیادە بە دوا ڕیز;دوو نۆرەی بەدوای یەکی یاریزان|Stalemate is a draw: the player to move is not in check but has no legal move.|پات یەکسانبوونە: ئەو یاریزانەی نۆرەیەتی لە کیشدا نییە، بەڵام هیچ جووڵەیەکی ڕەوا نییە.
How many legal destinations can a knight have from a corner on an empty chessboard?|لە تەختەی بەتاڵی شەترەنجدا ئەسپ لە گۆشەیەکەوە بۆ چەند خانە دەتوانێت بچێت؟|2;3;4;8|٢;٣;٤;٨|From a corner, only two of the knight’s eight possible L-shaped moves stay on the board.|لە گۆشەوە تەنها دوو لە هەشت جووڵەی Lئاسای ئەسپ لە ناو تەختەدا دەمێننەوە.
What happens to a knight’s square color after every move?|ڕەنگی خانەی ئەسپ دوای هەر جووڵەیەک چی لێ دێت؟|It changes color;It stays the same;It becomes a third color;It depends on the opponent|ڕەنگەکە دەگۆڕێت;هەمان ڕەنگ دەمێنێت;دەبێتە ڕەنگێکی سێیەم;بە بەرامبەرەکەوە بەستراوە|A knight’s L-shaped move always ends on the opposite square color.|جووڵەی Lئاسای ئەسپ هەمیشە لەسەر خانەی ڕەنگی بەرامبەر کۆتایی دێت.
What is the maximum number of queens one side can have through pawn promotion?|بە بەرزکردنەوەی پیادەکان، یەک لایەن زۆرترین چەند وەزیری دەتوانێت هەبێت؟|9;8;2;10|٩;٨;٢;١٠|The original queen plus eight promoted pawns can give one side nine queens.|وەزیرە سەرەتاییەکە لەگەڵ هەشت پیادەی بەرزکراوە دەتوانن نۆ وەزیر پێک بهێنن.
Which city hosted the 1968 Summer Olympics?|کام شار ئۆڵۆمپیادی هاوینی ١٩٦٨ی میوانداری کرد؟|Mexico City;Tokyo;Montreal;Munich|مەکسیکۆ سیتی;تۆکیۆ;مۆنتریاڵ;میونیخ|Mexico City hosted the Summer Olympics in 1968.|مەکسیکۆ سیتی ئۆڵۆمپیادی هاوینی ١٩٦٨ی میوانداری کرد.
Which city hosted the 1936 Summer Olympics?|کام شار ئۆڵۆمپیادی هاوینی ١٩٣٦ی میوانداری کرد؟|Berlin;Helsinki;Stockholm;Amsterdam|بەرلین;هێلسینکی;ستۆکهۆڵم;ئەمستەردام|Berlin hosted the 1936 Summer Olympics, where Jesse Owens won four gold medals.|بەرلین ئۆڵۆمپیادی هاوینی ١٩٣٦ی میوانداری کرد؛ جێسی ئۆوێنز چوار مەدالیای زێڕی بردەوە.
`,
},
}

export const additionalQuestions = Object.entries(bank).flatMap(([category, levels]) =>
  Object.entries(levels).flatMap(([level, text]) =>
    text.trim().split('\n').map((row, index) => {
      const [en, ku, optionsEn, optionsKu, explanationEn, explanationKu] = row.split('|')
      const translated = optionsKu.split(';')
      return {
        id: `${category}-${level}-extra-${index + 1}`,
        category,
        level,
        prompt: { en, ku },
        options: optionsEn.split(';').map((text, id) => ({ id, text: { en: text, ku: translated[id] } })),
        answer: 0,
        explanation: { en: explanationEn, ku: explanationKu },
      }
    })
  )
)
