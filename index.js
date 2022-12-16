// Constants

let names = ["cockpit", "cockpitPanel", "cockpitPanelComputer", "cockpitComputer", "rc/b1", "rc/b2", "rc/b3", "rc/y1", "rc/y2", "rc/y3", "cockpitDoor", "cockpitDoorDoor", "enginePanel", "gangBottle", "gangBottleBottle", "gangBottleClose", "gangBottleCloseBottle", "gangEcke", "gangEngine", "gangEngineDoor", "gangKiste", "computer", "engine", "gangGenerator", "gangKisteWeg", "engineDetail", "gangSchaukel", "gangSchaukelGenerator", "engineDoor", "engineDoorDoor", "gangSchaukelWeg", "engineHebel"];


let blinkTime = 1;

let infoText = {
    cockpit: "Ihr befindet euch im Cockpit von Ikarus. Schaut euch um und findet das Benutzerhandbuch.",
    cockpitPanel: "Das Benutzerhandbuch, welches ihr braucht, um das Raumschiff richtig zu betätigen, ist auf dem Computer des Captain gespeichert. Dieser hat nur leider bereits mit der einzig übrigen Rettungskapsel die Flucht ergriffen. Zum Glück hat der Captain sein Passwort mit Stickynotes, die an seinem Bildschirm kleben, vermerkt.",
    cockpitComputer: "Das Benutzerhandbuch, welches ihr braucht, um das Raumschiff richtig zu betätigen, ist auf dem Computer des Captain gespeichert. Dieser hat nur leider bereits mit der einzig übrigen Rettungskapsel die Flucht ergriffen. Zum Glück hat der Captain sein Passwort mit Stickynotes, die an seinem Bildschirm kleben, vermerkt.",
    cockpitDoor: "Ihr habt das Benutzerhandbuch des Captains gefunden! Nun müsst ihr die kaputten Triebwerke reparieren. Schaut ins Benutzerhandbuch, wenn ihr nicht weiter wisst. Dort gibt es Anweisungen für so gut wie alle Szenarien.",
    gangSchaukel: "Was ist das? Das Raumschiff beginnt zu wackeln und der Gang, in dem ihr euch befindet, droht einzustürzen. Nach einer kurzen Zeit habt ihr auch dies überstanden und ihr begebt euch weiter auf eurer Tour durch das Labyrinth an Gängen. Doch was ist das? Der Weg ist versperrt durch eine große, bewegliche, leitende Leiterschaukel. An der Wand findet ihr ein Panel zur Bedienung des Generators.",
    gangGenerator: "Findet die richtigen Größen, um die Leiterschaukel aus dem Weg zu bekommen. Dabei kann euch das Benutzerhandbuch weiter helfen.",
    gangSchaukelWeg: "Die Leiterschaukel bewegt sich und ihr könnt weiter gehen.",
    gangEcke: "Ihr hört ein zischendes Geräusch.",
    gangBottle: "Oh Nein! Die Sauerstoffzufuhr im Raumschiff ist ausgefallen! Zum Glück findet ihr eine Sauerstofflasche im Gang.",
    gangBottleClose: "Die Flasche kann euch helfen nicht zu ersticken. Schaut ins Benutzerhandbuch um sie richtig zu bedienen. In der Flasche befindet sich zu Anfang 14 Bar an Sauerstoff. Ihr könnt 1 bis 3 Bar entlassen.",
    gangKiste: "Ihr habt nun wieder genug Sauerstoff zum Atmen und die Systeme sind auch wieder online. Ihr führt euren Weg fort, doch was ist das? Eine weitere Blockade versperrt euch den Weg. Dieses Mal handelt es sich um eine achtlos liegen gelasssene Kiste, die jedoch zu schwer ist, um bewegt zu werden. Zum Glück hängt diese an einem Kran und ihr habt noch euer Sauerstofflasche. Rechnet mit Hilfe des Benutzerhandbuchs die Kraft aus, die ihr maximal auf die Kiste ausüben könnt. Rundet dazu auf ganze Zahlen",
    gangKisteWeg: "Die Kiste bewegt sich aus dem Weg.",
    gangEngine: "Geht jetzt weiter um den Antrieb zu reparieren!",
    engine: "Sucht euch nach einem Schaltpanel um, mit dem die Triebwerke bedient werden können.",
    engineDetail: "Verbinde die Treibstoffleitungen miteinander, indem ihr die richtige Spannung und Stromstärke findet. Schaut dazu ins Benutzerhandbuch",
    engineDoor: "Geht nun in den Computerraum um die Flugbahn zur Erde zu korrigieren.",
    computer: "Ihr befindet euch jetzt im Computerraum. Gebt die richtigen Koordinaten ein. Ihr habt 3 Versuche."
}

