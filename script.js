document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector('.name');
    const text = nameElement.textContent;
    nameElement.innerHTML = ''; // Clear the original text

    // Wrap each letter in a span
    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Preserve spaces
        nameElement.appendChild(span);
    });
});
const hamburger = document.getElementById('hamburger');
const hamnav = document.getElementById('ham-nav');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
hamburger.addEventListener('click',()=>{
    if (hamnav.style.display === 'flex') {
        hamnav.style.display = 'none';
        header.style.height = 'auto';
    } else {
        hamnav.style.display = 'flex';
        header.style.height = '400px';
    }
});
