
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (name) => {
  
  rl.question(`What's an activity you like doing?`, (activity) => {

    rl.question(`What do you listen to while doing that?`, (listen) => {

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (meal) => {

        rl.question(`What's your favourite thing to eat for that meal?`, (food) => {

          rl.question(`Which sport is your absolute favourite?`, (sport) => {

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {

              console.log(`\n\nHello there, my name is ${name}.
I like to ${activity} while I listen to ${listen}.
My favorite meal in the day is ${meal} and I'd eat a crapton of ${food} if I could. 
When I'm not stuffing my face I like to do sports, my fave is ${sport}. 
My super power is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});