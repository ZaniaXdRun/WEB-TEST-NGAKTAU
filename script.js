const warnaAcak = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const warnaAcakHover = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty('--warna-acak', warnaAcak());
    document.documentElement.style.setProperty('--warna-acak-hover', warnaAcakHover());
});