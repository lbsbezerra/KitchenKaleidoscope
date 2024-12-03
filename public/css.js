// Navbar css js for hamburger icon

document.addEventListener("DOMContentLoaded", () => {
  const hamBurger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamBurger || !navLinks) {
      console.error("Elements not found");
      return;
  }

  const navLinksItems = Array.from(navLinks.querySelectorAll('a'));

  hamBurger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  navLinksItems.forEach((link) => {
      link.addEventListener("click", (event) => {
        //   event.preventDefault();
          navLinksItems.forEach((item) => {
              item.classList.remove("active");
          });
          link.classList.add("active");
          navLinks.classList.remove("active"); // Hide the menu after clicking a link
      });
  });
});

// Pop card js

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open_popup");
    // Add margin by adding a class to body or container
    document.body.classList.add('popup-active');
}

function closePopup() {
    popup.classList.remove("open_popup");
    // Remove margin by removing the class
    document.body.classList.remove('popup-active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.item-title').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const title = this.getAttribute('data-title');
            const image = this.getAttribute('data-image');
            const sourceName = this.getAttribute('data-sourceName');
            const ingredients = JSON.parse(this.getAttribute('data-ingredients'));
            const readyInMinutes = this.getAttribute('data-readyInMinutes');
            const servings = this.getAttribute('data-servings');

            document.getElementById('popupTitle').innerHTML = title;
            document.getElementById('popupImg').src = image;
            document.getElementById('popupSourceName').innerHTML = `by ${sourceName}`;
            document.getElementById('popupIngredientsCount').innerHTML = ingredients.length;
            document.getElementById('popupReadyInMinutes').innerHTML = readyInMinutes;
            document.getElementById('popupServings').innerHTML = servings;

            const ingredientsList = document.getElementById('popupIngredientsList');
            ingredientsList.innerHTML = '';
            ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.innerText = ingredient.original;
                ingredientsList.appendChild(li);
            })
            
        })
    })
})