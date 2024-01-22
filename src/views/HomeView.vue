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
            <Button label="Place Your Ad" severity="danger" raised size="small"/>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <Button icon="pi pi-moon" severity="secondary" text rounded aria-label="Dark Mode" />
        </div>
    </template>
  </Menubar>
  <main>
    
    
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
