// Constants

let blinkTime = 1;

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
    gangKisteWeg: "Die Kiste bewegt sich aus dem Weg",
    gangEngine: "Ihr habt überlebt! Repariert jetzt den Antrieb!",
    engine: "Sucht euch nach einem Schaltpanel um.",
    engineDetail: "Ihr seid am Schaltpanel. Gebt die richtige Spannung und Stromstärke an",
    engineGang: "Das waren die richtigen Daten. Korrigiert nun die Flugbahn im Computerraum.",
    computer: "Ihr befindet euch jetzt im Computerraum. Gebt die richtigen Koordinaten ein. Ihr habt 3 Versuche."
}

let tippTimes = { cockpit: 2, cockpitPanel: 2, cockpitComputer: 2, cockpitDoor: 2, gangSchaukel: 2, gangGenerator: 2, gangEcke: 2, gangBottle: 2, gangBottleClose: 2, gangKiste: 2, gangKisteWeg: 2, gangEngine: 2, engine: 2, engineDetail: 2, engineThrust: 2, engineProblem: 2, engineGang: 2, computer: 2 }

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
    gangKisteWeg: "Klickt auf den blinkenden Pfeil.",
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

    setInput("cockpitComputerInput", 10, 3, 33, 16);
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

    $(".bg").shake(20, 10, 10);
}

function setGangGenerator() {
    newScene("gangGenerator");

    setInput("gangGeneratorInputI", 5, 8, 31, 41);
    setInput("gangGeneratorInputU", 5, 8, 37, 41);
    setInput("gangGeneratorInputP", 5, 8, 43, 41);
    setInput("gangGeneratorInputE", 5, 8, 49, 41);

    setChange("gangGeneratorInputI", checkGenerator);
    setChange("gangGeneratorInputU", checkGenerator);
    setChange("gangGeneratorInputP", checkGenerator);
    setChange("gangGeneratorInputE", checkGenerator);
}

function setGangSchaukelWeg() {
    newScene("gangSchaukelWeg");

    setImage("arrow", 7, 45, 60);
    setClick("arrow", setGangEcke);
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

    setChange("engineDetailVolt", checkEngine);
    setChange("engineDetailAmp", checkEngine);
}

function setEngineThrust() {
    room = "engineThrust"

    setInfo("Es passiert....... nichts Vielleicht gehen die Ersatztriebwerke? Bewegt den Schubschalter");

    setImage("engineHebel", 5, 68, 85.4);

    $(".engineHebel").on("mouseover", () => {
        $(".engineHebel").css({ top: "78%" });
        $(".engineHebel").css({ left: "67%" });


        $(".engineHebel").unbind();

        setEngineProblem();
    });
}

function setEngineProblem() {
    room = "engineProblem"

    setInfo("Das Raumschiff wackelt... Doch der Schub reicht nicht aus. Rechnet mit Hilfe des Benutzerhandbuches aus warum das nicht funktioniert hat.");

    setInput("EngineProblemInput", 15, 3, 51, 30, " * * ");

    setChange("EngineProblemInput", checkEngineProblem);
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
    if ($("." + name).val() == "0835") {
        setCockpitDoor();
    }
}

function checkGenerator(name) {
    let correct = 0;

    if ($(".gangGeneratorInputI").val() == "1") {
        $(".gangGeneratorInputI").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputU").val() == "2") {
        $(".gangGeneratorInputU").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputP").val() == "3") {
        $(".gangGeneratorInputP").prop('disabled', true);
        correct += 1;
    }

    if ($(".gangGeneratorInputE").val() == "4") {
        $(".gangGeneratorInputE").prop('disabled', true);
        correct += 1;
    }

    if (correct == 4) {
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
            setEngineThrust();
        }
    }
}

function checkEngineProblem(name) {
    if ($("." + name).val() == "10") {
        setEngineDoor();
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
    blink = "";
    $(".gangBottleCloseBottle").stop();
    $(".gangBottleCloseBottle").hide();

    let amount = prompt("Gebt ein wie viel Bar Sauerstoff ihr entlassen wollt");

    if (0 < amount && amount <= 3) {
        oxygen -= amount;
    } else {
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

        setInfo("Die Sauerstofflasche ist undicht und es ist  Es sind " + free + " bar entwichen. Es befinden sich nun noch " + oxygen + " bar in der Flasche. Ihr seid nun wieder dran. Entlasst von 1 bis 3 bar");

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

    $(".elements").append('<img class="pl" style="display:none">');
});

function laodAll() {
    let names = ["cockpitPanel", "cockpitComputer", "cockpitDoor"];

    $(".pl")[0].src = "IMG/" + names[loadIndex] + ".png";

    $('.pl').one('load', function () {
        console.log("nl");

        loadIndex++;

        if (loadIndex < names.length) {
            laodAll();
        }
    });
}

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