let tippTimes = { cockpit: 2, cockpitPanel: 2, cockpitComputer: 2, cockpitDoor: 2, gangSchaukel: 2, gangGenerator: 2, gangSchaukelWeg: 2, gangEcke: 2, gangBottle: 2, gangBottleClose: 2, gangKiste: 2, gangKisteWeg: 2, gangEngine: 2, engine: 2, engineDetail: 2, engineThrust: 2, engineProblem: 2, engineDoor: 2, computer: 2 }

let tipp = {
    cockpit: "Klickt auf den blinkenden Pfeil.",
    cockpitPanel: "Klickt auf den blinkenden Computer.",
    cockpitComputer: "Ihr erhaltet den Code aus den Zahlen, die ihr in die Quadrate eingefügt habt. Die Zahlen in den Quadraten stehen für die Stellen im Code. Die Farben der Stickynotes zeigen, welche von ihnen zusammengehören.",
    cockpitDoor: "Klickt auf die blinkende Tür.",
    gangSchaukel: "Klickt auf das blinkende Panel.",
    gangGenerator: "Die Abfolge heißt Fibonacci-Folge. Sie setzt sich aus Zahlen zusammen, die das Produkt der Summe der beiden vorherigen Zahlen ergibt.",
    gangSchaukelWeg: "Klickt auf den blinkenden Pfeil.",
    gangEcke: "Klickt auf den blinkenden Pfeil.",
    gangBottle: "Klickt auf die blinkende Sauerstoffflasche.",
    gangBottleClose: "Enlasst beim ersten mal 1 Bar Sauerstoff.",
    gangKiste: "Die Funktion für die Kraft lautet f(t) = 50 * (t^2+t+5) / (t^2+5) + 140. Findet den Wert an ihrem Hochpunkt mit Hilfe der Ableitung.",
    gangEngine: "Kickt auf die blinkende Tür.",
    gangKisteWeg: "Klickt auf den blinkenden Pfeil.",
    engine: "Klickt auf das blinkende Panel.",
    engineDetail: "Stellt den Vektor zwischen den beiden Leitungsenden auf und berechnet dessen Betrag, um den Abstand der Enden herauszufinden.",
    engineThrust: "Bewegt den Mauszeiger über den Schubhebel.",
    engineProblem: "engine Problem Tipp.",
    engineDoor: "Klick auf die blinkende Tür.",
    computer: "Setze die Koordinaten ein.",
}

let secondTippTime = 4;

let secondTipps = {}//engineDetail: "zweiter Tipp" }

// Variables

let time = 60 * 60;
let timeEntered = time;
let room = "cockpit"

let blink = "arrow";

let oxygen = 14;
let tries = 3;

let loadIndex = 0;

// Timer 

const timer = setInterval(() => {
    time -= 1;

    const m = "" + Math.floor(time / 60);
    const s = "" + time % 60;

    $(".timer").text("Zeit bis zum Aufprall: " + m + ":" + (s.length == 2 ? s : "0" + s) + "");

    if (time == 0) {
        setLost();

        clearInterval(time);
    }

    if (timeEntered - time > blinkTime) {
        $("." + blink).fadeTo(1000, 0.6);
        $("." + blink).fadeTo(1000, 1);
    }

    if (timeEntered - time > tippTimes[room]) {
        $(".tipp").fadeIn();

        setTipp(tipp[room]);
    } else {
        $(".tipp").fadeOut();
    }

    if (timeEntered - time > secondTippTime) {
        if (room in secondTipps) {
            setTipp(secondTipps[room]);
        }
    }
}, 1000);

// Scenes

