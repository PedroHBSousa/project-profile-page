<script>
</script>
<template>
  <div class="max-w-screen-xl mx-auto px-5 ">
    <Hero />
    <section>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div>
          <h2 class="text-3xl font-bold text-gray-800">Sobre mim</h2>
          <p class="mt-4 text-lg text-gray-600">
            Desenvolvedor com experiência em [tecnologias principais], especializado em [áreas de expertise]."
            "Minha missão é criar aplicações funcionais, escaláveis e elegantes."
            "Com [X] anos de experiência, ajudo empresas e indivíduos a transformar ideias em realidade.
          </p>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-800">Contato</h2>
          <p class="mt-4 text-lg text-gray-600">
            Estou disponível para freelas e empregos em tempo integral. Se você deseja entrar em contato comigo, envie
            uma mensagem para [email] ou preencha o formulário abaixo.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="mt-24">
        <h2 class="text-center text-slate-500">Trabalho com as tecnologias</h2>
        <div data-aos="zoom-in" class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
          <Icon class="size-8 md:size-16" name="simple-icons:react" />
          <Icon class="size-8 md:size-16" name="flowbite:vue-solid" />
          <Icon class="size-8 md:size-16" name="simple-icons:laravel" />
          <Icon class="size-8 md:size-16" name="simple-icons:tailwindcss" />
        </div>
      </div>
    </section>
  </div>
</template>