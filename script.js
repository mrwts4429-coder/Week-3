// ==============================
// Movie Data
// ==============================

let movies = [
    {
        name: "Interstellar",
        price: 120,
        rating: 9,
        category: "Sci-Fi"
    },
    {
        name: "Inception",
        price: 120,
        rating: 8.8,
        category: "Action"
    },
    {
        name: "The Dark Knight",
        price: 120,
        rating: 9,
        category: "Action"
    },
    {
        name: "Avatar",
        price: 120,
        rating: 7.8,
        category: "Adventure"
    },
    {
        name: "Titanic",
        price: 120,
        rating: 7.9,
        category: "Drama"
    }
];


// ==============================
// Customer Object
// ==============================

let customer = {
    name: "Marwa",
    age: 20
};


// ==============================
// Variables
// ==============================

let selectedMovie = movies[0];
let selectedTicketType = "Normal";
let selectedHall = "Hall A";
let selectedQuantity = 0;
let finalTotal = 0;


// ==============================
// HTML Elements
// ==============================

let movieSelect = document.getElementById("movie");
let hallSelect = document.getElementById("hall");
let ticketTypeSelect = document.getElementById("ticketType");
let quantityInput = document.getElementById("numberOfTickets");
let bookingForm = document.querySelector(".booking-form");

let movieCards = document.querySelectorAll(".movie-card");


// Summary Elements

let summaryMovie = document.querySelector(".ticket-header strong");

let summaryHall =
    document.querySelector(".ticket-details div:nth-child(1) strong");

let summaryTickets =
    document.querySelector(".ticket-details div:nth-child(2) strong");

let summaryType =
    document.querySelector(".ticket-details div:nth-child(3) strong");

let summaryPrice =
    document.querySelector(".ticket-price strong");

let bookingStatus =
    document.querySelector(".status");


// ==============================
// Part 1 - Display Movies
// ==============================

// for loop
for (let i = 0; i < movies.length; i++) {

    console.log(movies[i].name);
    console.log(movies[i].price);
    console.log(movies[i].category);

}


// ==============================
// Part 2 - Choose Movie
// ==============================

for (let i = 0; i < movieCards.length; i++) {

    let chooseButton =
        movieCards[i].querySelector(".choose-btn");

    chooseButton.addEventListener("click", function () {

        selectedMovie = movies[i];

        movieSelect.value = selectedMovie.name;

        updateBooking();

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ==============================
// Part 3 - Ticket Type
// ==============================

ticketTypeSelect.addEventListener("change", function () {

    selectedTicketType = ticketTypeSelect.value;

    updateBooking();

});


// ==============================
// Part 4 - Cinema Hall
// ==============================

hallSelect.addEventListener("change", function () {

    selectedHall = hallSelect.value;

    updateBooking();

});


// ==============================
// Part 5 - Calculate Total
// ==============================

function calculateTotal(price, tickets) {

    return price * tickets;

}


// ==============================
// Part 6 - VIP / Normal Price
// ==============================

function getTicketPrice() {

    let price = 120;

    switch (selectedTicketType) {

        case "Normal":
            price = 120;
            break;

        case "VIP":
            price = 200;
            break;

        default:
            price = 120;

    }

    return price;

}


// ==============================
// Part 7 - Price Category
// ==============================

function getPriceCategory(price) {

    if (price < 70) {

        return "Budget";

    }
    else if (price >= 70 && price <= 100) {

        return "Regular";

    }
    else {

        return "Premium";

    }

}


// ==============================
// Part 8 - Calculate Booking
// ==============================

function calculateBooking() {

    selectedQuantity = Number(quantityInput.value);

    let ticketPrice = getTicketPrice();

    let originalTotal =
        calculateTotal(ticketPrice, selectedQuantity);

    let discount = 0;


    // Normal ticket discount

    if (
        selectedTicketType === "Normal" &&
        selectedQuantity >= 5
    ) {

        discount = originalTotal * 0.10;

    }


    // VIP ticket discount

    if (
        selectedTicketType === "VIP" &&
        selectedQuantity >= 5
    ) {

        discount = originalTotal * 0.15;

    }


    finalTotal = originalTotal - discount;


    return {
        ticketPrice: ticketPrice,
        originalTotal: originalTotal,
        discount: discount,
        finalTotal: finalTotal
    };

}


// ==============================
// Part 9 - Update Booking
// ==============================

function updateBooking() {

    let booking = calculateBooking();

    let priceCategory =
        getPriceCategory(booking.ticketPrice);


    // Movie

    summaryMovie.textContent =
        selectedMovie.name;


    // Hall

    summaryHall.textContent =
        selectedHall;


    // Tickets

    summaryTickets.textContent =
        selectedQuantity;


    // Ticket Type

    summaryType.textContent =
        selectedTicketType;


    // Price

    summaryPrice.textContent =
        booking.finalTotal + " EGP";


    // Status

    if (selectedQuantity > 0) {

        bookingStatus.textContent =
            "Booking Status: Confirmed";

    }
    else {

        bookingStatus.textContent =
            "Booking Status: No tickets selected";

    }


    console.log("Movie:", selectedMovie.name);
    console.log("Ticket Price:", booking.ticketPrice);
    console.log("Price Category:", priceCategory);
    console.log("Quantity:", selectedQuantity);
    console.log("Discount:", booking.discount);
    console.log("Final Total:", booking.finalTotal);

}


// ==============================
// Part 10 - Booking Form
// ==============================

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // do...while
    let attempts = 1;

    do {

        console.log("Booking attempt:", attempts);

        attempts++;

    } while (attempts <= 3);


    selectedQuantity =
        Number(quantityInput.value);


    if (selectedQuantity <= 0) {

        bookingStatus.textContent =
            "Booking Status: No tickets selected";

        summaryTickets.textContent = "0";

        summaryPrice.textContent = "0 EGP";

        return;

    }


    updateBooking();


    document.getElementById("summary").scrollIntoView({
        behavior: "smooth"
    });

});


// ==============================
// Part 11 - Available Tickets
// ==============================

let availableTickets = 20;

function prepareTickets(quantity) {

    let remainingTickets = quantity;


    // while loop
    while (remainingTickets > 0) {

        console.log(
            "Preparing ticket:",
            remainingTickets
        );

        remainingTickets--;

    }

}


// ==============================
// Quantity Change
// ==============================

quantityInput.addEventListener("input", function () {

    if (quantityInput.value < 0) {

        quantityInput.value = 0;

    }

});


// ==============================
// Initial Booking
// ==============================

updateBooking();