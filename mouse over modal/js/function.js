const modalElement = document.getElementById("modal");
const openModalElement = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");


const mouseOver = () => {
    modalElement.classList.add("open");
};

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});


openModalElement.addEventListener("mouseover", mouseOver);
