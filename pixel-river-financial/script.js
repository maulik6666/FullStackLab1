// Function to update footer with current year
const setYear = () => {
    const yearSpan = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
};

document.addEventListener("DOMContentLoaded", () => {
    setYear();
});
