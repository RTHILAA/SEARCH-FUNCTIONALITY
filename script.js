let search = document.getElementById("search");
let technologies = document.querySelectorAll(".techno li");

search.addEventListener("input", () => {
    let searchValue = search.value.toLowerCase(); 
    technologies.forEach(techItem => {
        let techName = techItem.textContent.toLowerCase();
        if (techName.includes(searchValue)) {
            techItem.style.display = "block";
        } else {
            techItem.style.display = "none";
        }
    });
});
