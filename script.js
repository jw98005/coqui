// script.js
const images = [
    'foto1.jfif',
    'foto2.jfif',
    'foto3.jfif',
    'foto4.jfif',
    'foto5.jfif',
    'foto6.jfif',
    'foto7.jfif',
    'foto8.jfif',
    'foto9.jfif',
    'foto10.jfif',
    'foto11.jfif',
    'foto12.jfif',
    'foto13.jfif',
    'foto14.jfif',
    'foto15.jfif',
    'foto16.jfif',
    'foto17.jfif',
    'foto18.jfif',
    'foto19.jfif',
    'foto20.jfif',
    'foto21.jfif',
    'foto22.jfif',
    'foto23.jfif',
    'foto24.jfif',
    'foto25.jfif',
    'foto26.jfif',
    'foto27.jfif',
    'foto28.jfif',
    'foto29.jfif',
    'foto30.jfif',
    'foto31.jfif',
    'foto32.jfif',
    'foto33.jfif',
    'foto34.jfif',
    'foto35.jfif',
    'foto36.jfif',
    'foto37.jfif',
    'foto38.jfif',
    'foto39.jfif',
    'foto40.jfif',
    'foto41.jfif',
    'foto42.jfif',
    'foto43.jfif',
    'foto44.jfif',
    'foto45.jfif',
    'foto46.jfif',
    'foto47.jfif',
    'foto48.jfif',
    'foto49.jfif',
    'foto50.jfif',
    'foto51.jfif',
    'foto52.jfif',
    'foto53.jfif',
    'foto54.jfif',
    'foto55.jfif',
    'foto56.jfif',
    'foto57.jfif',
    'foto58.jfif',
    'foto59.jfif',
    'foto60.jfif',
];

const randomIndex = Math.floor(Math.random() * images.length);

document.getElementById('randomImage').src = images[randomIndex];
