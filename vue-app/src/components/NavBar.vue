<template>
    <div class="card mb-10">
      <Menubar class="bg-white border-none mx-7 mt-4" :model="items">
        <template #start class="">
          <div class="font-bold text-4xl">
            Leaf<span class="text-blue-800">Mortar</span>
          </div>
        </template>
  
        <template #end
          ><Button label="Get started today" rounded class="bg-blue-800" />
        </template>
      </Menubar>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
  },
  {
    label: "About",
    icon: "pi pi-fw pi-user",
    url: "/about"
  },
  {
    label: "Contact",
    icon: "pi pi-fw pi-phone",
  },
]);
</script>
