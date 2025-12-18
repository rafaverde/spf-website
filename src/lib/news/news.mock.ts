import { NewsItem } from "./news.types";

const PLACEHOLDER_IMAGE = "/images/news/placeholder.webp";

export const newsMock: NewsItem[] = [
  {
    id: "1",
    title: "Visita al Consorcio de Protección Fitosanitaria de Chile",
    excerpt:
      "Integrantes de la Comisión de Sanidad de SPF realizaron una visita técnica al Consorcio de Protección Fitosanitaria de Chile.",
    content: `
      <p>
        Del 4 al 7 de septiembre, integrantes de la Comisión de Sanidad de la SPF
        realizaron una visita técnica al Consorcio de Protección Fitosanitaria de Chile.
      </p>

      <h2>Objetivos de la visita</h2>

      <p>
        La visita tuvo como objetivo conocer en profundidad las estrategias de manejo
        sanitario forestal implementadas en Chile.
      </p>

      <ul>
        <li>Monitoreo fitosanitario</li>
        <li>Control biológico</li>
        <li>Coordinación interinstitucional</li>
      </ul>

      <p>
        La experiencia fue considerada altamente positiva por todos los participantes.
      </p>
    `,
    publishedAt: "2023-09-18",
    slug: "visita-consorcio-proteccion-fitosanitaria-chile",
    image: "/images/news/news-1.webp",
    category: {
      id: "sanidad",
      name: "Sanidad Forestal",
      slug: "sanidad-forestal",
    },
  },
  {
    id: "2",
    title: "Avances en monitoreo de biodiversidad en el sector forestal",
    excerpt:
      "SPF continúa fortaleciendo sistemas de información y monitoreo ambiental en plantaciones forestales.",
    content: `
      <p>
        SPF ha desarrollado nuevas herramientas para el monitoreo de biodiversidad en
        plantaciones forestales durante el último trimestre.
      </p>

      <h2>Herramientas implementadas</h2>

      <p>
        Los sistemas permiten una mejor recopilación y análisis de datos ambientales.
      </p>

      <ul>
        <li>Sensores remotos</li>
        <li>Plataformas de información geográfica</li>
        <li>Reportes automatizados</li>
      </ul>

      <p>
        Estas acciones contribuyen a una gestión forestal más sostenible.
      </p>
    `,
    publishedAt: "2023-10-02",
    slug: "avances-monitoreo-biodiversidad-sector-forestal",
    image: PLACEHOLDER_IMAGE,
    category: {
      id: "ambiente",
      name: "Ambiente",
      slug: "ambiente",
    },
  },
  {
    id: "3",
    title: "Capacitación técnica en control de plagas forestales",
    excerpt:
      "Profesionales del sector participaron en una capacitación técnica organizada por SPF.",
    content: `
      <p>
        SPF organizó una jornada de capacitación orientada al control integrado de plagas
        forestales.
      </p>

      <h2>Contenidos abordados</h2>

      <ul>
        <li>Identificación temprana de plagas</li>
        <li>Métodos de control sostenible</li>
        <li>Casos prácticos en terreno</li>
      </ul>

      <p>
        La actividad contó con la participación de especialistas nacionales.
      </p>
    `,
    publishedAt: "2023-10-10",
    slug: "capacitacion-tecnica-control-plagas-forestales",
    image: "/images/news/news-3.webp",
    category: {
      id: "sanidad",
      name: "Sanidad Forestal",
      slug: "sanidad-forestal",
    },
  },
  {
    id: "4",
    title: "Implementación de nuevo protocolo fitosanitario",
    excerpt:
      "SPF implementa un nuevo protocolo de vigilancia fitosanitaria en plantaciones.",
    content: `
      <p>
        Con el objetivo de fortalecer la prevención sanitaria, SPF puso en marcha un
        nuevo protocolo fitosanitario.
      </p>

      <h2>Principales lineamientos</h2>

      <ul>
        <li>Monitoreo periódico</li>
        <li>Registro estandarizado</li>
        <li>Respuesta temprana ante brotes</li>
      </ul>

      <p>
        El protocolo será aplicado de forma gradual en todo el territorio.
      </p>
    `,
    publishedAt: "2023-10-18",
    slug: "implementacion-nuevo-protocolo-fitosanitario",
    image: "/images/news/news-4.webp",
    category: {
      id: "sanidad",
      name: "Sanidad Forestal",
      slug: "sanidad-forestal",
    },
  },
  {
    id: "5",
    title: "Acuerdos de cooperación internacional en sanidad forestal",
    excerpt:
      "SPF avanza en acuerdos de cooperación con organismos internacionales.",
    content: `
      <p>
        Representantes de SPF participaron en reuniones de cooperación internacional
        enfocadas en sanidad forestal.
      </p>

      <h2>Áreas de cooperación</h2>

      <ul>
        <li>Intercambio de información técnica</li>
        <li>Capacitación profesional</li>
        <li>Investigación aplicada</li>
      </ul>

      <p>
        Los acuerdos permitirán fortalecer las capacidades institucionales.
      </p>
    `,
    publishedAt: "2023-10-25",
    slug: "acuerdos-cooperacion-internacional-sanidad-forestal",
    image: "/images/news/news-5.webp",
    category: {
      id: "institucional",
      name: "Institucional",
      slug: "institucional",
    },
  },
  {
    id: "6",
    title: "Informe anual de monitoreo sanitario forestal",
    excerpt:
      "SPF presenta los resultados del monitoreo sanitario realizado durante el año.",
    content: `
      <p>
        El informe anual de SPF resume los principales resultados del monitoreo sanitario
        en bosques productivos.
      </p>

      <h2>Resultados destacados</h2>

      <ul>
        <li>Reducción de focos sanitarios</li>
        <li>Mejora en tiempos de respuesta</li>
        <li>Mayor cobertura territorial</li>
      </ul>

      <p>
        El documento servirá como base para futuras acciones.
      </p>
    `,
    publishedAt: "2023-11-03",
    slug: "informe-anual-monitoreo-sanitario-forestal",
    image: "/images/news/news-6.webp",
    category: {
      id: "sanidad",
      name: "Sanidad Forestal",
      slug: "sanidad-forestal",
    },
  },
  {
    id: "7",
    title: "Uso de tecnologías digitales en gestión forestal",
    excerpt:
      "SPF incorpora tecnologías digitales para mejorar la gestión forestal.",
    content: `
      <p>
        La incorporación de tecnologías digitales permite optimizar procesos de gestión
        y monitoreo forestal.
      </p>

      <h2>Soluciones implementadas</h2>

      <ul>
        <li>Plataformas digitales</li>
        <li>Aplicaciones móviles</li>
        <li>Análisis de datos en tiempo real</li>
      </ul>

      <p>
        Estas herramientas fortalecen la toma de decisiones.
      </p>
    `,
    publishedAt: "2023-11-10",
    slug: "uso-tecnologias-digitales-gestion-forestal",
    image: PLACEHOLDER_IMAGE,
    category: {
      id: "tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
    },
  },
  {
    id: "8",
    title: "Encuentro técnico sobre biodiversidad forestal",
    excerpt:
      "Especialistas analizaron desafíos y oportunidades en biodiversidad forestal.",
    content: `
      <p>
        SPF organizó un encuentro técnico centrado en biodiversidad y producción forestal.
      </p>

      <h2>Temas abordados</h2>

      <ul>
        <li>Conservación de especies</li>
        <li>Manejo sostenible</li>
        <li>Indicadores ambientales</li>
      </ul>

      <p>
        El encuentro fomentó el intercambio de experiencias.
      </p>
    `,
    publishedAt: "2023-11-18",
    slug: "encuentro-tecnico-biodiversidad-forestal",
    image: "/images/news/news-8.webp",
    category: {
      id: "ambiente",
      name: "Ambiente",
      slug: "ambiente",
    },
  },
  {
    id: "9",
    title: "Actualización de lineamientos técnicos fitosanitarios",
    excerpt:
      "SPF actualiza lineamientos técnicos para el manejo fitosanitario.",
    content: `
      <p>
        Los nuevos lineamientos técnicos buscan estandarizar criterios de manejo
        fitosanitario.
      </p>

      <h2>Aspectos clave</h2>

      <ul>
        <li>Prevención</li>
        <li>Control</li>
        <li>Seguimiento</li>
      </ul>

      <p>
        La actualización fue elaborada por equipos técnicos especializados.
      </p>
    `,
    publishedAt: "2023-11-26",
    slug: "actualizacion-lineamientos-tecnicos-fitosanitarios",
    image: "/images/news/news-9.webp",
    category: {
      id: "sanidad",
      name: "Sanidad Forestal",
      slug: "sanidad-forestal",
    },
  },
  {
    id: "10",
    title: "Sistema de alerta temprana para riesgos forestales",
    excerpt:
      "SPF fortalece la prevención mediante sistemas de alerta temprana.",
    content: `
      <p>
        El sistema de alerta temprana permite detectar riesgos sanitarios de forma
        oportuna.
      </p>

      <h2>Beneficios del sistema</h2>

      <ul>
        <li>Respuesta rápida</li>
        <li>Reducción de impactos</li>
        <li>Mejor coordinación</li>
      </ul>

      <p>
        La herramienta está en proceso de expansión.
      </p>
    `,
    publishedAt: "2023-12-04",
    slug: "sistema-alerta-temprana-riesgos-forestales",
    image: PLACEHOLDER_IMAGE,
    category: {
      id: "tecnologia",
      name: "Tecnología",
      slug: "tecnologia",
    },
  },
  {
    id: "11",
    title: "Reunión estratégica con actores del sector forestal",
    excerpt: "SPF coordinó acciones con actores clave del sector forestal.",
    content: `
      <p>
        La reunión estratégica permitió alinear objetivos y acciones conjuntas.
      </p>

      <h2>Participantes</h2>

      <ul>
        <li>Representantes públicos</li>
        <li>Sector privado</li>
        <li>Equipos técnicos</li>
      </ul>

      <p>
        Se definieron líneas de trabajo prioritarias.
      </p>
    `,
    publishedAt: "2023-12-12",
    slug: "reunion-estrategica-actores-sector-forestal",
    image: "/images/news/news-11.webp",
    category: {
      id: "institucional",
      name: "Institucional",
      slug: "institucional",
    },
  },
  {
    id: "12",
    title: "Balance anual y proyecciones institucionales",
    excerpt:
      "SPF presenta el balance anual y proyecciones para el próximo período.",
    content: `
      <p>
        El balance anual resume las principales actividades desarrolladas por SPF.
      </p>

      <h2>Proyecciones</h2>

      <ul>
        <li>Fortalecimiento institucional</li>
        <li>Innovación tecnológica</li>
        <li>Gestión sostenible</li>
      </ul>

      <p>
        Las proyecciones guiarán el trabajo del próximo año.
      </p>
    `,
    publishedAt: "2023-12-20",
    slug: "balance-anual-proyecciones-institucionales",
    image: "/images/news/news-12.webp",
    category: {
      id: "institucional",
      name: "Institucional",
      slug: "institucional",
    },
  },
];
