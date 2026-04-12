<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos biológicos y productivos
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-6
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img1.png', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 En este apartado se presentan los fundamentos biológicos y productivos de las gallinas ponedoras, abordando temas como la anatomía aviar, la etología y el bienestar animal, los modelos de bienestar en avicultura, las etapas de desarrollo, las razas y líneas de ponedoras, y los criterios para la selección de gallinas criollas. 
    Separador
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Anatomía aviar básica externa e interna
    p(data-aos="fade-left") La anatomía de las aves ponedoras está adaptada a la producción de huevos y a una digestión eficiente; comprenderla permite un manejo sanitario y zootécnico adecuado.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Anatomía externa del ave
    //- Título con imagen
    p(data-aos="fade-left") La anatomía externa de la gallina ponedora permite identificar estructuras visibles clave para evaluar su estado sanitario, bienestar y desempeño productivo en sistemas avícolas. Las partes principales son:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Cabeza")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Cabeza
                p Pico, cresta, barbillas, ojos, orificios nasales.
          .py-3.py-md-4(titulo="Cuello")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_2.png')
              .col-md-6
                h4 Cuello
                p Estructura flexible que conecta cabeza y tronco del ave.
          .py-3.py-md-4(titulo="Tronco")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_3.png')
              .col-md-6
                h4 Tronco
                p Parte central del cuerpo donde se ubican órganos vitales.
          .py-3.py-md-4(titulo="Alas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_4.png')
              .col-md-6
                h4 Alas
                p Extremidades que permiten equilibrio, desplazamiento y regulación térmica.
          .py-3.py-md-4(titulo="Patas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_5.png')
              .col-md-6
                h4 Patas
                p Extremidades que permiten sostén, locomoción y escarbar alimento.
          .py-3.py-md-4(titulo="Cloaca")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_6.png')
              .col-md-6
                h4 Cloaca
                p Abertura común para excreción y reproducción en aves.
    //- Cierres Pestanas horizontales
    p(data-aos="fade-left") La importancia productiva de las estructuras externas radica en su capacidad para reflejar el estado sanitario, nutricional y funcional de las gallinas ponedoras en producción, tales como:
    //- Inicio Tarjetas
    .row.justify-content-center(data-aos="fade-right")
      .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-4.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta01_1.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Cresta y barbilla
            p.mb-0 Indican el estado sanitario y circulación sanguínea.
      .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-4.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta01_2.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Plumaje
            p.mb-0 Refleja bienestar y nutrición.
      .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-4.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta01_3.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Cloaca
            p.mb-0 Fundamental para postura y evaluación sanitaria.
      .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-4.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta01_4.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Patas
            p.mb-0 Permiten evaluar problemas óseos o deficiencias minerales.
    //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Sistema digestivo
    //- Título con imagen
    p(data-aos="fade-left") El sistema digestivo aviar permite transformar el alimento en nutrientes esenciales, mediante órganos que cumplen funciones específicas en captura, digestión, absorción y excreción. Los órganos principales son:
    //- Inicio Infografia
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Pico
              p Captura del alimento.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea1.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea2.png').img125
            .col-lg.text-start
              h3 Esófago
              p Transporta el alimento.
          .row
            .col-lg
              h3 Buche
              p Almacenamiento temporal y humedecimiento.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea3.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea4.png').img125
            .col-lg.text-start
              h3 Proventrículo
              p Estómago glandular (enzimas digestivas).
          .row
            .col-lg
              h3 Molleja
              p Estómago muscular que tritura el alimento.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea5.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea6.png').img125
            .col-lg.text-start
              h3 Intestino delgado
              p Absorción de nutrientes.
          .row
            .col-lg
              h3 Ciegos
              p Fermentación bacteriana.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea7.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea8.png').img125
            .col-lg.text-start
              h3 Intestino grueso
              p Absorción de agua.
          .row
            .col-lg.text-start
              h3 Cloaca
              p Salida común digestiva y reproductiva.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/imagen-linea9.png').img125            
    //- Fin Infografia
    p(data-aos="fade-left") El sistema digestivo es muy importante en la producción de una gallina porque:
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta02_1.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Importancia 1
          p.text-center Conversión alimenticia.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta02_2.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Importancia 2
          p.text-center Deficiencias afectan calidad de cáscara y producción.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta02_3.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Importancia 3
          p.text-center Enfermedades digestivas reducen postura.
    //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Sistema reproductivo
    //- Título con imagen    
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En gallinas ponedoras, el ovario izquierdo y el oviducto participan en la formación del huevo en 24–26 horas, influyendo en la postura, nutrición, estrés y manejo lumínico.
    p(data-aos="fade-left") En el siguiente diagrama se presenta detalladamente los componentes, la formación del huevo y la importancia productiva del sistema reproductivo de la galina ponedora:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Componentes                    
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Ovario: produce los óvulos (yemas).
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Oviducto: se divide en infundíbulo (captura del óvulo). magno (formación de la clara). istmo (formación de membranas), útero (formación de la cáscara), vagina (expulsión del huevo).
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Formación del huevo (aprox. 24-26 horas):
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Yema
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Clara
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Membranas
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Cáscara
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Importancia productiva
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Determina persistencia de postura.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Sensible a estrés y deficiencias nutricionales.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Relacionado con programa de iluminación.
    //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Sistema respiratorio
    //- Título con imagen
    p(data-aos="fade-left") En gallinas ponedoras, el ovario izquierdo y el oviducto participan en la formación del huevo en 24–26 horas, influyendo en la postura, nutrición, estrés y manejo lumínico.
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img3.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Componentes")
            .col-12.ps-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Fosas nasales
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Laringe
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Tráquea
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Bronquios
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Pulmones
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Sacos aéreos (9)
          .row(titulo="Características especiales")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Flujo de aire unidireccional.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Intercambio gaseoso continuo.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Mayor sensibilidad a gases (amoníaco).
          .row(titulo="Importancia en granja")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Ventilación adecuada previene enfermedades.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Control de polvo y humedad es fundamental.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0 Relación directa con ganancia de peso y postura.
    //- Fin Accordion
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Sistema respiratorio
    //- Título con imagen
    p(data-aos="fade-left") Cada uno de estos sistemas se integran anatómicamente para la producción de huevo. Estos se relacionan así:
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 1.
                span  Integración anatómica en producción de huevo.
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Sistema
                      th.text-center(style="width: 30%") Relación con la Producción
                  tbody
                    tr
                      td Digestivo
                      td Nutrición → Calidad de huevo
                    tr
                      td Reproductivo
                      td Formación y frecuencia de postura
                    tr
                      td Respiratorio
                      td Oxigenación → Metabolismo alto
                    tr
                      td Sistema óseo
                      td Fuente de calcio para la cáscara                    
          //- FinTabla
          .row.justify-content-center
            .col-md-6
              p.bg-color-17.p-2 Referencia Tabla - Norma APA
    p.mt-3(data-aos="fade-left") El conocimiento de la anatomía aviar permite detectar enfermedades tempranamente, ajustar programas de alimentación, optimizar iluminación y ventilación, y aplicar planes sanitarios y zootécnicos en producción avícola.
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Etología y bienestar animal
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La producción de huevos semicriollos con alimentación alterna combina prácticas tradicionales y fundamentos técnicos modernos. En este sistema, la etología y el bienestar animal son esenciales para garantizar productividad, sostenibilidad y el adecuado desarrollo físico y comportamental de las aves.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Concepto de etología y bienestar animal
    //- Título con imagen
    p(data-aos="fade-left") Se invita a comprender la etología y el bienestar animal en gallinas ponedoras, abordando comportamiento, salud y criterios técnicos actuales, mediante este pódcast:
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-right")
      .row.align-items-stretch
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema1/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#fff") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Gallinas con bienestar: producción inteligentes
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema1/img5.png')
    //- Fin Podcast
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Conductas naturales en sistemas semicriollos
    //- Título con imagen
    p(data-aos="fade-left") En sistemas semicriollos, las gallinas expresan conductas naturales como forrajeo, baños de polvo, perchado y anidación, fundamentales para su bienestar y para mejorar la productividad.
    p(data-aos="fade-left") En el siguiente video se profundizará sobre las conductas, las condiciones que se requieren para que estas se lleven a cabo los beneficios:
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="Conductas naturales en sistemas semicriollos." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Etología alimenticia y balance nutricional
    //- Título con imagen
    p(data-aos="fade-left") En sistemas semicriollos, la etología alimenticia influye en el consumo y selección de alimentos, pero requiere un balance nutricional adecuado para garantizar salud, bienestar y productividad; tales como:
    .row.bg-color-15.justify-content-center
      .col-8
        .p-5
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center
            .col-12.col-md-6.col-xl-6.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta03_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-0 Componentes 
                h4.card-title.text-center.mb-4 En sistemas semicriollos
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Mayor tiempo de búsqueda de alimento.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Consumo fraccionado.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Selección natural de ingredientes.
            .col-12.col-md-6.col-xl-6.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta03_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Balance técnico
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 16–18 % proteína.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 3.5–4 % calcio.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Energía metabolizable adecuada.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 200–300 ml de agua/día/ave.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Temperatura ideal: 18–26 °C.
          //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Jerarquía social y orden de picaje
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-6
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img6.png', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Las gallinas establecen una jerarquía social conocida como orden de picaje, mediante la cual definen niveles de dominancia dentro del grupo. En sistemas semicriollos, este comportamiento puede manejarse de forma más equilibrada, ya que un mayor espacio disponible reduce la agresión, una alimentación bien distribuida disminuye la competencia por el alimento y el agrupamiento por edad favorece la estabilidad del lote, evitando conflictos entre aves.
    p(data-aos="fade-left") Cuando se presenta alteración etológica, según las Medidas Basadas en el Animal (MBA), que utiliza el ICA para evaluar el bienestar de las aves, se identifican los siguientes indicadores:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Componentes                    
                    p Conducta agresiva donde gallinas se picotean entre sí.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Plumaje deteriorado                    
                    p Pérdida o daño de plumas que indica problemas sanitarios.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Aves aisladas                    
                    p Gallinas separadas del grupo, posible enfermedad o estrés.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Picaje excesivo                    
                    p Conducta anormal de picoteo repetitivo que causa lesiones.
    //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Control del estrés en gallinas ponedoras
    //- Título con imagen
    p(data-aos="fade-left") El control del estrés en gallinas ponedoras es clave para mantener la productividad, salud y calidad del huevo. A continuación, se presenta cómo afecta a las gallinas el estrés crónico, cuáles son sus causas y cómo prevenirlo:
    .row.bg-color-16
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/carrusel01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center Afecta
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Producción del huevo
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Tamaño y calidad de cáscara
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Sistema inmune
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Conversión alimenticia
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/carrusel01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center Causas
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Cambios bruscos de dieta
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Hacinamiento
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Depredadores
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Climas extremos
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Manejo brusco
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/carrusel01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center Prevención
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Rutinas fijas
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Transiciones graduales
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Protección perimetral
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Manejo tranquilo
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img7.png', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Control del estrés en gallinas ponedoras
    //- Título con imagen
    p(data-aos="fade-left") El bienestar en gallinas ponedoras varía según el sistema productivo, presentando ventajas y riesgos, y es evaluado por el ICA. Los detalles se presentan en este apartado:
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 2.
                span  Bienestar según el sistema productivo.
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Sistema
                      th.text-center(style="width: 30%") Ventajas
                      th.text-center(style="width: 30%") Riesgos
                  tbody
                    tr
                      td Jaula tecnificada
                      td Mayor control sanitario
                      td Restricción de comportamiento
                    tr
                      td Piso o aviario
                      td Mayor movilidad
                      td Riesgo de amoníaco
                    tr
                      td Traspatio/semicriollo
                      td Conductas naturales completas
                      td Exposición ambiental
          //- FinTabla
    p(data-aos="fade-left") El ICA clasifica las granjas avícolas en cuatro niveles según su desempeño en bienestar animal: bajo (0–59 %), medio (60–79 %), alto (80–89 %) y excelente (≥90 %).
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Principios del bienestar animal en aves de postura
    //- Título con imagen
    p(data-aos="fade-left") El bienestar animal se basa en salud, comportamiento natural y evaluación continua, sustentado en normativa colombiana que garantiza condiciones éticas y productivas adecuadas. Los principios son:
    .row.bg-color-16
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel02_1.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Integridad física y salud
                          p Se refiere a mantener a las aves libres de enfermedades, lesiones y dolor. Incluye buenas prácticas sanitarias, manejo adecuado y condiciones que eviten daños físicos.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel02_2.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Estado fisiológico adecuado
                          p Las gallinas deben tener acceso a alimento balanceado, agua limpia y condiciones ambientales óptimas que garanticen su correcto funcionamiento corporal y productividad.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel02_3.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Expresión de comportamientos naturales
                          p Implica permitir que las aves realicen conductas propias de su especie, como escarbar, picotear, percharse, anidar y acicalarse.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel02_4.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Control del estrés crónico
                          p Se busca minimizar factores que generen estrés prolongado, como hacinamiento, cambios bruscos, mala ventilación o manejo inadecuado.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel02_5.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Evaluación continua
                          p Consiste en monitorear constantemente el estado de las aves mediante indicadores de salud, comportamiento y producción, para detectar y corregir problemas a tiempo.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel02_6.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Justificación ética y científica
                          p El manejo de las aves debe basarse en principios éticos y en evidencia científica, garantizando un trato digno y responsable durante todo el ciclo productivo.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img8.png', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    .row.justify-content-center
      .col-lg-1.bg-color-5.p-2
        img(src='@/assets/curso/tema1/icono.svg', style="max-width: 100px")
      .col-lg-9.bg-color-5
        p.p-4 En Colombia, estas bases se sustentan en la Ley 1774 de 2016, que reconoce a los animales como seres sintientes, el Decreto 2113 de 2017 y la Resolución ICA 16409 de 2024.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Impacto productivo del bienestar y la etología
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La correcta integración del sistema productivo permite obtener yemas más pigmentadas, mejor grosor de cáscara, mayor persistencia de postura, menor uso de antibióticos y mejor aceptación comercial. Además, el consumidor asocia el huevo semicriollo con producción natural, libertad de movimiento, alimentación variada y una calidad diferenciada. 
    p(data-aos="fade-left") La crianza de gallinas ponedoras con alimentación alterna se fundamenta en etología, sanidad, nutrición, infraestructura y evaluación continua. El bienestar animal fortalece la producción, mejorando eficiencia, sostenibilidad y competitividad.
    Separador
    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Modelos de bienestar animal en avicultura
    p(data-aos="fade-left") La crianza de gallinas ponedoras con alimentación alterna para la producción de huevos semicriollos debe fundamentarse en la ciencia etológica, el manejo sanitario preventivo, la nutrición balanceada, una infraestructura adecuada, la evaluación continua (MBA, MBR y MBG) y el cumplimiento normativo nacional e internacional. La etología no reemplaza la técnica productiva, sino que la fortalece, y el bienestar animal no solo es una exigencia ética, sino una estrategia productiva que mejora la eficiencia, la sostenibilidad y la competitividad en el mercado actual.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Las cinco libertades del bienestar animal
    //- Título con imagen
    p(data-aos="fade-left") En esta sección se profundizará en cada una de las libertades que se manejan los diferentes sistemas productivos para el bienestar animal.
    //- Inicio Accordion
    .bg--img_03.mt-5.acordeon-tipo-2
      .row.justify-content-center
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img10.png", alt="").img400.m-auto
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Libertad de hambre y sed")
              .col-12
                p La nutrición en gallinas ponedoras garantiza acceso continuo a agua limpia y alimento balanceado, ajustado al sistema productivo. Su deficiencia provoca estrés, baja producción y problemas sanitarios, siendo clave para el bienestar animal. 
            .row(titulo="Libertad de incomodidad")
              .col-12
                p La libertad de incomodidad garantiza un ambiente adecuado con confort térmico, espacio y ventilación. Su manejo depende del sistema productivo y es clave para evitar estrés y enfermedades.
            .row(titulo="Libertad de dolor, lesión y enfermedad")
              .col-12
                p La libertad de dolor, lesión y enfermedad garantiza la salud de las aves mediante prevención, manejo adecuado y vigilancia constante, siendo clave para su bienestar y productividad.
            .row(titulo="Libertad para expresar comportamientos normales")
              .col-12
                p La libertad de expresar comportamientos naturales permite a las gallinas realizar conductas propias como anidar, escarbar y socializar. Su restricción genera estrés, agresividad y afecta su bienestar físico y productivo.
            .row(titulo="Libertad de miedo y angustia")
              .col-12
                p La libertad de miedo y angustia busca evitar el sufrimiento mental mediante manejo tranquilo, rutinas estables y protección del entorno. Su control mejora el bienestar, la productividad y la relación humano-animal.
    //- Fin Accordion
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Los cinco dominios del bienestar animal
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelo de los Cinco Dominios, desarrollado por David Mellor, representa un enfoque moderno del bienestar animal que, más allá de evitar el sufrimiento, promueve experiencias positivas. Este modelo permite una evaluación integral al considerar factores fisiológicos, ambientales y emocionales que influyen en el estado mental de las aves.
    p(data-aos="fade-left") Los cinco dominios del bienestar animal constituyen un enfoque integral que permite evaluar las condiciones de vida de las aves, considerando aspectos físicos, ambientales y emocionales, tales como:
    .row.bg-color-16
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")                      
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel03_1.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Dominio 1: nutrición
                          p Evalúa la calidad, cantidad y acceso continuo a alimento y agua, para mantener el peso corporal, el plumaje y la postura. Su manejo varía según el sistema productivo, con riesgos específicos que requieren control y ajuste.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel03_2.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Dominio 2: ambiente físico
                          p Incluye el microclima, la iluminación, ventilación, temperatura, sustrato y refugio, garantizando confort térmico y seguridad. Su manejo varía según el sistema productivo y requiere control adecuado de las condiciones ambientales.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel03_3.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Dominio 3: salud
                          p Abarca la prevención, diagnóstico y tratamiento de enfermedades y lesiones, dependiendo del plan sanitario y la observación constante. Su manejo varía según el sistema productivo y nivel de bioseguridad.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel03_4.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Dominio 4: comportamiento e interacciones
                          p Considera la posibilidad de expresar conductas naturales y sociales, donde una mayor libertad conductual favorece el bienestar psicológico, variando según el sistema productivo y sus condiciones de manejo.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema1/carrusel03_5.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Dominio 5: estado mental
                          p Integra los efectos de los anteriores para evaluar el estado emocional del animal, considerando experiencias positivas como confort y curiosidad, y negativas como miedo o sufrimiento.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img12.png', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Relación entre libertades y dominios
    //- Título con imagen
    p(data-aos="fade-left") Las cinco libertades establecen condiciones de bienestar y los cinco dominios evalúan el estado emocional; ambos modelos son complementarios y aplicables en la certificación de bienestar animal (ICA, 2024), así:
    .row.justify-content-center
      .col-md-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Relación entre las cinco libertades y los cinco dominios.
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 30%") Cinco Libertades (FAWC)
                th.text-center(style="width: 30%") Cinco Dominios (Mellor et al.)
                th.text-center(style="width: 30%") Relación
            tbody
              tr
                td Libre de hambre y sed
                td Nutrición
                td Garantiza bienestar fisiológico básico.
              tr
                td Libre de incomodidad
                td Ambiente físico
                td Evalúa microclima y confort.
              tr
                td Libre de dolor, lesión y enfermedad
                td Salud
                td Refuerza prevención y atención veterinaria.
              tr
                td Libre para expresar comportamientos normales
                td Interacciones y comportamiento
                td Evalúa grado de expresión natural.
              tr
                td Libre de miedo y angustia
                td Estado mental
                td Refleja equilibrio emocional y psicológico.
    //- FinTabla
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Diferencias entre principios del bienestar animal y las cinco libertades
    //- Título con imagen
    p(data-aos="fade-left") El bienestar animal en aves de postura exige comprender enfoques éticos y científicos, diferenciando las cinco libertades de los principios para mejorar su manejo productivo. Las diferencias son:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Origen y evolución                    
                    P Las cinco libertades son una guía ética para evitar el sufrimiento, mientras que los Principios del Bienestar Animal usan un enfoque científico para medir y garantizar el bienestar.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Estructura conceptual
                    P Las cinco libertades evitan el sufrimiento básico, mientras los principios del bienestar animal promueven un bienestar integral y medible científicamente.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Enfoque metodológico
                    P Las cinco libertades se basan en una evaluación ética y cualitativa, mientras que los Principios del Bienestar Animal utilizan mediciones científicas, objetivas y verificables.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Aplicación práctica en aves de postura
                    P Las cinco libertades aseguran condiciones básicas, mientras los principios del bienestar animal evalúan objetivamente el bienestar mediante indicadores técnicos.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Profundidad ética y científica
                    P Las cinco libertades buscan evitar el sufrimiento, mientras los principios del bienestar animal promueven un bienestar positivo basado en evidencia científica.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_6.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Aplicación en la normatividad colombiana
                    P Las cinco libertades son el fundamento ético, mientras los Principios del Bienestar Animal permiten implementarlo, evaluarlo y certificarlo técnicamente.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_7.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Cuadro comparativo general
                    P Las cinco libertades tienen un enfoque ético y cualitativo para evitar el sufrimiento, mientras los principios del bienestar Animal son técnicos, cuantitativos y buscan un bienestar integral y proactivo.
    //- Fin Slideshow
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
