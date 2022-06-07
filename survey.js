const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => { 
  rl.question("What's an activity you like doing? ", (activitie) => {
    rl.question("Which meal is your favourite ", (meal) => {
      rl.question("Which sport is your absolute favourite? ", (sport) => {
        rl.question("What is your superpower? ", (power) => {
          console.log(`----------`)
          console.log(`Nice to meet you ${name}`)
          console.log(`----------`)
          console.log(`We finally made it to the end of your profile!`)
          console.log(`----------`)
          console.log(`You are interested in ${activitie}! `)
          console.log(`Your favorite meal is ${meal}`)
          console.log(`You like to ${sport} a lot! `)
          console.log(`And you superpower is ${power}`)
          rl.close();
        });
      });
    });
  });

});
