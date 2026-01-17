<script setup>
import { ref, onMounted } from 'vue'

import angularIcon from '../assets/img/angular-icon.png'
import netCoreIcon from '../assets/img/NET core.png'
import postgreIcon from '../assets/img/postgre.png'
import tailwindIcon from '../assets/img/tailwind-css-icon.png'
import jwtIcon from '../assets/img/Jwt--Streamline-Svg-Logos.png'
import googleMapsIcon from '../assets/img/mapas-de-google.png'
import cloudinaryIcon from '../assets/img/Cloudinary-Icon--Streamline-Svg-Logos.png'
import emailIcon from '../assets/img/email.png'

const isVisible = ref(false)
const sectionRef = ref(null)

const technologies = [
  { icon: angularIcon, name: 'Angular 19', description: 'Frontend moderno y reactivo' },
  { icon: netCoreIcon, name: '.NET 10', description: 'Backend robusto y escalable' },
  { icon: postgreIcon, name: 'PostgreSQL', description: 'Base de datos confiable' },
  { icon: tailwindIcon, name: 'Tailwind CSS', description: 'Estilos modernos y flexibles' },
  { icon: jwtIcon, name: 'JWT Auth', description: 'Autenticación segura' },
  { icon: googleMapsIcon, name: 'Google Maps', description: 'Geolocalización precisa' },
  { icon: cloudinaryIcon, name: 'Cloudinary', description: 'Gestión de imágenes' },
  { icon: emailIcon, name: 'Email Service', description: 'Notificaciones automáticas' },
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
  <section id="tech" ref="sectionRef" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-[5%]">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-badge">Stack Tecnológico</span>
        <h2 class="section-title">Tecnología de Vanguardia</h2>
        <p class="section-subtitle">
          Construido con las herramientas más modernas y robustas del mercado
        </p>
      </div>

      <!-- Tech Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div 
          v-for="(tech, index) in technologies" 
          :key="tech.name"
          class="text-center p-6 bg-gray-50 rounded-2xl transition-all duration-500 hover:bg-primary-900 group cursor-pointer hover:-translate-y-2"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${index * 75}ms` }"
        >
          <div class="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <img :src="tech.icon" :alt="tech.name" class="w-12 h-12" />
          </div>
          <h4 class="font-semibold text-primary-900 mb-1 group-hover:text-white transition-colors">
            {{ tech.name }}
          </h4>
          <p class="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
            {{ tech.description }}
          </p>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
        <div 
          class="text-center"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 600ms"
        >
          <div class="text-4xl font-display font-bold text-accent-500 mb-2">40+</div>
          <div class="text-gray-500">Endpoints API REST</div>
        </div>
        <div 
          class="text-center"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 700ms"
        >
          <div class="text-4xl font-display font-bold text-accent-500 mb-2">100%</div>
          <div class="text-gray-500">Código Documentado</div>
        </div>
        <div 
          class="text-center"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 800ms"
        >
          <div class="text-4xl font-display font-bold text-accent-500 mb-2">A+</div>
          <div class="text-gray-500">Seguridad SSL Labs</div>
        </div>
      </div>
    </div>
  </section>
</template>
