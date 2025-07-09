const cartas = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png"
  // ... etc.
];

const mensajes = {
  "1.png": "Dibuja una herida y nómbrala como parte de tu cambio.",
  "2.png": "Escribe qué estás dejando atrás y qué cruzas.",
  "3.png": "Guarda 10 minutos de silencio y escucha tu cuerpo.",
  "4.png": "Escribe 3 coincidencias recientes y qué significan para ti.",
  "5.png": "Haz algo por ti, aunque nadie lo entienda.",
  "6.png": "¿Qué persona te irrita y qué espejo te muestra?",
  "7.png": "Escribe cómo tu mayor herida te ha hecho más humana.",
  "8.png": "Honra una parte tuya que sueles ocultar.",
  "9.png": "Haz un pequeño acto simbólico de transición.",
  "10.png": "Escribe una verdad que no te has permitido decir.",
  "11.png": "Haz solo una cosa hoy y suéltala después.",
  "12.png": "Nombra algo que estás cultivando a largo plazo.",
  "13.png": "Llora si lo necesitas. O escribe como si lloraras en palabras.",
  "14.png": "Escribe un deseo que aún no te atreves a cultivar.",
  "15.png": "¿Qué sentido ha muerto en ti y qué otro quiere nacer?",
  "16.png": "Escribe: ¿qué me sostiene cuando nada externo lo hace?",
  "17.png": "Medita sobre algo que aún no comprendes pero intuyes.",
  "18.png": "Escribe qué parte de ti necesita ser vista por ti misma.",
  "19.png": "Nombra una situación que se repite. ¿Qué pide cambiar en ti?",
  "20.png": "Crea un rincón simbólico: altar, vela, objeto con sentido."
  // ... etc.
};

function mostrarCarta() {
  const cartaElement = document.getElementById("carta");
  cartaElement.classList.add("flip");

  setTimeout(() => {
    const carta = cartas[Math.floor(Math.random() * cartas.length)];
    cartaElement.src = "cartas/" + carta;
    document.getElementById("mensaje").innerText = mensajes[carta] || "";
    cartaElement.classList.remove("flip");

    // Guardar la última carta (opcional)
    localStorage.setItem("ultimaCarta", carta);
  }, 500);
}


// Cargar última carta si existe
window.onload = () => {
  const ultima = localStorage.getItem("ultimaCarta");
  if (ultima && cartas.includes(ultima)) {
    document.getElementById("carta").src = "cartas/" + ultima;
    document.getElementById("mensaje").innerText = mensajes[ultima] || "";
  } else {
    mostrarCarta();
  }
};

// Función para compartir carta
function compartirCarta() {
  const cartaSrc = document.getElementById("carta").src;
  const cartaNombre = cartaSrc.split("/").pop();
  const mensaje = mensajes[cartaNombre] || "Mi carta del alma 🌙";

  const texto = `✨ Mi carta del día:\n"${mensaje}"\n\nDescúbrela tú también en el Mapa del Alma.`;
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(texto)}`;

  // Forzar WhatsApp si es móvil
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.open(whatsappURL, "_blank");
  } else {
    // En PC: copiar mensaje y mostrar alerta
    navigator.clipboard.writeText(texto);
    alert("Carta copiada. Pégala en WhatsApp o donde desees 🌙");
  }
}

