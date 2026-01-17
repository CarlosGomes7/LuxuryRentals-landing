<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Features from './components/Features.vue'
import Roles from './components/Roles.vue'
import Screenshots from './components/Screenshots.vue'
import TechStack from './components/TechStack.vue'
import Pricing from './components/Pricing.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen" :class="{ 'opacity-0': !isLoaded, 'opacity-100 transition-opacity duration-500': isLoaded }">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Features />
      <Roles />
      <Screenshots />
      <TechStack />
      <Pricing />
      <CTA />
    </main>
    <Footer />
  </div>
</template>
