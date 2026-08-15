// ================= Products =================

let products = [

    {
        name: "Espresso",
        price: 60,
        category: "Hot",

        image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Latte",
        price: 80,
        category: "Hot",

        image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Cappuccino",
        price: 90,
        category: "Hot",

        image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Iced Coffee",
        price: 70,
        category: "Cold",

        image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
    }

];


// ================= Customer =================

let customer = {

    name: "Student Name",

    age: 20

};


// ================= Display Products =================

let productsContainer =
    document.getElementById("productsContainer");


for (let i = 0; i < products.length; i++) {

    console.log(products[i]);

    productsContainer.innerHTML +=

        "<div class='product-card'>" +

            "<img class='product-image' " +
            "src='" + products[i].image + "' " +
            "alt='" + products[i].name + "'>" +

            "<div class='product-info'>" +

                "<h3>" +
                products[i].name +
                "</h3>" +

                "<p class='product-price'>" +
                products[i].price +
                " EGP</p>" +

                "<p>" +
                products[i].category +
                "</p>" +

                "<button class='choose-btn' " +
                "onclick='chooseCoffee(" + i + ")'>" +

                "Choose" +

                "</button>" +

            "</div>" +

        "</div>";
}


// ================= Choose Coffee =================

function chooseCoffee(index) {

    let selectedProduct =
        products[index];

    console.log(
        "Coffee: " +
        selectedProduct.name
    );

    console.log(
        "Price: " +
        selectedProduct.price
    );

    console.log(
        "Category: " +
        selectedProduct.category
    );


    document.getElementById("coffeeSelect").value =
        index;

}


// ================= Size Price =================

function getSizePrice(size) {

    let extraPrice = 0;

    switch (size) {

        case "small":

            extraPrice = 0;

            break;


        case "medium":

            extraPrice = 10;

            break;


        case "large":

            extraPrice = 20;

            break;


        default:

            extraPrice = 0;

    }

    return extraPrice;
}


// ================= Calculate Price =================

function calculatePrice(
    coffeePrice,
    sizePrice
) {

    let finalPrice =
        coffeePrice + sizePrice;

    return finalPrice;
}


// ================= Price Category =================

function getPriceCategory(price) {

    if (price < 70) {

        return "Budget";

    }

    else if (price <= 100) {

        return "Regular";

    }

    else {

        return "Premium";

    }
}


// ================= Quantity Validation =================

function getValidQuantity() {

    let quantity;

    let attempts = 0;


    do {

        quantity =
            Number(
                document.getElementById(
                    "quantityInput"
                ).value
            );

        attempts++;


        if (quantity < 1) {

            console.log(
                "Invalid quantity"
            );

        }

    }

    while (
        quantity < 1 &&
        attempts < 3
    );


    return quantity;
}


// ================= Add To Cart =================

document.getElementById(
    "addToCartButton"
).onclick = function () {


    let selectedIndex =
        Number(
            document.getElementById(
                "coffeeSelect"
            ).value
        );


    let selectedProduct =
        products[selectedIndex];


    let size =
        document.getElementById(
            "sizeSelect"
        ).value;


    let quantity =
        getValidQuantity();


    if (quantity < 1) {

        console.log(
            "Please enter a valid quantity"
        );

        return;
    }


    // Size price

    let sizePrice =
        getSizePrice(size);


    // Price per cup

    let pricePerCup =
        calculatePrice(
            selectedProduct.price,
            sizePrice
        );


    // Price category

    let priceCategory =
        getPriceCategory(
            pricePerCup
        );


    // Total price

    let totalPrice =
        pricePerCup * quantity;


    // Discount

    let discount = 0;


    if (quantity >= 5) {

        discount =
            totalPrice * 0.10;

    }


    let finalPrice =
        totalPrice - discount;


    // ================= While Loop =================

    let cupsToPrepare =
        quantity;


    while (cupsToPrepare > 0) {

        console.log(
            "Preparing cup " +
            (quantity - cupsToPrepare + 1)
        );

        cupsToPrepare--;

    }


    // ================= Order Summary =================

    showOrderSummary(
        customer.name,
        selectedProduct,
        size,
        quantity,
        pricePerCup,
        priceCategory,
        totalPrice,
        discount,
        finalPrice
    );

};


// ================= Order Summary Function =================

function showOrderSummary(
    customerName,
    selectedProduct,
    size,
    quantity,
    pricePerCup,
    priceCategory,
    totalPrice,
    discount,
    finalPrice
) {


    document.getElementById(
        "selectedCustomer"
    ).textContent =
        customerName;


    document.getElementById(
        "selectedCoffee"
    ).textContent =
        selectedProduct.name;


    document.getElementById(
        "selectedCategory"
    ).textContent =
        selectedProduct.category;


    document.getElementById(
        "selectedSize"
    ).textContent =
        size;


    document.getElementById(
        "selectedQuantity"
    ).textContent =
        quantity;


    document.getElementById(
        "selectedPricePerCup"
    ).textContent =
        pricePerCup + " EGP";


    document.getElementById(
        "selectedPriceCategory"
    ).textContent =
        priceCategory;


    document.getElementById(
        "selectedTotalPrice"
    ).textContent =
        totalPrice + " EGP";


    document.getElementById(
        "selectedDiscount"
    ).textContent =
        discount + " EGP";


    document.getElementById(
        "finalPrice"
    ).textContent =
        finalPrice + " EGP";


    document.getElementById(
        "preparingMessage"
    ).textContent =
        "Your " +
        quantity +
        " cup(s) of " +
        selectedProduct.name +
        " are being prepared ☕";

}