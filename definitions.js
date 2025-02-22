const storyDefinitions = {
    "Protagonist": {
        def: "The main character who drives the story—like the hero (or anti-hero) you root for!",
        example: "In a Sci-Fi tale, the protagonist might be a paranoid engineer battling an AI rebellion."
    },
    "Antagonist": {
        def: "The big baddie or force opposing the protagonist—could be a person, creature, or even fate!",
        example: "Think of a Fantasy dragon sieging a village, making life tough for our ambitious knight."
    },
    "Conflict": {
        def: "The juicy problem or struggle that keeps the story spicy—without it, there’s no drama!",
        example: "In a Mystery, the conflict could be an art heist with greed pushing the stakes higher."
    },
    "Climax": {
        def: "The most intense, do-or-die moment where everything hits the fan—peak excitement!",
        example: "In Horror, it’s when the fearful night guard faces their trauma in a haunted asylum."
    },
    "Plot": {
        def: "The sequence of events that make up the story—basically, what happens and why!",
        example: "A Romance plot might follow a fake relationship turning real, with pride in the mix."
    },
    "Setting": {
        def: "Where and when the story happens—sets the vibe and grounds the action!",
        example: "A Sci-Fi setting could be a time-warped spaceship, twisting reality for our curious hero."
    },
    "Theme": {
        def: "The big idea or message lurking beneath the story—what it’s *really* about!",
        example: "In a Fantasy royal betrayal, the theme might be loyalty tested by love."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const termSelect = document.getElementById('term');
    const defineBtn = document.getElementById('defineBtn');
    const randomTermBtn = document.getElementById('randomTermBtn');
    const definitionOutput = document.getElementById('definitionOutput');

    // Show definition
    defineBtn.addEventListener('click', () => {
        const term = termSelect.value;
        if (term && storyDefinitions[term]) {
            definitionOutput.innerHTML = `
                <h3>${term}</h3>
                <p><strong>What it is:</strong> ${storyDefinitions[term].def}</p>
                <p><strong>Example:</strong> ${storyDefinitions[term].example}</p>
                <p><a href="#" onclick="document.getElementById('genre').focus(); return false;">Try it in the Plotline Architect!</a></p>
            `;
        } else {
            definitionOutput.innerHTML = '<p style="color: #ff6b6b">⚠️ Pick a term first, story wizard!</p>';
        }
    });

    // Random term
    randomTermBtn.addEventListener('click', () => {
        const terms = Object.keys(storyDefinitions);
        const randomTerm = terms[Math.floor(Math.random() * terms.length)];
        termSelect.value = randomTerm;
        defineBtn.click();
    });
});
