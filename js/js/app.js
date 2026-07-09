// ==========================================
// E-HONOUR ROLL
// ==========================================

// ---------- PAGES ----------

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// ---------- BUTTONS ----------

const menuButtons = document.querySelectorAll(".menu-btn");

const backHome = document.getElementById("backHome");
const backClasses = document.getElementById("backClasses");


// ---------- TITLES ----------

const yearTitle = document.getElementById("yearTitle");
const classTitle = document.getElementById("classTitle");

// ---------- CONTAINERS ----------

const classGrid = document.getElementById("classGrid");
const awardContainer = document.getElementById("awardContainer");

// ==========================================
// CLASS DATA
// ==========================================

const classes = {

    "Toddlers World":[
        "Coral",
        "Pearl",
        "Quartz",
        "Topaz"
    ],

    "Reception":[
        "Agate",
        "Chalcedony",
        "Diamond",
        "Onyx"
    ],

    "Nursery":[
        "Amber",
        "Jasper",
        "Ruby",
        "Sunstone"
    ],

    "Kindergarten":[
        "Jewel",
        "Jade",
        "Moonstone",
        "Spinel"
    ],

    "Year 2":[
        "Opal",
        "Zircon",
        "Crystal",
        "Garnet"
    ],

    "Year 3":[
        "Gold",
        "Peridot",
        "Turquoise",
        "Ivory"
    ],

    "Year 4":[
        "Emerald",
        "Fluorite",
        "Carnelian",
        "Amethyst"
    ],

    "Year 5":[
        "Larimar",
        "Sapphire",
        "Spectrolite",
        "Tourmaline"
    ],

    "Year 6":[
        "Beryl",
        "Citrine",
        "Achroite"
    ]

};

// ==========================================
// YEARS WITH ACADEMIC HONOURS
// ==========================================

const academicYears = [
    "Year 2",
    "Year 3",
    "Year 4",
    "Year 5",
    "Year 6"
];

// ==========================================
// HONOUR ROLL DATA
// ==========================================

