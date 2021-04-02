import figlet from 'figlet'
import asciiart from 'ascii-art'
import * as prompt from "prompt-promise"


// var figlet = require('figlet');
// figlet('Welcome to Night Vale', function(err, data) {
//    if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });




//ascii art 
// const Image = require('ascii-art-image');
// var image = new Image({
//   filepath: '../assets/Night_Vale_slider.png',
//   alphabet:'variant4'
// });

// image.write(function(err, rendered){
//  console.log(rendered);
// })

let firstScene = "The history of the town of Night Vale is long and complicated, reaching back thousands of years to the earliest indigenous people in the desert. We will cover none of it here. Suffice it to say that it is a town like many towns, with a city hall, and a bowling alley (the Desert Flower Bowling Alley and Arcade Fun Complex), and a diner (the Moonlite All-Nite Diner), and a supermarket (Ralphs), and, of course, a community radio station reporting all the news that we are allowed to hear. On all sides it is surrounded by empty desert flatness. It is much like your town, perhaps. It might be more like your town than you’d like to admit. It is a friendly desert community, where the sun is hot, the moon is beautiful, and mysterious lights pass overhead while we all pretend to sleep. Welcome to Night Vale.";

let nightValeMessage = "Regret nothing, until it is too late. Then regret everything. Welcome to Night Vale.";

let desertMessage = "The desert seems vast, even endless, and yet scientists tell us that somewhere, even now, there is snow";

//All words to be used
let words = new Array("north", "east", "south", "west", "about", "help", "back");

//All locations in the game, to be continued
//let locations = new Array("Night Vale", "The Empty Desert", "The Dog Park", "Elementary School", "Elementary School Playground", "Desert Creek", "The House That Does Not Exist");

let locations:  {
  entrance: {
    description: "You are about to enter Night Vale"
  },
  desert: {
    description: {"The desert seems vast, even endless, and yet scientists tell us that somewhere, even now, there is snow"}
  },
  nightVale: {
    description: {"It is a friendly desert community, where the sun is hot, the moon is beautiful, and mysterious lights pass overhead while we all pretend to sleep."}
  },
elementarySchool: {
  description: {"Night Vale Elementary School is the town's only public elementary school. The Night Vale Elementary School building is a living creature"},
  items: []
}
  playground: {
    description: {"The elementary school playground is where students of Night Vale Elementary School go to play during recess. The playground is popular with Hooded Figures,  it is highle recommended not to look at them. The playground is also the site of feral dogs attacks."}
  }
}

//All objects, to be continued
let gameObjects = new Array("nerve gas canister", "sunglasses", );



//This function should print the very first message with a delay of 3 sec
const displayFirstScene =  function () {
   setTimeout(function(){console.log(firstScene); }, 6000);
}

//displayFirstScene();

//This function should ask the user whether they want to play

const questionFirst = async function() {
  const answerFirst = await prompt("Do you want yo play")
   if (answerFirst === 'yes') {var figlet = require('figlet');
   figlet('Welcome to Night Vale', function(err, data) {
      if (err) {
           console.log('Something went wrong...');
           console.dir(err);
           return;
       }
       console.log(data)
   });
   }}

   
const initialize = function() {

  questionFirst(); 
   displayFirstScene();
}

initialize();

