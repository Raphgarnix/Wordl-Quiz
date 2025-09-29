const body = document.getElementById('body');
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);


const ArrayDeutscheWörter = [
    "aas", "abt", "ach", "aff", "akt", "alb", "all", "alt", "ami", "amt",
    "ant", "anz", "apf", "arm", "art", "arz", "ast", "ate", "auf", "aug",
    "aus", "axi", "axt", "bad", "bag", "bal", "ban", "bar", "bau", "baz",
    "bein", "berg", "bett", "bier", "bild", "biss", "bit", "blatt", "blick",
    "blut", "bock", "bogen", "bohne", "bord", "brot", "buch", "bund", "burg",
    "bus", "butter", "code", "dach", "dank", "datei", "datum", "deal", "degen",
    "dich", "dieb", "ding", "dino", "dolch", "dom", "dorf", "dorn", "drache",
    "druck", "ecke", "ehe", "eiche", "eier", "eimer", "ein", "eis", "elf",
    "ende", "engel", "erbe", "erde", "erz", "esel", "essen", "fach", "faden",
    "fahne", "faktor", "fall", "falsch", "falter", "faser", "faust", "feder",
    "fehler", "feld", "fenster", "ferne", "fest", "feuer", "fibel", "fisch",
    "flasche", "fleck", "flucht", "flug", "fluss", "form", "frage", "frei",
    "fremd", "frist", "frosch", "frucht", "fuchs", "funk", "furcht", "gabel",
    "gans", "garten", "gast", "gebot", "gedanke", "geist", "geld", "genie",
    "gericht", "gesetz", "gestalt", "getreide", "gewalt", "gift", "glas",
    "glück", "gold", "gott", "grab", "gramm", "gras", "grat", "grau",
    "greis", "grenze", "grippe", "gross", "grund", "gruppe", "hafen", "hahn",
    "hand", "haufen", "haus", "heft", "heide", "heim", "henkel", "herd",
    "herr", "herz", "hilfe", "hirn", "hirsch", "hitze", "hoch", "hof",
    "holz", "honig", "huhn", "hülse", "humor", "hund", "hunger", "hut",
    "idee", "idol", "igel", "insel", "jacke", "jagd", "jahr", "jazz",
    "joch", "jod", "joghurt", "jota", "jagd", "kabel", "kakao", "kalb",
    "kamm", "kanal", "kante", "karte", "kasten", "kater", "kauf", "keil",
    "kelch", "keller", "kern", "kerze", "kette", "kiefer", "kind", "kinn",
    "kippe", "kirche", "kiste", "kittel", "klage", "klammer", "klang", "klaue",
    "kleid", "klein", "klima", "klinge", "klotz", "knabe", "knall", "knapp",
    "knast", "knie", "knopf", "kochen", "code", "comic", "couch", "creme",
    "dach", "dame", "dank", "datei", "datum", "decke", "degen", "dehn",
    "deich", "demut", "denk", "depot", "derb", "dieb", "dien", "dies",
    "ding", "dirn", "disko", "doch", "dolch", "dom", "dorf", "dorn",
    "drache", "draht", "dreck", "druck", "duft", "dumm", "dung", "durst",
    "ebbe", "ecke", "echo", "echt", "ecke", "edel", "efeu", "ehe",
    "eher", "ehr", "eiche", "eier", "eifer", "eigen", "eil", "eimer",
    "ein", "eins", "eisen", "eisig", "eitel", "ekel", "elch", "elend",
    "elf", "eltern", "empör", "ende", "eng", "enkel", "enzian", "erbe",
    "erde", "erz", "esel", "essen", "etage", "etappe", "ethik", "etwa",
    "etwas", "eule", "euro", "ewig", "exakt", "extra", "fabel", "fach",
    "faden", "fahne", "faktor", "fall", "falsch", "falter", "faser", "faust",
    "feder", "fehler", "feld", "fenster", "ferne", "fest", "feuer", "fibel",
    "fisch", "flasche", "fleck", "flucht", "flug", "fluss", "form", "frage",
    "frei", "fremd", "frist", "frosch", "frucht", "fuchs", "funk", "furcht",
    "gabel", "gans", "garten", "gast", "gebot", "gedanke", "geist", "geld",
    "genie", "gericht", "gesetz", "gestalt", "getreide", "gewalt", "gift",
    "glas", "glück", "gold", "gott", "grab", "gramm", "gras", "grat",
    "grau", "greis", "grenze", "grippe", "gross", "grund", "gruppe", "hafen",
    "hahn", "hand", "haufen", "haus", "heft", "heide", "heim", "henkel",
    "herd", "herr", "herz", "hilfe", "hirn", "hirsch", "hitze", "hoch",
    "hof", "holz", "honig", "huhn", "hülse", "humor", "hund", "hunger",
    "hut", "idee", "idol", "igel", "insel", "jacke", "jagd", "jahr",
    "jazz", "joch", "jod", "joghurt", "jota", "jagd", "kabel", "kakao",
    "kalb", "kamm", "kanal", "kante", "karte", "kasten", "kater", "kauf",
    "keil", "kelch", "keller", "kern", "kerze", "kette", "kiefer", "kind",
    "kinn", "kippe", "kirche", "kiste", "kittel", "klage", "klammer", "klang",
    "klaue", "kleid", "klein", "klima", "klinge", "klotz", "knabe", "knall",
    "knapp", "knast", "knie", "knopf", "kochen", "kohl", "komma", "konto",
    "kopf", "korb", "korn", "kran", "kreis", "krug", "küche", "kufe",
    "kugel", "kuh", "kunde", "kunst", "kuss", "lac", "lach", "lack",
    "lade", "lager", "lampe", "land", "lang", "las", "last", "lauf",
    "laut", "leben", "leer", "lehm", "leihe", "leim", "leise", "lemur",
    "lern", "lese", "lette", "leute", "licht", "lieb", "lied", "lilie",
    "linde", "linie", "lippe", "list", "loch", "löffel", "lohn", "lokal",
    "lösung", "lot", "luchs", "luft", "luke", "lunch", "lust", "lutz",
    "luxus", "magen", "mal", "mann", "mantel", "mark", "maske", "mast",
    "matte", "maus", "meer", "mehl", "meile", "mein", "menge", "mensch",
    "merkur", "messe", "miete", "milch", "minze", "mitte", "mode", "monat",
    "mond", "moral", "mücke", "mühle", "mund", "musik", "nabel", "nacht",
    "nadel", "nagel", "name", "narr", "nase", "nass", "natur", "nebel",
    "neid", "nerv", "nest", "netz", "neu", "nicht", "niete", "nil",
    "nord", "note", "nuss", "ober", "ohr", "olive", "oma", "omen",
    "onkel", "oper", "ordnen", "ort", "ose", "osten", "otter", "paar",
    "pack", "page", "palme", "panik", "papier", "parat", "park", "partei",
    "pass", "pate", "pause", "pazifik", "pedal", "pech", "peer", "pelz",
    "pension", "perle", "pfad", "pfahl", "pfand", "pfeil", "pferd", "pflege",
    "pflug", "pfote", "pfund", "pilot", "pilz", "ping", "piste", "pixel",
    "plan", "platte", "platz", "plus", "pocke", "pokal", "pol", "polizei",
    "port", "post", "prinz", "probe", "prof", "programm", "projekt", "prosa",
    "pudel", "pult", "punkt", "puste", "putz", "qual", "quark", "quelle",
    "quittung", "rabatt", "rache", "rad", "radio", "rahmen", "rampe", "rand",
    "rat", "raub", "rauch", "raupe", "raum", "rebe", "recht", "rede",
    "regen", "reich", "reif", "reihe", "reim", "reise", "reiz", "rennen",
    "rente", "rest", "reue", "rhein", "richtig", "rief", "riese", "rind",
    "ring", "rinne", "rippe", "riss", "ritter", "roboter", "rock", "roh",
    "rolle", "rose", "rost", "rot", "rücken", "ruf", "ruhe", "rumpf",
    "rund", "rute", "saal", "sache", "sack", "safari", "saft", "säge",
    "sahne", "saison", "salat", "salz", "samen", "sammeln", "samt", "sand",
    "sankt", "sarg", "satt", "satz", "sau", "sauer", "schaf", "schal",
    "schein", "scherz", "schiff", "schlaf", "schloss", "schmal", "schnur",
    "schon", "schrank", "schuh", "schuld", "schwan", "schwer", "see", "segel",
    "segen", "sehen", "sehr", "seide", "seil", "seite", "sekunde", "selten",
    "semmel", "senden", "senf", "sense", "serie", "session", "setzen", "sicht",
    "sieb", "silbe", "singen", "sinken", "sinn", "sirene", "sitte", "sitz",
    "sofa", "sohlen", "sohn", "sommer", "sonne", "sonst", "sorge", "sorte",
    "spalt", "spannung", "spatz", "speck", "speer", "spiegel", "spiel", "spitze",
    "sporn", "sprache", "spur", "staat", "stab", "stadt", "stahl", "stamm",
    "stand", "stark", "statt", "staub", "stecken", "stein", "stern", "stetig",
    "stich", "stieg", "stil", "stimme", "stirn", "stock", "stoff", "stolz",
    "stop", "störung", "strafe", "strand", "straße", "streit", "strom", "stück",
    "stufe", "stuhl", "stumm", "stunde", "sturm", "sturz", "stütze", "sucht",
    "summe", "sumpf", "super", "suppe", "surren", "tabak", "tadel", "tag",
    "takel", "takt", "tal", "talent", "tank", "tanz", "tapete", "tasse",
    "tat", "taube", "taucher", "taxi", "team", "teich", "teig", "teil",
    "teppich", "test", "teuer", "text", "thema", "tief", "tier", "tiger",
    "tinte", "tipp", "tisch", "titel", "toast", "tod", "toilette", "toll",
    "ton", "topf", "tor", "torte", "tot", "trab", "tracht", "tragen",
    "trainer", "trank", "traum", "treffen", "trend", "trennen", "treu", "trick",
    "trink", "tritt", "trog", "tropfen", "trost", "trotz", "truhe", "trunk",
    "trupp", "tuch", "tulpe", "tumor", "tunnel", "tür", "typ", "ufer",
    "uhr", "umbau", "umfang", "umweg", "unfall", "ungarn", "uni", "unmut",
    "unrat", "unruh", "untier", "unwahr", "unzeit", "uralt", "urlaub", "ursache",
    "urteil", "vater", "vektor", "ventil", "verb", "verein", "verkehr", "vers",
    "verteidigung", "vogel", "volk", "voll", "vorab", "vorfall", "vorgang",
    "vorhang", "vorsicht", "wachs", "wade", "wagen", "wahl", "wahr", "wald",
    "wand", "wange", "wanze", "ware", "warm", "warte", "wasser", "wech",
    "weg", "weib", "weich", "weide", "wein", "weise", "weit", "welpe",
    "welt", "wendig", "werd", "werk", "wert", "west", "wetter", "wichtig",
    "wider", "wiege", "wiese", "wild", "wille", "wind", "winkel", "winter",
    "wirbel", "wirt", "wisch", "wissen", "witz", "woh", "wohl", "wolf",
    "wolke", "wort", "wucht", "wunde", "wunsch", "wurf", "wurst", "zacke",
    "zahn", "zange", "zapfen", "zart", "zaun", "zebra", "zehe", "zehn",
    "zeichen", "zeile", "zeit", "zelt", "zement", "zensor", "zephir", "zerr",
    "zettel", "zeug", "zicke", "ziel", "zier", "zimmer", "zink", "zinn",
    "zins", "zitat", "zitrone", "zobel", "zock", "zofe", "zoll", "zone",
    "zoo", "zopf", "zorn", "zucht", "zucker", "zudem", "zueignung", "zug",
    "zukunft", "zuname", "zunder", "zunge", "zuruf", "zusammen", "zutat", "zuvor",
    "zuzug", "zwang", "zwei", "zweig", "zwerg", "zwick", "zwilling", "zwirn",
    "zwist", "zwo", "zyklus", "zyste"
];

