let products = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Watermelon"
];

let searchInput = document.getElementById("searchInput");
let results = document.getElementById("results");
searchInput.onkeyup = function () {
    let value = searchInput.value.trim();
    if (value !== "") {
        let filteredResults = products.filter(function (product) {
            return product.toLowerCase().includes(value.toLowerCase());
        });
        let content = filteredResults.map(function (product) {
            return `<li onclick="selectProduct(this)">${product}</li>`;
        });
        results.innerHTML = `<ul>${content.join("")}</ul>`;
    } else {
        results.innerHTML = "";
    }
};

function selectProduct(li) {
    searchInput.value = li.textContent;
    results.innerHTML = "";
}