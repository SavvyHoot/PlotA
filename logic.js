document.getElementById('genre').addEventListener('change', function() {
    const genre = this.value;
    const conflictSelect = document.getElementById('conflict');
    const flawSelect = document.getElementById('flaw');
    
    conflictSelect.innerHTML = '<option value="">Select Conflict</option>';
    flawSelect.innerHTML = '<option value="">Select Flaw</option>';
    
    if (plotLibrary[genre]) {
        Object.keys(plotLibrary[genre].conflicts).forEach(conflict => {
            conflictSelect.appendChild(new Option(conflict, conflict));
        });
    }
});

document.getElementById('conflict').addEventListener('change', function() {
    const genre = document.getElementById('genre').value;
    const conflict = this.value;
    const flawSelect = document.getElementById('flaw');
    
    flawSelect.innerHTML = '<option value="">Select Flaw</option>';
    
    if (genre && conflict && plotLibrary[genre]?.conflicts[conflict]) {
        Object.keys(plotLibrary[genre].conflicts[conflict]).forEach(flaw => {
            flawSelect.appendChild(new Option(flaw, flaw));
        });
    }
});

document.getElementById('generateBtn').addEventListener('click', () => {
    const genre = document.getElementById('genre').value;
    const conflict = document.getElementById('conflict').value;
    const flaw = document.getElementById('flaw').value;
    const output = document.getElementById('output');
    
    output.innerHTML = '';
    
    if (!genre || !conflict || !flaw) {
        output.innerHTML = '<p>⚠️ Please select all options!</p>';
        return;
    }
    
    const plot = plotLibrary[genre]?.conflicts[conflict]?.[flaw];
    
    if (plot) {
        output.innerHTML = `
            <h3>Your ${genre} Plotline:</h3>
            <ul>${plot.map(beat => `<li>${beat}</li>`).join('')}</ul>
        `;
    } else {
        output.innerHTML = `<p>No plot found for ${genre} + ${conflict} + ${flaw}.</p>`;
    }
});
