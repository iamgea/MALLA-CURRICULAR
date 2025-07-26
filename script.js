const materias = {
    "matematica_general": { nombre: "Matemática General", creditos: 4, prerrequisitos: "Ninguno" },
    "introduccion_cs": { nombre: "Introducción a las Ciencias Sociales", creditos: 3, prerrequisitos: "Ninguno" },
    "lenguaje_comunicacion": { nombre: "Lenguaje y Comunicación", creditos: 4, prerrequisitos: "Ninguno" },
    "computacion_basica": { nombre: "Computación Básica", creditos: 3, prerrequisitos: "Ninguno" },
    "metodologia_estudio": { nombre: "Metodología de Estudio e Investigación", creditos: 3, prerrequisitos: "Ninguno" },
    "formacion_deportiva": { nombre: "Formación Deportiva", creditos: 2, prerrequisitos: "Ninguno" },
    "matematica_financiera": { nombre: "Matemática Financiera", creditos: 4, prerrequisitos: "Matemática General" },
    "contabilidad_basica": { nombre: "Contabilidad Básica", creditos: 4, prerrequisitos: "Ninguno" },
    "fundamentos_admin": { nombre: "Fundamentos Administrativos", creditos: 4, prerrequisitos: "Ninguno" },
    "ofimatica": { nombre: "Ofimática", creditos: 2, prerrequisitos: "Computación Básica" },
    "redaccion_informes": { nombre: "Redacción de Informes", creditos: 2, prerrequisitos: "Ninguno" },
    "ambiente_sustentabilidad": { nombre: "Ambiente y Sustentabilidad", creditos: 2, prerrequisitos: "Ninguno" },
    "valores_cultura": { nombre: "Valores y Cultura Ciudadana", creditos: 3, prerrequisitos: "Ninguno" },
    "contabilidad_general": { nombre: "Contabilidad General", creditos: 4, prerrequisitos: "Contabilidad Básica" },
    "administracion_empresas": { nombre: "Administración de Empresas", creditos: 3, prerrequisitos: "Fundamentos Administrativos" },
    "ingles_tecnico": { nombre: "Inglés Técnico", creditos: 3, prerrequisitos: "Ninguno" },
    "estadistica": { nombre: "Estadística Descriptiva e Inferencial", creditos: 3, prerrequisitos: "Ninguno" },
    "actividades_recreacionales": { nombre: "Actividades Recreacionales", creditos: 2, prerrequisitos: "Ninguno" },
    "electiva_i": { nombre: "Electiva I", creditos: 3, prerrequisitos: "Ninguno" },
    "contabilidad_superior": { nombre: "Contabilidad Superior", creditos: 4, prerrequisitos: "Contabilidad General" },
    "comportamiento_organizacional": { nombre: "Comportamiento Organizacional", creditos: 3, prerrequisitos: "Ninguno" },
    "investigacion_operaciones": { nombre: "Investigación de Operaciones", creditos: 3, prerrequisitos: "Ninguno" },
    "habilidades_directivas": { nombre: "Habilidades Directivas", creditos: 2, prerrequisitos: "Ninguno" },
    "microeconomia": { nombre: "Microeconomía", creditos: 3, prerrequisitos: "Ninguno" },
    "practicas_i": { nombre: "Prácticas Profesionales I", creditos: 3, prerrequisitos: "Ninguno" },
    "contabilidad_avanzada": { nombre: "Contabilidad Avanzada", creditos: 4, prerrequisitos: "Contabilidad Superior" },
    "sistemas_metodos": { nombre: "Sistema y Métodos Contables", creditos: 3, prerrequisitos: "Ninguno" },
    "orientacion_personal": { nombre: "Orientación Personal", creditos: 2, prerrequisitos: "Ninguno" },
    "creatividad": { nombre: "Creatividad", creditos: 3, prerrequisitos: "Ninguno" },
    "macroeconomia": { nombre: "Macroeconomía", creditos: 3, prerrequisitos: "Microeconomía" },
    "instituciones_financieras": { nombre: "Instituciones Financieras", creditos: 3, prerrequisitos: "Ninguno" },
    "analisis_estados": { nombre: "Análisis de Estados Financieros", creditos: 3, prerrequisitos: "Contabilidad Avanzada" },
    "control_interno": { nombre: "Control Interno", creditos: 3, prerrequisitos: "Ninguno" },
    "fundamentos_derecho": { nombre: "Fundamentos del Derecho", creditos: 3, prerrequisitos: "Ninguno" },
    "sistema_info_gerencial": { nombre: "Sistema de Información Gerencial", creditos: 3, prerrequisitos: "Creatividad" },
    "comercio_internacional": { nombre: "Comercio Internacional", creditos: 3, prerrequisitos: "Ninguno" },
    "electiva_ii": { nombre: "Electiva II", creditos: 3, prerrequisitos: "Ninguno" },
    "gerencia_financiera": { nombre: "Gerencia Financiera", creditos: 4, prerrequisitos: "Ninguno" },
    "contabilidad_costos": { nombre: "Contabilidad Básica de Costos", creditos: 4, prerrequisitos: "Ninguno" },
    "administracion_publica": { nombre: "Administración Pública", creditos: 3, prerrequisitos: "Fundamentos del Derecho" },
    "responsabilidad_social": { nombre: "Responsabilidad Social Empresarial", creditos: 4, prerrequisitos: "Ninguno" },
    "liderazgo_organizacional": { nombre: "Liderazgo Organizacional", creditos: 3, prerrequisitos: "Ninguno" },
    "presupuesto": { nombre: "Presupuesto", creditos: 3, prerrequisitos: "Ninguno" },
    "contabilidad_avanzada_costos": { nombre: "Contabilidad Avanzada de Costos", creditos: 4, prerrequisitos: "Contabilidad Básica de Costos" },
    "legislacion_laboral": { nombre: "Legislación Laboral", creditos: 3, prerrequisitos: "Administración Pública" },
    "nic": { nombre: "Normas Internacionales de Contabilidad", creditos: 3, prerrequisitos: "Ninguno" },
    "orientacion_profesional": { nombre: "Orientación Profesional", creditos: 2, prerrequisitos: "Ninguno" },
    "electiva_iii": { nombre: "Electiva III", creditos: 3, prerrequisitos: "Ninguno" },
    "fundamentos_auditoria": { nombre: "Fundamentos de Auditoría", creditos: 4, prerrequisitos: "Ninguno" },
    "contabilidad_inflacion": { nombre: "Contabilidad e Inflación", creditos: 4, prerrequisitos: "Ninguno" },
    "legislacion_mercantil": { nombre: "Legislación Mercantil", creditos: 3, prerrequisitos: "Ninguno" },
    "innovacion": { nombre: "Innovación y Emprendimiento", creditos: 4, prerrequisitos: "Ninguno" },
    "practicas_ii": { nombre: "Prácticas Profesionales II", creditos: 3, prerrequisitos: "Prácticas Profesionales I y Normas Internacionales de Contabilidad" },
    "auditoria_financiera": { nombre: "Auditoría Financiera", creditos: 4, prerrequisitos: "Fundamentos de Auditoría" },
    "analisis_costos": { nombre: "Análisis de Costos", creditos: 4, prerrequisitos: "Contabilidad Básica de Costos y Contabilidad Avanzada de Costos" },
    "legislacion_fiscal": { nombre: "Legislación Fiscal y Tributaria", creditos: 3, prerrequisitos: "Ninguno" },
    "formulacion_proyectos": { nombre: "Formulación y Evaluación de Proyectos", creditos: 4, prerrequisitos: "Ninguno" },
    "etica_politica": { nombre: "Ética Aplicada y Política", creditos: 3, prerrequisitos: "Ninguno" },
    "lab_auditoria": { nombre: "Laboratorio de Auditoría", creditos: 4, prerrequisitos: "Auditoría Financiera" },
    "tet_i": { nombre: "Trabajo Especial de Titulación I", creditos: 3, prerrequisitos: "Ninguno" },
    "lab_sistema_tributario": { nombre: "Laboratorio de Sistema Tributario", creditos: 4, prerrequisitos: "Legislación Fiscal y Tributaria" },
    "ejec_control_proyectos": { nombre: "Ejecución y Control de Proyectos", creditos: 4, prerrequisitos: "Formulación y Evaluación de Proyectos" },
    "practicas_iii": { nombre: "Prácticas Profesionales III", creditos: 9, prerrequisitos: "Prácticas Profesionales II" },
    "tet_ii": { nombre: "Trabajo Especial de Titulación II", creditos: 9, prerrequisitos: "Trabajo Especial de Titulación I" }
};

function mostrarDetalle(id) {
    const materia = materias[id];
    document.getElementById("materia-nombre").textContent = materia.nombre;
    document.getElementById("materia-creditos").textContent = materia.creditos;
    document.getElementById("materia-prerrequisitos").textContent = materia.prerrequisitos;
    document.getElementById("detalle-materia").style.display = "block";
}

function cerrarDetalle() {
    document.getElementById("detalle-materia").style.display = "none";
}

window.onload = function () {
    const container = document.getElementById("malla-container");
    for (let t = 1; t <= 12; t++) {
        const trimestre = document.createElement("div");
        trimestre.className = "trimestre";
        trimestre.innerHTML = `<h3>Trimestre ${t}</h3>`;
        for (let key in materias) {
            if (materias[key].trimestre == t) {
                const m = document.createElement("div");
                m.className = "materia";
                m.textContent = materias[key].nombre;
                m.onclick = () => mostrarDetalle(key);
                trimestre.appendChild(m);
            }
        }
        container.appendChild(trimestre);
    }
}
