<script setup>
import { ref, onMounted } from 'vue'

import usuarioIcon from '../assets/img/usuario.png'
import agenteIcon from '../assets/img/agente-inmobiliario.png'
import apoyoIcon from '../assets/img/apoyo.png'

const isVisible = ref(false)
const sectionRef = ref(null)

const roles = [
  {
    icon: usuarioIcon,
    title: 'Usuario / Huésped',
    subtitle: 'El viajero que busca experiencias únicas en propiedades exclusivas',
    features: [
      'Explorar catálogo completo de propiedades',
      'Búsqueda con filtros avanzados',
      'Ver detalles, imágenes y ubicación',
      'Crear y gestionar reservas',
      'Guardar propiedades favoritas',
      'Gestionar perfil personal',
      'Historial completo de reservas',
      'Solicitudes especiales en reservas',
    ]
  },
  {
    icon: agenteIcon,
    title: 'Agente / Propietario',
    subtitle: 'El gestor de propiedades que maximiza sus ingresos',
    features: [
      'Todo lo que puede hacer un Usuario',
      'Panel exclusivo de Agente',
      'Crear y publicar propiedades',
      'Subir galerías de imágenes',
      'Gestionar amenidades',
      'Ver reservas de sus propiedades',
      'Confirmar o rechazar reservas',
      'Dashboard con estadísticas propias',
    ]
  },
  {
    icon: apoyoIcon,
    title: 'Administrador',
    subtitle: 'Control total sobre la plataforma y todos sus usuarios',
    features: [
      'Acceso completo al sistema',
      'Panel de administración avanzado',
      'Gestionar TODAS las propiedades',
      'Administrar usuarios y roles',
      'Crear nuevos agentes',
      'Gestionar catálogo de amenidades',
      'Ver y gestionar todas las reservas',
      'Dashboard con métricas globales',
    ]
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
  <section id="roles" ref="sectionRef" class="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-[5%]">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-badge">Sistema de Roles</span>
        <h2 class="section-title">Experiencia Personalizada para Cada Usuario</h2>
        <p class="section-subtitle">
          Tres roles distintos con permisos y funcionalidades diseñadas para cada tipo de usuario
        </p>
      </div>

      <!-- Roles Grid -->
      <div class="grid lg:grid-cols-3 gap-8">
        <div 
          v-for="(role, index) in roles" 
          :key="role.title"
          class="card card-hover p-8 relative overflow-hidden"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Top Accent Bar -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-400"></div>
          
          <!-- Icon -->
          <div class="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <img :src="role.icon" :alt="role.title" class="w-14 h-14" />
          </div>
          
          <!-- Title -->
          <h3 class="text-2xl text-primary-900 mb-2">{{ role.title }}</h3>
          <p class="text-gray-500 mb-8">{{ role.subtitle }}</p>
          
          <!-- Features List -->
          <ul class="space-y-3">
            <li 
              v-for="feature in role.features" 
              :key="feature"
              class="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0 text-gray-700"
            >
              <span class="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center text-xs font-bold text-primary-900 flex-shrink-0">
                ✓
              </span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
