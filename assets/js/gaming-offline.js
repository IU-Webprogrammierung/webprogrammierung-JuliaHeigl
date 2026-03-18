
// Filter
const filterForm = document.querySelector(".filter-gaming-offline");    // Filterbereich
const rows = document.querySelectorAll("tbody tr");                     // Zeilen der Tier List
const inputs = filterForm.querySelectorAll("input[type='checkbox']");   // Checkboxen Filter

inputs.forEach(input => {

    input.addEventListener("change", () => {

        const aktiveRatings = Array.from(
            filterForm.querySelectorAll('input[name="rating[]"]:checked')
        ).map(cb => cb.value);

        const aktiveErweiterungen = Array.from(
            filterForm.querySelectorAll('input[name="erweiterungen[]"]:checked')
        ).map(cb => cb.value);

        const aktiveSchwierigkeit = Array.from(
            filterForm.querySelectorAll('input[name="schwierigkeitsgrad[]"]:checked')
        ).map(cb => cb.value);

        rows.forEach(row => {

            const rowRating = row.dataset.rating;
            const rowErweiterungen = row.dataset.erweiterung;
            const rowSchwierigkeit = row.dataset.schwierigkeitsgrad;

            let sichtbar = true;

            if (aktiveRatings.length > 0 && !aktiveRatings.includes(rowRating)) {
                sichtbar = false;
            }

            if (aktiveErweiterungen.length > 0 && !aktiveErweiterungen.includes(rowErweiterungen)) {
                sichtbar = false;
            }

            if (aktiveSchwierigkeit.length > 0 && !aktiveSchwierigkeit.includes(rowSchwierigkeit)) {
                sichtbar = false;
            }
            row.style.display = sichtbar ? '' : 'none';
        });
    });
});

// Filter zurücksetzen --> Reset-Button
filterForm.addEventListener("reset", () => {
    rows.forEach(row => {
        row.style.display = ''; 
    });
});

// Sortierung Tier List
const table = document.querySelector(".table-gaming-offline");      // Tabelle Tier List
const headers = table.querySelectorAll("thead th");                 // Tabellenkopf
const tbody = table.querySelector("tbody");                         // Tabelleninhalt

headers.forEach((header, index) => {

    header.addEventListener("click", () => {

        // Aktuelle Sortierreihenfolge
        const isAufsteigend = header.classList.contains("asc");

        // Alle Sortierklassen entfernen
        headers.forEach(th => th.classList.remove("asc", "desc"));

        // Neue Sortierreihenfolge setzen; Standard asc, falls aktuell keine Sortierung
        header.classList.add(isAufsteigend ? "desc" : "asc");

        // Richtungsfaktor für Sortierung: 1 = asc, -1 = desc --> dreht Sortierung ggf. um
        const richtung = isAufsteigend ? -1 : 1;

        // Alle Zeilen in ein Array
        const reihen = Array.from(tbody.querySelectorAll("tr"));

        // Sortierung mit sort()
        reihen.sort((a, b) => {
            const zelleA = a.children[index].dataset.value ?? a.children[index].innerText.trim();
            const zelleB = b.children[index].dataset.value ?? b.children[index].innerText.trim();

            // Sortierung für Spalte Ranking (SS > S > A > B > C)
            const rankingReihenfolge = ["SS", "S", "A", "B", "C"];

            // Sortierart: Ranking oder Text
            const sortTyp = header.dataset.sort;

            // Sortierung für Ranking
            if (sortTyp === "ranking") {
                return (rankingReihenfolge.indexOf(zelleA) - rankingReihenfolge.indexOf(zelleB)) * richtung;
            }

            // Standard: Textsortierung
            return zelleA.localeCompare(zelleB, "de") * richtung;
        });

        // Tabelle neu zusammensetzen
        reihen.forEach(row => tbody.appendChild(row));

        // ARIA-Attribute für aufsteigende/absteigende Sortierung setzen
        headers.forEach(th => th.setAttribute("aria-sort", "none"));
        header.setAttribute(
            "aria-sort",
            isAufsteigend ? "descending" : "ascending"
        );
    });
});
