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



// Start of Carousel Functionality
// I think the logic is to use the css display property on classes and onclick functions

// Collect main container for carousel(s)
document.querySelectorAll('.carousel').forEach(carousel => {
    // Collect carousel items in each container
    const carousel_items = carousel.querySelectorAll('.carousel-items')

    // create buttons based on the number of carousel items in container
    buttonHtml  =  Array.from(carousel_items, () => {
        return  `<span class='carousel-button'></span>`
    });


    // Add navigation to carousel container
    // this will include HTML for the buttons

    carousel.insertAdjacentHTML('beforeend',
    `
    <div class='carousel-nav'>
    ${buttonHtml.join("")}
    <div>
    `
    );

    // select all buttons in carousel
    const buttons = carousel.querySelectorAll('carousel-button')

    buttons.forEach((button, index) =>{
        button.addEventListener('click',() => {

            // remove selected class from current slide
            carousel_items.forEach((item) => (
                item.classList.remove('carousel-item-selected')
            ) )
            // remove selected class from current button
            buttons.forEach((button) => (
                button.classList.remove("carousel-button-selected")
            ))

            carousel_items[index].classList.add('carousel-item-selected')
            buttons[index].classList.add('button-item-selected')
        })
    })
})

