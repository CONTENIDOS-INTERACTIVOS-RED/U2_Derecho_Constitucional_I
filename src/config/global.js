export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Los derechos consagrados en la constitución colombiana',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clasificación de los derechos constitucionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Derechos fundamentales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Derechos sociales, económicos y culturales ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Derechos colectivos y del medio ambiente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Relación entre derechos constitucionales, democracia y partidos políticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Los derechos como base de la democracia participativa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Función democrática de los partidos políticos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Función Pública. Ley 472 de 1998. Por la cual se desarrolla el artículo 88 de la Constitución Política de Colombia en relación con el ejercicio de las acciones populares y de grupo y se dictan otras disposiciones. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=188 ',
    },
    {
      referencia:
        'Giobán Melón Velásquez, H. (2016). La protección constitucional del medio ambiente sano en Colombia. Ediciones Universidad de Salamanca.   ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/55859',
    },
    {
      referencia:
        'Parra, N. H. (2006). Entre la democracia y la barbarie. Colombia, dos siglos en busca de gobernabilidad. Red Reflexión Política. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/99254 ',
    },
    {
      referencia:
        'Duque Daza, J. (2011). Políticos y partidos en Colombia: los liderazgos partidistas en el frente Nacional prolongado 1974 - 1986. Editorial La Oveja Negra Ltda.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68768',
    },
    {
      referencia:
        'Vásquez, M., Barrios, L., Ibáñez, M. C., Rangel, A. & Valencia, N. (2006). Las acciones de grupo. Una visión a través de los procesos colectivo. Revista de Derecho, (26), 273-306.  ',
      link: 'https://www.redalyc.org/articulo.oa?id=85102610 ',
    },
    {
      referencia:
        'Cortés Nieto, J. D. P. (2009). Itinerario de la jurisprudencia colombiana de control constitucional como mecanismo de protección de Derechos Humanos. Editorial Universidad del Rosario.   ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69563',
    },
  ],
  glosario: [
    {
      termino: 'Acción de cumplimiento',
      significado:
        'Mecanismo judicial para exigir que las autoridades cumplan con normas que imponen obligaciones claras e incumplidas.',
    },
    {
      termino: 'Acción de grupo',
      significado:
        'Recurso judicial para que varias personas afectadas por un mismo hecho, exijan conjuntamente la reparación de daños sufridos.',
    },
    {
      termino: 'Acción popular',
      significado:
        'Instrumento judicial que permite proteger derechos colectivos como ambiente, espacio público o moralidad administrativa.',
    },
    {
      termino: 'Cabildo abierto',
      significado:
        'Mecanismo de participación ciudadana donde la comunidad delibera sobre temas locales, ante las autoridades municipales.',
    },
    {
      termino: 'Derechos culturales',
      significado:
        'Garantías para participar, disfrutar y preservar la vida cultural, incluyendo tradiciones, expresiones artísticas y patrimonio.',
    },
    {
      termino: 'Derechos económicos',
      significado:
        'Derechos que aseguran condiciones materiales básicas como empleo digno, salario justo y acceso equitativo al desarrollo.',
    },
    {
      termino: 'Derechos sociales',
      significado:
        'Derechos que exigen intervención estatal para garantizar educación, salud, vivienda y seguridad social a toda la población.',
    },
    {
      termino: 'Diversidad cultural',
      significado:
        'Reconocimiento de la pluralidad étnica, lingüística y cultural de los pueblos, como base de la identidad nacional.',
    },
    {
      termino: 'Igualdad material',
      significado:
        'Principio que exige medidas específicas para superar barreras estructurales y garantizar condiciones reales de equidad.',
    },
    {
      termino: 'Interés colectivo',
      significado:
        'Bien común que beneficia a toda la sociedad y cuya protección trasciende los intereses individuales.',
    },
    {
      termino: 'Justicia social',
      significado:
        'Ideal constitucional que busca la redistribución equitativa de recursos y oportunidades en beneficio del bienestar general.',
    },
    {
      termino: 'Partido político',
      significado:
        'Organización democrática que representa intereses ciudadanos, propone programas de gobierno y participa en elecciones.',
    },
    {
      termino: 'Pluralismo político',
      significado:
        'Reconocimiento constitucional de la diversidad de ideas, ideologías y organizaciones como base de la democracia.',
    },
    {
      termino: 'Principio de solidaridad',
      significado:
        'Valor constitucional que exige corresponsabilidad entre el Estado, la sociedad y los ciudadanos en la garantía de derechos.',
    },
    {
      termino: 'Referendo',
      significado:
        'Mecanismo de participación donde el pueblo aprueba o rechaza una norma o decisión política de gran impacto.',
    },
    {
      termino: 'Test de proporcionalidad',
      significado:
        'Herramienta judicial para evaluar si una limitación a un derecho es adecuada, necesaria y razonable..',
    },
  ],
}
