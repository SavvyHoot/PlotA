document.addEventListener('DOMContentLoaded', () => {
    const genreSelect = document.getElementById('genre');
    const conflictSelect = document.getElementById('conflict');
    const flawSelect = document.getElementById('flaw');
    const generateBtn = document.getElementById('generateBtn');
    const outputDiv = document.getElementById('output');

    // Populate conflicts based on genre
    genreSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        conflictSelect.innerHTML = '<option value="">Select Conflict</option>';
        flawSelect.innerHTML = '<option value="">Select Flaw</option>';

        if (genre && plotLibrary[genre]) {
            Object.keys(plotLibrary[genre].conflicts).forEach(conflict => {
                conflictSelect.add(new Option(conflict, conflict));
            });
        }
    });

    // Populate flaws based on conflict
    conflictSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        flawSelect.innerHTML = '<option value="">Select Flaw</option>';

        if (genre && conflict && plotLibrary[genre]?.conflicts[conflict]) {
            Object.keys(plotLibrary[genre].conflicts[conflict]).forEach(flaw => {
                flawSelect.add(new Option(flaw, flaw));
            });
        }
    });

    // Generate plotline
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
                <h2>${genre} Plotline: ${conflict}</h2>
                <ul>${plot.map(beat => `<li>${beat}</li>`).join('')}</ul>
            `;
        } else {
            outputDiv.innerHTML = '<p>No plot found for these selections. Try another combination!</p>';
        }
    });
});