const honourRoll = {

    "Toddlers World": {

        "Coral": [

            {
                award: "Friendly Helper Hero",
                student: "UWAIFO ADRIEL"
            },

            {
                award: "Friendly Helper Heroine",
                student: "EROMONENE EJEMENIDARE JULIA"
            },

            {
                award: "Shape Expert Award",
                student: "JIMFRED-OBAIDIKU OHIREMEN MICAH"
            },

            {
                award: "Kind Heart Award (M)",
                student: "OMOROGIEVA DANIEL OSAZUWA"
            },

            {
                award: "Kind Heart Award (F)",
                student: "DESTINY OMOEGBHA EVANNA"
            },

            {
                award: "Cutest Giggle Champion",
                student: "BRIGHT IMADE ALORA"
            },

            {
                award: "Smart Cookie Award (M)",
                student: "CHIKEZIE KENDRICK KOBICHIMDI"
            },

            {
                award: "Smart Cookie Award (F)",
                student: "ESEWI ABIEYUWA NICOLE"
            },

            {
                award: "Sound Explorer Award (M)",
                student: "OZAH LEONEL EHIZOJIE"
            },

            {
                award: "Sound Explorer Award (F)",
                student: "IHENSEKHIEN ESOSA ANIYAH"
            },

            {
                award: "Number Ace Prince",
                student: "ERIYO WEALTH OSAYUWAMEN"
            },

            {
                award: "Number Ace Princess",
                student: "IMASUEN ABIEYUWA PRUDENCE"
            },

            {
                award: "Growing Strong Award (M)",
                student: "OYAKHILOME OSELUONAIME FREDERICK-PRINCE"
            },

            {
                award: "Growing Strong Award (F)",
                student: "MDONDO ITINADOO HAZEL"
            },

            {
                award: "Montessori Clean-up Champion (M)",
                student: "OYAKHILOME OSELUONAIME FREDERICK-PRINCE"
            },

            {
                award: "Montessori Clean-up Champion (F)",
                student: "EROMONENE EJEMENIDARE JULIA"
            },

            {
                award: "Sparkle Star Award",
                student: "CHIKEZIE KENDRICK KOBICHIMDI"
            },

            {
                award: "Colour Champion",
                student: "OMOROGIEVA DANIEL OSAZUWA"
            }

        ],

    

        "Pearl": [

            {
                award: "Friendly Helper Hero",
                student: "OISAMAYE OISAKHOJE NATHAN"
            },

        {
            award: "Friendly Helper Heroine",
            student: "CHUKWUMAH KIMBERLY ISIOMA"
        },

        {
            award: "Shape Expert Award",
            student: "BAMAWO AMAMIE ZAXTON"
        },

        {
            award: "Kind Heart Award (Male)",
            student: "OBI CHIEDU SAMUEL "
        },

        {
            award: "Kind Heart Award (Female)",
            student: "OSARO EMERY IREDIA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "RICHARD JAYCE UFOMA"
        },

        {
            award: "Smart Cookie Award (Male)",
            student: "UGBOR TOBECHUKWU NATHAN "
        },

        {
            award: "Smart Cookie Award (Female)",
            student: "IDEMUDIA IVIE"
        },

        {
            award: "Sound Explorer Award (Male)",
            student: "BAMAWO AMAMIE ZAXTON "
        },

        {
            award: "Sound Explorer Award (Female)",
            student: "IDEMUDIA IVIE ARMANI "
        },

        {
            award: "Number Ace Prince",
            student: "OISAMAYE OISAKHOJE NATHAN"
        },

        {
            award: "Number Ace Princess",
            student: "UDO SINEMABASI NSIKAK "
        },

        {
            award: "Growing Strong Award (Male)",
            student: "EXCEL UWAIFO"
        },

        {
            award: "Growing Strong Award (Female)",
            student: "OSARO EMERY IREDIA"
        },

        {
            award: "Montessori Clean-up Champion (Male)",
            student: "ELVIS BRYAN OSASERE"
        },

        {
            award: "Montessori Clean-up Champion (Female)",
            student: "AGHEDO ZANA ELOGHOSA "
        },

        {
            award: "Sparkle Star Award",
            student: "UGBOR TOBECHUKWU NATHAN"
        },

        {
            award: "Colour Champion",
            student: "AIGBOGUN ZANE EHIREMEN"
        }

    ],

    "Quartz": [

        {
            award: "Friendly Helper Hero",
            student: "AKHILOMHEN AKHERE PAXTON"
        },

        {
            award: "Friendly Helper Heroine",
            student: "WILLIAMS EFUE CARINA"
        },

        {
            award: "Shape Expert Award",
            student: "JORDAN LUMA"
        },

        {
            award: "Kind Heart Award (Male)",
            student: "AKHILOMHEN AKHERE PAXTON"
        },

        {
            award: "Kind Heart Award (Female)",
            student: "WILLIAMS EFUE CARINA "
        },

        {
            award: "Cutest Giggle Champion",
            student: "AGHEDO-EKATA EBOSETALE DAMIAN"
        },

        {
            award: "Smart Cookie Award (Male)",
            student: "OGBEBOR NIXON OSASERE"

        },

        {
            award: "Smart Cookie Award (Female)",
            student: "EDIAGBONYA MIKAYLA ELOGHOSA"
        },

        {
            award: "Sound Explorer Award (Male)",
            student: "OGHOGHO NOAH"
        },

        {
            award: "Sound Explorer Award (Female)",
            student: "EDIAGBONYA MIKAYLA ELOGHOSA"
        },

        {
            award: "Number Ace Prince",
            student: "ONUORAH CHUKWUEBUKA JOSIAH"
        },

        {
            award: "Number Ace Princess",
            student: "UHUNMWUAGHO AIZENOSA"
        },

        {
            award: "Growing Strong Award (Male)",
            student: "AIWANFO ALLEN OSASENAGA"
        },

        {
            award: "Growing Strong Award (Female)",
            student: "UYI AISOSA IVA"
        },

        {
            award: "Montessori Clean-up Champion (Male)",
            student: "LUMA JORDAN"
        },

        {
            award: "Montessori Clean-up Champion (Female)",
            student: "UHUNMWUAGHO AIZENOSA"
        },

        {
            award: "Sparkle Star Award",
            student: "OGHOGHO NOAH"
        },

        {
            award: "Colour Champion",
            student: "ONUORAH CHUKWUEBUKA JOSIAH"
        }

    ],

        "Topaz": [

        {
            award: "Friendly Helper Hero",
            student: "ARIEMETA EFEMENA BRYAN"
        },

        {
            award: "Friendly Helper Heroine",
            student: "ALLENAOTOR ZARA EFEOMO"
        },

        {
            award: "Shape Expert Award",
            student: "NIGEL UYINMHIN OSAYANGBON"
        },

        {
            award: "Kind Heart Award (Male)",
            student: "AVIOMOH JAYSON AYODELE"
        },

        {
            award: "Kind Heart Award (Female)",
            student: "OMORUYI OZEMWONGIE ALISA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "OJEKERE TREASURE AMIEGHOGHO"
        },

        {
            award: "Smart Cookie Award (Male)",
            student: "ARIEMETA EFEMENA BRYAN"
        },

        {
            award: "Smart Cookie Award (Female)",
            student: "OSEMHEN EHINOMEN AMEERAH"
        },

        {
            award: "Sound Explorer Award (Male)",
            student: "DIBIE KIKACHUKWU NATHAN"
        },

        {
            award: "Sound Explorer Award (Female)",
            student: "OBASEKI AIZEYOSABOR ANNABELLA"
        },

        {
            award: "Number Ace Prince",
            student: "ADEWALE BRYAN AYOMIDE"
        },

        {
            award: "Number Ace Princess",
            student: "OSEMHEN EHINOMEN AMEERAH"
        },

        {
            award: "Growing Strong Award (Male)",
            student: "ILOBA CHIDERA DANIEL"
        },

        {
            award: "Growing Strong Award (Female)",
            student: "OJEKERE AMIEGHOGHO TREASURE"
        },

        {
            award: "Montessori Clean-up Champion (Male)",
            student: "AKPASUBI OMOEHI MEGHAN"
        },

        {
            award: "Montessori Clean-up Champion (Female)",
            student: "OSATOHANMWEN OSAHENRU EDMUND"
        },

        {
            award: "Sparkle Star Award",
            student: "AKPASUBI OMOEHI MEGHAN"
        },

        {
            award: "Colour Champion",
            student: "SIAKA PRAISE OJONUGWA"
        }

    ],
},

"Reception":{
    "Agate": [

        {
            award: "Astounding Attitude",
            student: "IBANIYE DATONJO FAVOUR"
        },

        {
            award: "Literacy King",
            student: "ODIASE EHINOMEN JESSE"
        },

        {
            award: "Literacy Queen",
            student: "IBANIYE DATONJO FAVOUR"
        },

        {
            award: "Numeracy King",
            student: "OSEMHEN IVAN EROMOSELE"
        },

        {
            award: "Numeracy Queen",
            student: "OKEKE ELIANA ZIRACHUKWU"
        },

        {
            award: "Happy Helper",
            student: "OKEKE ELIANA ZIRACHUKWU"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "OMOKHA SIOBHAN"
        },

        {
            award: "Super Reader",
            student: "EGHAREVBA ALVIN OSAWESE"
        },

        {
            award: "Kindness King",
            student: "OSARENTIN RICHIE "
        },

        {
            award: "Kindness Queen",
            student: "AHANNO BETHEL IGUOSADIA"
        },

        {
            award: "Sunbeam",
            student: "IDELEGBAGBON JANAE ABIEYUWA OSIKPEMI"
        },

        {
            award: "Handwriting",
            student: "ADEWUNMI ADEOLA ADEYANJU ERICH"
        },

        {
            award: "Neatest Pupil",
            student: "IRABOR OSAYUWAMEN RUBY"
        },

        {
            award: "Growing Strong",
            student: "KENNETH-AKOUDO JASMINE AYOMIDE"
        },

        {
            award: "Star Award",
            student: "OSEMHEN IVAN EROMOSELE"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "AHANNO BETHEL IGUOSADIA"
        }

    ],

        "Chalcedony": [

        {
            award: "Astounding Attitude",
            student: "IKONAGBON EGHOSA LIYOLATHA"
        },

        {
            award: "Literacy King",
            student: "NZUBECHUKWU JAYDEN KAMSIYOCHUKWU"
        },

        {
            award: "Literacy Queen",
            student: "OSAGIE IWINOSA"
        },

        {
            award: "Numeracy King",
            student: "ONUORA CHIDUBEM ZANE"
        },

        {
            award: "Numeracy Queen",
            student: "EWUARE PRINCESS IRIAGBONSE"
        },

        {
            award: "Happy Helper",
            student: "NZUBECHUKWU JAYDEN KAMSIYOCHUKWU"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "EKHORIYAYI STERLING-GREENE"
        },

        {
            award: "Super Reader",
            student: "CHUKWUEMEKE JANICE"
        },

        {
            award: "Kindness King",
            student: "EWUARE PRINCE AMADINAIYANGBON"
        },

        {
            award: "Kindness Queen",
            student: "UGWOKE CHIDERA"
        },

        {
            award: "Sunbeam",
            student: "KINGSLEY JEREMY"
        },

        {
            award: "Handwriting",
            student: "CHUKWUEMEKE JANICE"
        },

        {
            award: "Neatest Pupil",
            student: "JOHN-SOLOMON JANESSA"
        },

        {
            award: "Growing Strong",
            student: "OBASUYI WEALTH"
        },

        {
            award: "Star Award",
            student: "OSAIGE IWINOSA"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "NZUBECHUKWU JAYDEN KAMSIYOCHUKWU"
        }

    ],

        "Diamond": [

        {
            award: "Astounding Attitude",
            student: "GIDEON NATHAN EHINOMEN"
        },

        {
            award: "Literacy King",
            student: "USIOMWANTA IDAHOSA JASON"
        },

        {
            award: "Literacy Queen",
            student: "EWUARE PRINCESS EVBAKHABOKUN"
        },

        {
            award: "Numeracy King",
            student: "EWUARE PRINCE ODOLIGIE"
        },

        {
            award: "Numeracy Queen",
            student: "ABOH-RICH AYEBANENGIMOTE IVY"
        },

        {
            award: "Happy Helper",
            student: "IGHAGBON ETHAN EHIZOGIE"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "OBAIDIKU JIMFRED AIGBOLOGA"
        },

        {
            award: "Super Reader",
            student: "AIWANFO ALVIN OSAYAMEN"
        },

        {
            award: "Kindness King",
            student: "EFOSA GRACIOUS UWA"
        },

        {
            award: "Kindness Queen",
            student: "OSAJIELE MICHELLE OFURE"
        },

        {
            award: "Sunbeam",
            student: "EWUARE PRINCE UTOMW-ENZAKA"
        },

        {
            award: "Handwriting",
            student: "FRED ZENITA CHIKAMSO"
        },

        {
            award: "Neatest Pupil",
            student: "EGBON SAMUEL ABIEYUWA"
        },

        {
            award: "Growing Strong",
            student: "OSEMWENGIE-IGUODALA ETHAN "
        },

        {
            award: "Star Award",
            student: "IGUE EHINOMEN MILDRED"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "FASEUN NATHAN WONUOLAOLUWA"
        }

    ],

        "Onyx": [

        {
            award: "Astounding Attitude",
            student: "BENYE AXEL"
        },

        {
            award: "Literacy King",
            student: "OSAYANHU NIGEL-UYINMHIN"
        },

        {
            award: "Literacy Queen",
            student: "MERAB EGHOBAMIEN"
        },

        {
            award: "Numeracy King",
            student: "GAVIN OKOJIE"
        },

        {
            award: "Numeracy Queen",
            student: "MBA DAVINA"
        },

        {
            award: "Happy Helper",
            student: "OSAYANHU NIGEL-UYINMHIN"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "SOMTOCHUKWU ONAH"
        },

        {
            award: "Super Reader",
            student: "MERAB EGHOBAMIEN"
        },

        {
            award: "Kindness King",
            student: "GOODLUCK LAWANI"
        },

        {
            award: "Kindness Queen",
            student: "EBUBECHUKWU UKPAKA"
        },

        {
            award: "Sunbeam",
            student: "GAVIN OKOJIE"
        },

        {
            award: "Handwriting",
            student: "MBA DAVINA"
        },

        {
            award: "Neatest Pupil",
            student: "BENYE AXEL"
        },

        {
            award: "Growing Strong",
            student: "AISEOSA DARREN EHIWE"
        },

        {
            award: "Star Award",
            student: "MERAB EGHOBAMIEN"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "MBA DAVINA"
        }

    ],
},

"Nursery":{
        "Amber": [

        {
            award: "Friendly Helper Hero",
            student: "OKOSUN HARVEY EHIREMEN"
        },

        {
            award: "Friendly Helper Heroine",
            student: "OSEGHALE MIKAYLA OFURE"
        },

        {
            award: "Shape Expert Award",
            student: "ATAGHOMAN ASHER EBOSEREMEN"
        },

        {
            award: "Kind Heart Award (M)",
            student: "EDEBILI KING-DAVID ONOSETALE"
        },

        {
            award: "Kind Heart Award (F)",
            student: "ABOLO TAMUNOIBI HADASSAH"
        },

        {
            award: "Cutest Giggle Champion",
            student: "OSUNDE ELOGHOSA ALIONA"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "NJOKU MICAH EHIMWENMA"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "KESENA ELIORA EVIOGHENE"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "OMOREDE KINGRAW IWINOSA"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "OGBEBOR NOELANI ESENOSARUMWEN"
        },

        {
            award: "Number Ace Prince",
            student: "AMAYE ORITSEJIMINEOYO NOSAKHARE"
        },

        {
            award: "Number Ace Princess",
            student: "OSAGHAE-OSAS SERENA"
        },

        {
            award: "Growing Strong Award (M)",
            student: "IBRAHIM MICAH OLAJIDE"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IMASUEN PEARL IWINOSA"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "UYI OSAOSE IVAN"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "AKPATI PREVAIL CHIDINMA"
        },

        {
            award: "Sparkle Star Award",
            student: "OKOUROMI KAREN"
        },

        {
            award: "Colour Champion",
            student: "OKHUAROBO ENOCH EGHOSA"
        }

    ],

        "Jasper": [

        {
            award: "Friendly Helper Hero",
            student: "JAKPA ANIREJUOR ITSE RYAN"
        },

        {
            award: "Friendly Helper Heroine",
            student: "AIBANGBE UWAILA PEACE"
        },

        {
            award: "Shape Expert Award",
            student: "OFIEBOR NADIA CHIZARA"
        },

        {
            award: "Kind Heart Award (M)",
            student: "OMUSI ELOGHOSA ALEX"
        },

        {
            award: "Kind Heart Award (F)",
            student: "OTAGBA ANABORHI MAYA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "ANAGWU CHIAGOZIEM WISDOM"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "EHIMWENMA BENJAMIN OWEN"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "OISAMAIYE IVY OSHUWARE"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "EGHOBAMIEN OSAGUONA DAVID"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "ESEIGBE ALIYAH ONOSE"
        },

        {
            award: "Number Ace Prince",
            student: "GODSPOWER JUSTIN EFEMENA"
        },

        {
            award: "Number Ace Princess",
            student: "ASUELIME ELENOR ONOSETALE"
        },

        {
            award: "Growing Strong Award (M)",
            student: "OSAHON-EKHATOR OSASENAGA LIAM"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IDOWU EBUNOLUWA ELVANA"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "MARTINS LUCIOUS"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "OMORODION ATIRA ODOSA"
        },

        {
            award: "Sparkle Star Award",
            student: "ANIZOR CAMILA CHISOM"
        },

        {
            award: "Colour Champion",
            student: "OGBOMO AINSLEY OMORUYI"
        }

    ],

        "Ruby": [

        {
            award: "Friendly Helper Hero",
            student: "EFOSA-AJAYI ELIYANAH"
        },

        {
            award: "Friendly Helper Heroine",
            student: "EICHIE ODIANOSE RYAN"
        },

        {
            award: "Shape Expert Award",
            student: "EGHOBAMIEN GRACE"
        },

        {
            award: "Kind Heart Award (M)",
            student: "LAWANI ALOAGBAMHE PROSPER"
        },

        {
            award: "Kind Heart Award (F)",
            student: "OGHENEFEJIRO ZURI"
        },

        {
            award: "Cutest Giggle Champion",
            student: "EICHIE ODIANOSE RYAN"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "OSAMWONYI WEALTH"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "OKOSOR TRINITY"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "OSAMWONYI WEALTH"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "DUDU TORISTEJU"
        },

        {
            award: "Number Ace Prince",
            student: "LAWANI ALOAGBAMHE PROSPER"
        },

        {
            award: "Number Ace Princess",
            student: "TERUNGWA CRYSTABEL"
        },

        {
            award: "Growing Strong Award (M)",
            student: "EZEH ELNATHAN"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IYAMU ISOKEN MIRABEL"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "NWIZU NATHANIEL"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "UTOMWEN NORA"
        },

        {
            award: "Sparkle Star Award",
            student: "OKOSOR TRINITY"
        },

        {
            award: "Colour Champion",
            student: "EBEGUE DIAMOND"
        }

    ],

        "Sunstone": [

        {
            award: "Friendly Helper Hero",
            student: "CHUKUMA-ANIEMENA KAINE GIOVANNI"
        },

        {
            award: "Friendly Helper Heroine",
            student: "OSAGIE-EFE OSASOGIE MORAYO ZARA"
        },

        {
            award: "Shape Expert Award",
            student: "ATAGHOMAN ALVIN OSEZUA"
        },

        {
            award: "Kind Heart Award (M)",
            student: "RICHARD JAMIE MAMUYOVWI"
        },

        {
            award: "Kind Heart Award (F)",
            student: "OSAROBO NERIAH OSAYEMWENRE"
        },

        {
            award: "Cutest Giggle Champion",
            student: "OMOBUDE ETINOSA JESSE"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "ANIGBOGU IZUCHUKWU SHILOH"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "OGBUGHALU SHEILA OLANNA"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "ANIGBOGU IZUCHUKWU SHILOH"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "OGBUGHALU SHEILA OLANNA"
        },

        {
            award: "Number Ace Prince",
            student: "TOSAN-JEMERIGBE URIEL UWAWAREN"
        },

        {
            award: "Number Ace Princess",
            student: "OSHOMAH JANICE OSHOZENOYO"
        },

        {
            award: "Growing Strong Award (M)",
            student: "HARISSON NOLAN"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IGBINOBARO IMADE APRIL"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "AKOGUN AYOMIDE DESTINY"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "OSAWENMWENZE ESOSA FEODORA"
        },

        {
            award: "Sparkle Star Award",
            student: "TOSAN-JEMERIGBE URIEL UWAWAREN"
        },

        {
            award: "Colour Champion",
            student: "ESOSA OSASOGIE STEPHANIE"
        }

    ],
},

"Kindergarten":{
        "Jewel": [

    {
        award: "Star Pupil",
        student: "EWUARE PRINCE IDUGBOWA"
    },

    {
        award: "Meritorious Pupil",
        student: "IME-OJEIKERE IKHIDE DAX"
    },

    {
        award: "Commendable Pupil",
        student: "SIMON JEDIDIAH OJIMA"
    },

    {
        award: "Astounding Attitude",
        student: "NOSAKHARE EFE AMELIA"
    },

    {
        award: "Literacy King",
        student: "PAX-OSIFO FRAZER IDAHOSA"
    },

    {
        award: "Literacy Queen",
        student: "ELIJAH AMIRA OBEHI"
    },

    {
        award: "Numeracy King",
        student: "OKOTIE ETHAN ORITSETSEMAYE"
    },

    {
        award: "Numeracy Queen",
        student: "EHOLOR MERCY ARINYA IYAYI"
    },

    {
        award: "Happy Helper",
        student: "OMOROGIUWA KAYLA AIZENOSA"
    },

    {
        award: "Perfect Attendance Pupil",
        student: "AIGBE PAMELA OSARIEMEN"
    },

    {
        award: "Super Reader",
        student: "EWUARE PRINCE IDUGBOWA"
    },

    {
        award: "Kindness King",
        student: "EKENEDARA MUNACHI GERALD"
    },

    {
        award: "Kindness Queen",
        student: "OLOKOR KAYLA"
    },

    {
        award: "Sunbeam of the Class",
        student: "IDRIS KADMIEL ONUCHE-OJO"
    },

    {
        award: "Handwriting",
        student: "IME-OJEIKERE IKHIDE DAX"
    },

    {
        award: "Neatest Pupil",
        student: "OGBEBOR ETHAN OSERIEMEN"
    },

    {
        award: "Growing Strong",
        student: "OKOSUN ESELOSE HENDRIX"
    },

    {
        award: "Montessori Cultural Explorer Award",
        student: "EGBADON JAYDEN EHINOME"
    }

],



    "Jade": [

    {
        award: "Star Pupil",
        student: "IGBINOBA OGHOSA ELNORA"
    },

    {
        award: "Meritorious Pupil",
        student: "OGBEBOR CLARICE"
    },

    {
        award: "Commendable Pupil",
        student: "OLUKU DARIN OGHENEVOVWERO"
    },

    {
        award: "Astounding Attitude",
        student: "OGBEBOR CLARICE"
    },

    {
        award: "Literacy King",
        student: "OLUKU DARIN OGHENEVOVWERO"
    },

    {
        award: "Literacy Queen",
        student: "IGBINOBA OGHOSA ELNORA"
    },

    {
        award: "Numeracy King",
        student: "OKPOGIE OMOREFE OSAHON"
    },

    {
        award: "Numeracy Queen",
        student: "AGHEDO-EKATA DAISY EHINOMEN"
    },

    {
        award: "Happy Helper",
        student: "OGBEBOR CLARICE"
    },

    {
        award: "Perfect Attendance Pupil",
        student: "OLUKU DARIN OGHENEVOVWERO"
    },

    {
        award: "Super Reader",
        student: "OLUKU DARIN OGHENEVOVWERO"
    },

    {
        award: "Kindness King",
        student: "OKPOGIE OMOREFE OSAHON"
    },

    {
        award: "Kindness Queen",
        student: "LEWIS ELISE IFAYENWAN"
    },

    {
        award: "Sunbeam of the Class",
        student: "AGHEDO-EKATA DAISY EHINOMEN"
    },

    {
        award: "Handwriting",
        student: "IGBINOBA OGHOSA ELNORA"
    },

    {
        award: "Neatest Pupil",
        student: "UWUMAROGIE IVANNA OSAWESE"
    },

    {
        award: "Growing Strong",
        student: "OKHUAROBO ELISA ESEOSA"
    },

    {
        award: "Montessori Cultural Explorer Award",
        student: "EGHAREVBA MICHELLE OSAHENOMASE"
    }

],

        "Moonstone": [

    {
        award: "Star Pupil",
        student: "EWUARE-AIMIUWU OSAHERHUNMWEN"
    },

    {
        award: "Meritorious Pupil",
        student: "JOHN-SOLOMON JAYDEN"
    },

    {
        award: "Commendable Pupil",
        student: "SAMEKI-AKHOR JANEL"
    },

    {
        award: "Astounding Attitude",
        student: "EVBUOMWAN JYOTI OSAWANAME"
    },

    {
        award: "Literacy King",
        student: "ASEMOTA FELIX OSAZEMEN"
    },

    {
        award: "Literacy Queen",
        student: "OKAFOR CHIMZITERE SKYLAR"
    },

    {
        award: "Numeracy King",
        student: "EWUARE-AIMIUWU OSAHERHUNMWEN OMOSEFE IYIEWUARE"
    },

    {
        award: "Numeracy Queen",
        student: "SAMEKI-AKHOR JANEL ONOSHOLEMA"
    },

    {
        award: "Happy Helper",
        student: "IBOMOR OGHENEMAIRO PRINCE JOHN"
    },

    {
        award: "Perfect Attendance Pupil",
        student: "NAWEI-JOSHUA PEREZ"
    },

    {
        award: "Super Reader",
        student: "ASEMOTA FELIX OSAZEMEN"
    },

    {
        award: "Kindness King",
        student: "IMASUEN JEDIDIAH"
    },

    {
        award: "Kindness Queen",
        student: "OBI NWAMAKA ELIANA"
    },

    {
        award: "Sunbeam of the Class",
        student: "OROBOSA PRINCE MOSES"
    },

    {
        award: "Handwriting",
        student: "SAMEKI-AKHOR JANEL ONOSHOLEMA"
    },

    {
        award: "Neatest Pupil",
        student: "DAVID YIMEYAHU TZEGULAH DESTA"
    },

    {
        award: "Growing Strong",
        student: "IDRIS KATRIEL UGBEDE-OJO"
    },

    {
        award: "Montessori Cultural Explorer Award",
        student: "OMOIKE-SUNDAY ARIEL OSELUMESE"
    }

],

    "Spinel": [

    {
        award: "Star Pupil",
        student: "CHIKE-LOUIS CHIMAMMA ROYALTY"
    },

    {
        award: "Meritorious Pupil",
        student: "IMASUEN PURITY OSAWESE"
    },

    {
        award: "Commendable Pupil",
        student: "OGBOMO AVERY OMOSEFE"
    },

    {
        award: "Astounding Attitude",
        student: "IRORERE FEDORA OSARUONAMEN"
    },

    {
        award: "Literacy King",
        student: "NJOKU MIRACLE CHUKWEBUKA"
    },

    {
        award: "Literacy Queen",
        student: "CHIKE-LOUIS CHIMAMMA ROYALTY"
    },

    {
        award: "Numeracy King",
        student: "SHAWN ELOGHOSA OSAGIE"
    },

    {
        award: "Numeracy Queen",
        student: "IMASUEN PURITY OSAWESE"
    },

    {
        award: "Happy Helper",
        student: "GODIVA OSESENAGA OKOERI"
    },

    {
        award: "Perfect Attendance Pupil",
        student: "ESEIGBE RYAN OSAMUDIAMEN"
    },

    {
        award: "Super Reader",
        student: "EBEGUE DODIE EFOSE"
    },

    {
        award: "Kindness King",
        student: "ESEIGBE RYAN OSAMUDIAMEN"
    },

    {
        award: "Kindness Queen",
        student: "JANELLE ANIFOWOSHE IFEOLUWA"
    },

    {
        award: "Sunbeam of the Class",
        student: "SHAWN ELOGHOSA OSAGIE"
    },

    {
        award: "Handwriting",
        student: "OMORODION ELOGHOSA HAILEY"
    },

    {
        award: "Neatest Pupil",
        student: "TRUDY OMOKARO IYOBOSA"
    },

    {
        award: "Growing Strong",
        student: "CHRIS LONDIN OKOJIE"
    },

    {
        award: "Montessori Cultural Explorer Award",
        student: "OMOKARO TRUDY IYOBOSA"
    }

],
},

    "Year 2":{
        "Opal": [

    {
        award: "Happy Helper",
        student: "AKOGUN ZION OLUWATOBILOBA"
    },

    {
        award: "Diction Ambassador",
        student: "OKONKWO KODILINYE AZRIEL OBIEFUNA"
    },

    {
        award: "Astounding Attitude",
        student: "ALABI-MARTINS AMORA OYIME"
    },

    {
        award: "Jolly Jokester",
        student: "KESENA HADASSAH OREVAOGHENE"
    },

    {
        award: "Perfect Attendance",
        student: "ESOSA STEFAN EDOMAMWEN"
    },

    {
        award: "Kindness King",
        student: "OKONKWO KODILINYE AZRIEL OBIEFUNA"
    },

    {
        award: "Kindness Queen",
        student: "EDEBILI UDELIA EBOSETALE"
    },

    {
        award: "Perfect Handwriting",
        student: "OBASEKI IMADE ABRIELLA"
    },

    {
        award: "Most Improved",
        student: "OSAMWONYI KARISHMA"
    },

    {
        award: "English King",
        student: "EROMOMENE JACQUES EBINEHITA"
    },

    {
        award: "English Queen",
        student: "OBASEKI IMADE ABRIELLA"
    },

    {
        award: "Maths King",
        student: "OSHIOBUGIE SEAN ABDULSALAM"
    },

    {
        award: "Maths Queen",
        student: "EROMOMENE JACQUES EBINEHITA"
    },

    {
        award: "Topnotch Techie",
        student: "OBASEKI IMADE ABRIELLA"
    },

    {
        award: "Superb Scientist (Male)",
        student: "OBASEKI IMADE ABRIELLA"
    },

    {
        award: "Superb Scientist (Female)",
        student: "ESOSA EDOMAMWEN STEFAN"
    },

    {
        award: "Fantastic Parent Helper",
        student: "NOSAKHARE AUDREY ELOGHOSA, OBASEKI IMADE ABRIELLA"
    },

    {
        award: "Commendable Pupil",
        student: "MRS KATE OSHIOBUGIE"
    },

    {
        award: "Meritorious Pupil",
        student: "EROMOMENE JACQUES EBINEHITA (93.8%)"
    },

    {
        award: "Star Pupil",
        student: "NOSAKHARE AUDREY ELOGHOSA (95.64%)"
    }

],


            "Crystal": [

    {
        award: "Happy Helper",
        student: "TRUSTJAH AISOISE OYAKHILOME"
    },

    {
        award: "Diction Ambassador",
        student: "TRUSTJAH AISOISE OYAKHILOME"
    },

    {
        award: "Astounding Attitude",
        student: "HEAVEN ATIVIE EHINOMEN"
    },

    {
        award: "Jolly Jokester",
        student: "PRESLEY OGBOMO OOSA"
    },

    {
        award: "Perfect Attendance",
        student: "LIGHT ROYALTY NWABUZOR CHIDI"
    },

    {
        award: "Kindness King",
        student: "PRINCE PAUL OROBOSA"
    },

    {
        award: "Kindness Queen",
        student: "DHARA OLUCHI LEWIS"
    },

    {
        award: "Perfect Handwriting",
        student: "DENCY EWEMADE EGHOSA"
    },

    {
        award: "Most Improved",
        student: "EGHOBAMIEN ELIANA ESOSA"
    },

    {
        award: "English King",
        student: "OYAKHIROME TRUSTJAH AISOISE"
    },

    {
        award: "English Queen",
        student: "OMORUYI SHAWNELLE OSERIEMEN"
    },

    {
        award: "Maths King",
        student: "DONALD DEVON IYOSAYI"
    },

    {
        award: "Maths Queen",
        student: "OMORUYI SHAWNELLE OSERIEMEN"
    },

    {
        award: "Topnotch Techie",
        student: "DONALD DEVON IYOSAYI"
    },

    {
        award: "Superb Scientist (Male)",
        student: "DONALD DEVON IYOSAYI"
    },

    {
        award: "Superb Scientist (Female)",
        student: "OMORUYI SHAWNELLE OSERIEMEN"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS ALERO OMOREDE"
    },

    {
        award: "Commendable Pupil",
        student: "EMWINARU DANIELLE EGHOSASERE (96.24%)"
    },

    {
        award: "Meritorious Pupil",
        student: "DONALD DEVON IYOSAYI (96.31%)"
    },

    {
        award: "Star Pupil",
        student: "OMORUYI SHAWNELLE OSERIEMEN (96.65%)"
    }

],
           "Zircon": [

    {
        award: "Happy Helper",
        student: "EDEDUAN ESEOSA DANIELLE"
    },

    {
        award: "Diction Ambassador",
        student: "MEGBELE ORITSEMISAN CLAIRE"
    },

    {
        award: "Astounding Attitude",
        student: "JAMES-FRIDAY MIRACLE"
    },

    {
        award: "Jolly Jokester",
        student: "AIWANFO UYIOSA IVAN"
    },

    {
        award: "Perfect Attendance",
        student: "OSEYOMON OMONGIADE LARISSA"
    },

    {
        award: "Kindness King",
        student: "OSARENTI EFE SUCCESS"
    },

    {
        award: "Kindness Queen",
        student: "OSEGHALE EHINOMEN MICHELLE"
    },

    {
        award: "Perfect Handwriting",
        student: "ONAOLAPO OLUFELAMI SAMUEL"
    },

    {
        award: "Most Improved",
        student: "TAJUDEEN OLUWAFUNMILAYO AISHA"
    },

    {
        award: "English King",
        student: "ONAOLAPO OLUFELAMI SAMUEL"
    },

    {
        award: "English Queen",
        student: "EIDENOJIE KENDRA"
    },

    {
        award: "Maths King",
        student: "ONAOLAPO OLUFELAMI SAMUEL"
    },

    {
        award: "Maths Queen",
        student: "URIEL GIDEON"
    },

    {
        award: "Topnotch Techie",
        student: "ONAOLAPO OLUFELAMI SAMUEL; ANIZOR PRINCESS-PAULINE; IDUOZEE OSAGIE JAYDEN"
    },

    {
        award: "Superb Scientist (Male)",
        student: "ONAOLAPO OLUFELAMI SAMUEL"
    },

    {
        award: "Superb Scientist (Female)",
        student: "ANIZOR PRINCESS-PAULINE"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS ONYINYECHI FRIDAY-JAMES"
    },

    {
        award: "Commendable Pupil",
        student: "ONAOLAPO OLUFELAMI SAMUEL (97.11%)"
    },

    {
        award: "Meritorious Pupil",
        student: "ANIZOR PRINCESS-PAULINE (97.12%)"
    },

    {
        award: "Star Pupil",
        student: "GIDEON URIEL (97.56%)"
    }

],

    "Garnet": [

    {
        award: "Happy Helper",
        student: "AILENOATOR ESEOSE BERNICE"
    },

    {
        award: "Diction Ambassador",
        student: "OKODUWA JASMINE"
    },

    {
        award: "Astounding Attitude",
        student: "MICAH KENDRICK"
    },

    {
        award: "Jolly Jokester",
        student: "EHIMWENMA AMY"
    },

    {
        award: "Perfect Attendance",
        student: "JIMFRED KIM"
    },

    {
        award: "Kindness King",
        student: "NWANKWO FORTUNE"
    },

    {
        award: "Kindness Queen",
        student: "EKPES NADIA OMUWA"
    },

    {
        award: "Perfect Handwriting",
        student: "UKPES JOCHEBED MFREKE"
    },

    {
        award: "Most Improved",
        student: "ONIZE KAMILAH ISSAH"
    },

    {
        award: "English King",
        student: "ADAMS LIGHT SHALOM"
    },

    {
        award: "English Queen",
        student: "MDONDO MALIA DOOCHIVIR"
    },

    {
        award: "Maths King",
        student: "MICAH KENDRICK IDARA"
    },

    {
        award: "Maths Queen",
        student: "OKUNGBOWA CARRISSA UYIOSA"
    },

    {
        award: "Topnotch Techie",
        student: "EGBADON EBOSETALE MICHELLE"
    },

    {
        award: "Superb Scientist (Male)",
        student: "MICAH KENDRICK IDARA"
    },

    {
        award: "Superb Scientist (Female)",
        student: "OKODUWA JASMINE OSELENE; EGBADON EBOSETALE MICHELLE"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS NIKE IDRIS"
    },

    {
        award: "Commendable Pupil",
        student: "MDONDO MALIA DOOCHIVIR (96.1%)"
    },

    {
        award: "Meritorious Pupil",
        student: "UKPES JOCHEBED MFREKE (96.25%)"
    },

    {
        award: "Star Pupil",
        student: "EGBADON EBOSETALE MICHELLE (97.8%)"
    }

],
    },

    "Year 3":{

       "Gold": [

    {
        award: "Happy Helper",
        student: "EDOGIAWERIE FREIDA"
    },

    {
        award: "Diction Ambassador",
        student: "ASEMOTA ZOEY"
    },

    {
        award: "Astounding Attitude",
        student: "DORA OSINACHI OFIA"
    },

    {
        award: "Jolly Jokester",
        student: "OLUWATOBILOBA SAMUEL IBIYOMI"
    },

    {
        award: "Perfect Attendance",
        student: "ONAH MARVEL CHUKWUEMEKA"
    },

    {
        award: "Kindness King",
        student: "OSAMUYI OSAGHAE"
    },

    {
        award: "Kindness Queen",
        student: "DANIELLE AGHEDO-EKATA"
    },

    {
        award: "Perfect Handwriting",
        student: "OSAMUYI OSAGHAE"
    },

    {
        award: "Most Improved",
        student: "IDAHOSA JAYDEN"
    },

    {
        award: "English King",
        student: "TERUNGWA CALEB SHIMA"
    },

    {
        award: "English Queen",
        student: "OMOKARO AVA OMOZUWA"
    },

    {
        award: "Maths King",
        student: "TERUNGWA CALEB SHIMA"
    },

    {
        award: "Maths Queen",
        student: "OMOKARO AVA OMOZUWA"
    },

    {
        award: "Topnotch Techie",
        student: "OSAGHAE OSAMUYI"
    },

    {
        award: "Superb Scientist (Male)",
        student: "TERUNGWA CALEB SHIMA"
    },

    {
        award: "Superb Scientist (Female)",
        student: "OFIA DORA OSINACHI"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS FAITH OMOKARO"
    },

    {
        award: "Commendable Pupil",
        student: "OMOKARO AVA OMOZUWA (94.72%)"
    },

    {
        award: "Meritorious Pupil",
        student: "ALALIBO JASON (97.21%)"
    },

    {
        award: "Star Pupil",
        student: "TERUNGWA CALEB SHIMA (97.97%)"
    }

],

    "Ivory": [

    {
        award: "Happy Helper",
        student: "GOLLEY ZANI"
    },

    {
        award: "Diction Ambassador",
        student: "EHOLOR KING BRYAN IYONAWAN"
    },

    {
        award: "Astounding Attitude",
        student: "IDUORIYEKEMWEN SALOME AISOSA"
    },

    {
        award: "Jolly Jokester",
        student: "EHOLOR KING BRYAN IYONAWAN"
    },

    {
        award: "Perfect Attendance",
        student: "MIKE-ATAYI IVAN OFUKOWOICHO"
    },

    {
        award: "Kindness King",
        student: "IBRAHIM ELNATHAN AYOMIDE"
    },

    {
        award: "Kindness Queen",
        student: "SAMEKI-AKHOR NAILA ONOSHOZE"
    },

    {
        award: "Perfect Handwriting",
        student: "EYO CHERISH ETIDO"
    },

    {
        award: "Most Improved",
        student: "MBA CHINEDU DENIS"
    },

    {
        award: "English King",
        student: "OSAWARU-AUGUSTINE DERRICK ELOGHOSA"
    },

    {
        award: "English Queen",
        student: "LAWANI MARNI OCHUWA"
    },

    {
        award: "Maths King",
        student: "OSAWARU-AUGUSTINE DERRICK ELOGHOSA"
    },

    {
        award: "Maths Queen",
        student: "LAWANI MARNI OCHUWA"
    },

    {
        award: "Topnotch Techie",
        student: "EHOLOR KING BRYAN IYONAWAN"
    },

    {
        award: "Superb Scientist (Male)",
        student: "OMORUYI ETINOSA EZRA"
    },

    {
        award: "Superb Scientist (Female)",
        student: "LAWANI MARNI OCHUWA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS OMORUYI OMOYEMWEN"
    },

    {
        award: "Commendable Pupil",
        student: "OSAWARU-AUGUSTINE DERRICK ELOGHOSA (95.01%)"
    },

    {
        award: "Meritorious Pupil",
        student: "OMORUYI ETINOSA EZRA (95.11%)"
    },

    {
        award: "Star Pupil",
        student: "EHOLOR KING BRYAN IYONAWAN (95.93%)"
    }

],

   "Peridot": [

    {
        award: "Happy Helper",
        student: "ARETHA OMONUWA ESEWI"
    },

    {
        award: "Diction Ambassador",
        student: "OKOEGUALE OSEGALE LUCIOUS"
    },

    {
        award: "Astounding Attitude",
        student: "PEARL IRUOGHENE IBOMOR"
    },

    {
        award: "Jolly Jokester",
        student: "KIMBERLY CHIASOKA EZE"
    },

    {
        award: "Perfect Attendance",
        student: "JOTHAM OGEHENEYOLE AGAHRO and JORAM OGHENEMARO AGAHRO"
    },

    {
        award: "Kindness King",
        student: "LUCIOUS-ISRAEL OSEGHALE OKOEGUALE"
    },

    {
        award: "Kindness Queen",
        student: "PEARL IRUOGHENE IBOMOR"
    },

    {
        award: "Perfect Handwriting",
        student: "OREOLUWA KENNETH COLE"
    },

    {
        award: "Most Improved",
        student: "KIMBERLY CHIASOKA EZE"
    },

    {
        award: "English King",
        student: "ADEJUWON ADEWUNMI"
    },

    {
        award: "English Queen",
        student: "DIOR OBEHIREMEN EBEGUE"
    },

    {
        award: "Maths King",
        student: "JORAM OGHENEMARO AGAHRO"
    },

    {
        award: "Maths Queen",
        student: "OMOROGIUWA OGHOSA KEVA"
    },

    {
        award: "Topnotch Techie",
        student: "ADEJUWON ADEWUNMI"
    },

    {
        award: "Superb Scientist (Male)",
        student: "LUCIOUS-ISRAEL OSEGHALE OKOEGUALE"
    },

    {
        award: "Superb Scientist (Female)",
        student: "FREDA OSOSESE OKODUWA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS OJO JOY"
    },

    {
        award: "Commendable Pupil",
        student: "OMOROGIUWA OGHOSA KEVA (89.48%)"
    },

    {
        award: "Meritorious Pupil",
        student: "FREDA OSOSESE OKODUWA (89.84%)"
    },

    {
        award: "Star Pupil",
        student: "DIOR OBEHIREMEN EBEGUE (90.8%)"
    }

],

        "Turquoise": [

    {
        award: "Happy Helper",
        student: "AKPATI CHINONYE DEBORAH"
    },

    {
        award: "Diction Ambassador",
        student: "UYI IWINOSA SAMARA"
    },

    {
        award: "Astounding Attitude",
        student: "CHUKWUEMEKE IHEOMA FLOURISH"
    },

    {
        award: "Jolly Jokester",
        student: "UWUIGBUSUN CASPER ESEOSA"
    },

    {
        award: "Perfect Attendance",
        student: "NWAOKOLO OSINACHI MATTEO"
    },

    {
        award: "Kindness King",
        student: "OZIEGBE CHRISTOPHER EROMOSELE"
    },

    {
        award: "Kindness Queen",
        student: "ONAIWU IKUOYEMWEN FLOURISH"
    },

    {
        award: "Perfect Handwriting",
        student: "OMOBUDE KENDRA IWINOSA"
    },

    {
        award: "Most Improved",
        student: "UYI IWINOSA SAMARA"
    },

    {
        award: "English King",
        student: "OGBEBOR OSETOFO ESMUND"
    },

    {
        award: "English Queen",
        student: "UYI IWINOSA SAMARA"
    },

    {
        award: "Maths King",
        student: "OGBEBOR OSETOFO ESMUND"
    },

    {
        award: "Maths Queen",
        student: "AKPATI CHINONYE DEBORAH"
    },

    {
        award: "Topnotch Techie",
        student: "OGBEBOR OSETOFO ESMUND"
    },

    {
        award: "Superb Scientist (Male)",
        student: "OGBEBOR OSETOFO ESMUND"
    },

    {
        award: "Superb Scientist (Female)",
        student: "KOSIN EWOMAOGHENE ELIANA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS BLESSING NWAOKOLO"
    },

    {
        award: "Commendable Pupil",
        student: "AKPATI CHINONYE DEBORAH (89.94%)"
    },

    {
        award: "Meritorious Pupil",
        student: "KOSIN EWOMAOGHENE ELIANA (91.68%)"
    },

    {
        award: "Star Pupil",
        student: "OGBEBOR OSETOFO ESMUND (94.1%)"
    }

],
    },

    "Year 4":{
        "Emerald": [

    {
        award: "Happy Helper",
        student: "ASEMOTA JANELLE IDIA"
    },

    {
        award: "Diction Ambassador",
        student: "OKONKWO ISIDORA ARIEL ONAEDO"
    },

    {
        award: "Astounding Attitude",
        student: "WILSON OMOGIADE NATHANIEL"
    },

    {
        award: "Jolly Jokester",
        student: "ELAIHO OSARUGUE EWAENOGHOSA"
    },

    {
        award: "Perfect Attendance",
        student: "ASEMOTA IDIA JANELLE"
    },

    {
        award: "Kindness King",
        student: "WILSON OMOGIADE NATHANIEL"
    },

    {
        award: "Kindness Queen",
        student: "OKUNGOBWA ESEOSA DIAMOND"
    },

    {
        award: "Perfect Handwriting",
        student: "OKONKWO ISIDORA ARIEL ONAEDO"
    },

    {
        award: "Most Improved",
        student: "EBEGUE EHINOMEN DELLA"
    },

    {
        award: "English King",
        student: "OKODUWA OSEREMEN FREDDY"
    },

    {
        award: "English Queen",
        student: "OKONKWO ISIDORA ONAEDO"
    },

    {
        award: "Maths King",
        student: "ABOLO CHRISTOPHER TAMUNO"
    },

    {
        award: "Maths Queen",
        student: "OKONKWO ISIDORA ONAEDO"
    },

    {
        award: "Topnotch Techie",
        student: "OKONKWO ISIDORA ONAEDO"
    },

    {
        award: "Superb Scientist (Male)",
        student: "ABOLO CHRISTOPHER TAMUNO"
    },

    {
        award: "Superb Scientist (Female)",
        student: "OKONKWO ISIDORA ONAEDO"
    },

    {
        award: "Fantastic Parent Helper",
        student: "OKODUWA OSEREMEN FREDDY (90.96%)"
    },

    {
        award: "Commendable Pupil",
        student: "OKONKWO ISIDORA ONAEDO (92.42%)"
    },

    {
        award: "Meritorious Pupil",
        student: "EGBADON IRENOSEN MIRA (94.87%)"
    },

    {
        award: "Star Pupil",
        student: "EGBADON IRENOSEN MIRA (94.87%)"
    }

],

        "Amethyst": [

    {
        award: "Happy Helper",
        student: "ONOKPASA OGHENEFIJIRO ZANNA"
    },

    {
        award: "Diction Ambassador",
        student: "KEHINDE-AKIODE TENIOLA NICOLE"
    },

    {
        award: "Astounding Attitude",
        student: "OMORUYI OSARUGUE SHAWNA"
    },

    {
        award: "Jolly Jokester",
        student: "OBUYE MICHAEL ONYEKACHUKWU"
    },

    {
        award: "Perfect Attendance",
        student: "AILLENOATOR EHINOMEN ZANNETA"
    },

    {
        award: "Kindness King",
        student: "OKUNDAYE JESSE ODUWARE"
    },

    {
        award: "Kindness Queen",
        student: "OKOTIE ORITSETSEMISAN MICHELLE"
    },

    {
        award: "Perfect Handwriting",
        student: "DAFE ALICIA ERUVWU"
    },

    {
        award: "Most Improved",
        student: "OJO BRYAN OSUNKONA"
    },

    {
        award: "English King",
        student: "OKUNDAYE ODUWARE JESSE"
    },

    {
        award: "English Queen",
        student: "ONAOLAPO MOYOSOREOLUWA SOPHIA"
    },

    {
        award: "Maths King",
        student: "OMUSI ALVIN IWINOSA"
    },

    {
        award: "Maths Queen",
        student: "KEHINDE-AKIODE TENIOLA NICOLE"
    },

    {
        award: "Topnotch Techie",
        student: "ONAOLAPO MOYOSOREOLUWA SOPHIA"
    },

    {
        award: "Superb Scientist (Male)",
        student: "OMUSI ALVIN IWINOSA"
    },

    {
        award: "Superb Scientist (Female)",
        student: "ONAOLAPO MOYOSOREOLUWA SOPHIA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS OKOTIE ISABEL OKE"
    },

    {
        award: "Commendable Pupil",
        student: "OMUSI ALVIN IWINOSA (93.79%)"
    },

    {
        award: "Meritorious Pupil",
        student: "KEHINDE-AKIODE TENIOLA NICOLE (98.69%)"
    },

    {
        award: "Star Pupil",
        student: "ONAOLAPO MOYOSOREOLUWA SOPHIA (99.46%)"
    }

],

   "Carnelian": [

    {
        award: "Happy Helper",
        student: "OHENHEN ZOE ELOGHOSA"
    },

    {
        award: "Diction Ambassador",
        student: "OHENHEN ZOE ELOGHOSA"
    },

    {
        award: "Astounding Attitude",
        student: "YUSUF OSHOKE VALERIE"
    },

    {
        award: "Jolly Jokester",
        student: "EKENE DARA SMART CHIMA"
    },

    {
        award: "Perfect Attendance",
        student: "OSAMUYI MAXWELL"
    },

    {
        award: "Kindness King",
        student: "OKEKE BLOSSOM CHIZITERENI"
    },

    {
        award: "Kindness Queen",
        student: "SIMON AGBENU TALIA"
    },

    {
        award: "Perfect Handwriting",
        student: "ROBERT-NWOSU ZURIEL"
    },

    {
        award: "Most Improved",
        student: "OMOLEMEN OSEMUDIAMEN GIOVANNI"
    },

    {
        award: "English King",
        student: "IDODE ONOSHOZE AUDREY"
    },

    {
        award: "English Queen",
        student: "OMOLEMEN OSEMUDIAMEN GIOVANNI"
    },

    {
        award: "Maths King",
        student: "OKE MICHELLE OLUWATONI"
    },

    {
        award: "Maths Queen",
        student: "IDODE AUDREY ONOSHOZE"
    },

    {
        award: "Topnotch Techie",
        student: "OMOLEMEN OSEMUDIAMEN GIOVANNI"
    },

    {
        award: "Superb Scientist (Male)",
        student: "IDODE AUDREY ONOSHOZE"
    },

    {
        award: "Superb Scientist (Female)",
        student: "No Name"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS NNENNA ONWULATA SIMON"
    },

    {
        award: "Commendable Pupil",
        student: "OZA EHINOMEN LORENZO (92.28%)"
    },

    {
        award: "Meritorious Pupil",
        student: "IDODE AUDREY ONOSHOZE (95.33%)"
    },

    {
        award: "Star Pupil",
        student: "OMOLEMEN OSEMUDIAMEN GIOVANNI (96.46%)"
    }

],

       "Fluorite": [

    {
        award: "Happy Helper",
        student: "AHANNO OSAKAROME BERNICE"
    },

    {
        award: "Diction Ambassador",
        student: "EDOSA IYAYI EDOSA"
    },

    {
        award: "Astounding Attitude",
        student: "EKHATOR BLESSING OSASOGIE"
    },

    {
        award: "Jolly Jokester",
        student: "OSASENAGA DAVID AIWANFO"
    },

    {
        award: "Perfect Attendance",
        student: "EKHATOR BLESSING OSASOGIE"
    },

    {
        award: "Kindness King",
        student: "OWIE OSARODION JOSHUA"
    },

    {
        award: "Kindness Queen",
        student: "BERNICE OSAKAROME AHANNO"
    },

    {
        award: "Perfect Handwriting",
        student: "CHIKE-LOUIS CHIZITERE TREASURE"
    },

    {
        award: "Most Improved",
        student: "FASEUN JAYEOLAOLUWA DAVINA"
    },

    {
        award: "English King",
        student: "EBEDE JAYDEN IFECHUKWUDE"
    },

    {
        award: "English Queen",
        student: "CHIKE-LOUIS TREASURE CHIZITERE"
    },

    {
        award: "Maths King",
        student: "OSAIGBOVO GODSWILL ONYANIONYA"
    },

    {
        award: "Maths Queen",
        student: "EZIKPE CHUKWUMA IDIKA"
    },

    {
        award: "Topnotch Techie",
        student: "CHIKE-LOUIS TREASURE CHIZITERE"
    },

    {
        award: "Superb Scientist (Male)",
        student: "EBEDE JAYDEN IFECHUKWUDE"
    },

    {
        award: "Superb Scientist (Female)",
        student: "AHANNO OSAKAROME BERNICE"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS EKHATOR MAUREEN"
    },

    {
        award: "Commendable Pupil",
        student: "IME-OJEIKERE DECLAN OJEAGA (93.56%)"
    },

    {
        award: "Meritorious Pupil",
        student: "CHIKE-LOUIS TREASURE CHIZITERE (95.85%)"
    },

    {
        award: "Star Pupil",
        student: "EBEDE JAYDEN IFECHUKWUDE (96.44%)"
    }

],


       
    },

    "Year 5":{

       "Sapphire": [

    {
        award: "Happy Helper",
        student: "OSUNDE NOGHEGHASE DONALD"
    },

    {
        award: "Diction Ambassador",
        student: "IKPONMWOSA ABEL EXCEL"
    },

    {
        award: "Astounding Attitude",
        student: "NWANKWO KAMSIYOCHUKWU BLOSSOM"
    },

    {
        award: "Jolly Jokester",
        student: "AKINBILE OLUWASIKEMI OMOTENIOLA PEACE"
    },

    {
        award: "Perfect Attendance",
        student: "AKINBILE OLUWASIKEMI OMOTENIOLA PEACE"
    },

    {
        award: "Kindness King",
        student: "IKPONMWOSA ABEL EXCEL"
    },

    {
        award: "Kindness Queen",
        student: "OMORODION OSARUGUE NELLY"
    },

    {
        award: "Perfect Handwriting",
        student: "NWAFOR KOSISOCHUKWU MICHAEL"
    },

    {
        award: "Most Improved",
        student: "OBASEKI GABRIELLA OMOSEDE"
    },

    {
        award: "English King",
        student: "NWAFOR KOSISOCHUKWU MICHAEL"
    },

    {
        award: "English Queen",
        student: "AKINBILE OLUWASIKEMI OMOTENIOLA PEACE"
    },

    {
        award: "Maths King",
        student: "NWAFOR KOSISOCHUKWU MICHAEL"
    },

    {
        award: "Maths Queen",
        student: "OMOBUDE UWA LAURA"
    },

    {
        award: "Topnotch Techie",
        student: "NWAFOR KOSISOCHUKWU MICHAEL"
    },

    {
        award: "Superb Scientist (Male)",
        student: "NWAFOR KOSISOCHUKWU MICHAEL"
    },

    {
        award: "Superb Scientist (Female)",
        student: "AKINBILE OLUWASIKEMI OMOTENIOLA PEACE"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS AZUKA FRANCISCA NWAFOR"
    },

    {
        award: "Commendable Pupil",
        student: "OMOBUDE UWA LAURA (85.32%)"
    },

    {
        award: "Meritorious Pupil",
        student: "AKINBILE OLUWASIKEMI OMOTENIOLA PEACE (90.6%)"
    },

    {
        award: "Star Pupil",
        student: "NWAFOR KOSISOCHUKWU MICHAEL (94.48%)"
    }

],

        "Larima": [

    {
        award: "Happy Helper",
        student: "NZUBECHUKWU CHIZITERE HANSEL"
    },

    {
        award: "Diction Ambassador",
        student: "OGUNRINDE KIMBERLY DARASIMI"
    },

    {
        award: "Astounding Attitude",
        student: "OJIEFOH TIMEYIN EROMOSELE"
    },

    {
        award: "Jolly Jokester",
        student: "OSAHON-EKHATOR ESEOSA"
    },

    {
        award: "Perfect Attendance",
        student: "EHIAGHE DAVID OSEIKHUEMEN"
    },

    {
        award: "Kindness King",
        student: "ORONSAYE ALEXANDER OSAYANDE"
    },

    {
        award: "Kindness Queen",
        student: "IGHODARO OGHOSA RINA"
    },

    {
        award: "Perfect Handwriting",
        student: "IDELE ELIANA ETINOSA"
    },

    {
        award: "Most Improved",
        student: "IMASUEN PARIS ISOKEN"
    },

    {
        award: "English King",
        student: "OJIEFOH EROMOSELE"
    },

    {
        award: "English Queen",
        student: "BANKOLE AFOLASHADE MELINDA"
    },

    {
        award: "Maths King",
        student: "NZUBECHUKWU CHIZITERE HANSEL"
    },

    {
        award: "Maths Queen",
        student: "BANKOLE AFOLASHADE MELINDA"
    },

    {
        award: "Topnotch Techie",
        student: "BANKOLE AFOLASHADE MELINDA"
    },

    {
        award: "Superb Scientist (Male)",
        student: "NZUBECHUKWU CHIZITERE HANSEL"
    },

    {
        award: "Superb Scientist (Female)",
        student: "BANKOLE AFOLASHADE MELINDA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "DR. MRS PHILIPA EHONDOR ONIYAMA"
    },

    {
        award: "Commendable Pupil",
        student: "OGUNRINDE KIMBERLY DARASIMI (91.05%)"
    },

    {
        award: "Meritorious Pupil",
        student: "NZUBECHUKWU CHIZITERE HANSEL (93.8%)"
    },

    {
        award: "Star Pupil",
        student: "BANKOLE AFOLASHADE MELINDA (94.86%)"
    }

],

        "Spectrolite": [

    {
        award: "Happy Helper",
        student: "AKHERE SOLOMON PURITY"
    },

    {
        award: "Diction Ambassador",
        student: "AKHERE SOLOMON PURITY"
    },

    {
        award: "Astounding Attitude",
        student: "EFE OSAZUWA OSAYUWAMEN ELLAISIA"
    },

    {
        award: "Jolly Jokester",
        student: "IDUORIYEKEMWEN SHILOH"
    },

    {
        award: "Perfect Attendance",
        student: "EBEGUE EHIREMEN DARREN"
    },

    {
        award: "Kindness King",
        student: "ONAIWU OSAHOSA RAPHAEL"
    },

    {
        award: "Kindness Queen",
        student: "PAX-OSIFO FLORINE"
    },

    {
        award: "Perfect Handwriting",
        student: "EDOSOMWAN DAVID OGHOSA"
    },

    {
        award: "Most Improved",
        student: "EFE OSAZUWA OSAYUWAMEN ELLAISIA"
    },

    {
        award: "English King",
        student: "EDOSOMWAN DAVID OGHOSA"
    },

    {
        award: "English Queen",
        student: "CHUKWUNEDU ADELE BENYE"
    },

    {
        award: "Maths King",
        student: "BAMAWO ZANE NAYISE"
    },

    {
        award: "Maths Queen",
        student: "PAX-OSIFO IWINOSA FLORINE"
    },

    {
        award: "Topnotch Techie",
        student: "DUORIYEKEMWEN OGHOSA SHILOH"
    },

    {
        award: "Superb Scientist (Male)",
        student: "BAMAWO ZANE NAYISE"
    },

    {
        award: "Superb Scientist (Female)",
        student: "OMOSEFE ODUWA EL-FREDA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS JOY EDOSOMWAN"
    },

    {
        award: "Commendable Pupil",
        student: "BENYE CHUKWUNEDU ADELE (83.26%)"
    },

    {
        award: "Meritorious Pupil",
        student: "EDOSOMWAN DAVID OGHOSA (87.74%)"
    },

    {
        award: "Star Pupil",
        student: "BAMAWO NAYISE ZANE (89.42%)"
    }

],

       "Tourmaline": [

    {
        award: "Happy Helper",
        student: "OBI BERNICE IFEOMA"
    },

    {
        award: "Diction Ambassador",
        student: "ELIORA BARLOW"
    },

    {
        award: "Astounding Attitude",
        student: "NWAFOR KAMSIYOCHUKWU MICHELLE"
    },

    {
        award: "Jolly Jokester",
        student: "OSAYANDE OSAHENI MASON"
    },

    {
        award: "Perfect Attendance",
        student: "OSAYANDE OSAHENI MASON"
    },

    {
        award: "Kindness King",
        student: "JARET CHUKWUEMEKE"
    },

    {
        award: "Kindness Queen",
        student: "IDOWU EYITOLA ELSA"
    },

    {
        award: "Perfect Handwriting",
        student: "NWAFOR KAMSIYOCHUKWU MICHELLE"
    },

    {
        award: "Most Improved",
        student: "OSAYANDE OSAHENI MASON"
    },

    {
        award: "English King",
        student: "IKIDI TIMIPA JAYDEN"
    },

    {
        award: "English Queen",
        student: "NWAFOR KAMSIYOCHUKWU MICHELLE"
    },

    {
        award: "Maths King",
        student: "IKIDI TIMIPA JAYDEN"
    },

    {
        award: "Maths Queen",
        student: "OKPUNU ONOSETALE EARNA"
    },

    {
        award: "Topnotch Techie",
        student: "IKIDI TIMIPA JAYDEN"
    },

    {
        award: "Superb Scientist (Male)",
        student: "IKIDI TIMIPA JAYDEN"
    },

    {
        award: "Superb Scientist (Female)",
        student: "NWAFOR KAMSIYOCHUKWU MICHELLE"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS ONYINYECHI PRECIOUS JAMES-FRIDAY"
    },

    {
        award: "Commendable Pupil",
        student: "OKPUNU ONOSETALE EARNA (89.71%)"
    },

    {
        award: "Meritorious Pupil",
        student: "NWAFOR KAMSIYOCHUKWU MICHELLE (90.27%)"
    },

    {
        award: "Star Pupil",
        student: "IKIDI TIMIPA JAYDEN (90.20%)"
    }

],
    },

    "Year 6":{

       "Beryl": [

    {
        award: "Happy Helper",
        student: "ONAOLAPO OLUWADAMILADE SOLOMON"
    },

    {
        award: "Diction Ambassador",
        student: "EDOSA-IYAYI OSAIVBIE"
    },

    {
        award: "Astounding Attitude",
        student: "ARCHIBONG KUFRE MIKEL"
    },

    {
        award: "Jolly Jokester",
        student: "EBHOHIMHEN ONOSETALE NELLY"
    },

    {
        award: "Perfect Attendance",
        student: "IKIDI WOYENGIPREYE JANELLE"
    },

    {
        award: "Kindness King",
        student: "AJAYI AYOMIDE JAYDEN"
    },

    {
        award: "Kindness Queen",
        student: "IZEKOR OSASUMWEN SKYLAR"
    },

    {
        award: "Perfect Handwriting",
        student: "ELBERT-ODEH OSASERE JAYDEN"
    },

    {
        award: "Most Improved",
        student: "ELBERT-ODEH OSASERE JAYDEN"
    },

    {
        award: "English King",
        student: "ONAOLAPO OLUWADEMILADE SOLOMON"
    },

    {
        award: "English Queen",
        student: "OLUBUNMI ENIOLAOLUWA JEDIDIAH"
    },

    {
        award: "Maths King",
        student: "ONAOLAPO OLUWADEMILADE SOLOMON"
    },

    {
        award: "Maths Queen",
        student: "EDOSA-IYAYI OSAIVBIE"
    },

    {
        award: "Topnotch Techie",
        student: "EDOSA-IYAYI OSAIVBIE"
    },

    {
        award: "Superb Scientist (Male)",
        student: "ONAOLAPO OLUWADEMILADE SOLOMON"
    },

    {
        award: "Superb Scientist (Female)",
        student: "ASEMOTA NICOLE IWINOSA"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS KEHINDE AJAYI"
    },

    {
        award: "Commendable Pupil",
        student: "EDOSA-IYAYI OSAIVBIE (89.3%)"
    },

    {
        award: "Meritorious Pupil",
        student: "IKIDI JANELLE WOYENGIPREYE (90.67%)"
    },

    {
        award: "Star Pupil",
        student: "ONAOLAPO OLUWADEMILADE SOLOMON (94.09%)"
    }

],

    "Citrine": [

    {
        award: "Happy Helper",
        student: "EMERALD EHIREMEN OJERIAKHI"
    },

    {
        award: "Diction Ambassador",
        student: "IZOSA NATHAN ASEMOTA"
    },

    {
        award: "Astounding Attitude",
        student: "DAVID EDIKIAN ESSIEN"
    },

    {
        award: "Jolly Jokester",
        student: "SOLOMON-KING OSAHENRUMWEN OSAYATIN-EWEKA"
    },

    {
        award: "Perfect Attendance",
        student: "VALERIE OCHANYA MIKE-ATAYI"
    },

    {
        award: "Kindness King",
        student: "EMERALD EHIREMEN OJERIAKHI"
    },

    {
        award: "Kindness Queen",
        student: "BERNICE EMOESOMI ONWUDE MAMAPI"
    },

    {
        award: "Perfect Handwriting",
        student: "AADEN ERONMWON OGBOMO"
    },

    {
        award: "Most Improved",
        student: "HAMILTON EYIMOFE TENUMAH"
    },

    {
        award: "English King",
        student: "ALBERT OGHENE-OCHUKO DAFE"
    },

    {
        award: "English Queen",
        student: "EBINEHITA AVERY OZAH"
    },

    {
        award: "Maths King",
        student: "SOLOMON-KING OSATIN-EWEKA"
    },

    {
        award: "Maths Queen",
        student: "EBINEHITA AVERY OZAH"
    },

    {
        award: "Topnotch Techie",
        student: "SOLOMON-KING OSAHENRUMWEN OSAYATIN-EWEKA"
    },

    {
        award: "Superb Scientist (Male)",
        student: "EBINEHITA AVERY OZAH"
    },

    {
        award: "Superb Scientist (Female)",
        student: "EBINEHITA AVERY OZAH"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS OSAHON EKHATOR"
    },

    {
        award: "Commendable Pupil",
        student: "ALBERT OGHENE-OCHUKO DAFE (90.43%)"
    },

    {
        award: "Meritorious Pupil",
        student: "SOLOMON-KING OSAHENRUMWEN OSAYATIN-EWEKA (91.28%)"
    },

    {
        award: "Star Pupil",
        student: "EBINEHITA AVERY OZAH (96.37%)"
    }

],

        "Achroite": [

    {
        award: "Happy Helper",
        student: "OSASUYI DANIEL ERIYO"
    },

    {
        award: "Diction Ambassador",
        student: "IFEANYICHUKWU MAXWELL OBUYE"
    },

    {
        award: "Astounding Attitude",
        student: "ZOE EFEOGHENE ONOKPASA"
    },

    {
        award: "Jolly Jokester",
        student: "VIAN CHIMAOBI CHIDIEBERE"
    },

    {
        award: "Perfect Attendance",
        student: "ZOE EFEOGHENE ONOKPASA"
    },

    {
        award: "Kindness King",
        student: "OSASUYI DANIEL ERIYO"
    },

    {
        award: "Kindness Queen",
        student: "SOPHIA CHIKANYIMA FRED"
    },

    {
        award: "Perfect Handwriting",
        student: "OLUWAKEMI DANIELLA OSHO"
    },

    {
        award: "Most Improved",
        student: "SOPHIA CHIKANYIMA FRED"
    },

    {
        award: "English King",
        student: "OFUKOCHO JOSHUA SIMON"
    },

    {
        award: "English Queen",
        student: "OLUWAKEMI DANIELLA OSHO"
    },

    {
        award: "Maths King",
        student: "OFUKOCHO JOSHUA SIMON"
    },

    {
        award: "Maths Queen",
        student: "OLUWAKEMI DANIELLA OSHO"
    },

    {
        award: "Topnotch Techie",
        student: "OFUKOCHO JOSHUA SIMON"
    },

    {
        award: "Superb Scientist (Male)",
        student: "OFUKOCHO JOSHUA SIMON"
    },

    {
        award: "Superb Scientist (Female)",
        student: "OLUWAKEMI DANIELLA OSHO"
    },

    {
        award: "Fantastic Parent Helper",
        student: "MRS OSARIEMEN UWUIGBUSUN"
    },

    {
        award: "Commendable Pupil",
        student: "VIAN CHIMAOBI CHIDIEBERE (86.04%)"
    },

    {
        award: "Meritorious Pupil",
        student: "OLUWAKEMI DANIELLA OSHO (93.4%)"
    },

    {
        award: "Star Pupil",
        student: "OFUKOCHO JOSHUA SIMON (95.15%)"
    }

],
    }
}
// ==========================================
// CURRENT SELECTION
// ==========================================