let aktuellesWortD3 = "";
let aktuellesWortD4 = "";
let aktuellesWortD5 = "";
let aktuellesWortD6 = "";

const heute = getHeute();

const Deutsch = [
  { date: "25.09.2025", word3: "Axt", word4: "Pech", word5: "Falke", word6: "Zirkel" },
  { date: "26.09.2025", word3: "Neu", word4: "Moos", word5: "Chaos", word6: "Phantom" },
  { date: "27.09.2025", word3: "Jux", word4: "Wahn", word5: "Lyric", word6: "tadeln" },
  { date: "28.09.2025", word3: "Top", word4: "Qual", word5: "Zwist", word6: "Fabeln" },
  { date: "29.09.2025", word3: "Tor", word4: "Zorn", word5: "Myrte", word6: "Quarte" },
  { date: "30.09.2025", word3: "Eis", word4: "Funk", word5: "Krebs", word6: "Sphinx" },
  { date: "01.10.2025", word3: "Alt", word4: "Bann", word5: "Talis", word6: "Kabine" },
  { date: "02.10.2025", word3: "Lot", word4: "Riss", word5: "Drang", word6: "Aktion" },
  { date: "03.10.2025", word3: "See", word4: "Glut", word5: "Fabel", word6: "Kadenz" },
  { date: "04.10.2025", word3: "Rad", word4: "Pfad", word5: "Lyrik", word6: "Kasten" },
  { date: "05.10.2025", word3: "Bus", word4: "Huld", word5: "Krone", word6: "Oberst" }
];

