import figlet from "figlet";
import asciiart from "ascii-art";
import asciiartImage from "ascii-art-image";
import * as prompt from "prompt-promise";

let firstScene =
  "The history of the town of Night Vale is long and complicated, reaching back thousands of years to the earliest indigenous people in the desert. We will cover none of it here. Suffice it to say that it is a town like many towns, with a city hall, and a bowling alley, and a diner, and a school, and, of course, a community radio station reporting all the news that we are allowed to hear. On all sides it is surrounded by empty desert flatness. It is much like your town, perhaps. It might be more like your town than you’d like to admit. It is a friendly desert community, where the sun is hot, the moon is beautiful, and mysterious lights pass overhead while we all pretend to sleep. Welcome to Night Vale. \n\n Explore Night Vale, solve its mysteries, save Cecil!";

let nightValeMessage =
  "Regret nothing, until it is too late. Then regret everything. Welcome to Night Vale.";


//All words to be used
let words = new Array(
  "north",
  "east",
  "south",
  "west",
  "about",
  "help",
  "back"
);


let locations = {
  desert: {
    title: "The Empty Desert",
    description:
      "The desert seems vast, even endless, and yet scientists tell us that somewhere, even now, there is snow",
  },
  nightVale: {
    title: "Night Vale",
    description:
      "It is a friendly desert community, where the sun is hot, the moon is beautiful, and mysterious lights pass overhead while we all pretend to sleep.",
    organizations: {
      school: {
        description:
          "Night Vale Elementary School is the town's only public elementary school. The Night Vale Elementary School building is a living creature",
        title: "Night Vale Elementary School",
        items: [],
      },
      playground: {
        description:
          "The elementary school playground is where students of Night Vale Elementary School go to play during recess. The playground is popular with Hooded Figures,  it is highle recommended not to look at them. The playground is also the site of feral dogs attacks.",
        title: "Night Vale Elementary School Playground",
      },
      dogPark: {
        title: "The Dog Park",
        description:
          "Citizens are not even supposed to be consciously aware of the dog park, so they could not possibly be receiving a menacing and unearthly voice instructing listeners to bring precious metals and toddlers to the dog park! DOG PARK, that could NEVER, EVER BE REAL."
      },
      
    },
  },
};

let welcome = `((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
(((((((((((((((((((((((((((((((((((((((((((((((#@@((((((((((((((((((((((((((((((
(((((((((((((((((((((((((((((((((((((((@@@@@@@@@@@@@@@@@@@@(((((((((((((((((((((
(((((((((((((((((((((((((((((((((((((((((&#((@#&@@(#@#(&#((%%(((((((((((((((((((
(((((((((((((((((((((((((((((((((((((((((((#@#(&@@@#((((((#&#((%&#((((((((((((((
(((((((((((((((((((((((((((((((((((((((((((((((#@@(((#&#(((((((%&%#(#%&#((((((((
(((((((((((((((((((((###%%%%%%%%####%%%%%%%%%###@@((#&&#((#&%#(((((((##&&#((#%&&
(((((((((((((#%%%%%%%%%%%%%%((((,. ,((((#%%%%%%%@@%%%%#((((#@&#((%@&#((((((((((#
(((((((#%%%%%%%%%%%%%%%%%%(((    /((((((((%%%%%%@@%%%%%%%%%%#((((((#%&&%##%&&%##
(((#%%%%%%%%%%%%%%%%%%%%%#(/    (((((((((((%%%%%@@%%%%%%%%%%%%%%#((((((((((((((#
(((#%%%%%%%%%%%%%%%%%%%%%#(*    #((((((((((%%%%%@@%%%%%%%%%%%%%%#%((((((((((((((
(((((((#%%%%%%%%%%%%%%%%%%((*    (((((((((#%%%%%@@%%%%%%%%%%(((@@@@@#(((((((((((
(((((((((((((#%%%%%%%%%%%%%#(((*   .((((#%%%%%%%@@%%%%#((((((((@@@@@#(((((((((((
(((((((((((((((((((((##%%%%%%%%##((##%%%%%%%%###@@(((((((((((#%@@@@@&%((((((((((
(((((((((((((((((((((((((((((((((((((((((((((((#@@(((((((((((((@@@@@%(((((((((((
(((((((((((((((((#(#((#((((#(#((#((((((((((((((#@@((((((((((((#%(&((@(((((((((((
((((((((((((((#&@%@%%@#%%%@%@&%@(((((((((((((((#@@((((((((((((&#(&((&#((((((((((
(((((((((((((#@#%&(@#(@%%&#@(&%((((((((((((((((#@@((((((((((((@&(&(#%%((((((((((
((((((((((((((((((((((@%(((((((((((((((((((((((#@@(((((((((((##(#@@((&((((((((((
((((((((((((((((((((((@%(((((((((((((((((((((((#@@(((((((((((&((%&&#(&((((((((((
((((((((%@@@@@@@#(((((@%(((((((((((((((((((((((#@@(((((((((((&(&(&(#&##(((((((((
(((#&@@@@@@@@@@@@@@@%(@%(((((((((((((((((((((((#@@((((((((((#@(((&(((%@(((((((((
@@@@@@@@@@@@@@@@@@@@@@@@%((((((((((((((((((((((#@@((((((((((&%%((&(((&&#((((((((
@@@@@@@@@@@@@@@@@@@@@@@@@@@@&((((((((((((((((((#@@((((((((((@(((@&##((#%((((((((
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`;

