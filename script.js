let FelmName = "Interstellar";
let TicketPrice = 120;
let TicketsValid = 20;
let Evaluation = 9;

let movie={
        name:FelmName,
        price:TicketPrice,
        valid:TicketsValid,
        evaluation:Evaluation,
}

let age = 88;
if (age < 12){
    console.log("Child")
}
else if (age >= 12 && age <= 17){
    console.log("Teen")
}
else if (age >= 18 && age <= 59){
    console.log("Adult")
}
else{
    console.log("Senior")

}

let hall = 4;
switch (hall){
    case 1:
        console.log("Hall A")
        break
    case 2:
        console.log("Hall B")
        break
    case 3:
        console.log("VIP Hall")
        break
    default:
        console.log("Invalid Hall")
}

let numberOfTickets = 0;
let total;
function calculateTotal(numberOfTickets,TicketPrice) {
    total = numberOfTickets * TicketPrice;
    return total
}
let Discount=0;
let FinalTotal= calculateTotal(numberOfTickets,TicketPrice);
if (numberOfTickets >= 5){
    Discount = calculateTotal(numberOfTickets,TicketPrice) * 0.10
    FinalTotal = calculateTotal(numberOfTickets,TicketPrice) - Discount
    console.log("Original Total: "+calculateTotal(numberOfTickets,TicketPrice));
    console.log("Discount: "+Discount)
    console.log("Final Total: "+FinalTotal)
}
else{
    console.log("Original Total: "+calculateTotal(numberOfTickets,TicketPrice));
    console.log("Discount: "+Discount)
    console.log("Final Total: "+FinalTotal)
}

for (let i = 1;  i<= numberOfTickets; i++) {
    console.log("Seat "+i)
    
}

while (TicketsValid>0) {
    console.log("Remaining tickets: "+TicketsValid)
    TicketsValid--;
}

attempt = 1
do {
    console.log("Booking attempt: "+attempt)
    attempt++;
}while(attempt<=3)

let bookingStatus;
function showBookingSummary(FelmName,numberOfTickets,FinalTotal){
    if (numberOfTickets>0){
       bookingStatus="Confirmed"
    }
    else{
        bookingStatus= "No tickets selected"
    }
    console.log("Movie: "+FelmName )
    console.log("Tickets: "+numberOfTickets )
    console.log("Final Price: "+FinalTotal )
    console.log("Booking Status: "+ bookingStatus )
}
showBookingSummary(FelmName,numberOfTickets,FinalTotal)

let movies = ["Interstellar", "Inception", "The Dark Knight", "Avatar", "Titanic"];
console.log(movies)
console.log(movies[0])
console.log(movies[movies.length - 1])
movies.push("The Matrix");
console.log(movies)
movies.pop();
console.log(movies)
for(let i=0;i< movies.length;i++){
    console.log(movies[i])
}

let ticketType = "VIP";
let vipTickets = 5;
let ticketPrice;

switch (ticketType) {
    case "Normal":
        ticketPrice = 120;
        break;

    case "VIP":
        ticketPrice = 200;
        break;

    default:
        console.log("Invalid ticket type");
        ticketPrice = 0;
}

function calculateVIPPrice(price, tickets) {
    let total = price * tickets;

    if (ticketType === "VIP" && tickets >= 5) {
        let discount = total * 0.15;
        let finalPrice = total - discount;

        console.log("Ticket Type: " + ticketType);
        console.log("Original Total: " + total);
        console.log("VIP Discount: " + discount);
        console.log("Final Price: " + finalPrice);

        return finalPrice;
    }

    console.log("Ticket Type: " + ticketType);
    console.log("Original Total: " + total);
    console.log("Discount: 0");
    console.log("Final Price: " + total);

    return total;
}

calculateVIPPrice(ticketPrice, vipTickets);