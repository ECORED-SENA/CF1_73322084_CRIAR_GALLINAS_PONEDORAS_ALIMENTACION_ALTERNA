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
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-5.bg-color-5.p-4.p-md-5.d-flex.align-items-center.rounded-4(data-aos="fade-right")
        p.mb-0 Asimismo, es fundamental aplicar prácticas adecuadas relacionadas con el alojamiento, el recibimiento de pollitas, la atención diaria y la implementación de programas de bioseguridad, vacunación y control sanitario, con el fin de prevenir enfermedades y optimizar la producción.
      .col-lg-3.px-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/intro/img1.png' style="object-fit: cover; display:block;")
      .col-lg-4.ps-4.pe-4.pt-4.pt-md-5.pb-0.d-flex.flex-column.justify-content-end(data-aos="fade-left")
        .content-wrap
          img.mb-4(src="@/assets/curso/fondos/icono.svg", alt="Icono" style="width:70px").d-none.d-xl-block         
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