for(let i = 0; i < Deutsch.length; i++){
  if(Deutsch[i].date === heute){
    aktuellesWortD3 = Deutsch[i].word3;
    aktuellesWortD4 = Deutsch[i].word4;
    aktuellesWortD5 = Deutsch[i].word5;
    aktuellesWortD6 = Deutsch[i].word6;

    break;
  }
}


function GamemodeView(){
  body.innerHTML = `

        <div class="gamemodesPanel">
            <div class="gamemodesObj" onclick="Deutsch3()"> Deutsch 3 Buchstaben <div>
            <div class="gamemodesObj" onclick="Deutsch4()"> Deutsch 4 Buchstaben <div> 
            <div class="gamemodesObj" onclick="Deutsch5()"> Deutsch 5 Buchstaben <div> 
            <div class="gamemodesObj" onclick="Deutsch6()"> Deutsch 6 Buchstaben <div> 

        </div>
    `;
}


function GamemodeViewMB(){
  body.innerHTML = `

        <div class="gamemodesPanel">
            <div class="gamemodesObj" onclick="Deutsch3MB()"> Deutsch MOBILE3 Buchstaben <div>
            <div class="gamemodesObj" onclick="Deutsch4MB()"> Deutsch MOBILE 4 Buchstaben <div> 
            <div class="gamemodesObj" onclick="Deutsch5MB()"> Deutsch MOBILE 5 Buchstaben <div> 
            <div class="gamemodesObj" onclick="Deutsch6MB()"> Deutsch MOBILE 6 Buchstaben <div> 

        </div>
    `;
}

