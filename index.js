function scuberGreetingForFeet(miles){
  // Write your code here!
  let message;

  if (miles <=400) {
    message = 'This one is on me!';
  } else if (miles > 2000 && miles <=2500){
    message = 'I will gladly take your thirty bucks.';
  } else if (miles >2500) {
    message = 'No can do.';
  }
// another way to do it:
  /*if (miles > 2500) {
    message = 'No can do.';
  } else if (miles > 2000) {
    message = 'I will gladly take your thirty bucks.';
  } else if (miles <=400) {
    message = 'This one is on me!';
  }*/
   
    return message;
}

function ternaryCheckCity(city){
  // Write your code here!

  let message2;

  city === 'NYC' ? message2 = 'Ok, sounds good.': message2 = 'No go.';

  return message2;
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  const tipAmount = tip;

  let respond;

  switch (tipAmount) {
    case 'generous':
      respond = 'Thank you so much.';
      break;
    case 'not as generous':
      respond = 'Thank you.';
      break;
    default:
      respond ='Bye.';
      break;
  }
return respond;

}