function setCockpit() {
    newScene("cockpit");

    setImage("arrow", 7, 45, 60);
    setClick("arrow", setCockpitPanel);

    setBlink("arrow");
}

function setCockpitPanel() {
    newScene("cockpitPanel");

    setImage("cockpitPanelComputer", 6, 10, 51.5);
    setClick("cockpitPanelComputer", setCockpitComputer);

    setBlink("cockpitPanelComputer");
}

function setCockpitComputer() {
    newScene("cockpitComputer");

    setImage("rc/b1", 6, 53, 12);
    setImage("rc/b2", 6, 53, 25);
    setImage("rc/y1", 6, 53, 38);

    setImage("rc/y2", 6, 28, 46);
    setImage("rc/b3", 6, 36, 46);
    setImage("rc/y3", 6, 44, 46);

    setInput("cockpitComputerInput", 10, 3, 33, 21);
    setText("cockpitComputerText", "Enter Password", 10, 3, 33, 13);

    setChange("cockpitComputerInput", checkCockpitComputer);
}

function setCockpitDoor() {
    $(".benutz").fadeIn();

    newScene("cockpitDoor");

    setImage("cockpitDoorDoor", 11, 53.5, 11);
    setClick("cockpitDoorDoor", setGangSchaukel);

    setBlink("cockpitDoorDoor");
}

function setGangSchaukel() {
    newScene("gangSchaukel");

    setImage("gangSchaukelGenerator", 6.3, 25.8, 17.8);
    setClick("gangSchaukelGenerator", setGangGenerator);

    setBlink("gangSchaukelGenerator");
}

function setGangGenerator() {
    newScene("gangGenerator");

    setInput("gangGeneratorInputI", 5, 8, 14, 41, " * * ");
    setInput("gangGeneratorInputU", 5, 8, 30, 41, " * * * ");
    setInput("gangGeneratorInputP", 5, 8, 46, 41, " * * * * ");
    setInput("gangGeneratorInputE", 5, 8, 62, 41, " * * * * ");
    setInput("gangGeneratorInputH", 5, 8, 78, 41, " * ");

    setText("gangGeneratorTextI b", "A", 15, 8, 21, 43);
    setText("gangGeneratorTextI b", "V", 15, 8, 37, 43);
    setText("gangGeneratorTextI b", "W", 15, 8, 53, 43);
    setText("gangGeneratorTextI b", "J", 15, 8, 69, 43);
    setText("gangGeneratorTextI b", "m", 15, 8, 85, 43);

    setChange("gangGeneratorInputI", checkGenerator);
    setChange("gangGeneratorInputU", checkGenerator);
    setChange("gangGeneratorInputP", checkGenerator);
    setChange("gangGeneratorInputE", checkGenerator);
    setChange("gangGeneratorInputH", checkGenerator);
}

function setGangSchaukelWeg() {
    newScene("gangSchaukelWeg");

    setImage("arrow", 7, 45, 60);
    setClick("arrow", setGangEcke);

    setBlink("arrow");
}

function setGangEcke() {
    newScene("gangEcke");

    setImage("arrow", 7, 45, 60);
    setClick("arrow", setGangBottle);

    setBlink("arrow");
}

function setGangBottle() {
    newScene("gangBottle");

    setImage("gangBottleBottle", 9.5, 66.2, 34.2);
    setClick("gangBottleBottle", setGangBottleClose);

    setBlink("gangBottleBottle");
}

function setGangBottleClose() {
    newScene("gangBottleClose");

    setImage("gangBottleCloseBottle", 17, 23.7, 31);

    setClick("gangBottleCloseBottle", startBottle);

    setBlink("gangBottleCloseBottle");
}

function setGangKiste() {
    newScene("gangKiste");

    setInput("gangKisteInput", 14, 4, 41, 48, " * * * ");
    setChange("gangKisteInput", checkKiste);
}

function setGangKisteWeg() {
    newScene("gangKisteWeg");

    setImage("arrow", 7, 60, 60);
    setClick("arrow", setGangEngine);

    setBlink("arrow");
}

function setGangEngine() {
    newScene("gangEngine");

    setImage("gangEngineDoor", 8, 49, 12.1);
    setClick("gangEngineDoor", setEngine);

    setBlink("gangEngineDoor");
}

