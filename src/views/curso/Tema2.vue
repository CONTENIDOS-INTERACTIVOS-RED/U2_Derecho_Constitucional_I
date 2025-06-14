<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evolución constitucional en el siglo XIX'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


  

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.uexternado.edu.co/index.php/derest/article/view/7426/11412" target="_blank" rel="noopener noreferrer") Rubio, R. (2021). La participación en la Constitución colombiana: una Constitución participativa pionera. Revista derecha del Estado, (50), 43-76.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116525 " target="_blank" rel="noopener noreferrer") Barragán Romero, G. (2008). El constitucionalismo y la nueva Constitución. Corporación de Estudios y Publicaciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-62682006000100004 " target="_blank" rel="noopener noreferrer") Pérez Van Leenden, F. J. (2006). La traducción de la Constitución Política de Colombia 1991. Frónesis, 13(1), 32-39. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0122-44092011000200002#:~:text=El%20movimiento%20estudiantil%20de%20la,sentencia%20y%20la%20propia%20muerte." target="_blank" rel="noopener noreferrer") Gómez Roldán, A. (2011). El movimiento de la séptima papeleta frente al referendo* Posición jurídica ante la Corte Constitucional de una generación de colombianos y colombianas que ayudaron a construir la Constitución Política de 1991. Papel Político, 16(2), 365-380.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cwMYc4cVUng" target="_blank" rel="noopener noreferrer") Unidad de Innovación Virtual. (2019). Constitución Politica de Colombia – Presentación (video). YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=y-vePCkQ2xI" target="_blank" rel="noopener noreferrer") Pompeu Fabra University - Barcelona. (2025). Seminario: "El nuevo constitucionalismo latinoamericano:… [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bVSBn3fHjag " target="_blank" rel="noopener noreferrer") Razón Pública. (2021). La Asamblea Nacional Constituyente y la Constitución cumplen 30 años [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=OSgR8ldEL28 " target="_blank" rel="noopener noreferrer") PRE-ICFES pa’l Barrio. (2021). 2.2. Ciencias Sociales y Ciudadanas - Constitución Política de Colombia de 1991 [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué propósito tenía la Constitución de Rionegro de 1863?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Centralizar el poder en el ejecutivo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Establecer un sistema federal en Colombia.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminar los derechos ciudadanos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumentar la participación extranjera.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Esta constitución promovía el federalismo, otorgando gran autonomía a los estados.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué característica tuvo el periodo conocido como la República de Colombia (Gran Colombia)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Unidad nacional bajo un sistema parlamentario.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Confederación de repúblicas indígenas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Asociación de territorios independientes bajo un solo gobierno.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'División definitiva entre Colombia y Venezuela.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La Gran Colombia fue una unión de países con un proyecto común de integración.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cuál fue una consecuencia de la Constitución de 1886?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fortalecimiento del federalismo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mayor autonomía a las regiones.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Consolidación del centralismo político.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Eliminación de la religión católica del Estado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Esta constitución reafirmó el centralismo, disminuyendo la autonomía de los departamentos.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué actor político promovió la independencia frente a España?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La monarquía local.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El Congreso español.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Los criollos ilustrados y comerciantes locales.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El ejército realista.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Fueron los criollos, influidos por las ideas ilustradas, quienes lideraron el proceso independentista.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes afirmaciones corresponde a un logro del periodo de independencia (1810-1830)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Supresión total de los cabildos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Adopción de una monarquía parlamentaria.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reconocimiento internacional como república soberana.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Incorporación de España como estado asociado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Tras consolidar la independencia, Colombia fue reconocida como un Estado soberano por otras naciones.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
