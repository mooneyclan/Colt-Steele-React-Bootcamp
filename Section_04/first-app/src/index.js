import { fruits } from './food';
import { choice, remove } from './helpers';

let food = fruits;

function foodCLI() {
  console.log("food: " + food);
  if(food.length > 0) {
    let randomFruit = choice(food);
    console.log(`I'd like one ${randomFruit}, please...`);
    console.log(`Here you go: ${randomFruit}`);
    console.log(`Delicious, May I have another?`);
    let newArr = remove(food, randomFruit);
    console.log("newArr: " + newArr);
    food = newArr;
    console.log(`I'm sorry, we're all out. We have ${food.length} fruit left.`)
    //foodCLI();
  } else {
    console.log(`Go home...you ate all our fruit!!!`);
  }
}

foodCLI();


// Got the import/exports working.  Got a bug in the code but going to keep moving along in the course...