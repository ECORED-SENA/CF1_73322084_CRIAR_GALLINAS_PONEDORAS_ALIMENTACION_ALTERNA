<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos sanitarios y preventivos
    p(data-aos="fade-left") En este capítulo se abordarán los fundamentos sanitarios y preventivos en avicultura de postura. Iniciemos con la sanidad avícola.
    Separador
    //- Inicio Tema2.1
    .row.mt-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Sanidad avícola en aves de postura
    p(data-aos="fade-left") La sanidad avícola es clave para la salud, productividad y calidad del huevo; a continuación, se conocerán su concepto, objetivo, importancia y base normativa.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Concepto                    
              p La sanidad avícola de postura se define como el conjunto de acciones, programas, prácticas y medidas veterinarias destinadas a prevenir, controlar, diagnosticar y erradicar enfermedades que afectan la salud, el bienestar y la productividad de las gallinas ponedoras a lo largo de todo su ciclo productivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Objetivo
              p Su objetivo es mantener la salud del sistema, prevenir enfermedades y garantizar la calidad del huevo; integra bioseguridad, vacunación, control sanitario y buenas prácticas de manejo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Importancia
              p Una adecuada sanidad avícola reduce la mortalidad y los costos veterinarios, mejora el bienestar animal y la eficiencia productiva, aumenta la calidad e inocuidad de los huevos y facilita la certificación de granjas bioseguras ante el ICA.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Base normativa
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Resolución ICA 3651 de 2014: establece los requisitos para la certificación de granjas avícolas bioseguras.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Resolución ICA 067449 de 2020: reglamenta la implementación de Buenas Prácticas Avícolas (BPA).
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Manual de Buenas Prácticas Avícolas (MADR, 2020): orienta el manejo sanitario, de bioseguridad y bienestar animal.
    //- Fin Slideshow
    p(data-aos="fade-left") Para garantizar una adecuada sanidad en aves de postura, es indispensable asegurar la implementación de elementos fundamentales para prevenir enfermedades y el bienestar animal, tales como:
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
                        img(src='@/assets/curso/tema2/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 1. Prevención sanitaria
                        p.card-text.text-center Vacunación y control de parásitos oportunos.
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 2. Monitoreo epidemiológico
                        p.card-text.text-center Detección temprana de signos y cambios productivos.
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 3. Diagnóstico y tratamiento
                        p.card-text.text-center Atención inmediata ante enfermedades.
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 4. Manejo higiénico
                        p.card-text.text-center Limpieza y desinfección periódica de instalaciones y equipos.
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 5. Educación sanitaria
                        p.card-text.text-center Capacitación del personal en manejo y control sanitario.
                      .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_6.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 6. Registro sanitario
                        p.card-text.text-center Registro de acciones sanitarias.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img1.png', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Enfermedades aviares de importancia sanitaria    
    p(data-aos="fade-left") En Colombia, es fundamental reconocer, prevenir y reportar las enfermedades aviares de vigilancia obligatoria; las más importantes son:
    //- Inicio Accordion
    .bg--img_03.mt-5.acordeon-tipo-2
      .row.justify-content-center        
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo=" <i>Newcastle (NDV – Paramyxovirus</i> aviar tipo 1)")
              .col-12
                p La enfermedad es de origen viral y altamente contagiosa, presentando diferentes cepas: las velogénicas, muy patógenas, generan signos respiratorios severos, alteraciones nerviosas y digestivas con alta mortalidad; las mesogénicas causan cuadros moderados con afectación en la producción; y las lentogénicas, de carácter leve, se emplean comúnmente en vacunación. Su impacto incluye grandes pérdidas económicas y, en humanos, puede ocasionar conjuntivitis leve. Para su control se requiere vacunación obligatoria, notificación inmediata, cuarentena, eliminación de aves infectadas y desinfección rigurosa.
            .row(titulo="Influenza Aviar (IA)")
              .col-12
                p La influenza aviar es una enfermedad causada por el virus de Influenza tipo A, destacándose los subtipos H5 y H7 por su alta patogenicidad. Sus síntomas varían según la cepa, pero en casos graves incluyen depresión, caída brusca en la postura, edema en cabeza y crestas, diarreas verdes, hemorragias internas y alta mortalidad. Tiene gran importancia sanitaria por su riesgo zoonótico, su regulación internacional y el impacto económico que puede generar. En Colombia, se controla mediante vigilancia permanente, pruebas obligatorias para movilización y, ante brotes, sacrificio sanitario, cuarentena y restricción de zonas.
            .row(titulo="Salmonelosis Aviar")
              .col-12
                p La salmonelosis aviar es causada por bacterias del género Salmonella, destacándose  <i>S. Enteritidis</i> y  <i>S. Typhimurium</i> por su carácter zoonótico, y  <i>S. Gallinarum</i> y  <i>S. Pullorum</i> por afectar específicamente a las aves. En pollitos provoca depresión, diarrea blanca y alta mortalidad, mientras que en adultas puede presentarse de forma asintomática con caída en la postura y transmisión a los huevos. Su impacto radica en el riesgo para la salud pública y restricciones comerciales. El control se basa en estricta higiene, calidad de alimento y agua, eliminación de portadoras, control de roedores, vacunación en algunos casos y monitoreo sanitario constante.
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/img2.png", alt="").img400.m-auto
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Plan de vacunación en aves de postura
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La vacunación en avicultura de postura es una herramienta fundamental para prevenir enfermedades infecciosas que afectan la producción, la salud de las aves y la bioseguridad de la granja, permitiendo reducir la mortalidad, mantener la calidad del huevo, evitar la diseminación de enfermedades y disminuir el uso de antibióticos mediante acciones preventivas.
    p(data-aos="fade-left") Mediante la siguiente tabla, se detallará al plan de vacunación, según cada enfermedad, que contiene información sobre la vía de aplicación, dosis, refuerzo y protección.
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 6.
                span  Plan de vacunación según enfermedad.
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Enfermedad
                      th.text-center(style="width: 30%") Vacuna / Biológico
                      th.text-center(style="width: 30%") Edad de aplicación
                      th.text-center(style="width: 30%") Vía de aplicación
                      th.text-center(style="width: 30%") Dosis
                      th.text-center(style="width: 30%") Refuerzo
                      th.text-center(style="width: 30%") Protege contra
                  tbody
                    tr
                      td Enfermedad de  <i>Newcastle</i>
                      td Vacuna viva cepa La Sota o B1
                      td 1° día de vida (en planta)
                      td Ocular o  <i>spray</i>
                      td Según fabricante (0.03 ml)
                      td Cada 8–12 semanas
                      td Virus de <i>Newcastle (paramixovirus</i>).                      
                    tr
                      td Bronquitis infecciosa
                      td Vacuna viva cepa  <i>Massachusetts</i> o H120
                      td 1° día (asociada a  <i>Newcastle</i>)
                      td Ocular o  <i>spray</i>
                      td 1 gota/ave
                      td Refuerzo a las 4 y 8 semanas
                      td Virus de bronquitis infecciosa aviar.
                    tr
                      td  <i>Gumboro</i> (enfermedad infecciosa de la bolsa)
                      td Vacuna viva (cepa intermedia)
                      td 10–14 días
                      td Agua de bebida
                      td Según fabricante
                      td Refuerzo a los 21 días
                      td Virus de  <i>Gumboro</i> (IBDV).
                    tr
                      td Viruela aviar (<i>Fowl Pox</i>)
                      td Vacuna viva (virus atenuado)
                      td 6–8 semanas
                      td Punción en membrana alar
                      td 1 dosis única
                      td Cada 6–9 meses
                      td Virus de viruela aviar.
                    tr
                      td Enfermedad de  <i>Marek</i>
                      td Vacuna HVT o  <i>Rispens</i>
                      td Día 1 (incubadora)
                      td Inyección subcutánea (cuello)
                      td 0.2 ml
                      td No requiere
                      td Virus de Marek (<i>herpesvirus</i>).
                    tr
                      td  <i>Coryza</i> infecciosa
                      td Vacuna bacteriana inactivada
                      td 8–10 semanas
                      td Subcutánea o intramuscular
                      td 0.5 ml
                      td Refuerzo a las 4 semanas
                      td  <i>Avibacterium paragallinarum.</i>
                    tr
                      td Salmonelosis (<i>S. enteritidis, S. typhimurium</i>)
                      td Vacuna inactivada (bacterina)
                      td 10–12 semanas
                      td Subcutánea
                      td 0.5 ml
                      td Refuerzo al inicio de postura
                      td Salmonelas zoonóticas.
                    tr
                      td  <i>Laringotraqueítis</i> infecciosa (LT)
                      td Vacuna viva atenuada
                      td 10–12 semanas
                      td Ocular / intranasal
                      td 1 gota/ave
                      td Refuerzo al inicio de postura
                      td Virus de LT aviar.
                    tr
                      td Enfermedad de  <i>E. coli</i> (colibacilosis)
                      td Autovacuna o bacteriana inactivada
                      td 12–14 semanas
                      td Intramuscular
                      td 0.5 ml
                      td Cada 6 meses
                      td Cepas patógenas de  <i>E. coli.</i>
                    tr
                      td Enfermedad de Encefalomielitis aviar (AE)
                      td Vacuna viva (cepa 1143)
                      td 14–16 semanas
                      td Agua de bebida o ocular
                      td 1 gota/ave
                      td Una vez por ciclo
                      td Virus AE (<i>poliomavirus</i>).
          //- FinTabla
    p(data-aos="fade-left") Las vacunas deben estar entre 2 y 8 °C sin congelarse. El agua de la vacunación debe estar libre de cloro y desinfectantes. Su aplicación debe ser supervisada por un médico veterinario zootecnista registrado en el ICA.          
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Plan de vermifugación o control de parásitos
    //- Título con imagen
    p(data-aos="fade-left") Los parásitos intestinales disminuyen la absorción de nutrientes, reducen la postura y debilitan la inmunidad, por lo que su control debe ser preventivo y estratégico. Estos son:
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 7.
                span  Plan de vermifumigación.
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Principio activo / Producto
                      th.text-center(style="width: 30%") Tipo de parásito controlado
                      th.text-center(style="width: 30%") Edad o momento de aplicación
                      th.text-center(style="width: 30%") Vía de administración
                      th.text-center(style="width: 30%") Dosis / Duración
                      th.text-center(style="width: 30%") Frecuencia recomendada
                      th.text-center(style="width: 30%") Observaciones técnicas
                  tbody
                    tr
                      td Albendazol 10 %
                      td Nematodos (Ascaridia galli, Heterakis sp.)
                      td 6–8 semanas / inicio de postura
                      td Agua de bebida
                      td 1 ml/L de agua por 2 días
                      td Cada 3–4 meses
                      td No administrar en postura pico (puede afectar producción).
                    tr
                      td Levamisol 7.5 %
                      td Nematodos y capilarias
                      td 10 semanas / refuerzo 25 semanas
                      td Oral / Agua
                      td 1 ml/L de agua por 1 día
                      td Cada 4 meses
                      td Estimula también el sistema inmune.
                    tr
                      td Fenbendazol 10 %
                      td Nematodos y cestodos
                      td 12 semanas / 40 semanas
                      td Oral o alimento
                      td 1 g/kg alimento por 3 días
                      td Cada 6 meses
                      td Rotar con albendazol.
                    tr
                      td Piperazina citrato 60 %
                      td Ascaridiasis leve
                      td 8–12 semanas
                      td Agua de bebida
                      td 1 g/L de agua
                      td Según necesidad
                      td Usar en casos de infestaciones iniciales.
                    tr
                      td Toltrazuril 5 %
                      td Coccidios intestinales (<i>Eimeria</i> sp.)
                      td 14 días y 10 semanas
                      td Agua de bebida
                      td 1 ml/L por 2 días
                      td Preventivo o brote
                      td Alternar con manejo seco de cama.
          //- Fin Tabla
          .row.justify-content-center
            .col-md-12
              p.bg-color-17.p-2 Referencia Tabla - Norma APA
    p(data-aos="fade-left") Se recomienda realizar exámenes cada tres meses, desinfectar equipos, aplicar vermífugos al amanecer y rotar antiparasitarios para evitar resistencia. Ahora se dará paso para conocer los protocolos sanitario.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Protocolos sanitarios complementarios
    //- Título con imagen
    p(data-aos="fade-left") Los protocolos sanitarios complementarios garantizan bioseguridad y productividad; a continuación, se presentan sus principales procedimientos y frecuencias.
    //- Inicio Accordion
    .bg--img_03.mt-5.acordeon-tipo-2
      .row.justify-content-center
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/img4.png", alt="").img400.m-auto     
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Desinfección de galpón")
              .col-12
                p Se recomienda la desinfección mediante el uso de amonios cuaternarios o glutaraldehído en concentraciones de 0,5–1 %, aplicada antes del ingreso de cada lote y de forma semanal para mantener la bioseguridad.
            .row(titulo="Control de plagas (roedores/insectos)")
              .col-12
                p Se recomienda el uso de trampas mecánicas, cebos rodenticidas y desinsectación dirigida para el control de plagas, aplicados de forma mensual o según el nivel de infestación.
            .row(titulo="Limpieza de bebederos y comederos")
              .col-12
                p Se recomienda el cepillado con detergente y enjuague con agua limpia de bebederos y comederos, realizado diariamente para garantizar la higiene.
            .row(titulo="Control de mortalidad")
              .col-12
                p Se recomienda el retiro inmediato de aves muertas y su disposición biosegura mediante entierro profundo o incineración, realizado diariamente para evitar riesgos sanitarios.
            .row(titulo="Registro sanitario")
              .col-12
                p Se recomienda el registro diario de mortalidad, consumo, temperatura y observaciones clínicas para un adecuado control sanitario y productivo.
    //- Fin Accordion.
    p(data-aos="fade-left") La normatividad colombiana que regulan la realización de los protocolos sanitario son:
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
                        img(src='@/assets/curso/tema2/tarjeta02_1.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Resolución ICA 16409 de 2024
                          p Crea el Programa de Certificación Voluntaria en Bienestar y Sanidad Animal.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta02_2.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Manual de Bioseguridad Avícola (ICA, 2023) 
                          p Establece medidas de bioseguridad y control de enfermedades en aves de corral.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta02_3.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Resolución ICA 3652 de 2014
                          p Regula la prevención, diagnóstico y control de enfermedades aviares.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta02_4.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Ley 1774 de 2016
                          p Reconoce a los animales como seres sintientes.
                      .bg-color-18.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta02_5.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-3 Decreto 1500 de 2007
                          p Regula la inocuidad y sanidad en productos de origen animal.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img6.png', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    p(data-aos="fade-left") El plan sanitario integral organiza acciones por etapa productiva para prevenir enfermedades y mantener la salud y productividad de las aves. Este se detalla seguidamente.
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center
            .col-md-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 8.
                span  Plan sanitario integral en avicultura de postura
              .tabla-a.color-acento-botones
                table
                  thead
                    tr
                      th.text-center(style="width: 30%") Etapa productiva
                      th.text-center(style="width: 30%") Actividad principal
                      th.text-center(style="width: 30%") Objetivo
                      th.text-center(style="width: 30%") Frecuencia / Responsable
                  tbody
                    tr
                      td Levante (1–16 semanas)
                      td Vacunación básica y refuerzos.
                      td Estimular inmunidad temprana frente a enfermedades virales y bacterianas.
                      td Según cronograma ICA / Veterinario.
                    tr
                      td Inicio de postura (17–25 semanas)
                      td Refuerzo inmunitario y control parasitario.
                      td Proteger al inicio del ciclo productivo.
                      td Cada 3–4 meses o según riesgo.
                    tr
                      td Postura (26–90 semanas)
                      td Mantenimiento sanitario, bioseguridad y vermifugación periódica.
                      td Evitar caídas productivas y brotes infecciosos.
                      td Monitoreo semanal / desinfección diaria.
                    tr
                      td Descanso sanitario (vacío técnico)
                      td Limpieza, desinfección y descanso biológico.
                      td Cortar ciclos infecciosos.
                      td Mínimo 15 días antes de nuevo lote.
          //- Fin tabla                      
    p(data-aos="fade-left") La sanidad en aves de postura es clave para la sostenibilidad, ya que previene enfermedades, mejora la productividad y asegura el bienestar, independientemente del sistema de producción.
    Separador
    //- Inicio Tema2.2
    .row.mt-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Medicamentos en avicultura
    p(data-aos="fade-left") El uso de medicamentos en avicultura de postura es clave para prevenir enfermedades, controlar parásitos y mejorar la salud y productividad de las aves. En el siguiente video se abordarán detalles para tener en cuenta:
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/85ZZb8qxtjk?si=YlsHV4HkRTyNStyE" title="Conductas naturales en sistemas semicriollos." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    Separador
    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Bioseguridad en granjas avícolas de postura
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La bioseguridad en granjas avícolas de postura es fundamental para prevenir la entrada y propagación de enfermedades, proteger la salud de las aves y asegurar la calidad e inocuidad de los productos, mediante la aplicación de medidas integrales de control y manejo.
    p(data-aos="fade-left") En este apartado se abordarán los objetivos, componentes, principales protocolos, la evaluación y el monitoreo del cumplimiento, las consecuencias de su incumplimiento y la relación entre la bioseguridad y el bienestar animal. 
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img8.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Objetivos")
            .col-12.ps-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Prevenir el ingreso de enfermedades infecciosas al sistema productivo.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Reducir la circulación de patógenos entre diferentes lotes o galpones.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Evitar la contaminación cruzada de alimentos, agua, personas o equipos.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Garantizar un entorno sanitario estable que promueva el bienestar y productividad de las aves.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Mantener la trazabilidad sanitaria ante las autoridades y compradores.                
          .row(titulo="Componentes básicos del sistema de bioseguridad")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Externa o perimetral: Evita el ingreso de patógenos desde el exterior.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Interna u operativa: Controla la diseminación de patógenos dentro de la granja.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Sanitaria o biológica: Mantiene inmunidad y salud de las aves.
          .row(titulo="Protocolos esenciales ")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Registro de ingreso, pediluvios, ropa exclusiva.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Frecuencias, productos, concentraciones.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Retiro diario, compostaje.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Análisis microbiológico, limpieza de tanques.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Trampas, fumigación, monitoreo.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Vacunación, vermifugación.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Manejo ambiental y disposición.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Desinfección de vehículos y jaulas.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Capacitaciones y simulacros.                  
    //- Fin Accordion
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center      
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Evaluación y monitoreo del cumplimiento")
            .col-12.ps-0              
              ul.lista-ul.mb-0
                li.d-flex                  
                  p.mb-0.mt-1 El Instituto Colombiano Agropecuario (ICA) evalúa el cumplimiento de bioseguridad mediante:
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Inspecciones programadas o sorpresivas.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Listas de verificación oficiales (Resolución 3651/2014).
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Ponderación de cumplimiento (%):
                li.d-flex.ps-4
                  p.mb-0.mt-1 <b>- Excelente:</b> ≥ 90 %
                li.d-flex.ps-4                  
                  p.mb-0.mt-1 <b>- Alto:</b> 80–89 %
                li.d-flex.ps-4                  
                  p.mb-0.mt-1 <b>- Medio:</b> 60–79 %
                li.d-flex.ps-4                  
                  p.mb-0.mt-1 <b>- Bajo:</b> < 60 % (requiere plan correctivo inmediato).
          .row(titulo="Consecuencias de incumplimiento")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Suspensión de la certificación biosegura
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Sanciones administrativas y cierre temporal.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Inmovilización o sacrificio sanitario de aves afectadas.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 Pérdida del estatus sanitario ICA.
          .row(titulo="Relación entre bioseguridad y bienestar animal")
              ul.lista-ul.mb-0
                li.d-flex                  
                  p.mb-0.mt-1 Ambos conceptos están estrechamente vinculados:
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 La bioseguridad protege la salud física y ambiental, mientras que el bienestar animal protege el estado físico y mental de las aves.
                li.d-flex
                  i.fas.fa-check-circle.me-2(style="color:#AD9721")
                  p.mb-0.mt-1 La metodología ICA 3-1669 V.1 integra indicadores de ambos (MBA, MBR y MBG), siendo el control sanitario parte esencial del bienestar.
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img9.png", alt="").img400.m-auto
    .row.justify-content-center.mb-4
      .col-lg-12
        .d-flex.align-items-center.bg-color-6.p-4.rounded-4          
          .flex-shrink-0.pe-4
            img(src='@/assets/curso/tema2/icono-lectura.svg', style="width: 80px")          
          .flex-grow-1
            h4.mb-2 Principales protocolos o procedimientos operativos estándar (POE) que deben cumplirse
            p.mb-0 Presenta los protocolos o procedimientos operativos estándar esenciales que deben cumplir en el manejo de gallinas ponedoras para garantizar prácticas, bioseguridad, bineestar animal y una producción eficiente.      
          .ps-4
            a.btn.btn-danger.d-flex.align-items-center.p-3(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
    p(data-aos="fade-left")  La bioseguridad en granjas avícolas de postura no es una acción puntual, sino un sistema continuo y verificable que protege la salud de las aves, la inocuidad de los huevos y la estabilidad del sistema productivo. Cumplir los protocolos establecidos por el ICA garantiza la certificación como “Granja Avícola Biosegura” (Resolución 3651 de 2014) y constituye el primer paso para obtener la certificación de Bienestar Animal (Resolución 16409 de 2024).
</template>

<script>
export default {
  name: 'Tema2',
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
