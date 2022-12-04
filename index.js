// Constants

let blinkTime = 5;

let infoText = {
    cockpit: "Ihr befindet euch im Cockpit von Ikarus. Schaut euch um und findet das Benutzerhandbuch.",
    cockpitPanel: "Das Benutzerhandbuch, welches ihr braucht, um das Raumschiff richtig zu betätigen, ist auf dem Computer des Captain gespeichert. Dieser hat nur leider bereits mit der einzig übrigen Rettungskapsel die Flucht ergriffen. Zum Glück hat der Captain sein Passwort mit Stickynotes, die an seinem Bildschirm kleben, vermerkt.",
    cockpitComputer: "Das Benutzerhandbuch, welches ihr braucht, um das Raumschiff richtig zu betätigen, ist auf dem Computer des Captain gespeichert. Dieser hat nur leider bereits mit der einzig übrigen Rettungskapsel die Flucht ergriffen. Zum Glück hat der Captain sein Passwort mit Stickynotes, die an seinem Bildschirm kleben, vermerkt.",
    cockpitDoor: "Ihr habt das Benutzerhandbuch des Captains gefunden! Nun müsst ihr die kaputten Triebwerke reparieren.",
    gangSchaukel: "Was ist das? Das Raumschiff beginnt zu wackeln und der Gang, in dem ihr euch befindet, droht einzustürzen. Nach einer kurzen Zeit habt ihr auch dies überstanden und ihr begebt euch weiter auf eurer Tour durch das Labyrinth an Gängen. Doch was ist das? Der Weg ist versperrt durch eine große, bewegliche, leitende Leiterschaukel.",
    gangGenerator: "Findet den richtigen Code um weiter zu kommen.",
    gangEcke: "Die Leiterschaukel bewegt sich und ihr könnt weiter gehen.",
    gangBottle: "Oh Nein! Die Sauerstoffzufuhr im Raumschiff ist ausgefallen!",
    gangBottleClose: "Lest das Benutzerhandbuch und clickt auf die Sauerstoffflasche wenn ihr bereit seid. In der Flasche befindet sich zu Anfang 14 Bar an Sauerstoff. Ihr könnt 1 bis 3 Bar entlassen.",
    gangKiste: "Ihr habt nun wieder genug Sauerstoff zum Atmen und die Systeme sind auch wieder online. Ihr führt euren Weg fort, doch was ist das? Eine weitere Blockade versperrt euch den Weg. Dieses Mal handelt es sich um eine achtlos liegen gelasssene Kiste, die jedoch zu schwer ist, um bewegt zu werden. Gebt an wie viel Kraft ihr auf die Kiste ausüben könnt",
    gangEngine: "Ihr habt überlebt! Repariert jetzt den Antrieb!",
    engine: "Sucht euch nach einem Schaltpanel um.",
    engineDetail: "Ihr seid am Schaltpanel. Gebt die richtige Spannung und Stromstärke an",
    engineGang: "Das waren die richtigen Daten. Korrigiert nun die Flugbahn im Computerraum.",
    computer: "Ihr befindet euch jetzt im Computerraum. Gebt die richtigen Koordinaten ein. Ihr habt 3 Versuche."
}

let tippTimes = { cockpit: 2, cockpitPanel: 2, cockpitComputer: 2, cockpitDoor: 2, gangSchaukel: 2, gangGenerator: 2, gangEcke: 2, gangBottle: 2, gangBottleClose: 2, gangKiste: 2, gangEngine: 2, engine: 2, engineDetail: 2, engineThrust: 2, engineProblem: 2, engineGang: 2, computer: 2 }

let tipp = {
    cockpit: "Klickt auf den blinkenden Pfeil.",
    cockpitPanel: "Klickt auf den blinkenden Computer.",
    cockpitComputer: "Ihr erhaltet den Code aus den Zahlen, die ihr in die Quadrate eingefügt habt. Nachdem ihr den Code eingesetzt habt, erhaltet ihr das Benutzerhandbuch mit der Erklärung, wie und wo die Triebwerke des Raumschiffes zu finden sind.",
    cockpitDoor: "Klickt auf die blinkende Tür.",
    gangSchaukel: "Klickt auf das blinkende Panel.",
    gangGenerator: "Die Abfolge heißt Fibonacci-Folge. Sie setzt sich aus Zahlen zusammen, die das Produkt der Summe der beiden vorherigen Zahlen ergibt.",
    gangEcke: "Klickt auf den blinkenden Pfeil.",
    gangBottle: "Klickt auf die blinkende Sauerstoffflasche.",
    gangBottleClose: "Enlasst beim ersten mal 1 Bar Sauerstoff.",
    gangKiste: "Tipp hier einfügen.",
    gangEngine: "Kickt auf die blinkende Tür.",
    engine: "Klickt auf das blinkende Panel.",
    engineDetail: "Tipp hier einfügen.",
    engineThrust: "Bewegt den Mauszeiger über den Schubhebel.",
    engineProblem: "engine Problem Tipp.",
    engineGang: "Klick auf die blinkende Tür.",
    computer: "Tipp hier einfügen.",
}

let secondTippTime = 4;

let secondTipps = { engineDetail: "zweiter Tipp" }

// Variables

let time = 60 * 60;
let timeEntered = time;
let room = "cockpit"

let blink = "arrow";

let oxygen = 14;
let tries = 3;

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

    setImage("cockpitPanelComputer", 7, 11, 50);
    setClick("cockpitPanelComputer", setCockpitComputer);

    setBlink("cockpitPanelComputer");
}

