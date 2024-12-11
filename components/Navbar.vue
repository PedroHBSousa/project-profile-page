<script>
</script>

<template>
  <header>
    <nav class="top-0 border-solid border-gray-200 w-full border-b py-3 bg-white z-50  bg-inherit">
      <div class="container mx-auto ">
        <div class="w-full flex  flex-col lg:flex-row">
          <div class=" flex justify-between  lg:flex-row">
            <a href="http://localhost:3000/" class="flex items-center gap-2">
              <Icon name="fluent:window-console-20-filled" style="color: black" size="50px" />
              <span class="text-2xl font-bold text-gray-800 whitespace-nowrap">Pedro<span
                  class="font-thin">Sousa</span></span>
            </a>
            <button data-collapse-toggle="navbar-default-example" type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default-example" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="hidden w-full lg:flex lg:pl-11 " id="navbar-default-example">
            <ul class="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
              <MyNuxtLink to="/home">Home</MyNuxtLink>
              <MyNuxtLink to="/sobremim">Sobre mim</MyNuxtLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>