function Deutsch3MB() {
  body.innerHTML = `
    <div class="gamemodeD3Panel">
      <input type="text" id="inputBox" maxlength="3" placeholder="Buchstabe eingeben">
      <div class="gamemodeD3Holder" id="gamemodeD3Holder1"></div>
      <div class="gamemodeD3Holder" id="gamemodeD3Holder2"></div>
      <div class="gamemodeD3Holder" id="gamemodeD3Holder3"></div>
    </div>

    <div class="versuchePanel">
      <div class="versuch4" id="ersterVersuch">
        <div class="letter" id="V1l1"></div>
        <div class="letter" id="V1l2"></div>
        <div class="letter" id="V1l3"></div>
      </div>

      <div class="versuch4" id="zweiterVersuch">
        <div class="letter" id="V2l1"></div>
        <div class="letter" id="V2l2"></div>
        <div class="letter" id="V2l3"></div>      
      </div>

      <div class="versuch4" id="dritterVersuch">
        <div class="letter" id="V3l1"></div>
        <div class="letter" id="V3l2"></div>
        <div class="letter" id="V3l3"></div>      
      </div>

      <div class="versuch4" id="vierterVersuch">
        <div class="letter" id="V4l1"></div>
        <div class="letter" id="V4l2"></div>
        <div class="letter" id="V4l3"></div>      
      </div>
    </div>

    <div class="endPanel" id="endPanel" style="visibility:hidden;">
      <div class="endText" id="endText"></div>
      <div class="endButton"></div>
    </div>
  `;

  let versuchzähler = 1;
  let Holder1, Holder2, Holder3;
  [Holder1, Holder2, Holder3] = InitialisierenVonHolder();

  function InitialisierenVonHolder() {
    const h1 = document.getElementById(`V${versuchzähler}l1`);
    const h2 = document.getElementById(`V${versuchzähler}l2`);
    const h3 = document.getElementById(`V${versuchzähler}l3`);
    return [h1, h2, h3];
  }

  const box = document.getElementById('inputBox');
  const endPanel = document.getElementById('endPanel');

  box.addEventListener('input', () => {
    const Input = box.value.toUpperCase();
    if (Holder1.textContent.length === 0) {
      Holder1.textContent = Input;
    } else if (Holder2.textContent.length === 0) {
      Holder2.textContent = Input;
    } else if (Holder3.textContent.length === 0) {
      Holder3.textContent = Input;
    }
    box.value = "";
  });

  box.addEventListener('keydown', (e) => {
    if (e.key === "Backspace") {
      if (Holder3.textContent.length === 1) {
        Holder3.textContent = '';
      } else if (Holder2.textContent.length === 1) {
        Holder2.textContent = '';
      } else if (Holder1.textContent.length === 1) {
        Holder1.textContent = '';
      }
    } else if (e.key === "Enter") {
      if (Holder1.textContent && Holder2.textContent && Holder3.textContent) {
        const answer = Holder1.textContent + Holder2.textContent + Holder3.textContent;
        if (answer === aktuellesWortD3.toUpperCase()) {
          SuccessWindow(4, aktuellesWortD3, ersterVersuch, zweiterVersuch, dritterVersuch, vierterVersuch);
        } else if (ArrayDeutscheWörter.includes(answer.toLowerCase())) {
          if (versuchzähler === 1) {
            ersterVersuch = answer;
            for (let i = 0; i < 3; i++) {
              const char = ersterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V1l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V1l${i+1}`).style.backgroundColor = 'green';
              } else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V1l${i+1}`).style.backgroundColor = 'orange';
              } else {
                document.getElementById(`V1l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }
          } else if (versuchzähler === 2) {
            zweiterVersuch = answer;
            for (let i = 0; i < 3; i++) {
              const char = zweiterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V2l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V2l${i+1}`).style.backgroundColor = 'green';
              } else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V2l${i+1}`).style.backgroundColor = 'orange';
              } else {
                document.getElementById(`V2l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }
          } else if (versuchzähler === 3) {
            dritterVersuch = answer;
            for (let i = 0; i < 3; i++) {
              const char = dritterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V3l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V3l${i+1}`).style.backgroundColor = 'green';
              } else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V3l${i+1}`).style.backgroundColor = 'orange';
              } else {
                document.getElementById(`V3l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }
          } else if (versuchzähler === 4) {
            vierterVersuch = answer;
            for (let i = 0; i < 3; i++) {
              const char = vierterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V4l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V4l${i+1}`).style.backgroundColor = 'green';
              } else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V4l${i+1}`).style.backgroundColor = 'orange';
              } else {
                document.getElementById(`V4l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }
            endPanel.style.visibility = "visible";
            document.getElementById('endText').textContent = `The word was ${aktuellesWortD3}`;
          }
          versuchzähler++;
          [Holder1, Holder2, Holder3] = InitialisierenVonHolder();
        }
      }
    }
  });
}

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

