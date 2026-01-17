<script setup>
import { ref } from 'vue'

const stats = [
  { number: '500+', label: 'Propiedades de Lujo' },
  { number: '$2.5M', label: 'Transacciones Mensuales' },
  { number: '98%', label: 'Satisfacción' },
]
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="background-image: url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920')"
    ></div>
    
    <!-- Overlay Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-[5%] py-32 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="animate-fade-in-up">
        <span class="inline-flex items-center gap-2 300/15 border border-accent-200 text-accent-200 px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-8">
          Plataforma Premium
        </span>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          El Futuro del
          <span class="gradient-text block">Alquiler de Lujo</span>
          está Aquí
        </h1>
        
        <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
          Plataforma integral para la gestión de alquileres de propiedades exclusivas. 
          Conectamos propietarios de inmuebles de lujo con huéspedes exigentes que buscan 
          experiencias únicas e inolvidables.
        </p>
        
        <div class="flex flex-wrap gap-4 mb-12">
          <a href="#features" class="btn btn-primary">
            Descubrir Más
            <span>→</span>
          </a>
          <a href="#contact" class="btn btn-outline">
            Solicitar Demo
          </a>
        </div>
        
        <!-- Stats -->
        <div class="flex flex-wrap gap-8 pt-8 border-t border-white/10">
          <div v-for="stat in stats" :key="stat.label" class="text-left">
            <div class="font-display text-4xl md:text-5xl font-bold text-accent-100 leading-none">
              {{ stat.number }}
            </div>
            <div class="text-accent-100 text-sm mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Hero Card -->
      <div class="hidden lg:block animate-fade-in-right animate-delay-300">
        <div class="glass rounded-3xl p-6 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" 
            alt="Villa de Lujo"
            class="w-full h-72 object-cover rounded-2xl mb-6"
          >
          <div class="mb-4">
            <h3 class="text-white text-xl font-display font-semibold mb-1">Villa Océano Azul</h3>
            <p class="text-accent-100 flex items-center gap-1">
              <img src="../assets/img/ubicaciones.png" alt="Ubicación" class="w-4 h-4" /> Miami Beach, Florida
            </p>
          </div>
          <div class="flex justify-between items-center pt-4 border-t border-white/10">
            <span class="font-display text-3xl text-accent-100">
              $1,250 
              <span class="text-sm text-accent-1000 font-body">/ noche</span>
            </span>
            <span class="text-accent-500 flex items-center gap-1">
              <img src="../assets/img/estrella.png" alt="Estrella" class="w-4 h-4" /> 
              <img src="../assets/img/estrella.png" alt="Estrella" class="w-4 h-4" />
              <img src="../assets/img/estrella.png" alt="Estrella" class="w-4 h-4" />
              <img src="../assets/img/estrella.png" alt="Estrella" class="w-4 h-4" />
              <img src="../assets/img/estrella.png" alt="Estrella" class="w-4 h-4" /> 4.9
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
