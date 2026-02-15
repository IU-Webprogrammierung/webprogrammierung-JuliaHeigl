const charakterItems = document.querySelectorAll('.charakter-liste li');        // Charakterliste
const waffenReihen = document.querySelectorAll('.waffe');                       // Charaktere zu Waffe

let lockedCharakter = null;                                                     // fixierter Charakter
let hoveredCharakter = null;                                                    // Charakter mit Hover

// zum Charakter passende Waffen highlighten, alle anderen Waffen dimmen
function highlightWaffen(charakter) {
    waffenReihen.forEach(row => {
        const charakterReihe = row.dataset.charaktere.split(' ');
        row.classList.toggle('is-highlighted', charakterReihe.includes(charakter));
        row.classList.toggle('is-dimmed', !charakterReihe.includes(charakter));
    });
}

// Highlight auf fixierten/gehoverten Charakter setzen, alle anderen auf inaktiv
function updateHighlight() {
    const charakter = lockedCharakter || hoveredCharakter;

    // Highlighting zurücksetzen, falls aktuell kein Hover/Fixierung
    if (!charakter) {
        resetHighlight();
        return;
    }

    // Waffen zum aktuellen Charakter highlighten
    highlightWaffen(charakter);

    // aktuellen Charakter hervorheben, alle anderen normal
    charakterItems.forEach(el => {
        el.classList.toggle('is-active', el.dataset.charakter === charakter);
        el.classList.toggle('not-active', el.dataset.charakter !== charakter);
    });
}


// Highlighting bei allen Waffen und Chraakteren zurücksetzen
function resetHighlight() {
    waffenReihen.forEach(row => {
        row.classList.remove('is-highlighted', 'is-dimmed');
    });

    charakterItems.forEach(el => {
        el.classList.remove('is-active', 'not-active');
    });
}

// Event-Listener 
charakterItems.forEach(item => {

    // Hover: falls kein Charakter fixiert: Waffen zu Charakter hervorheben
    item.addEventListener('mouseenter', () => {
        if (!lockedCharakter) {
            hoveredCharakter = item.dataset.charakter;
            updateHighlight();
        }
    });

    // Hover entfernt: falls kein Charakter fixiert: Highlighting zurücksetzen
    item.addEventListener('mouseleave', () => {
        if (!lockedCharakter) {
            hoveredCharakter = null;
            updateHighlight();
        }
    });

    // Fokus: falls kein Charakter fixiert: Waffen zu Charakter hervorheben
    item.addEventListener('focus', () => {
        if (!lockedCharakter) {
            hoveredCharakter = item.dataset.charakter;
            updateHighlight();
        }
    });

    // Fokus entfernt: falls kein Charakter fixiert: Highlighting zurücksetzen
    item.addEventListener('blur', () => {
        if (!lockedCharakter) {
            hoveredCharakter = null;
            updateHighlight();
        }
    });
    
    // Klick auf Charakter
    item.addEventListener('click', () => {
        const charakter = item.dataset.charakter;

        // falls Charakter bereits fixiert: Fixierung zurücksetzen
        if (lockedCharakter === charakter) {
            lockedCharakter = null;
        } else {
        // anderenfalls Charakter fixieren
            lockedCharakter = charakter;
        }

        // Waffen und Charakter bei fixierten Charakter hervorheben, anderenfalls Highlighting entfernen
        updateHighlight();
    });
    
});

// Highlighting bei Esc zurücksetzen
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lockedCharakter = null;
        hoveredCharakter = null;
        updateHighlight();
    }
});

// Highlighting bei Klick außerhalb zurücksetzen
document.addEventListener('click', (e) => {
    if (!lockedCharakter) return;

    const clickedCharakter = e.target.closest('.charakter-liste li');

    if (!clickedCharakter) {
        lockedCharakter = null;
        hoveredCharakter = null;
        updateHighlight();
    }
});


