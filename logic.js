document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const genreSelect = document.getElementById('genre');
    const conflictSelect = document.getElementById('conflict');
    const flawSelect = document.getElementById('flaw');
    const generateBtn = document.getElementById('generateBtn');
    const randomBtn = document.getElementById('randomBtn');
    const shareBtn = document.getElementById('shareBtn');
    const outputDiv = document.getElementById('output');

    console.log('DOM loaded, ready to roll!');

    // Populate conflicts when genre changes
    genreSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        console.log('Genre picked:', genre);

        conflictSelect.innerHTML = '<option value="">Choose Conflict</option>';
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genre && plotLibrary[genre]) {
            const conflicts = Object.keys(plotLibrary[genre].conflicts);
            console.log('Conflicts for', genre, ':', conflicts);
            conflicts.forEach(conflict => conflictSelect.add(new Option(conflict, conflict)));
        }
    });

    // Populate flaws when conflict changes
    conflictSelect.addEventListener('change', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        console.log('Conflict picked:', conflict);

        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        outputDiv.innerHTML = '';

        if (genre && conflict && plotLibrary[genre]?.conflicts[conflict]) {
            const flaws = Object.keys(plotLibrary[genre].conflicts[conflict]);
            console.log('Flaws for', conflict, ':', flaws);
            flaws.forEach(flaw => flawSelect.add(new Option(flaw, flaw)));
        }
    });

    // Generate plot outline
    generateBtn.addEventListener('click', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        const flaw = flawSelect.value;

        console.log('Generating with:', genre, conflict, flaw);

        outputDiv.innerHTML = '';

        if (!genre || !conflict || !flaw) {
            outputDiv.innerHTML = '<p style="color: #ff6b6b">⚠️ Pick all three, you creative genius!</p>';
            return;
        }

        const plot = plotLibrary[genre]?.conflicts[conflict]?.[flaw];
        if (plot) {
            outputDiv.innerHTML = `
                <h2>${genre}: ${conflict}</h2>
                <p>A ${flaw.toLowerCase()} protagonist ${plot[0].split(': ')[1].toLowerCase()}. 
                Things get wild when ${plot[1].split(': ')[1].toLowerCase()}. 
                In an epic showdown, ${plot[2].split(': ')[1].toLowerCase()}!</p>
            `;
            // Play a fun sound (optional, hosted externally or local)
            new Audio('https://www.myinstants.com/media/sounds/tada.mp3').play().catch(() => console.log('Audio blocked'));
        } else {
            outputDiv.innerHTML = '<p>Oops, no plot for that combo yet!</p>';
        }
    });

    // Randomize everything
    randomBtn.addEventListener('click', () => {
        const genres = Object.keys(plotLibrary);
        const genre = genres[Math.floor(Math.random() * genres.length)];
        genreSelect.value = genre;

        const conflicts = Object.keys(plotLibrary[genre].conflicts);
        const conflict = conflicts[Math.floor(Math.random() * conflicts.length)];
        conflictSelect.innerHTML = '<option value="">Choose Conflict</option>';
        conflicts.forEach(c => conflictSelect.add(new Option(c, c)));
        conflictSelect.value = conflict;

        const flaws = Object.keys(plotLibrary[genre].conflicts[conflict]);
        const flaw = flaws[Math.floor(Math.random() * flaws.length)];
        flawSelect.innerHTML = '<option value="">Choose Flaw</option>';
        flaws.forEach(f => flawSelect.add(new Option(f, f)));
        flawSelect.value = flaw;

        console.log('Randomized to:', genre, conflict, flaw);
        generateBtn.click();
    });

    // Share the plot
    shareBtn.addEventListener('click', () => {
        const genre = genreSelect.value;
        const conflict = conflictSelect.value;
        const flaw = flawSelect.value;
        if (genre && conflict && flaw) {
            const text = `My wild plot from narrativemethods.com: ${genre} - ${conflict} (${flaw})! Try it out!`;
            navigator.clipboard.writeText(text);
            outputDiv.innerHTML += '<p style="color: #00cc00">✅ Copied to clipboard—share the madness!</p>';
        } else {
            outputDiv.innerHTML += '<p style="color: #ff6b6b">⚠️ Generate a plot first!</p>';
        }
    });
});
