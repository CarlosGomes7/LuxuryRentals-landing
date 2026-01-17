<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

const plans = [
  {
    name: 'Starter',
    subtitle: 'Ideal para comenzar',
    price: '2,500',
    featured: false,
    features: [
      'Código fuente completo',
      'Hasta 50 propiedades',
      '3 usuarios administradores',
      'Soporte por email (30 días)',
      'Documentación técnica',
      '1 hora de capacitación',
    ]
  },
  {
    name: 'Professional',
    subtitle: 'Más popular',
    price: '4,500',
    featured: true,
    features: [
      'Todo lo de Starter +',
      'Propiedades ilimitadas',
      'Usuarios ilimitados',
      'Soporte prioritario (90 días)',
      'Personalización de marca',
      '5 horas de capacitación',
      'Instalación en servidor',
    ]
  },
  {
    name: 'Enterprise',
    subtitle: 'Solución completa',
    price: '8,000',
    featured: false,
    features: [
      'Todo lo de Professional +',
      'Desarrollo de features custom',
      'Integración con sistemas externos',
      'Soporte anual incluido',
      'SLA garantizado',
      'Capacitación ilimitada',
      'Consultoría de negocio',
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
  <section id="pricing" ref="sectionRef" class="py-24 md:py-32 bg-primary-900 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-[5%]">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-badge bg-accent-500/20 text-accent-500">Inversión</span>
        <h2 class="section-title text-white">Planes a su Medida</h2>
        <p class="section-subtitle text-gray-400">
          Opciones flexibles que se adaptan a las necesidades de su negocio
        </p>
      </div>

      <!-- Pricing Grid -->
      <div class="grid lg:grid-cols-3 gap-8 items-center">
        <div 
          v-for="(plan, index) in plans" 
          :key="plan.name"
          class="rounded-3xl p-8 text-center transition-all duration-500"
          :class="[
            plan.featured 
              ? 'bg-white shadow-2xl scale-105 lg:scale-110' 
              : 'glass',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Plan Name -->
          <h3 
            class="text-2xl font-display font-semibold mb-1"
            :class="plan.featured ? 'text-primary-900' : 'text-white'"
          >
            {{ plan.name }}
          </h3>
          <p :class="plan.featured ? 'text-gray-500' : 'text-gray-400'">
            {{ plan.subtitle }}
          </p>

          <!-- Price -->
          <div 
            class="my-8 font-display"
            :class="plan.featured ? 'text-primary-900' : 'text-accent-500'"
          >
            <!-- <span class="text-5xl font-bold">${{ plan.price }}</span> -->
            <!-- <span class="text-lg ml-1" :class="plan.featured ? 'text-gray-500' : 'text-gray-400'">USD</span> -->
          </div>

          <!-- Features -->
          <ul class="text-left space-y-4 mb-8">
            <li 
              v-for="feature in plan.features" 
              :key="feature"
              class="flex items-center gap-3"
              :class="plan.featured ? 'text-gray-700' : 'text-gray-300'"
            >
              <span class="text-accent-500 font-bold">✓</span>
              {{ feature }}
            </li>
          </ul>

          <!-- CTA Button -->
          <a 
            href="#contact" 
            class="btn w-full"
            :class="plan.featured ? 'btn-primary' : 'btn-outline'"
          >
            {{ plan.name === 'Enterprise' ? 'Contactar' : 'Seleccionar' }}
          </a>
        </div>
      </div>

      <!-- Guarantee -->
      <div 
        class="mt-16 text-center"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        style="transition-delay: 500ms"
      >
        <div class="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
          <span class="text-2xl">🛡️</span>
          <span class="text-white font-medium">Garantía de satisfacción de 30 días o devolución completa</span>
        </div>
      </div>
    </div>
  </section>
</template>