function Deutsch3() {
  
  body.innerHTML = `
    <div class="gamemodeD3Panel">
      <div class="gamemodeD3Holder" id="gamemodeD3Holder1"></div>
      <div class="gamemodeD3Holder" id="gamemodeD3Holder2"></div>
      <div class="gamemodeD3Holder" id="gamemodeD3Holder3"></div>
    </div>

    <div class="versuchePanel">
      <div class="versuch4" id="ersterVersuch">
        <div class="letter" id="V1l1"></div>
        <div class="letter" id="V1l2"></div>
        <div class="letter" id="V1l3"></div>
      </div>
      <div class="versuch4" id="zweiterVersuch">
        <div class="letter" id="V2l1"></div>
        <div class="letter" id="V2l2"></div>
        <div class="letter" id="V2l3"></div>      
      </div>
      <div class="versuch4" id="dritterVersuch">
        <div class="letter" id="V3l1"></div>
        <div class="letter" id="V3l2"></div>
        <div class="letter" id="V3l3"></div>      
      </div>
      <div class="versuch4" id="vierterVersuch">
        <div class="letter" id="V4l1"></div>
        <div class="letter" id="V4l2"></div>
        <div class="letter" id="V4l3"></div>      
      </div>
    </div>

    <div class="endPanel" id="endPanel" style="visibility:hidden;">
      <div class="endText" id="endText"></div>
      <div class="endButton"></div>
    </div>

    <div class="debugPanel" id="debugPanel">
      <div class="debugText" id="debugText"></div>
    </div>

  `;

  let versuchzähler = 1;
  
  let ersterVersuch = "";
  let zweiterVersuch = "";
  let dritterVersuch = "";
  let vierterVersuch = "";
  
  let Holder1, Holder2, Holder3;
  [Holder1, Holder2, Holder3] = InitialisierenVonHolder();


  function InitialisierenVonHolder() {
    const h1 = document.getElementById(`V${versuchzähler}l1`);
    const h2 = document.getElementById(`V${versuchzähler}l2`);
    const h3 = document.getElementById(`V${versuchzähler}l3`);
    return [h1, h2, h3];
  }

  function updateDebug() {
  const dbg = document.getElementById("debugText");
  dbg.textContent =
    `versuchzähler: ${versuchzähler}\n` +
    `ersterVersuch: ${ersterVersuch}\n` +
    `zweiterVersuch: ${zweiterVersuch}\n` +
    `dritterVersuch: ${dritterVersuch}\n` +
    `vierterVersuch: ${vierterVersuch}\n` +
    `aktuellesWortD3: ${aktuellesWortD3}\n` +
    `Holder1: ${Holder1.textContent}\n` +
    `Holder2: ${Holder2.textContent}\n` +
    `Holder3: ${Holder3.textContent}` 
  }

  updateDebug();

  const endPanel = document.getElementById('endPanel');

  document.removeEventListener('keydown', keyHandler);
  document.addEventListener('keydown', keyHandler);

  function keyHandler(e) {

    if(/^[a-zA-Z]$/.test(e.key)){
      
      let Input = e.key.toUpperCase();

      updateDebug();

      if (Holder1.textContent.length === 0) {
          Holder1.textContent = Input;
        } else if (Holder2.textContent.length === 0) {
          Holder2.textContent = Input;
        } else if (Holder3.textContent.length === 0) {
          Holder3.textContent = Input;
      }

      updateDebug();
    
    }

    else if (e.key === "Backspace") {
      if (Holder3.textContent.length === 1) {
        Holder3.textContent = '';
      } else if (Holder2.textContent.length === 1) {
        Holder2.textContent = '';
      } else if (Holder1.textContent.length === 1) {
        Holder1.textContent = '';
      }

      updateDebug();

    }

    else if (e.key === "Enter") {
      if (Holder1.textContent && Holder2.textContent && Holder3.textContent) {
        let answer = Holder1.textContent + Holder2.textContent + Holder3.textContent;

        Holder1.textContent = '';
        Holder2.textContent = '';
        Holder3.textContent = '';        

        updateDebug();


        if (answer === aktuellesWortD3.toUpperCase()) {
          SuccessWindow(4, aktuellesWortD3, ersterVersuch, zweiterVersuch, dritterVersuch, vierterVersuch);
          document.removeEventListener('keydown', keyHandler);

          updateDebug();
        
        } 
        
        else if (ArrayDeutscheWörter.includes(answer.toLowerCase())) {
               if (versuchzähler === 1) {
            ersterVersuch = answer;
            
            
            for (let i = 0; i < 3; i++) {
              const char = ersterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V1l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V1l${i+1}`).style.backgroundColor = 'green';
              } 
              else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V1l${i+1}`).style.backgroundColor = 'orange';
              } 
              else {
                document.getElementById(`V1l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }

            updateDebug();

          }

          else if (versuchzähler === 2) {
            zweiterVersuch = answer;

            for (let i = 0; i < 3; i++) {
              const char = zweiterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V2l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V2l${i+1}`).style.backgroundColor = 'green';
              } 
              else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V2l${i+1}`).style.backgroundColor = 'orange';
              } 
              else {
                document.getElementById(`V2l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }

            updateDebug();

          }

          else if (versuchzähler === 3) {
            dritterVersuch = answer;

            for (let i = 0; i < 3; i++) {
              const char = dritterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V3l${i+1}`).textContent = char;
              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V3l${i+1}`).style.backgroundColor = 'green';
              } 
              else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V3l${i+1}`).style.backgroundColor = 'orange';
              } 
              else {
                document.getElementById(`V3l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }
            
            updateDebug();

          }

          else if (versuchzähler === 4) {
            vierterVersuch = answer;

            for (let i = 0; i < 3; i++) {
              const char = vierterVersuch.charAt(i).toUpperCase();
              document.getElementById(`V4l${i+1}`).textContent = char;

              if (char === aktuellesWortD3.charAt(i).toUpperCase()) {
                document.getElementById(`V4l${i+1}`).style.backgroundColor = 'green';
              } 
              else if (aktuellesWortD3.includes(char.toUpperCase())) {
                document.getElementById(`V4l${i+1}`).style.backgroundColor = 'orange';
              } 
              else {
                document.getElementById(`V4l${i+1}`).style.backgroundColor = 'lightgrey';
              }
            }
            
            updateDebug();
            
            document.removeEventListener('keydown', keyHandler);


            endPanel.style.visibility = "visible";
            document.getElementById('endText').textContent = `The word was ${aktuellesWortD3}`;
            
          }

          updateDebug();

          versuchzähler++;
          [Holder1, Holder2, Holder3] = InitialisierenVonHolder();

        }

        else {
          


        }
      }
    }
  }
}

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------


