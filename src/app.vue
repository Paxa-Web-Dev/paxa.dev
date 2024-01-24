<script setup lang="ts">
import { ref } from "vue";
import Icon from "@/components/icon.vue";

const dialog = ref(null);

function openDialog() {
  dialog.value.showModal();
}
</script>
<template>
  <dialog ref="dialog">
    <p>Estamos em construção!</p>
    <form method="dialog">
      <button class="button-three" aria-label="close">Fechar</button>
    </form>
  </dialog>
  <div class="container">
    <div class="avatar">
      <a href="#" @click="openDialog">
        <img src="/img/pasha.png" alt="Paxá" />
      </a>
    </div>
    <div class="content">
      <h1>Paxá</h1>
      <h2>Desenvolvimento Web</h2>
      <p>
        <span>
          <a href="https://x.com/paxadev" target="_blank">
            <Icon name="twitter" />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/company/paxadev" target="_blank">
            <Icon name="linkedin" />
          </a>
        </span>
        <span>
          <a href="https://github.com/Paxa-Web-Dev" target="_blank">
            <Icon name="github" />
          </a>
        </span>
        <span>
          <a href="https://wa.me/5567998552020" target="_blank">
            <Icon name="whatsapp" />
          </a>
        </span>
        <span>
          <a href="mailto:paxa@paxa.dev">
            <Icon name="email" />
          </a>
        </span>
      </p>
    </div>
  </div>
</template>