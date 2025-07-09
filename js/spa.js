function mostrarCuarto(id) {
  const cuartos = document.querySelectorAll(".cuarto");

  cuartos.forEach(cuarto => {
    cuarto.classList.remove("activo");
  });

  const activo = document.getElementById(id);
  if (activo) {
    activo.classList.add("activo");

    // 🌓 Si estás entrando al cuarto de intención lunar
    if (id === "intencion") {
      calcularFaseLunar();

      // 💫 Escucha el cambio del selector solo cuando el cuarto esté activo
      const selectorFase = document.getElementById("fase");
      if (selectorFase) {
        selectorFase.addEventListener("change", (e) => {
          aplicarEstiloLunar(e.target.value);
        });
      }
    }
  }
}


window.onload = () => {
  mostrarCuarto('oraculo'); // Cuarto inicial

  const selectorFase = document.getElementById("fase");
  if (selectorFase) {
    selectorFase.addEventListener("change", (e) => {
      aplicarEstiloLunar(e.target.value);
    });
  }
};

const iconosRituales = [
  "🕯", "🌿", "🌀", "🔥", "🕊", "💫", "🌙", "💃", "❤️", "🧘‍♂️", "🌸", "🦋", "🎶", "✨", "📜", "🌻", "🌊", "🪐", "🔮", "✍️", "📜", "🖋", "🔔"
];



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
  // Agrega las que tengas
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
};

function mostrarCarta() {
  const cartaElement = document.getElementById("carta");
  cartaElement.classList.add("flip");

  setTimeout(() => {
    const carta = cartas[Math.floor(Math.random() * cartas.length)];
    cartaElement.src = "cartas/" + carta;
    cartaElement.classList.remove("flip");
    document.getElementById("mensaje").innerText = mensajes[carta] || "";
  }, 500);
}

