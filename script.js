/*  This script displays a greeting to the user based on the current time of the day
    Credits to an example from a Javascript Book
*/
let today = new Date()  //find new date or current date
let hourNow = today.getHours()  //extract hour from date object
let greeting


//display greeting based on hour
if(hourNow>18){
    greeting = 'Good Evening'
}
else if(hourNow > 12){
    greeting = 'Good Afternoon'
}
else if(hourNow > 0){
    greeting = 'Good Morning'
}
else {
    greeting = 'Welcome'
}

document.write('<h3>' + greeting + '</h3>')