function SuccessWindow(möglicheVersuche, Lösung, ersterVersuch, zweiterVersuch, dritterVersuch, vierterVersuch, fünfterVersuch, sechsterVersuch){
  body.innerHTML = `

        <div class="gamemodesPanel">
            <div class="gamemodesObj" onclick="Deutsch3()"> Deutsch 3 Buchstaben <div>
            <div class="gamemodesObj" onclick="Deutsch4()"> Deutsch 4 Buchstaben <div> 
            <div class="gamemodesObj" onclick="Deutsch5()"> Deutsch 5 Buchstaben <div> 
            <div class="gamemodesObj" onclick="Deutsch6()"> Deutsch 6 Buchstaben <div> 

        </div>
    `;
}

function Ende(Buchstaben, möglicheVersuche, Lösung, ersterVersuch, zweiterVersuch, dritterVersuch, vierterVersuch, fünfterVersuch, sechsterVersuch){

}

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

function Deutsch4(){
  body.innerHTML = `

        <div class="gamemodeD4Panel">
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
        </div>
    `;
}
function Deutsch5(){
  body.innerHTML = `

        <div class="gamemodeD5Panel">
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
        </div>
    `;
}
function Deutsch6(){
  body.innerHTML = `

        <div class="gamemodeD6Panel">
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div>
            <div class="">""<div> 
        </div>
    `;
}



function Startgame(){
 
  if (isMobile) {
    GamemodeViewMB();
  } 

  else {
    GamemodeView();
  }
}

function getHeute() {
  const d = new Date();
  let tag = String(d.getDate()).padStart(2, '0');
  let monat = String(d.getMonth() + 1).padStart(2, '0');
  let jahr = d.getFullYear();
  return `${tag}.${monat}.${jahr}`;
}