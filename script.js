// ==============================
// Malla curricular: datos
// ==============================

const malla = [
  {
    trimestre: 'Trimestre 1',
    ramos: [
      "Matemática General",
      "Introducción a las Ciencias Sociales",
      "Lenguaje y Comunicación",
      "Computación Básica",
      "Metodología de Estudio e Investigación",
      "Formación Deportiva"
    ]
  },
  {
    trimestre: 'Trimestre 2',
    ramos: [
      "Matemática Financiera",
      "Contabilidad Básica",
      "Fundamentos Administrativos",
      "Ofimática",
      "Redacción de Informes",
      "Ambiente y Sustentabilidad"
    ]
  },
  {
    trimestre: 'Trimestre 3',
    ramos: [
      "Valores y Cultura Ciudadana",
      "Contabilidad General",
      "Administración de Empresas",
      "Inglés Técnico",
      "Estadística Descriptiva e Inferencial",
      "Actividades Recreacionales"
    ]
  },
  {
    trimestre: 'Trimestre 4',
    ramos: [
      "Electiva I",
      "Contabilidad Superior",
      "Comportamiento Organizacional",
      "Investigación de Operaciones",
      "Habilidades Directivas",
      "Microeconomía"
    ]
  },
  {
    trimestre: 'Trimestre 5',
    ramos: [
      "Prácticas Profesionales I",
      "Contabilidad Avanzada",
      "Sistema y Métodos Contables",
      "Orientación Personal",
      "Creatividad",
      "Macroeconomía"
    ]
  },
  {
    trimestre: 'Trimestre 6',
    ramos: [
      "Instituciones Financieras",
      "Análisis de Estados Financieros",
      "Control Interno",
      "Fundamentos del Derecho",
      "Sistema de Información Gerencial",
      "Comercio Internacional"
    ]
  },
  {
    trimestre: 'Trimestre 7',
    ramos: [
      "Electiva II",
      "Gerencia Financiera",
      "Contabilidad Básica de Costos",
      "Administración Pública",
      "Responsabilidad Social Empresarial"
    ]
  },
  {
    trimestre: 'Trimestre 8',
    ramos: [
      "Liderazgo Organizacional",
      "Presupuesto",
      "Contabilidad Avanzada de Costos",
      "Legislación Laboral",
      "Normas Internacionales de Contabilidad",
      "Orientación Profesional"
    ]
  },
  {
    trimestre: 'Trimestre 9',
    ramos: [
      "Electiva III",
      "Fundamentos de Auditoría",
      "Contabilidad e Inflación",
      "Legislación Mercantil",
      "Innovación y Emprendimiento"
    ]
  },
  {
    trimestre: 'Trimestre 10',
    ramos: [
      "Prácticas Profesionales II",
      "Auditoría Financiera",
      "Análisis de Costos",
      "Legislación Fiscal y Tributaria",
      "Formulación y Evaluación de Proyectos"
    ]
  },
  {
    trimestre: 'Trimestre 11',
    ramos: [
      "Ética Aplicada y Política",
      "Laboratorio de Auditoría",
      "Trabajo Especial de Titulación I",
      "Laboratorio de Sistema Tributario",
      "Ejecución y Control de Proyectos"
    ]
  },
  {
    trimestre: 'Trimestre 12',
    ramos: [
      "Prácticas Profesionales III",
      "Trabajo Especial de Titulación II"
    ]
  }
];

// Requisitos de cada ramo (nombre exacto, array de nombres requeridos)
const requisitos = {
  "Matemática Financiera": ["Matemática General"],
  "Ofimática": ["Computación Básica"],
  "Contabilidad General": ["Contabilidad Básica"],
  "Administración de Empresas": ["Fundamentos Administrativos"],
  "Contabilidad Superior": ["Contabilidad General"],
  "Contabilidad Avanzada": ["Contabilidad Superior"],
  "Macroeconomía": ["Microeconomía"],
  "Análisis de Estados Financieros": ["Contabilidad Avanzada"],
  "Sistema de Información Gerencial": ["Creatividad"],
  "Administración Pública": ["Fundamentos del Derecho"],
  "Contabilidad Avanzada de Costos": ["Contabilidad Básica de Costos"],
  "Legislación Laboral": ["Administración Pública"],
  "Prácticas Profesionales II": ["Prácticas Profesionales I", "Normas Internacionales de Contabilidad"],
  "Auditoría Financiera": ["Fundamentos de Auditoría"],
  "Análisis de Costos": ["Contabilidad Básica de Costos", "Contabilidad Avanzada de Costos"],
  "Laboratorio de Auditoría": ["Auditoría Financiera"],
  "Laboratorio de Sistema Tributario": ["Legislación Fiscal y Tributaria"],
  "Ejecución y Control de Proyectos": ["Formulación y Evaluación de Proyectos"],
  "Prácticas Profesionales III": ["Prácticas Profesionales II"],
  "Trabajo Especial de Titulación II": ["Trabajo Especial de Titulación I"]
};