function compartirCarta() {
  const cartaSrc = document.getElementById("carta").src;
  const cartaNombre = cartaSrc.split("/").pop();
  const mensaje = mensajes[cartaNombre] || "Mi carta del alma 🌙";

  const texto = `✨ Mi carta del día:\n"${mensaje}"\n\nDescúbrela tú también en el Mapa del Alma.`;
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(texto)}`;

  if (navigator.share) {
    navigator.share({
      title: "Mi carta del día",
      text: texto,
      url: window.location.href
    });
  } else {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.open(whatsappURL, "_blank");
    } else {
      navigator.clipboard.writeText(texto);
      alert("Carta copiada. Puedes pegarla en WhatsApp o donde quieras 🌙");
    }
  }
}

const rituales = [
  "Enciende una vela blanca y escribe una intención en un papel.",
  "Camina descalza sobre tierra o piso firme durante 3 minutos en silencio.",
  "Dibuja un símbolo que represente tu estado emocional y quémalo simbólicamente.",
  "Respira profundamente 7 veces mientras tocas tu pecho y repites: 'Aquí estoy'.",
  "Busca una piedra. Cárgala con tu deseo. Déjala en un lugar secreto.",
  "Abre una puerta o ventana conscientemente, como si abrieras tu alma.",
  "Escribe lo que necesitas liberar y déjalo ir en agua corriente o viento.",
  "Mira el cielo nocturno y elige una estrella que te guíe esta semana.",
  "Haz un altar pequeño con tres objetos que te representen hoy.",
  "Escribe una carta que nunca enviarás, y guárdala como un conjuro.",
  "Cierra los ojos y agradece en voz alta 5 cosas de este momento.",
  "Dibuja con la mano no dominante tu estado interior sin juzgar.",
  "Escribe una palabra que quieras invocar y llévala contigo todo el día.",
  "Siembra una semilla o planta como promesa de algo que estás cultivando.",
  "Pinta un círculo en tu muñeca como recordatorio de tu protección.",
  "Hazte un té, tómatelo en silencio y escucha lo que tu alma dice.",
  "Cambia de lugar un objeto de tu casa para mover la energía.",
  "Lávate las manos como si soltaras simbólicamente una carga.",
  "Despiértate 10 minutos antes y dedica ese tiempo a ti.",
  "Coloca tus manos sobre tu vientre y visualiza una mariposa saliendo.",
  "Dibuja una mariposa, escríbele una intención, y pégala donde la veas.",
  "Canta o tararea sin pensar, solo deja que el sonido fluya.",
  "Limpia un espacio físico con intención de abrir camino.",
  "Camina en silencio por 11 minutos prestando atención al entorno.",
  "Coloca una frase poderosa en el espejo y mírate al repetirla.",
  "Regala algo que ya no usas como símbolo de desapego.",
  "Haz una pausa en la tarde y pregúntate: ¿qué necesita mi alma?",
  "Deja una nota en un lugar público con un mensaje positivo anónimo.",
  "Escribe tu nombre 3 veces y rodéalo con palabras que te definen.",
  "Escucha una canción que te conecte con lo sagrado.",
  "Haz un dibujo intuitivo con los ojos cerrados y obsérvalo sin juicio.",
  "Elige un aroma (incienso, perfume, planta) y úsalo como guía.",
  "Baila por un minuto aunque no haya música. Solo siente tu cuerpo."
];

function mostrarRitual() {
  const instruccion = document.getElementById("instruccionRitual");
  const efecto = document.getElementById("efectoRitual");
  const ritual = rituales[Math.floor(Math.random() * rituales.length)];
  const icono = iconosRituales[Math.floor(Math.random() * iconosRituales.length)];

  instruccion.innerText = ritual;
  efecto.innerText = icono;

  efecto.classList.remove("activo");
  efecto.classList.remove("oculto");

  setTimeout(() => {
    efecto.classList.add("activo");
  }, 100);
}



function liberarEscritura() {
  const textarea = document.getElementById("textoEscritura");
  const mensaje = document.getElementById("mensajeLiberacion");

  if (textarea.value.trim() === "") {
    alert("🪶 Escribe algo para liberar.");
    return;
  }

  const confirmar = confirm("🔥 Esta escritura será entregada al fuego simbólico.\n\n¿Deseas continuar?");
  
  if (confirmar) {
    textarea.classList.add("fuego");
    mensaje.innerText = "";

    setTimeout(() => {
      textarea.value = "";
      textarea.classList.remove("fuego");
      mensaje.innerText = "🔥 Tu mensaje ha sido liberado en fuego sagrado.";
    }, 1800);
  }
}


function ofrecerIntencion() {
  const input = document.getElementById("intencionInput");
  const fase = document.getElementById("fase").value;
  const mensajeFase = document.getElementById("mensajeFase");
  const respuesta = document.getElementById("respuestaLunar");

  if (!input.value.trim()) {
    alert("Escribe una intención para entregarla 🌙");
    return;
  }

  // Mensajes canalizados según fase
  const canalizados = {
    nueva: "Todo nace en la sombra. Deja que brote lo nuevo.",
    creciente: "Nutre lo que crece. Tu energía construye.",
    llena: "Todo lo oculto se revela. Obsérvalo con el corazón abierto.",
    menguante: "Deja morir lo que ya cumplió. Tu alma se aligera."
  };

  // Animación de desaparición
  input.classList.add("desaparecer");
  setTimeout(() => {
    input.value = "";
    input.classList.remove("desaparecer");
    mensajeFase.innerText = `🌔 ${canalizados[fase]}`;
    respuesta.innerText = `✨ Tu intención fue entregada a la luna.`;
  }, 1500);
}

function calcularFaseLunar() {
  const ahora = new Date();
  const año = ahora.getFullYear();
  const mes = ahora.getMonth() + 1;
  const día = ahora.getDate();

  const r = año % 100;
  const t = r % 19;
  let edad = (t * 11) % 30 + mes + día;
  if (mes < 3) edad += 2;
  if (año < 2000) edad -= 4;
  else edad -= 8.3;
  edad = Math.floor(edad % 30);

  let fase = "nueva";
  if (edad > 1.5 && edad < 7) fase = "creciente";
  else if (edad >= 7 && edad < 14) fase = "llena";
  else if (edad >= 14 && edad < 28) fase = "menguante";

  const selectFase = document.getElementById("fase");
  if (selectFase) selectFase.value = fase;

  aplicarEstiloLunar(fase);

}

function aplicarEstiloLunar(fase) {
  const cuarto = document.getElementById("intencion");

  if (cuarto) {
    console.log("ANTES:", cuarto.classList);
    cuarto.classList.remove("fondo-nueva", "fondo-creciente", "fondo-llena", "fondo-menguante");
    cuarto.classList.add(`fondo-${fase}`);
    console.log("DESPUÉS:", cuarto.classList);
  }
}



