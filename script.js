const button = document.querySelector(".form__button");
const resultElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-currency");
const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");

const EURrate = 4.7;
const GBPrate = 5.31;
const USDrate = 4.39;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value
    let amount = amountElement.value
    let result = resultElement.value

    switch (currency) {
        case "EUR":
            result = amount / EURrate
            break;

        case "USD":
            result = amount / USDrate
            break;

        case "GBP":
            result = amount / GBPrate
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});