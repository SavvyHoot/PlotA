document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const genreSelect = document.getElementById('genre');
    const conflictSelect = document.getElementById('conflict');
    const flawSelect = document.getElementById('flaw');
    const generateBtn = document.getElementById('generateBtn');
    const outputDiv = document.getElementById('output');

    console.log('DOM fully loaded and parsed');

    // Verify if plotLibrary is loaded
    console.log('plotLibrary:', plotLibrary);

    // Clear and populate conflicts when genre changes
    genreSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        console.log('Genre selected:', genre);

        // Reset conflicts and flaws
        conflictSelect.innerHTML = '<option value="">Choose Conflict</option>';
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        // Additional check for plotLibrary[genre]
        if (genre && plotLibrary[genre]) {
            // Confirm accessing plotLibrary[genre]
            console.log('Accessing plotLibrary[genre]:', plotLibrary[genre]);

            // Populate conflicts
            const conflicts = Object.keys(plotLibrary[genre].conflicts);
            console.log('Conflicts available for', genre, ':', conflicts);
            console.log('Total conflicts for', genre, ':', conflicts.length);
            conflicts.forEach(conflict => {
                console.log('Adding conflict option:', conflict);
                conflictSelect.add(new Option(conflict, conflict));
            });
        } else {
            console.log('No conflicts found for genre:', genre);
        }
    });

    // Populate flaws when conflict changes
    conflictSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        console.log('Conflict selected:', conflict);

        // Reset flaws
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genre && conflict && plotLibrary[genre]?.conflicts[conflict]) {
            // Populate flaws
            const flaws = Object.keys(plotLibrary[genre].conflicts[conflict]);
            console.log('Flaws available for', conflict, ':', flaws);
            flaws.forEach(flaw => {
                console.log('Adding flaw option:', flaw);
                flawSelect.add(new Option(flaw, flaw));
            });
        } else {
            console.log('No flaws found for conflict:', conflict);
        }
    });

    // Generate plot outline
    generateBtn.addEventListener('click', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        const flaw = flawSelect.value;

        console.log('Generate button clicked with selections - Genre:', genre, ', Conflict:', conflict, ', Flaw:', flaw);

        outputDiv.innerHTML = ''; // Clear previous output

        if (!genre || !conflict || !flaw) {
            outputDiv.innerHTML = '<p style="color: #ff6b6b">⚠️ Please select all three options!</p>';
            return;
        }

        // Get plot beats
        const plot = plotLibrary[genre]?.conflicts[conflict]?.[flaw];
        console.log('Plot beats for the selections:', plot);

        if (plot) {
            outputDiv.innerHTML = `
                <h2>${genre} Outline: ${conflict} (${flaw})</h2>
                <ul>${plot.map(beat => `<li>${beat}</li>`).join('')}</ul>
            `;
        } else {
            outputDiv.innerHTML = '<p>No outline found for these selections.</p>';
        }
    });
});
