<template>
  <Menubar :model="items" class="rounded-none">
    <template #start class="">
      <div class="flex ml-3 mr-5 gap-x-3 items-center">
        <i class="pi pi-shopping-bag text-lg text-red-500"></i>
        <h1 class="text-gray-700 dark:text-white text-lg font-semibold">Ariazon</h1>
      </div>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
        <a class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
            <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary-500 dark:text-primary-400-500 dark:text-primary-400', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
    </template>
    <template #end>
        <div class="flex items-center gap-2">
            <Button label="Place Your Ad" raised size="small"/>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" class="w-10 h-10" />
            <Button icon="pi pi-moon" severity="secondary" text rounded aria-label="Dark Mode" />
        </div>
    </template>
  </Menubar>
  <main>
    <section id="banner" class="w-full">
      <div class="flex flex-col items-center justify-center container mx-auto text-center max-w-4xl py-5 px-3 h-96">
        <h1 class="text-white text-2xl font-semibold drop-shadow-md mb-3">The best place to buy your house, sell your car or find a job in All Provinces</h1>
        <div class="flex flex-col w-full rounded-md backdrop-blur-sm bg-gray-900/30 p-3">
          <div id="searchSelection" class="flex flex-row font-semibold text-sm gap-x-2 mb-2">
            <Button label="All" rounded size="small" />
            <Button label="Cars" rounded text class="text-white" size="small" />
            <Button label="Gadgets" rounded text class="text-white" size="small" />
            <Button label="Appliances" rounded text class="text-white" size="small" />
          </div>
          <div id="searchForm" class="flex flex-col md:flex-row w-full gap-3">
            <div class="rounded w-full overflow-hidden">
              <InputGroup class="border-0 rounded-md">
              <InputText placeholder="Searching for anything" class="p-5 py-3 grow !border-0 focus:ring-0" />
              <!-- <Button icon="pi pi-times" class="bg-white !text-gray-700 border-0 hover:bg-white border-gray-200 hover:border-0 border-y-[1px]" aria-label="Clear Search" /> -->
              <InputGroupAddon class="p-5 py-3">
                  <i class="pi pi-search mr-2"></i>
              </InputGroupAddon>
            </InputGroup>
            </div>
            <Button label="Search" class="p-5 py-3" />
          </div>
        </div>
      </div>
    </section>  
      
  </main>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
      label: 'Provinces',
      icon: 'pi pi-map-marker',
      items: [
          {
              label: 'Herat',
              url: '/herat',
              target: '_self'
          },
          {
              label: 'Kabul',
          },
          {
              label: 'Kandahar',
          },
        ]
    },
    {
        label: 'Notifications',
        icon: 'pi pi-bell',
        // badge: 3
    },
    
    // {
    //     label: 'Projects',
    //     icon: 'pi pi-search',
    //     items: [
    //         {
    //             label: 'Core',
    //             icon: 'pi pi-bolt',
    //             shortcut: '⌘+S'
    //         },
    //         {
    //             label: 'Blocks',
    //             icon: 'pi pi-server',
    //             shortcut: '⌘+B'
    //         },
    //         {
    //             label: 'UI Kit',
    //             icon: 'pi pi-pencil',
    //             shortcut: '⌘+U'
    //         },
    //         {
    //             separator: true
    //         },
    //         {
    //             label: 'Templates',
    //             icon: 'pi pi-palette',
    //             items: [
    //                 {
    //                     label: 'Apollo',
    //                     icon: 'pi pi-palette',
    //                     badge: 2
    //                 },
    //                 {
    //                     label: 'Ultima',
    //                     icon: 'pi pi-palette',
    //                     badge: 3
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        label: 'Favorites',
        icon: 'pi pi-heart',
        // badge: 3
    },
    {
        label: 'Chats',
        icon: 'pi pi-comments',
        badge: 3
    }
]);
</script>

<style scoped>
#banner {
  background: url('/img/girl-buying.jpg');
  background-position: center !important;
  background-size: cover;
}
</style>
