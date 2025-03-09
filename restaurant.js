function addRestaurant() {
    let logo = document.getElementById("restaurant-logo");
    let name = document.getElementById("restaurant-name");
    let address = document.getElementById("restaurant-address");

    if (!logo.files.length || !name.value || !address.value) {
        alert("Please fill all fields!");
        return;
    }

    let restaurant = {
        logo: URL.createObjectURL(logo.files[0]),
        name: name.value,
        address: address.value,
        id: Date.now()
    };

    let restaurantList = JSON.parse(localStorage.getItem("restaurant")) || [];
    restaurantList.push(restaurant);
    localStorage.setItem("restaurant", JSON.stringify(restaurantList));

    alert("Restaurant Added Successfully!");
    name.value = "";
    address.value = "";
}













