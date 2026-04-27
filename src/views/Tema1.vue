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
    p(data-aos="fade-left") En el siguiente diagrama se presentan detalladamente los componentes, la formación del huevo y la importancia productiva del sistema reproductivo de la gallina ponedora:
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
                        p.mb-0 Oviducto: se divide en infundíbulo (captura del óvulo), magno (formación de la clara), istmo (formación de membranas), útero (formación de la cáscara), vagina (expulsión del huevo).
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Formación del huevo (aprox. 24-26 horas):
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Yema.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Clara.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Membranas.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Cáscara.
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
                  p.mb-0.mt-1 Fosas nasales.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Laringe.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Tráquea.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Bronquios.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Pulmones.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Sacos aéreos (9)
          .row(titulo="Características especiales")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Flujo de aire unidireccional.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Intercambio gaseoso continuo.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Mayor sensibilidad a gases (amoníaco).
          .row(titulo="Importancia en granja")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Ventilación adecuada previene enfermedades.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Control de polvo y humedad es fundamental.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Relación directa con ganancia de peso y postura.
    //- Fin Accordion
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Integración anatómica en la producción de huevo
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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qEc6WgCeA78?si=GNTq_tBBxQNW5oep" title="Conductas naturales en sistemas semicriollos." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
                    h4 Canibalismo                    
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
                            p.mb-0 Producción del huevo.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Tamaño y calidad de cáscara.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Sistema inmune.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Conversión alimenticia.
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/carrusel01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center Causas
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Cambios bruscos de dieta.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Hacinamiento.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Depredadores.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Climas extremos.
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
                            p.mb-0 Rutinas fijas.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Transiciones graduales.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Protección perimetral.
                          li.d-flex
                            i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                            p.mb-0 Manejo tranquilo.
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
          h3.titulo-con-imagen__texto Bienestar según el sistema productivo
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
                    P Las cinco libertades tienen un enfoque ético y cualitativo para evitar el sufrimiento, mientras los principios del bienestar animal son técnicos, cuantitativos y buscan un bienestar integral y proactivo.
    //- Fin Slideshow
    .row.justify-content-center.mb-4
      .col-lg-11        
        .d-flex.align-items-center.bg-color-6.p-4.rounded-4          
          .flex-shrink-0.pe-4
            img(src='@/assets/curso/tema1/lectura-icon.svg', style="width: 80px")          
          .flex-grow-1
            h4.mb-2 Diferencia entre los principios del bienestar animal y las cinco libertades en aves de postura
            p.mb-0 Para profundizar en cada una de las diferencias existentes entre las cinco libertades y los principios del bienestar animal, lo invitamos a realizar la siguiente lectura complementaria:          
          .ps-4
            a.btn.btn-danger.d-flex.align-items-center.p-3(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Etapas de desarrollo de las aves
    p(data-aos="fade-left") El desarrollo de las aves de postura se organiza en una estructura genética piramidal que incluye abuelas, reproductoras y líneas comerciales, asegurando eficiencia, calidad y mejoramiento continuo productivo.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Abuelas (<i>Grand Parent</i> – GP)
    //- Título con imagen
    p(data-aos="fade-left") Las abuelas son aves de alto valor genético utilizadas para producir las reproductoras. Representan el nivel superior de la pirámide genética. Sus características y objetivo son:
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center
            .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column              
              .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema1/slide04_1.png').w-100
                .p-4
                  h4.card-title.text-center.mb-4 Características          
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Selección genética rigurosa.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Control sanitario estricto.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Bajo volumen poblacional.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Alto valor económico.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Programas de mejoramiento continuo.
            .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema1/slide04_2.png').w-100                
                .p-4
                  h4.card-title.text-center.mb-1 Objetivo
                  h5.card-title.text-center.mb-4 Transmitir características como:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Alta producción de huevo.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Resistencia a enfermedades.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Buena conversión alimenticia.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Calidad de cáscara.
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Persistencia de postura.
            //- Fin Tarjetas
    p(data-aos="fade-left") Estas aves generalmente son manejadas por empresas genéticas internacionales.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Reproductoras (<i>Parent Stock</i> – PS)
    //- Título con imagen
    p(data-aos="fade-left") Las reproductoras provienen de las abuelas y su función es producir los huevos fértiles que darán origen a las pollitas comerciales.
    //- Inicio contenedor vertical
    .container.tarjeta.p-4.p-md-5
          TabsA.color-acento-botones
            .tarjeta.p-5.bg-color-19(titulo="Características")              
              .row
                .col-9
                  h4 Características
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Manejo mixto (hembras + machos). 
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Producción de huevo fértil. 
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Control estricto de fertilidad. 
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Programas de vacunación especializados.
                .col-3
                  figure.mb-4
                    img.mx-auto(src='@/assets/curso/tema1/pestana02_1.svg')
            .tarjeta.p-5.bg-color-19(titulo="Objetivo")              
              .row
                .col-9
                  h4 Objetivo
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Generar pollitas con alto potencial productivo para granjas comerciales.                    
                .col-3
                  figure.mb-4
                    img.mx-auto(src='@/assets/curso/tema1/pestana02_2.svg')
            .tarjeta.p-5.bg-color-19(titulo="Indicadores técnicos")              
              .row
                .col-9
                  h4 Indicadores técnicos
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Porcentaje de fertilidad. 
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Incubabilidad. 
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Uniformidad corporal. 
                    li.d-flex
                      i.fas.fa-check-circle.me-3(style="color:#AD9721")
                      p.mb-0 Peso estándar según edad.
                .col-3
                  figure.mb-4
                    img.mx-auto(src='@/assets/curso/tema1/pestana02_3.svg')          
    //- Fin contenedor vertical
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Líneas comerciales o gallinas ponedoras
    //- Título con imagen
    p(data-aos="fade-left") Son las aves destinadas exclusivamente a la producción de huevo para consumo. Provienen de huevos incubados de reproductoras. Las etapas productivas son:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide05_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Levante (0 – 16 semanas)                    
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Desarrollo corporal.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Formación ósea.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Preparación reproductiva.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Meta: lograr peso y uniformidad adecuados.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide05_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Pre-postura (16–18 semanas)
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Desarrollo del aparato reproductor.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Inicio de estímulo lumínico.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Incremento gradual de calcio en la dieta.                     
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide05_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Postura (18–80 semanas aprox.)
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Pico de producción (25–30 semanas).
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Persistencia productiva.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Control de calidad de huevo.
    //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Estructura piramidal genética
    //- Título con imagen
    p(data-aos="fade-left") La estructura piramidal genética organiza la producción de huevo desde abuelas hasta aves comerciales, permitiendo optimizar genética, manejo, alimentación, sanidad y productividad en los sistemas avícolas. A continuación, se detallará por niveles:
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column              
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_1.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Abuelas          
            p.text-center Mejoramiento genético. Producen reproductoras.
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_2.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Reproductoras
            p.text-center Producción de huevo fértil; producen pollitas comerciales.
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_3.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Comerciales
            p.text-center Producción de huevo de consumo, mercado.
      //- Fin Tarjetas
    .row.mb-5      
      .col-lg-8.mb-4.mb-lg-0.p-4(data-aos="fade-right")
        .row
          p En la medida en que se desciende en la pirámide:
        .row.bg-color-13.p-4.mb-3
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Aumenta el número de aves.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Disminuye el valor genético individual.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Aumenta el volumen de producción.
        .row
          p Comprender estas etapas permite mejorar la selección genética, alimentación, sanidad y manejo, garantizando productividad y adaptación, incluso en sistemas semicriollos o de traspatio.      
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img13.png", style="width: 450px").m-auto
    Separador
    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Razas y líneas de aves ponedoras
    p(data-aos="fade-left") Estas suelen usarse en traspatio, producciones pequeñas o proyectos sociales; tienen características distintas, menos datos productivos sistemáticos, pero ventajas específicas.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Líneas comerciales de gallinas ponedoras
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-11
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img14.png', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Las líneas comerciales de gallinas ponedoras agrupan diferentes genéticas especializadas que varían en productividad, adaptación, eficiencia alimenticia y resistencia, permitiendo elegir la más adecuada según condiciones productivas.
    p.mb-5(data-aos="fade-left") En este punto se conocerán la raza comercial, características generales, parámetros productivos estimados, ventajas y desventajas.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide06_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  <i>Hy-Line (W-36, W-80, Brown)</i>
                    p La línea  <i>Hy-Line (W-36, W-80 y Brown)</i> está compuesta por aves ligeras o medianas con alta adaptabilidad al trópico, capaces de producir entre 320 y 340 huevos al año, con buen peso y excelente conversión alimenticia. Se destacan por su alta productividad, persistencia en postura y calidad interna del huevo, aunque las líneas blancas pueden ser más sensibles al estrés calórico.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide06_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  <i>Lohmann (Brown, LSL)</i>
                    p La línea  <i>Lohmann (Brown, LSL)</i> se caracteriza por ser aves rústicas, resistentes y de buen comportamiento, con una producción anual de entre 310 y 330 huevos, los cuales presentan buen tamaño y excelente calidad de cáscara. Estas aves destacan por su gran adaptabilidad, alta viabilidad superior al 90% y buen desempeño tanto en sistemas intensivos como semi-intensivos. No obstante, requieren un manejo nutricional estricto para poder expresar todo su potencial productivo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide06_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  <i>Isa (Brown, White)</i>
                    p La línea  <i>Isa (Brown, White)</i> se caracteriza por aves activas, de buen temperamento y fáciles de manejar, con una producción anual de entre 315 y 330 huevos, con un peso promedio de 62 a 64 g y buena persistencia en la postura. Destacan por su alta productividad, buena aceptación en América Latina y la uniformidad de sus huevos. Sin embargo, pueden ser más susceptibles a enfermedades si no se mantiene una adecuada bioseguridad.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide06_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  <i>Hisex (Brown, White)</i>
                    p La línea  <i>Hisex (Brown, White)</i> se caracteriza por aves livianas con alta eficiencia alimenticia, capaces de producir entre 310 y 325 huevos al año, con buena conversión y huevos de buen tamaño. Se destacan por su excelente conversión alimenticia, buena calidad de cáscara y buen desempeño en climas cálidos. Sin embargo, pueden presentar menor persistencia en la postura en comparación con otras líneas si no se les brinda un manejo adecuado.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide06_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  <i>Dekalb (White, Brown)</i>
                    p La línea  <i>Dekalb (White, Brown)</i> se caracteriza por aves resistentes y con buena adaptabilidad, capaces de producir entre 300 y 320 huevos al año, con huevos de buen tamaño y consistencia. Se destacan por ser rústicas, presentar buen desempeño en ambientes tropicales y producir huevos con cáscara fuerte. Sin embargo, su producción puede ser ligeramente menor en comparación con líneas como  <i>Hy-Line o Lohmann</i> cuando se encuentran en condiciones óptimas.
    //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Razas criollas de gallinas ponedoras
    //- Título con imagen
    p.mb-5(data-aos="fade-left") Las razas criollas incluyen aves rústicas, adaptadas a sistemas extensivos, con diversidad fenotípica, producción moderada y gran valor cultural, destacándose por su resistencia y adaptación local. A continuación, se estudiarán cada una de estas:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  Criolla común
                    p La criolla común es un ave de plumaje variado y tamaño mediano, adaptada a sistemas extensivos, que produce entre 130 y 160 huevos al año. Destaca por su rusticidad, resistencia a enfermedades y valor cultural, aunque presenta menor productividad y huevos más pequeños frente a híbridos comerciales.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Kika
                    p La gallina Kika es un ave pequeña y resistente, común en zonas andinas, que produce entre 100 y 140 huevos al año. Requiere poco alimento, pero tiene bajo rendimiento y huevos pequeños.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4  Criolla de huevos azules / verdes
                    p La criolla de huevos azules o verdes produce entre 120 y 150 huevos al año y se caracteriza por su cáscara de color distintivo y rusticidad; sin embargo, tiene baja productividad y poca uniformidad.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Piroca (cuello desnudo)
                    p La gallina piroca o de cuello desnudo es un ave de tamaño mediano, con el cuello parcialmente sin plumas y buena tolerancia al calor, que produce entre 120 y 140 huevos al año. Se destaca por su rusticidad y facilidad de desplume, aunque su apariencia puede resultar poco atractiva para algunos consumidores y su productividad es baja.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Copetona
                    p La gallina copetona se caracteriza por su penacho de plumas en la cabeza y su fenotipo llamativo, siendo una raza criolla tanto ornamental como productiva, con una producción de 110 a 130 huevos al año. Destaca por su rusticidad y buena aceptación cultural, aunque presenta baja productividad y poca uniformidad en la postura.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_6.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Calzada (con plumas en patas)
                    p La gallina calzada, caracterizada por tener plumas en los tarsos y un plumaje variado, es común en zonas rurales y produce entre 100 y 130 huevos al año. Se destaca por su rusticidad y valor cultural, aunque presenta huevos pequeños y bajo rendimiento productivo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_7.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Criolla costeña (trópico bajo)
                    p La criolla costeña es un ave adaptada al calor y la humedad que produce 130–150 huevos al año, destacando por su resistencia, aunque con menor productividad y poca uniformidad genética.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide07_8.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Santandereana
                    p La gallina santandereana es rústica y adaptable, produce huevos azulados y pesa hasta 3 kg, pero tiene baja producción y alta variabilidad genética frente a razas comerciales.
    //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Etapas de desarrollo de las aves
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La producción de huevo comercial se organiza en una pirámide genética que asegura mejoramiento continuo, uniformidad y eficiencia en las gallinas ponedoras, dividida en tres niveles principales. Esta pirámide se divide en tres niveles: abuelas, reproductoras y comerciales.
    p.mb-5(data-aos="fade-left") Para seleccionar las gallinas criollas se debe tener en cuenta unos parámetros, los cuales, se detallan en la siguiente tabla:
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 4.
                span  Parámetros y consideración.
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Parámetro
                      th.text-center(style="width: 70%") Consideración
                  tbody
                    tr
                      td Producción de huevo
                      td Menor que líneas comerciales (120–200 huevos/año).
                    tr
                      td Adaptabilidad
                      td Alta: resistentes a climas extremos, depredadores y enfermedades locales.
                    tr
                      td Comportamiento
                      td Activo, buena expresión de conductas naturales (forrajeo, baños de polvo, anidación).
                    tr
                      td Tamaño y color de huevo
                      td Variable, generalmente más pequeño y de colores claros a café claro.
                    tr
                      td Requerimientos de manejo
                      td Bajo: sistemas rústicos, alimentación alterna con balanceados y forraje.
                    tr
                      td Longevidad productiva
                      td Mayor que líneas comerciales; pueden producir hasta 3–4 años con cuidado.
          //- FinTabla
    p.mb-5(data-aos="fade-left") Las gallinas criollas son ideales para sistemas de traspatio sostenibles, ofreciendo huevos de alta calidad, bajo costo, bienestar animal y buena adaptación con manejo adecuado.  
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Comparación entre líneas comerciales y gallinas criollas
    //- Título con imagen
    p.mb-5(data-aos="fade-left") El comparativo muestra diferencias clave en productividad, adaptación, costos y bienestar, orientando la elección según sistema, recursos y objetivos; a continuación, se analizan estas diferencias.
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5.
                span  Comparativo entre líneas comerciales vs. Gallinas criollas
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Aspecto
                      th.text-center(style="width: 30%") Líneas Comerciales (Híbridas)
                      th.text-center(style="width: 30%") Gallinas Criollas / Semicriollas
                  tbody
                    tr
                      td Rendimiento de huevo
                      td Muy alto: 280–320 huevos/año
                      td Medio: 120–200 huevos/año
                    tr
                      td Peso huevo promedio
                      td 55–65 g
                      td 50–56 g
                    tr
                      td Inicio de postura
                      td 16–18 semanas
                      td 18–24 semanas
                    tr
                      td Tamaño y uniformidad
                      td Alta uniformidad, color uniforme
                      td Variable, color y tamaño heterogéneo
                    tr
                      td Rusticidad / Adaptación
                      td Baja; requieren control climático y sanitario
                      td Alta; resistentes a climas extremos, depredadores y enfermedades locales
                    tr
                      td Alimentación
                      td Necesitan dieta balanceada y precisa
                      td Flexible; pueden complementar con forraje y subproductos agrícolas
                    tr
                      td Expresión de conductas naturales
                      td Limitada; espacios reducidos
                      td Completa; escarban, se acicalan, usan nidos y perchas
                    tr
                      td Manejo sanitario
                      td Estricto; alta bioseguridad
                      td Menos exigente; manejo preventivo básico suficiente
                    tr
                      td Costo inicial y mantenimi1ento
                      td Alto; inversión en infraestructura y alimentación
                      td Bajo; sistema rústico, menor costo de mantenimiento
                    tr
                      td Vida productiva
                      td 1–2 años óptimos
                      td 3–4 años con buen manejo
                    tr
                      td Ventajas
                      td Alta producción, uniformidad y eficiencia
                      td Adaptación, rusticidad, bienestar animal y calidad organoléptica del huevo                    
          //- FinTabla
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Selección de aves según sistema de producción
    //- Título con imagen
    p.mb-5(data-aos="fade-left") La elección de gallinas depende del sistema de producción, considerando recursos, manejo, bienestar animal y objetivos para lograr eficiencia y sostenibilidad. A continuación, se detalla cada sistema:
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column              
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta05_1.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Jaula tecnificada          
            p.text-center Líneas comerciales: máxima producción.
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta05_2.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Piso / galpón
            p.text-center Líneas o cruzas: buena conversión y control moderado.
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-white.border.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta05_3.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Traspatio / semicriollos
            p.text-center Gallinas criollas: más adaptación, bajo costo y mejor bienestar.
      //- Fin Tarjetas
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
