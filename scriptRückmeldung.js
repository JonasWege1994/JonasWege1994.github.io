//Ausklappbare Navbar
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//Automatisches Anwählen der Checkbox für Sonstige Mitbringsel bei Eintrag ins Textfeld

    //Funktion fürs Anwählen der Checkbox bei Eintragen ins Feld
    function CheckSonstiges(){
        if(document.getElementById('TextSonstiges').value == ""){
            document.getElementById('CheckboxSonstiges').checked = true;
        };
    };

    //Funktion fürs LÖschen des Inhalts bei Abwählen der Checkbox
    function DeleteSonstiges(){
        if(document.getElementById('CheckboxSonstiges').checked == false){
            document.getElementById('TextSonstiges').value = "";
        };
    };

    //Definieren der Konstanten für die Abfrage
    const TextSonstiges = document.getElementById('TextSonstiges');
    const CheckboxSonstiges = document.getElementById('CheckboxSonstiges');

    //Event-Listener, die die jeweiligen Funktionen triggern
    CheckboxSonstiges.addEventListener('click', () =>{DeleteSonstiges()});
    TextSonstiges.addEventListener('click', () =>{CheckSonstiges()})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//Checkboxvalidierung für die Übernachtungsmöglichkeiten

    //Funktion fürs Abwählen der Schlafoptionen, falls Option ohne Übernachtungsmöglichkeit ausgewählt wird
    function uncheckSleep1 () {
        if(document.getElementById('KeineÜbernachtung').checked == true){
            document.getElementById('ÜbernachtungFreitag').checked = false;
            document.getElementById('ÜbernachtungSamstag').checked = false;
            document.getElementById('ÜbernachtungZelt').checked = false
        };
    };

    //Funktion fürs Abwählen der Option ohne ÜBernachtungsmöglichkeit, falls danach Übernachtungsmöglichkeit angeklickt wird
    function uncheckSleep2(){    
        if((document.getElementById('ÜbernachtungFreitag').checked == true)||(document.getElementById('ÜbernachtungSamstag').checked == true)||(document.getElementById('ÜbernachtungZelt').checked == true)){
            document.getElementById('KeineÜbernachtung').checked = false
        };
    };

    //Definieren der Konstanten für die Abfrage
    const KeineÜbernachtung = document.getElementById('KeineÜbernachtung');
    const ÜbernachtungFreitag = document.getElementById('ÜbernachtungFreitag');
    const ÜbernachtungSamstag = document.getElementById('ÜbernachtungSamstag');
    const ÜbernachtungZelt = document.getElementById('ÜbernachtungZelt');

    //Event-Listener, die die jeweiligen Funktionen triggern
    KeineÜbernachtung.addEventListener('click', () =>{uncheckSleep1()})
    ÜbernachtungFreitag.addEventListener('click', () =>{uncheckSleep2()})
    ÜbernachtungSamstag.addEventListener('click', () =>{uncheckSleep2()})
    ÜbernachtungZelt.addEventListener('click', () =>{uncheckSleep2()})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