function setEngine() {
    newScene("engine");

    setImage("enginePanel", 29, 19.7, 18.6);
    setClick("enginePanel", setEngineDetail);

    setBlink("enginePanel");
}

function setEngineDetail() {
    newScene("engineDetail");

    setInput("engineDetailVolt", 7, 3, 12, 38, "volt");
    setInput("engineDetailAmp", 7, 3, 21.5, 38, "amp");

    setImage("engineHebel", 5, 68, 85.4);

    setChange("engineDetailVolt", checkEngine);
    setChange("engineDetailAmp", checkEngine);
}

function setEngineProblem() {
    room = "engineProblem"

    setInfo("Das Raumschiff wackelt... Doch der Schub reicht nicht aus. Zum Glück hat das Raumschiff Ersatztriebwerke. Diese sind allerdings mit einem Code gesichter. Findet diesen mit Hilfe des Benutzerhandbuches heraus und gebt ihn ein.");

    setInput("EngineProblemInput", 2, 3, 75, 67, "****");

    setChange("EngineProblemInput", checkEngineProblem);
}

function setEngineThrust() {
    room = "engineThrust"

    setInfo("Es passiert....... nichts. Bewegt den Schubschalter um die Triebwerke zu aktivieren.");

    setImage("engineHebel", 5, 68, 85.4);

    $(".engineHebel").on("mouseover", () => {
        $(".engineHebel").css({ top: "78%" });
        $(".engineHebel").css({ left: "67%" });


        $(".engineHebel").unbind();

        const interval = setInterval(() => {
            setEngineDoor();

            clearInterval(interval);
        }, 2000);
    });
}

function setEngineDoor() {
    $(".benutz").fadeIn();

    newScene("engineDoor");

    setImage("engineDoorDoor", 22, 12, 25.7);
    setClick("engineDoorDoor", setComputer);

    setBlink("engineDoorDoor");
}

function setComputer() {
    newScene("computer");

    setInput("computerInput", 14, 4, 49.5, 15, " * ");

    setButton("computerButton", "Enter", 8, 8, 65, 14);

    setClick("computerButton", checkComputer);
}

// Check Scenes

function checkCockpitComputer(name) {
    if ($("." + name).val() == "0815") {
        setCockpitDoor();
    }
}

function checkGenerator(name) {
    let correct = 0;

    if ($(".gangGeneratorInputI").val() == "13") {
        $(".gangGeneratorInputI").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputU").val() == "144") {
        $(".gangGeneratorInputU").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputP").val() == "1040") {
        $(".gangGeneratorInputP").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputE").val() == "5408") {
        $(".gangGeneratorInputE").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputH").val() == "5") {
        $(".gangGeneratorInputH").prop('disabled', true);
        correct += 1;
    }

    if (correct == 5) {
        setGangSchaukelWeg();
    }
}

function checkKiste(name) {
    if ($("." + name).val() == "201") {
        setGangKisteWeg();
    }
}

function checkEngine(name) {
    let volt = false;

    if ($(".engineDetailVolt").val() == "35") {
        $(".engineDetailVolt").prop('disabled', true);

        volt = true;
    }

    if ($(".engineDetailAmp").val() == "8") {
        $(".engineDetailAmp").prop('disabled', true);

        if (volt) {
            setEngineProblem();
        }
    }
}

function checkEngineProblem(name) {
    if ($("." + name).val() == "0110") {
        $("." + name).prop('disabled', true);
        setEngineThrust();
    }
}

function checkComputer(name) {
    if ($(".computerInput").val() == "6") {
        setWon();

        return;
    }

    tries -= 1;

    if (tries == 0) {
        setLost();
        return;
    }

    alert("Falsche Koordinaten! Ihr habt noch " + tries + " Versuche bevor das Raumschiff abstürzt");
}

// Util

function newScene(name) {
    room = name;

    clearImages();

    setBG(name);

    setInfo(infoText[name]);

    $(".tipp").unbind();
    setClick("tipp", () => { alert(tipp[name]) });
}

function setBlink(name) {
    blink = name;

    timeEntered = time;
}

