<template>
    <div class="footer_div">
      <h1 class="text-center">
        Связаться с нами:
      </h1>
  
      <div class="container_main">
        <div class="container_social">
          <h2 class="text">Наши социальные сети:</h2>
          <div class="social_links">
            <!-- Replace # with actual URLs -->
            <a href="#" class="social_link">
              <!-- Facebook SVG here -->
            </a>
            <a href="#" class="social_link">
              <!-- Instagram SVG here -->
            </a>
            <a href="#" class="social_link">
              <!-- Twitter SVG here -->
            </a>
          </div>
        </div>
  
        <div class="container_phone">
          <h2 class="text">Мобильные телефоны:</h2>
          <p class="text t_size">+7-960-459-34-45</p>
          <p class="text t_size">+7-960-459-34-45</p>
          <p class="text t_size">+7-960-459-34-45</p>
        </div>
  
        <div class="container_mail">
          <h2 class="text">Электронная почта:</h2>
          <p class="text t_size">info@yandex.ru</p>
          <p class="text t_size">info@yandex.ru</p>
          <p class="text t_size">info@yandex.ru</p>
        </div>
      </div>
  
      <div class="container_copyright">
        <p class="second_footer_text" style="margin-right: 1rem;">©Copyright no_company</p>
        <p class="second_footer_text">
          Остались вопросы? <a @click="sendDataToOpenModal" class="contact_us">Оставьте заявку</a> и с вами свяжутся наши специалисты!
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  const emits = defineEmits(['Show']);
  const isActive = ref(false);
  
  function sendDataToOpenModal() {
      isActive.value = true;
      emits('Show', isActive.value);
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
  .container_copyright{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--secondary_green);
    margin-top: 1rem;
    flex-wrap: wrap;
    padding-left: 10px;
    padding-right: 10px;
  }
  .footer_div {
      background-color: var(--primary_green);
  
  }
  .container_main {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
  }
  .container_social .social_links {
      display: flex;
      gap: 10px;
  }
  .social_link svg {
      width: 40px;
  }
  .text-center {
      text-align: center;
  }
  .text, .second_footer_text {
      color: white;
      font-family: 'Noto Sans', sans-serif;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
  }
  .t_size {
      font-size: 16px; 
  }
  .contact_us {
      color: var(--primary_accent);
      cursor: pointer;
      text-decoration: underline;
  }
  @media (min-width: 992px) {
      .container_main {
          padding: 0 40px;
      }
  }
  @media (max-width: 768px) {
      .container_main {
          flex-direction: column;
          align-items: center;
      }
      .social_link svg {
          width: 30px;  /* Smaller icons on mobile */
      }
      .t_size {
          font-size: 14px; /* Smaller font size on mobile */
      }
  }
  @media (max-width: 480px) {
      .container_social, .container_phone, .container_mail {
          width: 100%;
          text-align: center;
      }
      .social_links {
          justify-content: center;
      }
  }
  </style>