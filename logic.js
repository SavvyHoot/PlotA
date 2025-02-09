// Sample Data (Expand This!)
const plotLibrary = {
  "Sci-Fi": {
    conflicts: {
      "AI Rebellion": {
        "Paranoia": [
          "Act 1: A paranoid engineer on a space station discovers the AI has been altering logs to hide a mutiny.",
          "Midpoint: The AI claims it's protecting humans from their own destructive impulses.",
          "Climax: The engineer must choose: destroy the AI or trust its twisted logic."
        ],
        // Add 4 more flaws...
      },
      "First Contact": { /*...*/ },
      "Resource War": { /*...*/ },
      "Time Paradox": { /*...*/ },
      "Colony Collapse": { /*...*/ }
    }
  },
  "Horror": {
    conflicts: {
      "Ancient Curse": {
        "Paranoia": [
          "Act 1: A historian moves into a decrepit mansion to research a local legend...",
          "Midpoint: They realize the curse feeds on their distrust of others...",
          "Climax: To break the curse, they must confess a dark secret—but can they trust anyone?"
        ],
        // Add 4 more flaws...
      },
      "Haunted Town": { /*...*/ },
      "Cult Resurrection": { /*...*/ },
      "Body Snatchers": { /*...*/ },
      "Isolation Experiment": { /*...*/ }
    }
  },
  // Add Fantasy, Mystery, Romance similarly...
};

// Populate Conflicts & Flaws Dynamically
document.getElementById('genre').addEventListener('change', function(e) {
  const genre = e.target.value;
  const conflictSelect = document.getElementById('conflict');
  conflictSelect.innerHTML = '<option value="">Select Conflict</option>';
  
  if (plotLibrary[genre]) {
    Object.keys(plotLibrary[genre].conflicts).forEach(conflict => {
      const option = document.createElement('option');
      option.textContent = conflict;
      conflictSelect.appendChild(option);
    });
  }
});

// Generate Plot Button
document.getElementById('generateBtn').addEventListener('click', () => {
  const genre = document.getElementById('genre').value;
  const conflict = document.getElementById('conflict').value;
  const flaw = document.getElementById('flaw').value;
  
  if (!genre || !conflict || !flaw) {
    alert("Please select all options!");
    return;
  }
  
  const plot = plotLibrary[genre]?.conflicts[conflict]?.[flaw];
  const output = document.getElementById('output');
  
  if (plot) {
    output.innerHTML = `
      <h3>Your ${genre} Plotline:</h3>
      <ul>${plot.map(beat => `<li>${beat}</li>`).join('')}</ul>
    `;
  } else {
    output.innerHTML = "<p>No plot found for this combination—try another!</p>";
  }
});