function setBG(name) {
    $(".bg").attr("src", "IMG/" + name + ".png");
}

function setTipp(content) {
    $(".tipp").unbind();

    setClick("tipp", () => { alert(content) });
}

function setInfo(info) {
    $(".info").text(info);
}

function clearImages() {
    $(".elements").empty();
}

function setClick(name, call) {
    $("." + name).unbind();
    $("." + name).click(() => {
        call();
    });
}

function setChange(name, call) {
    $("." + name).on("input", () => {
        call(name);
    });
}

function setText(name, content, w, h, l, t) {
    $(".elements").prepend('<p class="c ' + name + '"' + 'style=width:' + w + '%;height:' + h + '%;left:' + l + '%;top:' + t + "%>" + content + '</p>');
}

function setButton(name, content, w, h, l, t) {
    $(".elements").prepend('<button class="c ' + name + ' glow-on-hover"' + 'style="width:' + w + '%;height:' + h + '%;left:' + l + '%;top:' + t + '%;position:absolute;padding:1%">' + content + '</button>');
}

function setInput(name, w, h, l, t, ph = " * * * * ") {
    $(".elements").prepend('<input class="' + name + '" placeholder="' + ph + '" style="width:' + w + '%;height:' + h + '%;left:' + l + '%;top:' + t + '%">');
}

function setImage(name, w, l, t) {
    $(".elements").prepend('<img src="IMG/' + name + '.png" class="c ' + name + '" style="width:' + w + '%;left:' + l + '%;top:' + t + '%">');
}

// Other

function startBottle() {
    let amount = prompt("Gebt ein wie viel Bar Sauerstoff ihr entlassen wollt");

    blink = "preload";
    $(".gangBottleCloseBottle").stop();
    $(".gangBottleCloseBottle").hide();

    if (0 < amount && amount <= 3) {
        oxygen -= amount;
    } else {
        $(".gangBottleCloseBottle").fadeIn(0);
        blink = "gangBottleCloseBottle";

        setClick("gangBottleCloseBottle", startBottle);

        return;
    }

    setInfo("Es sind nun " + oxygen + " bar Sauerstoff in der Flasche. Wartet bis ihr wieder Sauerstoff entlassen könnt.");

    if (oxygen == 1) {
        setGangKiste();

        return;
    } else if (oxygen <= 0) {
        setInfo("Die Sauerstoffflasche ist Leer und ihr seid in Gefahr zu ersticken.");

        $(".bg").fadeOut(3000);
        $(".bg").fadeIn(3000);

        oxygen = 14;

        const interval = setInterval(() => {
            setInfo("Zum Glück findet ihr noch einen andere Sauerstofflasche, die mit dem selben Prinzip funktioniert.");

            $(".gangBottleCloseBottle").fadeIn(3000);
            blink = "gangBottleCloseBottle";
            setClick("gangBottleCloseBottle", startBottle);

            clearInterval(interval);
        }, 3000);

        return;
    }

    const leakDelay = setInterval(() => {
        let free = (oxygen - 1) % 4;

        if (free <= 0) {
            free = Math.ceil(Math.random() * 3);
        }

        oxygen -= free;

        setInfo("Die Sauerstofflasche ist undicht und es sind " + free + " bar entwichen. Es befinden sich nun noch " + oxygen + " bar in der Flasche. Ihr seid nun wieder dran. Entlasst von 1 bis 3 bar");

        clearInterval(leakDelay);

        $(".gangBottleCloseBottle").fadeIn(0);
        blink = "gangBottleCloseBottle";
        setClick("gangBottleCloseBottle", startBottle);
    }, 2000);
}

// End

function setLost() {
    window.location.href = 'lost.html';
}

function setWon() {
    window.location.href = 'end.html';
}

// Start

$(document).ready(function () {
    setCockpit();

    $('.bg').one('load', function () {
        console.log("bg");

        laodAll();
    });
});

function laodAll() {
    $(".pl")[0].src = "IMG/" + names[loadIndex] + ".png";

    $('.pl').one('load', function () {
        console.log("nl");

        loadIndex++;

        if (loadIndex < names.length) {
            laodAll();
        }
    });
}
