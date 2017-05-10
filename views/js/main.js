var pizzaIngredients = {};
pizzaIngredients.meats = ["Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", "Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille", "Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto", "Italian Sausage", "Ground Beef", "Anchovies", "Turkey", "Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada", "Soppressata Picante", "Coppa", "Pancetta", "Bresola", "Lox", "Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", "Scallops", "Filet Mignon"];
pizzaIngredients.nonMeats = ["White Onions", "Red Onions", "Sauteed Onions", "Green Peppers", "Red Peppers", "Banana Peppers", "Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers", "Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple", "Pear Slices", "Apple Slices", "Mushrooms", "Arugula", "Basil", "Fennel", "Rosemary", "Cilantro", "Avocado", "Guacamole", "Salsa", "Swiss Chard", "Kale", "Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus", "Caramelized Onions", "Mango", "Garlic", "Olives", "Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus"];
pizzaIngredients.cheeses = ["American Cheese", "Swiss Cheese", "Goat Cheese", "Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese", "Gouda Cheese", "Muenster Cheese", "Applewood Cheese", "Asiago Cheese", "Bleu Cheese", "Boursin Cheese", "Brie Cheese", "Cheddar Cheese", "Chevre Cheese", "Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese", "Gruyere Cheese", "Limberger Cheese", "Manchego Cheese", "Marscapone Cheese", "Pecorino Cheese", "Provolone Cheese", "Queso Cheese", "Roquefort Cheese", "Romano Cheese", "Ricotta Cheese", "Smoked Gouda"];
pizzaIngredients.sauces = ["Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce"];
pizzaIngredients.crusts = ["White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust"];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

//adjectives
var dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "gloomy", "homicidal", "murderous", "shady", "misty", "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
var color = ["blue", "green", "purple", "grey", "scarlet", "Neon", "pink", "black", "red", "maroon", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta", "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
var whimsical = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "broken", "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy", "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", "brainwashed"];
var shiny = ["sapphire", "silver", "golden", "emerald", "diamond", "starlit", "bronze", "amber", "obsidian", "pearl", "brass"];
var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling", "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying", "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous", "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed", "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", "horrible", "syncophantic", "unhelpful", "bootlicking"];
var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful", "talented", "exquisite", "enchanting", "fascinating", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous", "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", "majestic", "grand", "stunning"];
var scientific = ["digital", "calculated", "formulated", "cyberpunk", "mechanized", "techno", "novel", "brainy", "chemical", "quantic", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "hidden", "extinct", "galactic"];
var yuck = ["sludgey", "swampy", "boggy", "sewage", "ditched", "ruined", "muddy", "gunky", "sticky", "scuzzy", "mired", "dreckish", "cruddy", "glubby", "stained", "dreadful", "oozing", "gloppy", "smashed", "boggy", "gooey", "marshy", "wasted", "solid"];
//nouns
var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic", "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot", "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
var fantasy = ["centaur", "wizard", "gnome", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone", "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor", "singer"];
var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath", "fiend", "satanist", "moon", "fullMoon"];
var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", "fluid", "moisture", "garbage", "trash", "bug"];
var everyday = ["mirror", "knife", "fork", "spoon", "minivan", "suburbs", "lamp", "desk", "book", "truck", "soda", "door", "video", "game", "computer", "calendar", "tree", "plant", "flower", "chimney", "attic", "kitchen", "garden", "school", "wallet", "bottle"];
var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", "anklet", "bangle", "locket", "finery", "crown", "tiara", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin", "costume", "ornament", "treasure"];
var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood", "city", "town", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery", "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warp Drive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];

function getAdj(z) {
    switch (z) {
        case "aa":
            return dark;
        case "bb":
            return color;
        case "cc":
            return whimsical;
        case "dd":
            return shiny;
        case "ee":
            return noisy;
        case "ff":
            return apocalyptic;
        case "gg":
            return insulting;
        case "hh":
            return praise;
        case "ii":
            return scientific;
        case "jj":
            return yuck;
        default:
            return yuck;
    }
}

function getNoun(z) {
    switch (z) {
        case "kk":
            return animals;
        case "ll":
            return professions;
        case "mm":
            return fantasy;
        case "nn":
            return music;
        case "oo":
            return horror;
        case "pp":
            return gross;
        case "qq":
            return everyday;
        case "rr":
            return jewelry;
        case "ss":
            return places;
        case "tt":
            return scifi;
        default:
            return scifi;
    }
}

var adjectives = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj"];
var nouns = ["kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt"];

function getRandomNum(x) {
    return parseInt(Math.random(window.performance.now()) * x.length);
}