function setCockpitComputer() {
    newScene("cockpitComputer");

    for (i = 1; i <= 3; i++) {
        setImage("rc/b" + i, 6, 55, 11 * i);
        setImage("rc/y" + i, 6, 48, 11 * i);
    }

    setInput("cockpitComputerInput", 10, 3, 33, 16);
    setText("cockpitComputerText", "Enter Password", 10, 3, 33, 13);

    setChange("cockpitComputerInput", checkCockpitComputer);
}

function setCockpitDoor() {
    $(".benutz").fadeIn();

    newScene("cockpitDoor");

    setImage("cockpitDoorDoor", 15, 48, 11);
    setClick("cockpitDoorDoor", setGangSchaukel);

    setBlink("cockpitDoorDoor");
}

function setGangSchaukel() {
    newScene("gangSchaukel");

    setImage("gangSchaukelGenerator", 17, 5, 20);
    setClick("gangSchaukelGenerator", setGangGenerator);

    setBlink("gangSchaukelGenerator");

    $(".bg").shake(20, 10, 10);
}

function setGangGenerator() {
    newScene("gangGenerator");

    setInput("gangGeneratorInput", 20, 8, 31, 41);

    setChange("gangGeneratorInput", checkGenerator);
}

function setGangEcke() {
    newScene("gangEcke");

    setImage("arrow", 7, 45, 60);
    setClick("arrow", setGangBottle);

    setBlink("arrow");
}

function setGangBottle() {
    newScene("gangBottle");

    setImage("gangBottleBottle", 7, 72, 36);
    setClick("gangBottleBottle", setGangBottleClose);

    setBlink("gangBottleBottle");
}

function setGangBottleClose() {
    newScene("gangBottleClose");

    setImage("gangBottleCloseBottle", 13, 49, 18.5);

    setClick("gangBottleCloseBottle", startBottle);
}

function setGangKiste() {
    newScene("gangKiste");

    setInput("gangKisteInput", 14, 4, 41, 48, " * * * ");
    setChange("gangKisteInput", checkKiste);
}

function setGangEngine() {
    newScene("gangEngine");

    setImage("gangEngineDoor", 8.5, 49, 0.5);
    setClick("gangEngineDoor", setEngine);

    setBlink("gangEngineDoor");
}

function setEngine() {
    newScene("engine");

    setImage("enginePanel", 30, 16, 27);
    setClick("enginePanel", setEngineDetail);

    setBlink("enginePanel");
}

function setEngineDetail() {
    newScene("engineDetail");

    setInput("engineDetailVolt", 7, 3, 16, 38, "volt");
    setInput("engineDetailAmp", 7, 3, 28, 38, "amp");

    setChange("engineDetailVolt", checkEngine);
    setChange("engineDetailAmp", checkEngine);
}

function setEngineThrust() {
    room = "engineThrust"

    setInfo("Es passiert....... nichts Vielleicht gehen die Ersatztriebwerke? Bewegt den Schubschalter");

    setImage("engineHebel", 5, 76, 86);

    $(".engineHebel").on("mouseover", () => {
        $(".engineHebel").css({ top: "83%" });

        $(".engineHebel").unbind();

        setEngineProblem();
    });
}

function setEngineProblem() {
    room = "engineProblem"

    setInfo("Das Raumschiff wackelt... Doch der Schub reicht nicht aus. Rechnet mit Hilfe des Benutzerhandbuches aus warum das nicht funktioniert hat.");

    setInput("EngineProblemInput", 15, 3, 58, 30, " * * ");

    setChange("EngineProblemInput", checkEngineProblem);
}

function setComputer() {
    newScene("computer");

    setInput("computerInput", 14, 4, 56, 15, " * ");

    setButton("computerButton", "Enter", 8, 8, 72, 14);

    setClick("computerButton", checkComputer);
}

// Check Scenes

function checkCockpitComputer(name) {
    if ($("." + name).val() == "0835") {
        setCockpitDoor();
    }
}

function checkGenerator(name) {
    if ($("." + name).val() == "5813") {
        setGangEcke();
    }
}

function checkKiste(name) {
    if ($("." + name).val() == "201") {
        setGangEngine();
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
            setEngineThrust();
        }
    }
}

function checkEngineProblem(name) {
    if ($("." + name).val() == "10") {
        setComputer();
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
    $(".elements").prepend('<p class="c ' + name + '"' + 'style=width:' + w + '%;height:' + h + '%;left:' + l + '%;top:' + t + "%;font-size:1vw>" + content + '</p>');
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

    if (0 < amount && amount <= 3) {
        oxygen -= amount;
    } else {
        setClick("gangBottleCloseBottle", startBottle);

        return;
    }

    $(".gangBottleCloseBottle").fadeOut(0);

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

        setInfo("Die Sauerstofflasche ist undicht und es ist  Es sind " + free + " bar entwichen. Es befinden sich nun noch " + oxygen + " bar in der Flasche. Ihr seid nun wieder dran. Entlasst von 1 bis 3 bar");

        clearInterval(leakDelay);

        $(".gangBottleCloseBottle").fadeIn(0);

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
});

// Functions

jQuery.fn.shake = function (intShakes, intDistance, intDuration) {
    this.each(function () {
        $(this).css("position", "relative");
        for (var x = 1; x <= intShakes; x++) {
            $(this).animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
                .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
                .animate({ left: 0 }, (((intDuration / intShakes) / 4)))
                .animate({ top: intDistance }, ((intDuration / intShakes) / 2))
                .animate({ top: 0 }, (((intDuration / intShakes) / 4)));
        }
    });

    return this;
};
