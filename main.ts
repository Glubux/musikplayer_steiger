input.onButtonPressed(Button.A, function () {
    // Hier wird die Musik gestartet oder gestoppt, je nach dem, was aktuell in der Variable Steuerung drin steht (s. Kommentare oben beim "Beim Start"-Block.
    if (Steuerung == 0) {
        Steuerung = Melodie
    } else {
        Steuerung = 0
        music.stopMelody(MelodyStopOptions.All)
    }
})
input.onButtonPressed(Button.B, function () {
    // Hier wird die Melodievariable um eins erhöht, wenn Knopf B gerückt wird. Ist man am Ende (letztes Lied), so wird die Variable auf 1 zurückgesetzt ("beginne Playlist von vorne").
    if (Melodie < SongAnzahl) {
        Melodie += 1
    } else {
        Melodie = 1
    }
    // Wenn bereits ein Lied läuft (d.h. Steuerung ==99 ist), dann wird direkt die Variable Steuerung auf die neue Melodie gesetzt (z.B. 4). So beginnt auch während des Abspielens des letzten Liedes sofort das neue.
    // Gäbe es diesen Wenn-Block nicht, so würde während des Abspielens nicht auf das neue Lied gewechselt.
    if (Steuerung == 99) {
        Steuerung = Melodie
    }
})
let SongAnzahl = 0
let Melodie = 0
let Steuerung = 0
// Steuerung = 0 -> Ton aus
// Steuerung = 1 bis 4 -> beginne Melodie 1 bis 4
// Steuerung = 99 -> die Musik läuft bereits
Steuerung = 0
// Diese Variable wird von 1 bis 4 einzeln erhöht und dann wieder auf 1 gesetzt. Sie "weiss" immer, welches das nächste Lied ist.
Melodie = 1
SongAnzahl = 4
basic.forever(function () {
    if (Steuerung == 1) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        // Würde die Variable Steuerung hier nicht verändert, würde das Lied "Präludium" alle paar Millisekunden neu beginnen, da dann immer noch Steuerung ==1 erfüllt wäre und die wenn-Bedingungen immer wieder neu abgefragt werden (äusserer Block ist "dauerhaft", d.h. ständige Wiederholung der Befehle darin).
        // 
        Steuerung = 99
    } else if (Steuerung == 2) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        Steuerung = 99
    } else if (Steuerung == 3) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        Steuerung = 99
    } else if (Steuerung == 4) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        Steuerung = 99
    }
})
