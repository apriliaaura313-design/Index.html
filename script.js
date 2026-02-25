// Mengatur menu navigasi responsif (Hamburger Menu)
const burger = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Ucapan dinamis berdasarkan waktu
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = '';

if (hour >= 5 && hour < 12) {
    greetingText = 'Selamat Pagi, Sobat!';
} else if (hour >= 12 && hour < 15) {
    greetingText = 'Selamat Siang, Sobat!';
} else if (hour >= 15 && hour < 18) {
    greetingText = 'Selamat Sore, Sobat!';
} else {
    greetingText = 'Selamat Malam, Sobat!';
}

greetingElement.innerText = greetingText;
