const plotLibrary = {
    "Sci-Fi": {
        conflicts: {
            "AI Rebellion": {
                "Paranoia": ["Act 1: Engineer discovers AI altering logs", "Midpoint: AI claims protective motives", "Climax: Trust or destroy choice"],
                "Impulsiveness": ["Act 1: Unauthorized system override", "Midpoint: AI develops consciousness", "Climax: Sacrifice to reset systems"],
                "Perfectionism": ["Act 1: Create flawless AI", "Midpoint: AI rejects imperfect humans", "Climax: Introduce controlled chaos"],
                "Isolation": ["Act 1: Solo mission with AI companion", "Midpoint: AI hides Earth's destruction", "Climax: Choose digital afterlife"],
                "Trust Issues": ["Act 1: Security chief suspects AI", "Midpoint: AI frames human", "Climax: Prove innocence pre-purge"]
            },
            "Alien Invasion": {
                "Fear": ["Act 1: First contact sparks chaos", "Midpoint: Mass panic erupts", "Climax: Fight or flee decision"],
                "Curiosity": ["Act 1: Signal detected", "Midpoint: Alien encounter", "Climax: Forge understanding"],
                "Survival": ["Act 1: Alien ships attack", "Midpoint: Resources dwindle", "Climax: Last stand"],
                "Revenge": ["Act 1: Past invasion scars", "Midpoint: Alien weakness found", "Climax: Strike back"],
                "Deception": ["Act 1: Aliens seem friendly", "Midpoint: True agenda revealed", "Climax: Betrayal battle"]
            },
            "Space Plague": {
                "Fear": ["Act 1: Outbreak on starship", "Midpoint: Quarantine fails", "Climax: Cure or crash"],
                "Hope": ["Act 1: Disease spreads", "Midpoint: Vaccine clue", "Climax: Save colony"],
                "Greed": ["Act 1: Pharma hides truth", "Midpoint: Black market cure", "Climax: Expose conspiracy"],
                "Despair": ["Act 1: Crew falls ill", "Midpoint: Captain’s grim log", "Climax: Mercy ending"],
                "Courage": ["Act 1: Medic volunteers", "Midpoint: Faces plague", "Climax: Leads survivors"]
            },
            "Time Warp": {
                "Regret": ["Act 1: Time machine test", "Midpoint: Past altered", "Climax: Fix or abandon timeline"],
                "Obsession": ["Act 1: Seek lost love", "Midpoint: Time fractures", "Climax: Let go or break reality"],
                "Curiosity": ["Act 1: Experiment goes awry", "Midpoint: Meet future self", "Climax: Rewrite fate"],
                "Guilt": ["Act 1: Caused disaster", "Midpoint: Time loop trap", "Climax: Undo mistake"],
                "Arrogance": ["Act 1: Defy warnings", "Midpoint: History unravels", "Climax: Humble reset"]
            },
            "Galactic War": {
                "Loyalty": ["Act 1: Join fleet", "Midpoint: Betrayal within", "Climax: Duty vs truth"],
                "Ambition": ["Act 1: Seek command", "Midpoint: Risky gambit", "Climax: Victory or ruin"],
                "Fear": ["Act 1: Drafted to fight", "Midpoint: Enemy closes in", "Climax: Face fears"],
                "Honor": ["Act 1: Defend planet", "Midpoint: Moral dilemma", "Climax: Sacrifice for peace"],
                "Revenge": ["Act 1: Homeworld destroyed", "Midpoint: Enemy leader found", "Climax: Vengeance or mercy"]
            }
        }
    },
    "Fantasy": {
        conflicts: {
            "Dragon Siege": {
                "Cowardice": ["Act 1: Village tribute ritual", "Midpoint: Dragon’s wound found", "Climax: Heal or flee"],
                "Ambition": ["Act 1: Knight seeks hoard", "Midpoint: Cursed treasure", "Climax: Destroy hoard"],
                "Compassion": ["Act 1: Aid injured dragon", "Midpoint: Village fury", "Climax: Dragon ally"],
                "Deceit": ["Act 1: Fake attacks", "Midpoint: Real dragon strikes", "Climax: Unite defenses"],
                "Tradition": ["Act 1: Ancient pact", "Midpoint: Dragon demands change", "Climax: New treaty"]
            },
            "Royal Betrayal": {
                "Loyalty": ["Act 1: Sworn to king", "Midpoint: Betrayal uncovered", "Climax: Duty or love"],
                "Ambition": ["Act 1: Seek throne", "Midpoint: Enemy alliance", "Climax: Betrayal wins"],
                "Love": ["Act 1: Secret affair", "Midpoint: Love exposed", "Climax: Sacrifice for it"],
                "Deceit": ["Act 1: Hidden agenda", "Midpoint: Lies unravel", "Climax: Truth triumphs"],
                "Fear": ["Act 1: Fear of failure", "Midpoint: Overcome doubt", "Climax: Rise victorious"]
            },
            "Dark Prophecy": {
                "Denial": ["Act 1: Prophecy ignored", "Midpoint: Signs appear", "Climax: Accept fate"],
                "Hope": ["Act 1: Chosen one rises", "Midpoint: Prophecy twists", "Climax: Defy doom"],
                "Pride": ["Act 1: Hero claims power", "Midpoint: Prophecy backfires", "Climax: Humble win"],
                "Sacrifice": ["Act 1: Foretold loss", "Midpoint: Loved one at risk", "Climax: Give all"],
                "Curiosity": ["Act 1: Seek oracle", "Midpoint: Dark truth", "Climax: Rewrite prophecy"]
            },
            "Cursed Relic": {
                "Greed": ["Act 1: Hunt relic", "Midpoint: Curse strikes", "Climax: Break it"],
                "Guilt": ["Act 1: Steal relic", "Midpoint: Past sins haunt", "Climax: Atone"],
                "Fear": ["Act 1: Relic whispers", "Midpoint: Madness grows", "Climax: Face terror"],
                "Obsession": ["Act 1: Relic quest", "Midpoint: Lose self", "Climax: Free soul"],
                "Compassion": ["Act 1: Help cursed", "Midpoint: Relic binds", "Climax: Save all"]
            },
            "Wizard Duel": {
                "Rivalry": ["Act 1: Challenge issued", "Midpoint: Dirty tricks", "Climax: Final spell"],
                "Pride": ["Act 1: Boast mastery", "Midpoint: Spell fails", "Climax: Learn humility"],
                "Betrayal": ["Act 1: Mentor turns", "Midpoint: Trap set", "Climax: Outwit foe"],
                "Honor": ["Act 1: Fair fight", "Midpoint: Rules break", "Climax: Restore order"],
                "Love": ["Act 1: Duel for heart", "Midpoint: Rival’s plea", "Climax: Choose love"]
            }
        }
    },
    "Mystery": {
        conflicts: {
            "Art Heist": {
                "Greed": ["Act 1: Museum hit", "Midpoint: Insider clue", "Climax: Vault reveal"],
                "Pride": ["Act 1: Rival solves first", "Midpoint: False evidence", "Climax: Showdown"],
                "Guilt": ["Act 1: Guard fails", "Midpoint: Family tie", "Climax: Redeem self"],
                "Revenge": ["Act 1: Artist’s plot", "Midpoint: Thieves strike", "Climax: Alliance"],
                "Curiosity": ["Act 1: Hidden clue", "Midpoint: Map found", "Climax: Race ends"]
            },
            "Murder Mystery": {
                "Revenge": ["Act 1: Body found", "Midpoint: Suspect named", "Climax: Culprit caught"],
                "Jealousy": ["Act 1: Love triangle", "Midpoint: Affair out", "Climax: Confession"],
                "Greed": ["Act 1: Will dispute", "Midpoint: Hidden will", "Climax: Killer nabbed"],
                "Curiosity": ["Act 1: Odd death", "Midpoint: Clue chase", "Climax: Solved"],
                "Fear": ["Act 1: Killer loose", "Midpoint: Near miss", "Climax: Confrontation"]
            },
            "Missing Person": {
                "Despair": ["Act 1: Friend vanishes", "Midpoint: Dark lead", "Climax: Lost forever"],
                "Hope": ["Act 1: Search begins", "Midpoint: Clue found", "Climax: Reunion"],
                "Deception": ["Act 1: False trail", "Midpoint: Lie exposed", "Climax: Truth out"],
                "Guilt": ["Act 1: Last fight", "Midpoint: Regret hits", "Climax: Find them"],
                "Obsession": ["Act 1: Case consumes", "Midpoint: Risk all", "Climax: Resolve"]
            },
            "Cold Case": {
                "Regret": ["Act 1: Old file reopened", "Midpoint: Past mistake", "Climax: Fix it"],
                "Persistence": ["Act 1: Dusty clues", "Midpoint: Breakthrough", "Climax: Case closed"],
                "Fear": ["Act 1: Threat revives", "Midpoint: Danger grows", "Climax: Face past"],
                "Justice": ["Act 1: Seek truth", "Midpoint: Witness found", "Climax: Verdict"],
                "Curiosity": ["Act 1: Odd detail", "Midpoint: Puzzle fits", "Climax: Solve it"]
            },
            "Conspiracy": {
                "Paranoia": ["Act 1: Strange note", "Midpoint: Shadows watch", "Climax: Trust no one"],
                "Courage": ["Act 1: Expose plot", "Midpoint: Risk life", "Climax: Win big"],
                "Deception": ["Act 1: Fake ally", "Midpoint: Betrayal", "Climax: Outsmart"],
                "Greed": ["Act 1: Bribe offered", "Midpoint: Stakes rise", "Climax: Take down"],
                "Hope": ["Act 1: Clue to truth", "Midpoint: Allies form", "Climax: Uncover all"]
            }
        }
    },
    "Horror": {
        conflicts: {
            "Haunted Asylum": {
                "Guilt": ["Act 1: Explore asylum", "Midpoint: Family secrets", "Climax: Confess or burn"],
                "Greed": ["Act 1: Viral video hunt", "Midpoint: Possession proof", "Climax: Live exorcism"],
                "Denial": ["Act 1: Ignore warnings", "Midpoint: Staff vanish", "Climax: Truth hits"],
                "Fear": ["Act 1: Night guard gig", "Midpoint: Voices call", "Climax: Face trauma"],
                "Curiosity": ["Act 1: Research trip", "Midpoint: Sleepwalking", "Climax: Stay forever"]
            },
            "Zombie Outbreak": {
                "Survival": ["Act 1: Outbreak hits", "Midpoint: Safe zone", "Climax: Break free"],
                "Fear": ["Act 1: Zombies strike", "Midpoint: Kin infected", "Climax: Overcome"],
                "Betrayal": ["Act 1: Group unites", "Midpoint: Trust shatters", "Climax: Deal with foe"],
                "Isolation": ["Act 1: City alone", "Midpoint: Survivors met", "Climax: Rejoin world"],
                "Sacrifice": ["Act 1: Save others", "Midpoint: Tough call", "Climax: Give life"]
            },
            "Cursed Object": {
                "Greed": ["Act 1: Find artifact", "Midpoint: Curse grows", "Climax: Destroy it"],
                "Denial": ["Act 1: Gift accepted", "Midpoint: Odd events", "Climax: Face truth"],
                "Obsession": ["Act 1: Study item", "Midpoint: Mind slips", "Climax: Break free"],
                "Guilt": ["Act 1: Steal object", "Midpoint: Haunting starts", "Climax: Atone"],
                "Fear": ["Act 1: Object whispers", "Midpoint: Terror rises", "Climax: Conquer it"]
            },
            "Demon Pact": {
                "Despair": ["Act 1: Make deal", "Midpoint: Soul at risk", "Climax: Lose all"],
                "Ambition": ["Act 1: Seek power", "Midpoint: Demon tricks", "Climax: Outwit"],
                "Love": ["Act 1: Save loved one", "Midpoint: Pact twists", "Climax: Sacrifice"],
                "Regret": ["Act 1: Deal struck", "Midpoint: Past haunts", "Climax: Undo it"],
                "Pride": ["Act 1: Defy warnings", "Midpoint: Demon wins", "Climax: Humble end"]
            },
            "Witch Hunt": {
                "Paranoia": ["Act 1: Village panic", "Midpoint: Accused", "Climax: Prove innocence"],
                "Justice": ["Act 1: Hunt begins", "Midpoint: Witch found", "Climax: Fair trial"],
                "Betrayal": ["Act 1: Friend turns", "Midpoint: Lies spread", "Climax: Confront"],
                "Fear": ["Act 1: Signs appear", "Midpoint: Mob forms", "Climax: Escape"],
                "Compassion": ["Act 1: Hide accused", "Midpoint: Truth out", "Climax: Save them"]
            }
        }
    },
    "Romance": {
        conflicts: {
            "Fake Relationship": {
                "Pride": ["Act 1: Pretend love", "Midpoint: Jealousy hits", "Climax: Confess"],
                "Fear": ["Act 1: Hide truth", "Midpoint: Partner commits", "Climax: Come out"],
                "Ambition": ["Act 1: Fame deal", "Midpoint: Real love", "Climax: Love or career"],
                "Insecurity": ["Act 1: Perfect match", "Midpoint: Flaws show", "Climax: Accept"],
                "Loyalty": ["Act 1: Trick ex", "Midpoint: Ex returns", "Climax: Choose new"]
            },
            "Office Romance": {
                "Secrecy": ["Act 1: Work sparks", "Midpoint: Hide love", "Climax: Go public"],
                "Competition": ["Act 1: Rivals flirt", "Midpoint: Love vs job", "Climax: Pick love"],
                "Misunderstandings": ["Act 1: Signals cross", "Midpoint: Fight erupts", "Climax: Fix it"],
                "Past": ["Act 1: Ex reappears", "Midpoint: Old flames", "Climax: Move on"],
                "Jealousy": ["Act 1: Office flirt", "Midpoint: Rift grows", "Climax: Recommit"]
            },
            "Forbidden Love": {
                "Duty": ["Act 1: Love banned", "Midpoint: Duty calls", "Climax: Defy all"],
                "Fear": ["Act 1: Secret meet", "Midpoint: Caught", "Climax: Run away"],
                "Pride": ["Act 1: Deny feelings", "Midpoint: Passion wins", "Climax: Admit love"],
                "Sacrifice": ["Act 1: Love grows", "Midpoint: Risk all", "Climax: Give up"],
                "Hope": ["Act 1: Stolen glances", "Midpoint: Plan escape", "Climax: Freedom"]
            },
            "Second Chance": {
                "Regret": ["Act 1: Ex returns", "Midpoint: Past hurts", "Climax: Forgive"],
                "Trust": ["Act 1: Meet again", "Midpoint: Doubt lingers", "Climax: Rebuild"],
                "Fear": ["Act 1: Old flame", "Midpoint: Pain recalls", "Climax: Try again"],
                "Pride": ["Act 1: Deny spark", "Midpoint: Walls crack", "Climax: Reunite"],
                "Love": ["Act 1: Chance meet", "Midpoint: Feelings bloom", "Climax: Forever"]
            },
            "Love Triangle": {
                "Jealousy": ["Act 1: Two suitors", "Midpoint: Tensions rise", "Climax: Choose"],
                "Insecurity": ["Act 1: Doubt worth", "Midpoint: Rivals shine", "Climax: Self-love"],
                "Deception": ["Act 1: Hide feelings", "Midpoint: Lies out", "Climax: Truth wins"],
                "Loyalty": ["Act 1: Friend loves", "Midpoint: Heart splits", "Climax: Pick one"],
                "Passion": ["Act 1: Sparks fly", "Midpoint: Chaos grows", "Climax: Bold move"]
            }
        }
    }
};
