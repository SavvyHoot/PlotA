document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const genreSelect = document.getElementById('genre');
    const conflictSelect = document.getElementById('conflict');
    const flawSelect = document.getElementById('flaw');
    const generateBtn = document.getElementById('generateBtn');
    const outputDiv = document.getElementById('output');

    // Clear and populate conflicts when genre changes
    genreSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        
        // Reset conflicts and flaws
        conflictSelect.innerHTML = '<option value="">Choose Conflict</option>';
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genre && plotLibrary[genre]) {
            // Populate conflicts
            const conflicts = Object.keys(plotLibrary[genre].conflicts);
            conflicts.forEach(conflict => {
                conflictSelect.add(new Option(conflict, conflict));
            });
        }
    });

    // Populate flaws when conflict changes
    conflictSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        
        // Reset flaws
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genre && conflict && plotLibrary[genre]?.conflicts[conflict]) {
            // Populate flaws
            const flaws = Object.keys(plotLibrary[genre].conflicts[conflict]);
            flaws.forEach(flaw => {
                flawSelect.add(new Option(flaw, flaw));
            });
        }
    });

    // Generate plot outline
    generateBtn.addEventListener('click', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        const flaw = flawSelect.value;

        outputDiv.innerHTML = ''; // Clear previous output

        if (!genre || !conflict || !flaw) {
            outputDiv.innerHTML = '<p style="color: #ff6b6b">⚠️ Please select all three options!</p>';
            return;
        }

        // Get plot beats
        const plot = plotLibrary[genre]?.conflicts[conflict]?.[flaw];
        
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
