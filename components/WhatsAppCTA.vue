<script lang="ts">
import { ref } from 'vue';
import 'animate.css';

export default {
  setup() {
    const isOpen = ref(false);
    const form = ref({
      message: "Olá! Tenho interesse nos seus serviços. Podemos conversar?",
      number: '5512996795027'
    });

    const openWhatsAppCard = () => {
      form.value.message = "Olá! Tenho interesse nos seus serviços. Podemos conversar?";
      isOpen.value = true;
    };

    const goToWhatsAppChat = () => {
      isOpen.value = false;

      const message = form.value.message.trim();

      if (message) {
        window.open(
          `https://api.whatsapp.com/send?phone=${form.value.number}&text=${encodeURIComponent(message)}`,
          '_blank'
        );
      }

      form.value.message = "Olá! Tenho interesse nos seus serviços. Podemos conversar?";
    };

    return {
      isOpen,
      form,
      openWhatsAppCard,
      goToWhatsAppChat
    };
  }
};
</script>

<template>
  <div class="fixed right-6 bottom-6">

    <transition enter-active-class="animate__animated animate__fadeInRight" mode="out-in">
      <!-- CARD TO SEND MESSAGE -->
      <div v-if="isOpen">
        <div class="w-96 max-w-[90vw] rounded-3xl overflow-hidden shadow-2xl shadow-[#075E54]/50 bg-[#E7E7E7]">

          <!-- Header and close button -->
          <div class="h-20 p-5 flex items-center justify-between gap-4 bg-[#25D366]">
            <div class="flex items-center gap-3">
              <Icon name="ic:baseline-whatsapp" style="color: white" size="35px" class="w-7 h-28" />
              <p class="text-lg font-medium text-white">WhatsApp</p>
            </div>
            <button @click="isOpen = false" class="hover:rotate-12 hover:scale-110" title="Fechar">
              <Icon name="material-symbols:close" style="color: white" size="35px" class="w-8 h-8" />
            </button>
          </div>


          <!-- Message input -->
          <div class="p-4 py-6">
            <input type="text" name="message" id="message" v-model="form.message" maxlength="140" title="Mensagem"
              class="w-full px-4 py-4 rounded-full text-sm border-none text-[#075E54]">
          </div>


          <!-- Send button -->
          <div class="w-full p-4 flex justify-end">
            <button @click="goToWhatsAppChat" id="send-whatsapp-message" title="Enviar mensagem"
              class="px-5 py-2 rounded-full flex items-center justify-between gap-1 bg-[#25D366] hover:scale-105 hover:shadow-lg hover:shadow-[#075E54]/30 transition-all duration-300">
              <p class="font-medium text-white">Abrir Conversa</p>
              <Icon name="iconoir:send" style="color: white" size="30px" />
            </button>
          </div>


        </div>
      </div>


      <!-- BUTTON TO OPEN SEND MESSAGE CARD -->
      <button v-else @click="openWhatsAppCard" id="open-whatsapp-card"
        class="w-16 h-16 rounded-full grid place-content-center hover:scale-105 transition-all duration-300 bg-[#25D366] shadow-xl shadow-[#075E54]/20"
        title="WhatsApp">
        <Icon name="ic:baseline-whatsapp" style="color: white" size="35px" class="w-8 h-8" />
      </button>
    </transition>


  </div>
</template>