//All objects, to be continued
let gameObjects = new Array("nerve gas canister", "sunglasses");

const sleep = function (ms): Promise<void> {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
};

const displayFirst = async function () {
  await sleep(3000);
  console.log(firstScene);
};

//displayFirstScene();

//This function should ask the user whether they want to play

const questionFirst = async function() {
  const answerFirst = await prompt("Do you want to play? Yes or no? ");
  if (answerFirst === "yes") {
    var figlet = require("figlet");
    figlet("Welcome to Night Vale", async function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
      await displayFirst();
      await sleep(3000);
      console.log(welcome);
      await sleep(3000);
      questionSecond();
    });    
  } else {
    var figlet = require("figlet");
    figlet.text(
      "Goodbye!",
      {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      },
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(data);
      }
    );
      }}

const initialize = function () {
  questionFirst();
};

initialize();

const questionSecond = async function () {
  const answerSecond = await prompt(`Where would like to go? 
  ${locations.desert.title}
  ${locations.nightVale.title}`);
   
  if (answerSecond == locations.desert.title) {
    console.log(locations.desert.description)
    await sleep(3000);
    const chance = await prompt(`Are you sure that you want to stay here?`);
    if ( chance == "no") {
      await sleep(3000);
      console.log("You are entering Night Vale!\n" + nightValeMessage) ;
       await sleep(3000);
       console.log(locations.nightVale.description);
  
    }
  } else if (
    answerSecond ==
    locations.nightVale.title) {
    console.log(locations.nightVale.description);
  } 
};

//questionSecond();

const questionThird = async function() {

  const answerThird = await prompt(`Where would you like to go next? 
  ${locations.nightVale.organizations.school.title}
  ${locations.nightVale.organizations.playground.title}
  ${locations.nightVale.organizations.dogPark.title}
  `);
  if (answerThird == locations.nightVale.organizations.school.title ) {console.log(locations.nightVale.organizations.school.description);}
   else if (answerThird == locations.nightVale.organizations.playground.title) {console.log(locations.nightVale.organizations.playground.description);}
   else if (answerThird == locations.nightVale.organizations.dogPark.title) {
     console.log(locations.nightVale.organizations.dogPark.description);
   } else {
     console.log(`I do not understand what do you mean with ${answerThird}`);
   }
  


  }

  
  
