<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Nosotros', href: '#about' },
  { name: 'Características', href: '#features' },
  { name: 'Roles', href: '#roles' },
  { name: 'Vistas', href: '#screenshots' },
  { name: 'Precios', href: '#pricing' },
  { name: 'Contacto', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-[5%]"
    :class="isScrolled ? 'bg-primary-900/95 backdrop-blur-xl py-4' : 'bg-transparent py-6'"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 text-white no-underline group">
        <!-- <span class="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-400 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
          
        </span> -->
        <span class="font-display text-2xl font-bold hidden sm:block">LuxuryRentals</span>
      </a>

      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex items-center gap-8 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.name">
          <a 
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="text-white text-sm font-medium tracking-wide hover:text-accent-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-500 after:transition-all hover:after:w-full"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden text-white p-2"
      >
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-primary-900/95 backdrop-blur-xl border-t border-white/10 py-4"
      >
        <ul class="list-none m-0 p-0">
          <li v-for="link in navLinks" :key="link.name">
            <a 
              :href="link.href"
              @click.prevent="scrollToSection(link.href)"
              class="block px-6 py-3 text-white hover:text-accent-500 hover:bg-white/5 transition-all"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
