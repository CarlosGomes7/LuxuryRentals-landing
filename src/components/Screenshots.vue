<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)
const activeTab = ref('Público')

const tabs = ['Público', 'Usuario', 'Agente', 'Admin']

const screenshots = [
  {
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
    title: 'Página de Inicio',
    description: 'Hero impactante, propiedades destacadas, buscador intuitivo y destinos populares',
    category: 'Público'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    title: 'Listado de Propiedades',
    description: 'Grid responsive con filtros laterales, ordenamiento y paginación elegante',
    category: 'Público'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Detalle de Propiedad',
    description: 'Galería de imágenes, amenidades, mapa interactivo y formulario de reserva',
    category: 'Público'
  },
  {
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800',
    title: 'Panel de Administración',
    description: 'Dashboard con métricas, gestión de propiedades, usuarios y reservas',
    category: 'Admin'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    title: 'Mis Reservas',
    description: 'Historial completo de reservas con estados y acciones disponibles',
    category: 'Usuario'
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
    title: 'Panel de Agente',
    description: 'Gestión de propiedades propias y reservas recibidas',
    category: 'Agente'
  },
]

const filteredScreenshots = ref(screenshots)

const filterByTab = (tab) => {
  activeTab.value = tab
  if (tab === 'Público') {
    filteredScreenshots.value = screenshots.filter(s => s.category === 'Público')
  } else {
    filteredScreenshots.value = screenshots.filter(s => s.category === tab || s.category === 'Público')
  }
}

onMounted(() => {
  filterByTab('Público')
  
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
  <section id="screenshots" ref="sectionRef" class="py-24 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-[5%]">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-badge">Capturas de Pantalla</span>
        <h2 class="section-title">Interfaz Elegante y Funcional</h2>
        <p class="section-subtitle">
          Diseño moderno que refleja la exclusividad de las propiedades que gestiona
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="filterByTab(tab)"
          class="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
          :class="activeTab === tab 
            ? 'bg-primary-900 text-white shadow-lg' 
            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-primary-900 hover:text-primary-900'"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Screenshots Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <TransitionGroup
          name="screenshot"
          tag="div"
          class="contents"
        >
          <div 
            v-for="(screenshot, index) in filteredScreenshots" 
            :key="screenshot.title"
            class="card overflow-hidden group"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="screenshot.image" 
                :alt="screenshot.title"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-display font-semibold text-primary-900 mb-2">{{ screenshot.title }}</h4>
              <p class="text-gray-500">{{ screenshot.description }}</p>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.screenshot-enter-active,
.screenshot-leave-active {
  transition: all 0.4s ease;
}

.screenshot-enter-from,
.screenshot-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
