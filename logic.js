document.addEventListener('DOMContentLoaded', () => {
    const genreSelect = document.getElementById('genre');
    const conflictSelect = document.getElementById('conflict');
    const flawSelect = document.getElementById('flaw');
    const generateBtn = document.getElementById('generateBtn');
    const outputDiv = document.getElementById('output');

    // Clear other dropdowns when genre changes
    genreSelect.addEventListener('change', () => {
        conflictSelect.innerHTML = '<option value="">Choose Conflict</option>';
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genreSelect.value && plotLibrary[genreSelect.value]) {
            // Populate conflicts
            Object.keys(plotLibrary[genreSelect.value].conflicts).forEach(conflict => {
                conflictSelect.add(new Option(conflict, conflict));
            });
        }
    });

    // Populate flaws when conflict changes
    conflictSelect.addEventListener('change', () => {
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genreSelect.value && conflictSelect.value) {
            const flaws = plotLibrary[genreSelect.value]?.conflicts[conflictSelect.value];
            if (flaws) {
                Object.keys(flaws).forEach(flaw => {
                    flawSelect.add(new Option(flaw, flaw));
                });
            }
        }
    });

    // Generate plot
    generateBtn.addEventListener('click', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        const flaw = flawSelect.value;

        outputDiv.innerHTML = '';

        if (!genre || !conflict || !flaw) {
            outputDiv.innerHTML = '<p style="color: #ff6b6b">⚠️ Please select all three options!</p>';
            return;
        }

        const plot = plotLibrary[genre]?.conflicts[conflict]?.[flaw];
        
        if (plot) {
            outputDiv.innerHTML = `
                <h2>${genre} Story Outline: ${conflict}</h2>
                <ul>${plot.map(beat => `<li>${beat}</li>`).join('')}</ul>
            `;
        } else {
            outputDiv.innerHTML = '<p>No outline found for these selections. Try another combination!</p>';
        }
    });
});
