const gallery = document.getElementById("gallery");
const buttons = document.querySelectorAll(".category-btn");

const pets = {
  dogs: [
    { name: "Golden Retriever", img: "https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" },
    { name: "Bulldog", img: "https://cdn.webshopapp.com/shops/43367/files/440830573/engelsk-bulldog.jpg" },
    { name: "Poodle", img: "https://image.petmd.com/files/styles/978x550/public/2023-01/toy-poodle.jpg" }
  ],
  cats: [
    { name: "Siamese", img: "https://media.istockphoto.com/id/1076432222/photo/siamese-kitten.jpg?s=612x612&w=0&k=20&c=KjJzsMuiJYBzlxDpVeOBv9bYcjZQlnEd7W-dP7oEUh0=" },
    { name: "Persian", img: "https://external-preview.redd.it/QDQxMLbDSq4ejtz77UmVOTMwUAKZdOAyC3-UtDoUaCU.jpg?auto=webp&s=51db7cd59a819c42d338c887cd666851aaa5248f" },
    { name: "Bengal", img: "https://preview.redd.it/this-cute-silver-bengal-cat-v0-1hxgcfrqghme1.jpeg?width=640&crop=smart&auto=webp&s=a365d7453cee79df88deef35a06c0ccbd7714d9e" }
  ],
  hamsters: [
    { name: "Syrian", img: "https://www.petscorner.co.uk/Images/Article/small/pc-ah-article-sa-syrian-hamster.jpg" }, 
    { name: "Dwarf", img: "https://a-z-animals.com/media/2022/12/iStock-1157798585.jpg" },
    { name: "Chinese", img: "https://www.biointron.com/static/upload/image/20241114/1731517030152014.jpg" }
  ]
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    showGallery(category);
  });
});

function showGallery(category) {
  gallery.innerHTML = ""; // Clear
  pets[category].forEach(pet => {
    const card = document.createElement("div");
    card.className = "bg-white rounded shadow p-4 text-center";
    card.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}" class="w-full h-48 object-cover rounded mb-2" />
      <h3 class="text-xl font-semibold">${pet.name}</h3>
    `;
    gallery.appendChild(card);
  });
}
