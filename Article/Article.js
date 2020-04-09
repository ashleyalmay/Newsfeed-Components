/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Professional Software Development in 2020",
    date: "Jan 2st, 2020",
    firstParagraph: `I shredded your linens for you have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. Bring your owner a dead bird. Sit in a box for hours shred all toilet paper and spread around the house vommit food and eat it again cats are fats i like to pets them they like to meow back or caticus cuteicus, or cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit. If it fits i sits. Run up and down stairs kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff and swipe at owner's legs and russian blue and stares at human while pushing stuff off a table but skid on floor, crash into wall . Meow to be let out plan your travel. Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye ask to go outside and ask to come inside and ask to go outside and ask to come inside is good you understand your place in my world. Meow meow you are a captive audience while sitting on the toilet, pet me, so jump five feet high and sideways when a shadow moves.
    `,

    secondParagraph: `Good now the other hand, too loves cheeseburgers, and get video posted to internet for chasing red dot lick sellotape get video posted to internet for chasing red dot so murder hooman toes. Sun bathe bring your owner a dead bird. Cat not kitten around chase imaginary bugs, yet sniff catnip and act crazy. Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again cough hairball, eat toilet paper for spread kitty litter all over house for attack feet. Tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad snuggles up to shoulders or knees and purrs you to sleep for rub whiskers on bare skin act innocent and sit on human for spend six hours per day washing, but still have a crusty butthole. Pee in the shoe leave hair on owner's clothes yet kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff sniff all the things but be superior. Intently sniff hand step on your keyboard while you're gaming and then turn in a circle , so litter box is life, yet really likes hummus for stinky cat. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce you have cat to be kitten me right meow for demand to have some of whatever the human is cooking, then sniff the offering and walk away, and cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit for attack the child. Pet me pet me don't pet me trip on catnip. Catty ipsum.`,

    thirdParagraph: `Get scared by sudden appearance of cucumber i just saw other cats inside the house and nobody ask me before using my litter box for sweet beast it's 3am, time to create some chaos so scratch leg; meow for can opener to feed me and step on your keyboard while you're gaming and then turn in a circle hell is other people. Push your water glass on the floor claws in your leg rub whiskers on bare skin act innocent, kitty power so knock over christmas tree. Ignore the human until she needs to get up, then climb on her lap and sprawl touch my tail, i shred your hand purrrr taco cat backwards spells taco cat for suddenly go on wild-eyed crazy rampage, yet i see a bird i stare at it i meow at it i do a wiggle come here birdy swipe at owner's legs for murr i hate humans they are so annoying. Scratch me there, elevator butt sleep on keyboard suddenly go on wild-eyed crazy rampage that box? i can fit in that box kitty kitty. I am the best. Eat the rubberband. Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls look at dog hiiiiiisssss, so why must they do that, for terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry pet me pet me pet me pet me, bite, scratch, why are you petting me woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now. All of a sudden cat goes crazy eat too much then proceed to regurgitate all over living room carpet while humans eat dinner and this cat happen now, it was too purr-fect!!! jump off balcony, onto stranger's head destroy the blinds howl on top of tall thing. I is not fat, i is fluffy lay on arms while you're using the keyboard, eats owners hair then claws head nya nya nyan but eat grass, throw it back up. Freak human out make funny noise mow mow mow mow mow mow success now attack human show belly so plan your travel and give attitude curl up and sleep on the freshly laundered towels for eat the fat cats food. Stare at the wall, play with food and get confused by dust attack the dog then pretend like nothing happened yet eat from dog's food ptracy. Stare at ceiling light unwrap toilet paper but destroy the blinds behind the couch, give me some of your food give me some of your food give me some of your food meh, i don't want it rub whiskers on bare skin act innocent but get video posted to internet for chasing red dot. Ptracy love blinks and purr purr purr purr yawn check cat door for ambush 10 times before coming in lick the other cats. X.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const articles = document.querySelector(".articles");

function mainArticle({
  title,
  date,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  forthParagraph
}) {
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleP1 = document.createElement("p");
  const articleP2 = document.createElement("p");
  const articleP3 = document.createElement("p");
  const articleP4 = document.createElement("p");
  const articleSpanContainer = document.createElement("span");

  article.classList.add("article");
  articleDate.classList.add("date");
  articleSpanContainer.classList.add("expandButton");

  articleSpanContainer.addEventListener("click", event => {
    article.classList.toggle("article-open");
  });
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleP1);
  article.appendChild(articleP2);
  article.appendChild(articleP3);
  article.appendChild(articleP4);
  article.appendChild(articleSpanContainer);

  articleTitle.textContent = title;
  articleDate.textContent = date;
  articleP1.textContent = firstParagraph;
  articleP2.textContent = secondParagraph;
  articleP3.textContent = thirdParagraph;
  articleP4.textContent = forthParagraph;
  articleSpanContainer.textContent = "Click This";

  return article;
}

const maps = data.map(function(x) {
  return mainArticle(x);
});

maps.forEach(function(item) {
  articles.appendChild(item);
});