function generator(adj, noun) { //Plugs in a single word for adj and for noun
    var a = getAdj(adj); //collects the array of many words, which are stored under the single switch heading of this "adj"
    var n = getNoun(noun); //collects the array stored under the switch heading of this "noun"
    var randomNum1 = getRandomNum(a);
    var randomNum2 = getRandomNum(n);
    var firstName = a[randomNum1].capitalize();
    var lastName = n[randomNum2].capitalize();
    var name = "The " + firstName + " " + lastName;
    return name;
}

// Chooses random adjective and random noun
function randomName() {
    var randomNumberAdj = parseInt(Math.random() * adjectives.length);
    var randomNumberNoun = parseInt(Math.random() * nouns.length);
    return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

// These functions return a string of a random ingredient from each respective category of ingredients.
var selectRandomMeat = function() {
    var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
    return randomMeat;
};

var selectRandomNonMeat = function() {
    var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
    return randomNonMeat;
};

var selectRandomCheese = function() {
    var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
    return randomCheese;
};

var selectRandomSauce = function() {
    var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
    return randomSauce;
};

var selectRandomCrust = function() {
    var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
    return randomCrust;
};

var ingredientItemizer = function(string) {
    return "<li>" + string + "</li>";
};
// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function() {
    var pizza = "";

    var numberOfMeats = Math.floor((Math.random() * 4));
    var numberOfNonMeats = Math.floor((Math.random() * 3));
    var numberOfCheeses = Math.floor((Math.random() * 2));

    for (var i = 0; i < numberOfMeats; i++) {
        pizza = pizza + ingredientItemizer(selectRandomMeat());
    }

    for (var j = 0; j < numberOfNonMeats; j++) {
        pizza = pizza + ingredientItemizer(selectRandomNonMeat());
    }

    for (var k = 0; k < numberOfCheeses; k++) {
        pizza = pizza + ingredientItemizer(selectRandomCheese());
    }

    pizza = pizza + ingredientItemizer(selectRandomSauce());
    pizza = pizza + ingredientItemizer(selectRandomCrust());

    return pizza;
};
// returns a DOM element for each pizza
var pizzaElementGenerator = function(i) {
    var pizzaContainer, // contains pizza title, image and list of ingredients
        pizzaImageContainer, // contains the pizza image
        pizzaImage, // the pizza image itself
        pizzaDescriptionContainer, // contains the pizza title and list of ingredients
        pizzaName, // the pizza name itself
        ul; // the list of ingredients

    pizzaContainer = document.createElement("div");
    pizzaImageContainer = document.createElement("div");
    pizzaImage = document.createElement("img");
    pizzaDescriptionContainer = document.createElement("div");

    pizzaContainer.classList.add("randomPizzaContainer");
    pizzaContainer.style.width = "33.33%";
    pizzaContainer.style.height = "325px";
    pizzaContainer.id = "pizza" + i; // gives each pizza element a unique id
    pizzaImageContainer.style.width = "35%";

    pizzaImage.src = "images/pizza.png";
    pizzaImage.classList.add("img-responsive");
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaContainer.appendChild(pizzaImageContainer);


    pizzaDescriptionContainer.style.width = "65%";

    pizzaName = document.createElement("h4");
    pizzaName.innerHTML = randomName();
    pizzaDescriptionContainer.appendChild(pizzaName);

    ul = document.createElement("ul");
    ul.innerHTML = makeRandomPizza();
    pizzaDescriptionContainer.appendChild(ul);
    pizzaContainer.appendChild(pizzaDescriptionContainer);

    return pizzaContainer;
};

// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
function resizePizzas(size) {
    console.log("RUNNING resizePizzas NOW");
    window.performance.mark("mark_start_resize"); // User Timing API function

    // Changes the value for the size of the pizza above the slider
    function changeSliderLabel(size) {
        switch (size) {
            case "1":
                document.querySelector("#pizzaSize").innerHTML = "</br><h2>Small</h2>";
                return;
            case "2":
                document.querySelector("#pizzaSize").innerHTML = "</br><h2>Medium</h2>";
                return;
            case "3":
                document.querySelector("#pizzaSize").innerHTML = "</br><h2>Large</h2>";
                return;
            default:
                console.log("bug in changeSliderLabel");
        }
    }

    changeSliderLabel(size);

    // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSlices(size).
    function determineDx(elem, size) {
        var oldWidth = elem.offsetWidth;
        var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
        var oldSize = oldWidth / windowWidth;

        // Changes the slider value to a percent width
        function sizeSwitcher(size) {
            switch (size) {
                case "1":
                    return 0.25;
                case "2":
                    return 0.3333;
                case "3":
                    return 0.5;
                default:
                    console.log("bug in sizeSwitcher");
            }
        }

        var newSize = sizeSwitcher(size);
        var dx = (newSize - oldSize) * windowWidth;

        return dx;
    }

    // Iterates through pizza elements on the page and changes their widths
    var randPizzCont = document.getElementsByClassName("randomPizzaContainer");

    function changePizzaSizes(size, name) {
        for (var i = 0; i < name.length; i++) {
            var dx = determineDx(name[i], size);
            var newwidth = (name[i].offsetWidth + dx) + 'px';
            name[i].style.width = newwidth;
        }
    }
    changePizzaSizes(size, randPizzCont);

    changePizzaSizes(size, items.children);
    
    // User Timing API is awesome
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[timeToResize.length - 1].duration + "ms");
}
window.performance.mark("mark_start_generating"); // collect timing data

