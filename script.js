
// Array to hold services requested
// Add every service requested by the user

const bucket = []

let total = 0

console.log(`Default = ${bucket}  ${total}`)
// Buttons to add services to array

// Button Elements

const washbtn = document.getElementById("btn-wash")
const lawnbtn = document.getElementById("btn-lawn")
const weedsbtn = document.getElementById("btn-weeds")

// console.log(washbtn)

// Rendering Services (Elements)

// console.log(washEl)
// console.log(priceWashEl)

// Wash Car

washbtn.addEventListener("click", function () {

    if (bucket.includes("Wash Car")) {
        console.log("Servie Already Added!")
    }
    else {
        bucket.push("Wash Car")
        total += 10

        console.log(bucket)
        console.log(total)

        renderWash()
    }

})

lawnbtn.addEventListener("click", function () {

    if (bucket.includes("Mow Lawn")) {
        console.log("Service Already Added!")
    }
    else {
        bucket.push("Mow Lawn")
        total += 20

        console.log(bucket)
        console.log(total)

        renderLawn()
    }
})

weedsbtn.addEventListener("click", function () {

    if (bucket.includes("Pull Weeds")) {
        console.log("Service Already Added!")
    }
    else {
        bucket.push("Pull Weeds")
        total += 30

        console.log(bucket)
        console.log(total)

        renderWeeds()
    }

})

// Place to display data from array - updated
// everytime the array changes

// Service Elements
const washEl = document.getElementById("S-1")
const lawnEl = document.getElementById("S-2")
const weedsEl = document.getElementById("S-3")

// Price Elements
const priceWashEl = document.getElementById("P-1")
const priceLawnEl = document.getElementById("P-2")
const priceWeedsEl = document.getElementById("P-3")

const priceTotal = document.getElementById("price-total")
priceTotal.innerHTML = `$${total}`

function renderWash() {
    washEl.innerHTML = "Wash car"
    priceWashEl.innerHTML = `<span>$</span>10`
    priceTotal.innerHTML = `$${total}`
}

function renderLawn() {
    lawnEl.innerHTML = "Mow Lawn"
    priceLawnEl.innerHTML = `<span>$</span>20`
    priceTotal.innerHTML = `$${total}`
}

function renderWeeds() {
    weedsEl.innerHTML = "Pull Weeds"
    priceWeedsEl.innerHTML = `<span>$</span>30`
    priceTotal.innerHTML = `$${total}`
}

function clean() {

    washEl.innerHTML = ""
    priceWashEl.innerHTML = `<span></span>`


    lawnEl.innerHTML = ""
    priceLawnEl.innerHTML = `<span></span>`

    weedsEl.innerHTML = ""
    priceWeedsEl.innerHTML = `<span></span>`

    priceTotal.innerHTML = `$0`
}

// Don't charge twice for same service



// Total Cost stays updated



// Button to "Send Invoice" (reset)
// i. Clear the Array
// ii. Clear the view
// iii. Total Amount to zero

const clearInvoice = document.getElementById("send-invoice")

clearInvoice.addEventListener("click", function () {

    bucket.length = 0
    total = 0
    console.log(bucket)
    console.log(total)
    clean()
})