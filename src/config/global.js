export default {
  global: {
    Name:
      'Manejo integral operativo y sanitario en explotaciones avícolas de postura.',
    Description:
      'El curso brinda formación técnica, biológica y práctica para el manejo integral de gallinas ponedoras en sistemas alternativos. Aborda anatomía, comportamiento, bienestar animal, razas y selección. Fortalece competencias en sanidad, bioseguridad y uso responsable de medicamentos. Además, desarrolla habilidades en manejo productivo, promoviendo la producción sostenible y oportunidades en el ámbito rural.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos biológicos y productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Anatomía aviar básica externa e interna',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Etología y bienestar animal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modelos de bienestar animal en avicultura',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Etapas de desarrollo de las aves',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Razas y líneas de aves ponedoras',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Parámetros para la selección de gallinas criollas',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos sanitarios y preventivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sanidad avícola en aves de postura',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Medicamentos en avicultura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Bioseguridad en granjas avícolas de postura',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/73320176 _CF1_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría avícola',
      significado:
        'Evaluación sistemática del cumplimiento de normas y procedimientos en una granja para verificar su conformidad técnica.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Estado físico y mental de un animal en relación con las condiciones en las que vive y muere; implica garantizar confort, salud y comportamiento natural.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas destinadas a evitar la entrada y propagación de agentes infecciosos en una granja avícola.',
    },
    {
      termino: 'Buenas Prácticas Avícolas (BPA)',
      significado:
        'Procedimientos técnicos y administrativos que aseguran la producción inocua, ética y sostenible de productos avícolas.',
    },
    {
      termino: 'Certificación ICA',
      significado:
        'Proceso oficial de evaluación que otorga el Instituto Colombiano Agropecuario a granjas que cumplen requisitos sanitarios, de bioseguridad y bienestar animal.',
    },
    {
      termino: 'Cinco libertades',
      significado:
        'Principios básicos del bienestar animal que aseguran la ausencia de hambre, incomodidad, dolor, miedo y restricción del comportamiento natural.',
    },
    {
      termino: 'Comportamiento natural',
      significado:
        'Conjunto de acciones innatas de las aves como anidar, posarse, escarbar y acicalarse, esenciales para su bienestar.',
    },
    {
      termino: 'Densidad de alojamiento',
      significado:
        'Número de aves por metro cuadrado; parámetro que influye directamente en el confort y bienestar del lote.',
    },
    {
      termino: 'Forma ICA 3-1669 V.1',
      significado:
        'Instrumento oficial de evaluación del bienestar animal en aves de corral, que mide indicadores basados en animales y recursos.',
    },
    {
      termino: 'Granja biosegura',
      significado:
        'Establecimiento que implementa correctamente medidas de prevención y control sanitario para reducir el riesgo de enfermedades.',
    },
    {
      termino: 'Indicadores MBA/MBR/MBG',
      significado:
        'Categorías de evaluación del bienestar animal: basadas en el animal, en los recursos y en la gestión.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Garantía de que los alimentos no causarán daño al consumidor cuando se preparen o consuman según su uso previsto.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'Estrategia organizada para prevenir y controlar enfermedades, incluyendo vacunación, vermifugación y limpieza.',
    },
    {
      termino: 'Resolución 067449 de 2020',
      significado:
        'Norma que regula las Buenas Prácticas Ganaderas y Avícolas en Colombia, incluyendo criterios de bienestar animal.',
    },
    {
      termino: 'Resolución 3651 de 2014',
      significado:
        'Norma del ICA que establece los requisitos para la certificación de granjas avícolas bioseguras.',
    },
    {
      termino: 'Sanidad avícola',
      significado:
        'Conjunto de acciones técnicas para mantener la salud de las aves mediante prevención, diagnóstico y control de enfermedades.',
    },
    {
      termino: 'Sintiencia animal',
      significado:
        'Capacidad de los animales de sentir placer, dolor, miedo o bienestar, reconocida legalmente por la Ley 1774 de 2016 en Colombia.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el recorrido de un producto desde su origen hasta el consumidor final, garantizando su seguridad.',
    },
    {
      termino: 'Vacunación aviar',
      significado:
        'Procedimiento de inmunización de las aves mediante aplicación de biológicos que previenen enfermedades infecciosas.',
    },
    {
      termino: 'Vermifugación',
      significado:
        'Aplicación de antiparasitarios internos para eliminar o prevenir infestaciones por helmintos en aves.',
    },
  ],
  referencias: [
    {
      referencia:
        'Elsitioavicola.com. (2024). Principios del bienestar animal en la producción de postura.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2014). Resolución 3651 de 2014. Por la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2020). Resolución 067449 de 2020. Por la cual se establecen los requisitos para la certificación de las Buenas Prácticas Ganaderas y Avícolas. ICA.',
      link: '',
    },
    {
      referencia:
        'INVIMA. (2007). Decreto 1500 de 2007. Por el cual se establece el Sistema Oficial de Inspección, Vigilancia y Control de Carnes y Productos Cárnicos. Bogotá: Ministerio de Salud.',
      link: '',
    },
    {
      referencia:
        'Mellor, D. J., & Beausoleil, N. J. (2020). The Five Domains Model: Welfare assessment and application to poultry systems. Animal Welfare Journal, 29(3), 227–239.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural – MADR. (2023). Manual de Bienestar Animal en Especies Productivas. Bogotá: MADR.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura – FAO. (2023). Buenas prácticas en el manejo de aves de postura. Roma: FAO.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – WOAH. (2024). Código Sanitario para los Animales Terrestres. París: WOAH.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2023). Estudios sobre sintiencia y comportamiento en gallinas ponedoras. Facultad de Medicina Veterinaria y de Zootecnia.',
      link: '',
    },
    {
      referencia:
        'World Poultry Science Association – WPSA. (2022). Biosecurity and Animal Welfare in Layer Farms. Poultry Science Review, 101(8), 1235–1247.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico- Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez ',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elizabeth Peña Sierra',
          cargo: 'Experto temático',
          centro: 'Centro De Servicios Financieros / Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
