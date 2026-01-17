<script setup>
import { ref, onMounted } from 'vue'

import homemainIcon from '../assets/img/homemain.png'
import calendarioIcon from '../assets/img/calendario.png'
import equipoIcon from '../assets/img/equipo.png'
import favoritoIcon from '../assets/img/favorito.png'
import busquedaCasaIcon from '../assets/img/busqueda-de-casa.png'
import analiticaIcon from '../assets/img/analitica.png'

const isVisible = ref(false)
const sectionRef = ref(null)

const features = [
  {
    icon: homemainIcon,
    title: 'Gestión de Propiedades',
    description: 'Administre su portafolio completo de propiedades desde un único panel. Galería de imágenes ilimitadas, descripciones detalladas, amenidades personalizables y geolocalización con Google Maps.'
  },
  {
    icon: calendarioIcon,
    title: 'Sistema de Reservas',
    description: 'Motor de reservas en tiempo real con calendario de disponibilidad, confirmación automática, gestión de estados y notificaciones instantáneas para propietarios y huéspedes.'
  },
  {
    icon: equipoIcon,
    title: 'Multi-Rol Inteligente',
    description: 'Sistema de roles granular con permisos específicos para Usuarios, Agentes y Administradores. Cada rol con su panel personalizado y acceso controlado a funcionalidades.'
  },
  {
    icon: favoritoIcon,
    title: 'Lista de Favoritos',
    description: 'Los usuarios pueden guardar propiedades favoritas para acceso rápido, aumentando el engagement y facilitando la conversión de visitantes a huéspedes recurrentes.'
  },
  {
    icon: busquedaCasaIcon,
    title: 'Búsqueda Avanzada',
    description: 'Filtros potentes por ubicación, precio, capacidad, amenidades y más. Los huéspedes encuentran su propiedad ideal en segundos con resultados precisos y relevantes.'
  },
  {
    icon: analiticaIcon,
    title: 'Dashboard Analítico',
    description: 'Métricas en tiempo real, estadísticas de reservas, ingresos proyectados y reportes detallados para tomar decisiones informadas y maximizar el retorno de inversión.'
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section id="features" ref="sectionRef" class="py-24 md:py-32 bg-primary-900 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-[5%]">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-badge bg-accent-500/20 text-accent-500">Características</span>
        <h2 class="section-title text-white">Todo lo que Necesita para Triunfar</h2>
        <p class="section-subtitle text-gray-400">
          Funcionalidades premium diseñadas para maximizar sus ingresos y simplificar la gestión
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title"
          class="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-accent-300 group"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-accent-300 to-accent-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <img :src="feature.icon" :alt="feature.title" class="w-8 h-8" />
          </div>
          <h3 class="text-white text-xl font-display font-semibold mb-4">{{ feature.title }}</h3>
          <p class="text-gray-200 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
