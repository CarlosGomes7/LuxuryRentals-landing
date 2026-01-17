<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

import protegerIcon from '../assets/img/proteger.png'
import responsiveIcon from '../assets/img/diseno-de-respuesta.png'
import rapidoIcon from '../assets/img/rapido.png'
import tierraIcon from '../assets/img/tierra.png'

const sectionRef = ref(null)
const isVisible = ref(false)

const features = [
  { icon: protegerIcon, title: 'Seguridad Bancaria', desc: 'Encriptación de datos y pagos seguros' },
  { icon: responsiveIcon, title: '100% Responsive', desc: 'Perfecto en cualquier dispositivo' },
  { icon: rapidoIcon, title: 'Ultra Rápido', desc: 'Carga en menos de 2 segundos' },
  { icon: tierraIcon, title: 'Multi-idioma', desc: 'Preparado para mercados globales' },
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
    { threshold: 0.2 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section id="about" ref="sectionRef" class="py-24 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-[5%]">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image -->
        <div 
          class="relative transition-all duration-1000"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
              alt="Interior de Lujo"
              class="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            >
            <!-- Decorative Border -->
            <div class="absolute -top-4 -left-4 right-4 bottom-4 border-2 border-accent-500 rounded-3xl -z-10"></div>
          </div>
          
          <!-- Floating Card -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
            <div class="flex items-center gap-4">
              <!-- <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center text-2xl">
                🏆
              </div> -->
              <div>
                <div class="font-display text-2xl font-bold text-primary-900">+10 años</div>
                <div class="text-gray-500 text-sm">de experiencia</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div 
          class="transition-all duration-1000 delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <span class="section-badge">Sobre Nosotros</span>
          
          <h2 class="section-title">
            Redefiniendo el
            <span class="gradient-text">Alquiler Premium</span>
          </h2>
          
          <p class="text-gray-600 text-lg mb-6 leading-relaxed">
            LuxuryRentals es una plataforma tecnológica de vanguardia diseñada específicamente 
            para el mercado de alquileres de alta gama. Nuestra solución combina elegancia, 
            funcionalidad y seguridad para ofrecer una experiencia excepcional tanto a 
            propietarios como a huéspedes.
          </p>
          
          <p class="text-gray-600 text-lg mb-10 leading-relaxed">
            Desarrollada con las tecnologías más modernas, nuestra plataforma garantiza 
            rendimiento, escalabilidad y una interfaz intuitiva que refleja el nivel de 
            exclusividad que sus clientes esperan.
          </p>
          
          <!-- Features Grid -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div 
              v-for="(feature, index) in features" 
              :key="feature.title"
              class="flex items-start gap-4 transition-all duration-500"
              :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
              :style="{ transitionDelay: `${300 + index * 100}ms` }"
            >
              <div class="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img :src="feature.icon" :alt="feature.title" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-semibold text-primary-900 mb-1">{{ feature.title }}</h4>
                <p class="text-gray-500 text-sm">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
