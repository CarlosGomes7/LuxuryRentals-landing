<script setup>
import { ref, onMounted } from 'vue'

import viberIcon from '../assets/img/viber.png'
import telefonoIcon from '../assets/img/telefono-inteligente.png'
import whatsappIcon from '../assets/img/whatsapp.png'
import correoIcon from '../assets/img/correo-electronico.png'


const isVisible = ref(false)
const sectionRef = ref(null)

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
  <section id="contact" ref="sectionRef" class="py-24 md:py-32 bg-accent-500 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full animate-spin" style="animation-duration: 30s;"></div>
      <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full animate-spin" style="animation-duration: 25s; animation-direction: reverse;"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 md:px-[5%] text-center">
      <div 
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        class="transition-all duration-700"
      >
        <h2 class="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">
          ¿Listo para Transformar su Negocio?
        </h2>
        <p class="text-xl text-accent-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Agende una demostración personalizada y descubra cómo LuxuryRentals 
          puede llevar su negocio de alquileres al siguiente nivel.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contacto@luxuryrentals.com" class="btn btn-dark text-lg px-10 py-5">
            Solicitar Demostración Gratuita
            <span>→</span>
          </a>
          <a href="tel:+51965458988" class="btn bg-white/70 text-primary-900 hover:bg-white/30 text-lg px-10 py-5 inline-flex items-center gap-2">
            <img :src="viberIcon" alt="Teléfono" class="w-5 h-5" /> Llamar Ahora
          </a>
        </div>

        <!-- Contact Info -->
        <div class="mt-16 grid sm:grid-cols-3 gap-8">
          <div 
            class="transition-all duration-500"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            style="transition-delay: 200ms"
          >
            <div class="mb-2 flex justify-center"><img :src="correoIcon" alt="Email" class="w-8 h-8" /></div>
            <div class="text-primary-900 font-medium">Email</div>
            <a href="mailto:contacto@luxuryrentals.com" class="text-primary-900/70 hover:text-primary-900 transition-colors">
              contacto@luxuryrentals.com
            </a>
          </div>
          <div 
            class="transition-all duration-500"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            style="transition-delay: 300ms"
          >
            <div class="mb-2 flex justify-center"><img :src="telefonoIcon" alt="Teléfono" class="w-8 h-8" /></div>
            <div class="text-primary-900 font-medium">Teléfono</div>
            <a href="tel:+51965458988" class="text-primary-900/70 hover:text-primary-900 transition-colors">
              +51 965 458 988
            </a>
          </div>
          <div 
            class="transition-all duration-500"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            style="transition-delay: 400ms"
          >
            <div class="mb-2 flex justify-center"><img :src="whatsappIcon" alt="WhatsApp" class="w-8 h-8" /></div>
            <div class="text-primary-900 font-medium">WhatsApp</div>
            <a href="https://wa.link/hcasgd" target="_blank" class="text-primary-900/70 hover:text-primary-900 transition-colors">
              Chat en vivo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