let currentYear = "";
let currentClass = "";

// ==========================================
// OPEN PAGE TWO
// ==========================================

menuButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        currentYear = button.dataset.year;

        yearTitle.textContent = currentYear;

        page1.style.display = "none";

        page2.style.display = "flex";

        loadClasses(currentYear);

    });

});

// ==========================================
// LOAD CLASSES
// ==========================================

function loadClasses(year){

    classGrid.innerHTML = "";

    const list = classes[year];

    if(!list){

        classGrid.innerHTML = "<p>No classes available.</p>";

        return;

    }

    list.forEach(className=>{

        const button = document.createElement("button");

        button.className = "menu-btn";

        button.textContent = className;

        button.addEventListener("click",()=>{

            openHonourRoll(year,className);

        });

        classGrid.appendChild(button);

    });

}

// ==========================================
// OPEN HONOUR ROLL
// ==========================================

function openHonourRoll(year, className){

    currentYear = year;
    currentClass = className;

    classTitle.textContent = year + " - " + className;

    page2.style.display = "none";
    page3.style.display = "flex";

    // Clear previous content
    awardContainer.innerHTML = "";

    // Academic Honours (Year 2 - Year 6 only)

    if(academicYears.includes(year)){

        const academicDiv = document.createElement("div");
        academicDiv.id = "academicAwards";

        awardContainer.appendChild(academicDiv);

        displayAcademicHonours(year);

    }

    // Normal Class Awards

    const classDiv = document.createElement("div");
    classDiv.id = "classAwards";

    awardContainer.appendChild(classDiv);

    // Get the awards for the selected class

    const awards = honourRoll[year][className] || [];

    if(awards.length === 0){

        classDiv.innerHTML = `

            <div class="no-data">

                No awards added yet.

            </div>

        `;

        return;

    }

    awards.forEach(item=>{

        const card = document.createElement("div");

        card.className = "award-card";

        card.innerHTML = `

            <div class="award-left">

                <div class="award-icon">🏆</div>

                <div>

                    <div class="award-title">

                        ${item.award}

                    </div>

                </div>

            </div>

            <div class="student-name">

                ${item.student}

            </div>

        `;

        classDiv.appendChild(card);

    });

}
// ==========================================
// DISPLAY ACADEMIC HONOURS
// ==========================================

