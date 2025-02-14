// Configuración del canvas y animación de estrellas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Regenerar las estrellas al redimensionar
    stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random()
    }));

    drawStars();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    });
}

function animateStars() {
    stars.forEach(star => star.opacity = Math.random());
    drawStars();
    requestAnimationFrame(animateStars);
}
animateStars();

// Configurar fondo correctamente
window.onload = function () {
    document.body.style.backgroundImage = "url('img.png')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    createScene();
};

function createScene() {
    // Crear contenedor de los personajes
    const charactersContainer = document.createElement('div');
    charactersContainer.classList.add('characters');
    document.body.appendChild(charactersContainer);

    // Crear imagen del pingüino
    const penguin = document.createElement('img');
    penguin.src = 'penguin.png';
    penguin.id = 'penguin';
    penguin.classList.add('character');
    charactersContainer.appendChild(penguin);

    // Crear imagen del oso polar
    const polarBear = document.createElement('img');
    polarBear.src = 'polar_bear.png';
    polarBear.id = 'polarBear';
    polarBear.classList.add('character');
    charactersContainer.appendChild(polarBear);

    // Animación de los personajes (movimiento suave arriba-abajo)
    function animateCharacters() {
        let move = Math.sin(Date.now() / 1000) * 5;
        penguin.style.transform = `translateY(${move}px)`;
        polarBear.style.transform = `translateY(${move}px)`;
        requestAnimationFrame(animateCharacters);
    }
    animateCharacters();

    // Crear y añadir el contenedor de texto con animación
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    textContainer.innerHTML = `
        <h1>Laura, mi vida, mi amor mi cielo:</h1>
        
        <p>Juntos en el frío, pero con el corazón cálido.</p>
        
        <p>desde que decidimos dar este paso han sido dos meses, 61 días, 1460 horas contigo donde 
        los inconvenientes nos han hecho más fuertes
        estoy aprendiendo aser una mejor persona, es como si tu amor hubiera 
        curado algo dentro de mi.
        día a día me despierto y lo único que quiero es hablarte saber de ti, verte.
        
        cada día junto a ti es un regalo y una bendición de la vida, quiero que seas mi San Valentín, 
        mi vida entera, que seas mi motivación, mi felicidad mi alma gemela, que sean mil millones de horas más 
        juntos.
        
        se que cada decisión y altibajo nos han traído aqui, sigamos juntos, 
        no quiero ver otros ojos, no quiero agarrar otras manos que no sean las tuyas, solo quiero escuchar tu voz,
        sentir tu aroma y que me sigas alimentando el corazon con tu amor y llenandome la vida de felicidad.

        todos mis planes son contigo, solo quiero ser parte de tuvida y ser quien cause esa sonrisa tan bonita que me tien muy enamorado.

        me encantas mi vida!!!
        <p>Te amo. Feliz Día ❤️</p>
    `;
    document.body.appendChild(textContainer);

    // Ajustar la animación del texto
    setTimeout(() => {
        textContainer.style.opacity = '1';
    }, 500);

    // Agregar corazones animados
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 1000);
}

// Agregar música de fondo
const audio = document.createElement('audio');
audio.src = 'Locos - Leon larregui (Letra).mp3'; // Ubicación del archivo de música
audio.loop = true;
audio.volume = 0.2;
document.body.appendChild(audio);

// Botón para controlar la música
const musicButton = document.createElement('button');
musicButton.innerText = '🎵 Música';
musicButton.classList.add('music-button');
musicButton.onclick = () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};
document.body.appendChild(musicButton);

// Estilos para móviles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        body {
            overflow: hidden;
            font-family: Arial, sans-serif;
        }

        .text-container {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            font-family: 'Dancing Script', cursive;
            width: 90%;
            max-width: 500px;
            font-size: 18px;
            opacity: 0.9;
        }

        h1 {
            font-size: 28px;
        }

        p {
            font-size: 16px;
            margin-top: 8px;
        }

        /* Ajustes de personajes */
        .characters {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 15px;
        }

        .character {
            width: 100px;
            height: auto;
        }

        #penguin {
            width: 120px;
        }

        #polarBear {
            width: 140px;
        }

        /* Corazones animados */
        .heart {
            position: absolute;
            bottom: 0;
            font-size: 24px;
            color: red;
            animation: floatUp 3s linear infinite;
        }

        @keyframes floatUp {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-200px); opacity: 0; }
        }

        /* Botón de música */
        .music-button {
            position: absolute;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            background: #ff6b81;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .music-button:hover {
            background: #ff4757;
        }

        /* Ajustes específicos para móviles */
        @media (max-width: 768px) {
            .text-container {
                font-size: 14px;
                top: 35%;
                width: 85%;
            }

            h1 {
                font-size: 24px;
            }

            p {
                font-size: 14px;
            }

            .characters {
                bottom: 10%;
            }

            .character {
                width: 80px;
            }

            #penguin {
                width: 100px;
            }

            #polarBear {
                width: 120px;
            }
        }
    </style>
`);
