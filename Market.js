
var customer = {
  name : '',
  order : 0,
  bill : 0,
  checkedIn : false,
  checkOutMessage : ''
};

var foodStockPrices = {
  rice : 180,
  flour : 80,
  beans : 40
};

var readline = require('readline');

var read = readline.createInterface(process.stdin, process.stdout);

var errorCode = 0;

var event = require('events').EventEmitter;

var emitter = new event();

// read.setPrompt(`What is your name ? > `);
// read.prompt();
//
// read.on('line', answer => {
//
//   if(isNaN(Number(answer)) && customer.checkedIn == false) {
//
//     customer.name = answer;
//     process.stdout.write(`\n${customer.name}, How can we help you\n`);
//
//     read.setPrompt(`\nWe offer : \n1. Rice. \n2. Flour. \n3. Beans\n`);
//     read.prompt();
//
//     customer.checkedIn = true;
//
//   } else if(isNaN(Number(answer)) && customer.checkedIn == false) {
//     errorCode = -1;
//     read.close();
//   } else if(customer.checkedIn) {
//
//     switch(Number(answer.trim())) {
//         case 1:
//           customer.order = "Rice";
//           customer.bill = foodStockPrices.rice;
//           read.close();
//           break;
//         case 2:
//           customer.order = "Flour";
//           customer.bill = foodStockPrices.flour;
//           read.close();
//           break;
//         case 3:
//           customer.order = "Beans";
//           customer.bill = foodStockPrices.beans;
//           read.close();
//           break;
//         default:
//           console.log(`\n${customer.name}, that was a wrong input. Please try again.\n`);
//     }
//   } else {
//     console.log(`\nThat was a wrong input. Please try again.\n`);
//   }
//
//
// });
//
// read.on('close', () => {
//   if(errorCode === -1) {
//     read.setPrompt(`\nWrong Input Now exiting\n`);
//     read.prompt();
//     process.exit();
//   } else {
//     customer.checkOutMessage = `\n${customer.name}, You have orderd ${customer.order} and your bill is $${customer.bill}\n`;
//     read.setPrompt(customer.checkOutMessage);
//     read.prompt();
//     process.exit();
//   }
// });
//
// process.on('exit', () => {
//   if(errorCode != -1) {
//     process.stdout.write(`\nThank you ${customer.name} for using my first Node.js App, Takecare\n`);
//   }
// });

emitter.on('revisit', function() {
  
});

function products(offer) {

  switch(Number(offer.trim())) {
          case 1:
            customer.order = "Rice";
            customer.bill = foodStockPrices.rice;
            read.close();
            break;
          case 2:
            customer.order = "Flour";
            customer.bill = foodStockPrices.flour;
            read.close();
            break;
          case 3:
            customer.order = "Beans";
            customer.bill = foodStockPrices.beans;
            read.close();
            break;
          default:
            console.log(`\n${customer.name}, that was a wrong input. Please try again.\n`);
  }
}

function store(callback = "", resetName = "") {

  if(Boolean(resetName) == false) {

    if(typeof callback == "function") callback();

    read.question("\nWhat is your name ? \t", name => {

      customer.name = name;
      read.setPrompt(`\n${customer.name}, Welcome to my little store made in Node.js\n`);
      read.prompt();

      console.log(`${customer.name}, What would you like to buy`);
      console.log(`\nWe offer : \n1. Rice. \n2. Flour. \n3. Beans\n`);

      read.on('line', answer => {
        if(!isNaN(Number(answer)) && customer.checkedIn == false) {
          products(answer);
          customer.checkedIn = true;
        } else {
          console.log(`Wrong input ${customer.name}, Please try again`);
        }
      });
    });
  } else {

    read.setPrompt(`\n${customer.name}, Welcome Back!!!\n`);
    read.prompt();

    console.log(`${customer.name}, What would you like to buy`);
    console.log(`\nWe offer : \n1. Rice. \n2. Flour. \n3. Beans\n`);

    read.on('line', answer => {
      if(!isNaN(Number(answer)) && customer.checkedIn == false) {
        products(answer);
      } else {
        console.log(`Wrong input ${customer.name}, Please try again`);
      }
    });
  }

}

read.on('close', () => {

  let resetName = false;

  read.question(`\n${customer.name} Would you like a buy something else\n`, answer => {
    if(!isNaN(Number(answer)) && answer == 1) {
      customer.checkOutMessage = `\n${customer.name}, You have orderd ${customer.order} and your bill is $${customer.bill}\n`;
      read.setPrompt(customer.checkOutMessage);
      read.prompt();
      console.log(`\nCreating new Session for : ${customer.name}\n`);

      store(function() {
        customer.checkedIn = false;
      }, true);

    } else {
      customer.checkOutMessage = `\n${customer.name}, You have orderd ${customer.order} and your bill is $${customer.bill}\n`;
      read.setPrompt(customer.checkOutMessage);
      read.prompt();
      process.exit();
    }

    console.log(`you wrote ${answer}`)

  });
});

store(true);
