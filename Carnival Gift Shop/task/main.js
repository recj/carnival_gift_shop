// write your code here
const input = require('sync-input');

let tickets = 0;
let stillInterested = true;
let listOfGifts = [
  { id: 1, name: 'Teddy Bear', cost: 10 },
  { id: 2, name: 'Big Red Ball', cost: 5 },
  { id: 3, name: 'Huge Bear', cost: 50 },
  { id: 4, name: 'Candy', cost: 8 },
  { id: 5, name: 'Stuffed Tiger', cost: 15 },
  { id: 6, name: 'Stuffed Dragon', cost: 30 },
  { id: 7, name: 'Skateboard', cost: 100 },
  { id: 8, name: 'Toy Car', cost: 25 },
  { id: 9, name: 'Basketball', cost: 20 },
  { id: 10, name: 'Scary Mask', cost: 75 }
];

//Showing list of gifts function
let showGiftList = () => {
  console.log("Here's the list of gifts:\n");
  if (listOfGifts.length === 0){
    console.log("Wow! There are no gifts to buy.");
  }else {
      for (let i = 1; i <= listOfGifts.length; i++) {
      console.log(`${listOfGifts[i-1].id}- ${listOfGifts[i-1].name}, Cost: ${listOfGifts[i-1].cost} tickets`);}
  }
};

//Function 1 to get a gift
let optionOne = () => {
  if (listOfGifts.length === 0){
    console.log('Wow! There are no gifts to buy.');
  }else{
    let giftId = Number(input('Enter the number of the gift you want to get: '));
    if (typeof giftId === 'number' && !isNaN(giftId)){
        if (!(listOfGifts.find(gift => gift.id === giftId)) || giftId <= 0){
          console.log('There is no gift with that number!');
        }else{
          let indexGift = listOfGifts.findIndex(gift => gift.id === giftId);
          if (tickets >= listOfGifts[indexGift].cost){
            console.log(`Here you go, one ${listOfGifts[indexGift].name}!`);
            tickets -= listOfGifts[indexGift].cost;
            listOfGifts.splice(indexGift, 1);
            showTickets();
          }else{
            console.log('You don\'t have enough tickets to buy this gift.');
            showTickets();
          }
      }
    }else {
      console.log('Please enter a valid number!');
    }}};

//Function 2 to get tickets
let optionTwo = () => {
  let ticketAmount = Number(input('Enter the ticket amount: '));
  if (typeof ticketAmount === 'number' && ticketAmount >= 0 && ticketAmount <= 1000){
    tickets += ticketAmount;
    showTickets();
  }else{
    console.log('Please enter a valid number between 0 and 1000.');
  }
};

let showTickets = () => console.log('Total tickets: '+tickets);
let endingMessage = () => console.log('Have a nice day!');


//Starting message and list of gifts
console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
showGiftList();

while (stillInterested) {
  //Requesting of a function for the customer
  console.log("");
  console.log("What do you want to do?");
  console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");

  //Options distribution
  let option = Number(input('> '));

  switch(option){
    case 1:
      optionOne();
      break;
    case 2:
      optionTwo();
      break;
    case 3:
      showTickets();
      break;
    case 4:
      showGiftList();
      break;
    case 5:
      stillInterested = !stillInterested;
      break;
    default:
      console.log('Please enter a valid number!')
      break;
  }
}

endingMessage();
