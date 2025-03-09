
// Populate Restaurants Dropdown
let restaurantList = JSON.parse(localStorage.getItem("restaurant")) || [];
let namesDropdown = document.getElementById("names");

if (restaurantList.length > 0) {
    restaurantList.forEach(restaurant => {
        let option = document.createElement("option");
        option.value = restaurant.name;
        option.textContent = restaurant.name;
        namesDropdown.appendChild(option);
    });
} else {
    console.log("No restaurants found in localStorage.");
}



function addDish() {
    let dishName = document.getElementById("dish-name").value.trim();
    let dishLogo = document.getElementById("dish-logo");
    let selectedRestaurant = document.getElementById("names").value;

    // Validate Input Fields
    if (!selectedRestaurant || !dishName || !dishLogo.files.length) {
        alert("Please fill all fields!");
        return;
    }

    let dish = {
        restaurant: selectedRestaurant,
        name: dishName,
        logo: URL.createObjectURL(dishLogo.files[0]),
        id: Date.now()
    };

    let dishes = JSON.parse(localStorage.getItem("dishes")) || [];
    dishes.push(dish);
    localStorage.setItem("dishes", JSON.stringify(dishes));

    alert("Dish Added Successfully!");

    // Clear fields after submission
    document.getElementById("dish-name").value = "";
    document.getElementById("dish-logo").value = "";
}