// This for-loop actually creates and appends all of the pizzas when the page loads
for (var i = 2; i < 100; i++) {
    var pizzasDiv = document.getElementById("randomPizzas");
    pizzasDiv.appendChild(pizzaElementGenerator(i));
}

// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

//NOW FOR THE BACKGROUND SPIRALING PIZZA IMAGES
function logAverageFrame(e) {
    for (var a = e.length, r = 0, n = a - 1; n > a - 11; n--) {
        r += e[n].duration;
    }
    console.log("Average scripting time to generate last 10 frames: " + r / 10 + "ms");
}

var items = document.getElementById('movingPizzas1'); //This won't be populated from the DOM until one of its methods or properties is accessed below, I think.
items.style.willChange = "transform";
var itemsLength = items.children.length;
var phase;
var latestKnownScrollY = 0;
var ticking = false;
var upOrDown = false;

//Checking whether user is scrolling in a certain direction
var checkUpDown = $(window).bind('mousewheel', function(event){
    if(event.originalEvent.wheelDelta >= 0){
        console.log('scrolled up');
        upOrDown = true;
    }else{
        console.log('scrolled down');
        upOrDown = false;
    }
});

function onScroll() {
    latestKnownScrollY = window.scrollY; //Keep track of your updated value without triggering unnecessary updatePositions
    checkUpDown;
    requestTick();
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updatePositions);
    }
    ticking = true;
}


function updatePositions() {
    var currentScrollY = latestKnownScrollY;
//     console.log(upOrDown);
    frame++;
    window.performance.mark("mark_start_frame");
    for (var i = 0; i < items.children.length; i++) {
        phaseX = Math.sin((currentScrollY / 1250) + (i % 5));
        phaseY = Math.sin((currentScrollY / 1400) + (i % 5));
        transX = (items.children[i].basicLeft + 100) * phaseX;
        transY = (items.children[i].basicLeft + 25) * phaseY;
        if(upOrDown){
            items.children[i].style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
            items.children[i].style.transform += 'rotate(' + i*6 + 'deg)';
            console.log( items.children[i].style.transform)
        }else{
            items.children[i].style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
            items.children[i].style.transform += 'rotate(' + i*5 + 'deg)';
            console.log( items.children[i].style.transform)
        }
    }
    upOrDown = undefined;
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
        var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(timesToUpdatePosition);
    }
    ticking = false;
    measureCRP();
}

function measureCRP() {
    var t = window.performance.timing;
    var interactive = t.domInteractive - t.domLoading;
    var dcl = t.domContentLoadedEventStart - t.domLoading;
    var completed = function() {
        var tmp = t.domComplete - t.domLoading;
        if (Math.abs(tmp) < 10000) {
            return tmp;
        } else {
            return "N/A ";
        }
    };
    console.log("Page interactive in:\t" + interactive + "ms\n" +
        "DOMContentLoaded in:\t" + dcl + "ms\n" +
        "DOM completed in:\t\t" + completed() + "ms");
}

window.addEventListener("scroll", onScroll, false);

document.addEventListener("DOMContentLoaded", function() { //This is the point that no stylesheets are blocking js execution/render tree construction
    var rows = 5;
    var s = 400;
    for (var i = 0; i < 40; i++) {
        var elem = document.createElement('img');
        elem.className = 'mover'; //All of these style properties will get filed under "cssText" in the object
        elem.src = "images/pizza.png";
        elem.style.height = "100px";
        elem.style.width = "73.333px";
        elem.basicLeft = (i % rows) * s;
        elem.style.left = (elem.basicLeft) + 100 * phase + 'px';
        elem.style.top = (Math.floor(i / rows) * s) + 'px';
//         elem.style.willChange = "transform";
        items.appendChild(elem); //items has to ref a div element in order to send updates to the DOM
    }
    updatePositions();
});