// ==============================
// Funciones utilitarias
// ==============================

// Estado de aprobación de ramos (localStorage)
function getAprobados() {
  const data = localStorage.getItem("mallaAprobados");
  return data ? JSON.parse(data) : [];
}
function setAprobados(aprobados) {
  localStorage.setItem("mallaAprobados", JSON.stringify(aprobados));
}

// ==============================
// Renderizado de la malla
// ==============================

function crearMalla() {
  const cont = document.getElementById('malla-container');
  cont.innerHTML = ""; // Limpia antes de renderizar

  const aprobados = getAprobados();

  malla.forEach((trimestreObj, idx) => {
    // Columna de trimestre
    const col = document.createElement('div');
    col.className = "trimestre-col";
    col.setAttribute('data-trimestre-index', idx);

    // Título del trimestre
    const titulo = document.createElement('div');
    titulo.className = "trimestre-title";
    titulo.textContent = trimestreObj.trimestre;
    col.appendChild(titulo);

    // Lista de ramos
    trimestreObj.ramos.forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.className = "ramo";
      divRamo.textContent = ramo;
      divRamo.setAttribute('data-ramo', ramo);

      // Si el ramo tiene requisitos, muestra un ícono
      if (requisitos[ramo]) {
        const icon = document.createElement('span');
        icon.className = 'requisito-icon';
        icon.title = "Tiene requisitos";
        icon.textContent = "🔒";
        divRamo.appendChild(icon);
      }

      // Estado: aprobado
      if (aprobados.includes(ramo)) {
        divRamo.classList.add("aprobado");
      } else if (requisitos[ramo] && !requisitos[ramo].every(req => aprobados.includes(req))) {
        // Estado: bloqueado (no cumple requisitos)
        divRamo.classList.add("bloqueado");
      }

      // Evento click
      divRamo.addEventListener('click', function (e) {
        manejarClickRamo(ramo, divRamo);
      });

      col.appendChild(divRamo);
    });

    cont.appendChild(col);
  });
}

// ==============================
// Lógica de aprobación de ramos
// ==============================

function manejarClickRamo(ramo, el) {
  const aprobados = getAprobados();

  // Si ya está aprobado, lo desmarca
  if (aprobados.includes(ramo)) {
    const nuevos = aprobados.filter(r => r !== ramo);
    setAprobados(nuevos);
    crearMalla();
    return;
  }

  // Si tiene requisitos, verifica si están aprobados
  if (requisitos[ramo]) {
    const noAprobados = requisitos[ramo].filter(req => !aprobados.includes(req));
    if (noAprobados.length > 0) {
      mostrarModal(
        `Para aprobar <b>${ramo}</b> primero debes aprobar:<br><ul>${noAprobados.map(r=>`<li>${r}</li>`).join("")}</ul>`
      );
      return;
    }
  }

  // Marcar como aprobado
  aprobados.push(ramo);
  setAprobados(aprobados);
  crearMalla();
}

// ==============================
// Modal para requisitos no cumplidos
// ==============================

function mostrarModal(mensaje) {
  const modal = document.getElementById('modal');
  const msg = document.getElementById('modal-message');
  msg.innerHTML = mensaje;
  modal.style.display = 'flex';
}
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}
document.getElementById('close-modal').onclick = cerrarModal;
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) cerrarModal();
};

// ==============================
// Inicialización
// ==============================

window.onload = function () {
  crearMalla();
};
