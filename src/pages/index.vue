<script setup lang="ts">
import Icon from '@/components/icon.vue'
</script>
<template>
  <div class="centered">
    <div class="avatar">
      <router-link to="/posts">
        <img src="/img/pasha.webp" alt="Paxá" />
      </router-link>
    </div>
    <div class="content">
      <h1>Paxá</h1>
      <h2 class="glitch" data-text="Desenvolvimento Web">Desenvolvimento Web</h2>
      <div class="social">
        <div class="icon">
          <a href="httdivs://x.com/paxadev" target="_blank">
            <Icon name="twitter" />
          </a>
        </div>
        <div class="icon">
          <a href="https://www.linkedin.com/company/paxadev" target="_blank">
            <Icon name="linkedin" />
          </a>
        </div>
        <div class="icon">
          <a href="https://github.com/Paxa-Web-Dev" target="_blank">
            <Icon name="github" />
          </a>
        </div>
        <div class="icon">
          <a href="https://wa.me/5567998552020" target="_blank">
            <Icon name="whatsapp" />
          </a>
        </div>
        <div class="icon">
          <a href="mailto:paxa@paxa.dev">
            <Icon name="email" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: welcome
</route>