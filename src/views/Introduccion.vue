<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción      
    p(data-aos="fade-left") La producción avícola orientada a la obtención de huevo requiere la aplicación de conocimientos técnicos, sanitarios y zootécnicos que garanticen el bienestar de las aves, la eficiencia productiva y el cumplimiento de la normatividad vigente. El manejo integral de gallinas ponedoras implica comprender aspectos como la anatomía aviar, el comportamiento, el bienestar animal, las etapas de desarrollo y las características de las diferentes razas y líneas genéticas.
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-5.bg-color-5.p-4.p-md-4.d-flex.align-items-center.rounded-4.mb-4.mb-lg-0(data-aos="fade-right" style="min-height: 240px;")
        p.mb-0 Asimismo, es fundamental aplicar prácticas adecuadas relacionadas con el alojamiento, el recibimiento de pollitas, la atención diaria y la implementación de programas de bioseguridad, vacunación y control sanitario, con el fin de prevenir enfermedades y optimizar la producción.
      .col-lg-3.px-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.d-flex.justify-content-center
          img(src='@/assets/curso/intro/img1.png' style="width: 380px;").m-auto
      .col-lg-4.ps-lg-4(data-aos="fade-left")
        .d-flex.flex-column.align-items-start
          img.mb-3(src="@/assets/curso/fondos/icono.svg", alt="Icono" style="width: 65px; height: auto;")
          p.mb-0 De igual manera, se requiere la ejecución de planes zootécnicos que incluyan el control del peso corporal, la evaluación de la viabilidad del lote, el uso responsable de medicamentos y el manejo de prácticas como el despique y el descanso ovárico. Todo ello contribuye a sistemas productivos sostenibles y de calidad.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
