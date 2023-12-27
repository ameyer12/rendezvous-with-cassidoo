/* You have some gifts you want to return. Gifts bought in December have a 90-day return window,
 and all other gifts have a 30-day return window. Given a gift's buy date, write a function that prints the last day you can return the gift. 
 You can choose how dates should be formatted! */

 function returnGift(date) {
    let formattedDate = new Date(date);
    let month = formattedDate.getMonth();

    if(month === 11){
        formattedDate.setDate(formattedDate.getDate() + 89);
    } else {
        formattedDate.setDate(formattedDate.getDate() + 29);
    }

    return formattedDate.toDateString();
 }

console.log(returnGift('Dec 25, 2023'));