function displayAcademicHonours(year){

    const academicContainer = document.getElementById("academicAwards");

    if(!academicContainer) return;

    const awards = honourRoll[year]?.[currentClass] || [];

    const star = awards.find(a => a.award === "Star Pupil") || {student:"No Name"};
    const merit = awards.find(a => a.award === "Meritorious Pupil") || {student:"No Name"};
    const commend = awards.find(a => a.award === "Commendable Pupil") || {student:"No Name"};
    const graduate = awards.find(a => a.award === "Best Graduating Student") || {student:"No Name"};

    let html = "";

    html += `

    <div class="award-card star-card">

        <div class="award-left">

            <div class="award-icon">⭐</div>

            <div class="award-title">
                Star Pupil
            </div>

        </div>

        <div class="student-name">
            ${star.student}
        </div>

    </div>

    <div class="award-card meritorious-card">

        <div class="award-left">

            <div class="award-icon">🥈</div>

            <div class="award-title">
                Meritorious Pupil
            </div>

        </div>

        <div class="student-name">
            ${merit.student}
        </div>

    </div>

    <div class="award-card commendable-card">

        <div class="award-left">

            <div class="award-icon">🥉</div>

            <div class="award-title">
                Commendable Pupil
            </div>

        </div>

        <div class="student-name">
            ${commend.student}
        </div>

    </div>

    `;

    if(year === "Year 6"){

        html += `

        <div class="award-card graduating-card">

            <div class="award-left">

                <div class="award-icon">🏆</div>

                <div class="award-title">
                    Best Graduating Student<br>
                    2025/2026 Academic Session
                </div>

            </div>

            <div class="student-name">
                ${graduate.student}
            </div>

        </div>

        `;

    }

    academicContainer.innerHTML = html;

}

// ==========================================
// BACK BUTTONS
// ==========================================

backHome.addEventListener("click",()=>{

    page2.style.display="none";

    page1.style.display="flex";

});

backClasses.addEventListener("click",()=>{

    page3.style.display="none";

    page2.style.display="flex";

});

