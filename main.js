const generate = () => {
    let arrAnimals = ["Lion", "Elephant", "Giraffe", "Tiger", "Cheetah", "Zebra", "Gorilla", "Kangaroo", "Koala", "Dolphin", "Whale", "Shark", "Penguin", "Polar bear", "Grizzly bear", "Wolf", "Fox", "Owl", "Eagle", "Hawk", "Parrot", "Toucan", "Snake", "Crocodile", "Alligator", "Turtle", "Frog", "Butterfly", "Bee", "Ant", "Spider", "Octopus", "Jellyfish", "Crab", "Lobster", "Seal", "Penguin", "Otter", "Squirrel", "Rabbit", "Deer", "Moose", "Horse", "Cow", "Pig", "Sheep", "Goat", "Chicken", "Duck", "Fish"]
    let arrVerbs = ["roars", "trumpets", "runs", "pounces", "hunts", "grazes", "swims", "jumps", "climbs", "flies", "swoops", "perches", "slithers", "bites", "stalks", "waddles", "glides", "hovers", "builds", "nests", "camouflages", "hisses", "snaps", "crawls", "leaps", "soars", "dives", "pecks", "spins", "wriggles", "flutters", "stings", "marches", "digs", "grooms", "paddles", "floats", "slides", "plays", "grazes", "gallops", "moos", "oinks", "bleats", "baas", "clucks", "quacks", "swims"]
    let arrPastVerbs = ["Roared", "Trumpeted", "Ran", "Pounced", "Hunted", "Grazed", "Swam", "Jumped", "Climbed", "Flew", "Swooped", "Perched", "Slithered", "Bit", "Stalked", "Waddled", "Glided", "Hovered", "Built", "Nested", "Camouflaged", "Hissed", "Snapped", "Crawled", "Leaped", "Soared", "Dove", "Pecked", "Spun", "Wriggled", "Fluttered", "Stung", "Marched", "Dug", "Groomed", "Paddled", "Floated", "Slid", "Played", "Grazed", "Galloped", "Mooed", "Oinked", "Bleated", "Baaed", "Clucked", "Quacked", "Swam"]
    let arrAdjective = ["cute", "fierce", "graceful", "majestic", "playful", "agile", "furry", "slimy", "ferocious", "gentle", "sleek", "curious", "colorful", "swift", "noisy", "adorable", "powerful", "timid", "wild", "elegant", "tiny", "big", "cunning", "beautiful", "clumsy", "slippery", "hairy", "dainty", "scaly", "fierce", "adorable", "friendly", "mysterious", "swift", "silent", "quirky", "brave", "savage", "soft", "grumpy", "noble", "busy", "loud", "furry", "ferocious", "graceful", "tiny", "jumpy", "sly"]

    function randItem (array) {
        let top = array.length;
        return array[Math.floor(Math.random() * top)]
    }

    let adjective1 = randItem(arrAdjective);
    let animal1 = randItem(arrAnimals);
    let verb1 = randItem(arrVerbs);
    let verb2 = arrPastVerbs[arrVerbs.indexOf(verb1)].toLowerCase();
    let adjective2 = randItem(arrAdjective);
    let animal2 = randItem(arrAnimals);

document.getElementById('message').innerHTML = `<CR>The ${adjective1} ${animal1} ${verb1} at the ${adjective2} ${animal2}. The ${adjective1} ${animal1} ${verb2}.</CR>`;
}
