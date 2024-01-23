<template>
  <header class="bg-gray-50 w-full border-b border-gray-100 mb-5">
    <div class="w-full md:border-b md:border-gray-100">
      <Menubar :model="items" class="rounded-none container mx-auto border-0">
        <template #start class="">
          <div class="flex items-center">
            <!-- <i class="pi pi-shopping-bag text-lg text-red-500"></i> -->
            <img src="/img/ariazon_logo.png" class=" w-32" alt="">
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
                <Button label="Place Your Ad" severity="danger" size="small"/>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" class="w-10 h-10" />
                <Button icon="pi pi-moon" severity="secondary" text rounded aria-label="Dark Mode" />
            </div>
        </template>
      </Menubar>
    </div>

    <MegaMenu :model="megaMenuItems" class="hidden md:block container mx-auto border-0 rounded-none" />
  </header>
  <main class="px-3">
    <section id="banner" class="container mx-auto rounded-md mb-5">
      <div class="flex flex-col items-center justify-center container mx-auto text-center max-w-4xl py-5 px-3 h-72">
        <h1 class="text-white text-2xl font-semibold drop-shadow-md mb-3">The best place to buy your house, sell your car or find the best gadgets.</h1>
        <div class="flex flex-col w-full rounded-md backdrop-blur-sm bg-gray-900/30 p-3">
          <div id="searchSelection" class="flex flex-row font-semibold text-sm gap-x-2 mb-2">
            <Button label="All" rounded severity="danger" class="!py-1" size="small" />
            <Button label="Cars" rounded severity="danger" text class="text-white !py-1" size="small" />
            <Button label="Gadgets" rounded severity="danger" text class="text-white !py-1" size="small" />
            <Button label="Appliances" rounded severity="danger" text class="text-white !py-1" size="small" />
          </div>
          <div id="searchForm" class="flex flex-col md:flex-row w-full gap-3">
            <div class="rounded w-full overflow-hidden">
              <InputGroup class="border-0 rounded-md">
              <InputText placeholder="Searching for anything" class="p-5 py-3 grow !border-0 focus:ring-0" />
              <!-- <Button icon="pi pi-times" class="bg-white !text-gray-700 border-0 hover:bg-white border-gray-200 hover:border-0 border-y-[1px]" aria-label="Clear Search" /> -->
              <InputGroupAddon class="p-5 py-3 border-0 border-l border-gray-100">
                  <i class="pi pi-search mr-2"></i>
              </InputGroupAddon>
            </InputGroup>
            </div>
            <Button label="Search" severity="danger" class="p-5 py-3" />
          </div>
        </div>
      </div>
    </section> 
    
    <section id="categories" class="container mx-auto mb-5">
        <div class="flex flex-wrap items-center justify-center text-center w-full md:w-2/3 xl:w-full mx-auto">
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-car text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Cars</p>
                </div>
            </a>

            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-home text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Properties For Sale</p>
                </div>
            </a>
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-building text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Properties for Rent</p>
                </div>
            </a>
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-box text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Products</p>
                </div>
            </a>
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-car text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Trending</p>
                </div>
            </a>
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-verified text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Services</p>
                </div>
            </a>
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-tablet text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Gadgets</p>
                </div>
            </a>
            <a href="#" class="group flex justify-center items-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 p-3 aspect-square rounded-md hover:shadow-md shadow">
                <div class="text-center">
                    <i class="pi pi-shopping-bag text-red-600 text-2xl mb-3"></i>
                    <p class="text-gray-950 text-sm font-semibold group-hover:underline group-hover:decoration-red-600">Clothes</p>
                </div>
            </a>

        </div>
    </section>

    <section id="marketingBanners" class="container mx-auto mb-5">
        <div class="flex flex-col md:flex-row gap-x-3">
            <img src="/img/property-marketing.jpg" class="w-full md:w-1/2 rounded-md mb-3" alt="">
            <img src="/img/car-marketing.jpg" class="w-full md:w-1/2 rounded-md mb-3" alt="">
        </div>
    </section>

    <section id="items" class="container mx-auto mb-5">
        <div id="popularItems">
            <div class="flex flex-row justify-between">
                <strong class="text-gray-800 text-xl">Items for Sale</strong>
                <i class="pi pi-arrow-right text-gray-700"></i>
            </div>

            <div class="flex flex-wrap flex-row overflow-hidden pb-5 mb-5">
                <div class="item-card w-1/2 md:w-1/4 lg:w-1/5 p-3 px-2">
                    <a href="#" class="">
                        <div class="rounded p-3 shadow-md hover:shadow-lg">
                            <img src="/img/kitchen.jpg" alt="" class="rounded-md aspect-video object-cover object-center">
                            <strong class="text-red-600 leading-8">AFN 135,000</strong>
                            <p class="text-gray-900 text-sm font-semibold">Studio • 1 Bath</p>
                            <p class="text-sm">Kabul</p>
                        </div>
                    </a>
                </div>

                <div class="item-card w-1/2 md:w-1/4 lg:w-1/5 p-3 px-2">
                    <a href="#" class="">
                        <div class="rounded p-3 shadow-md hover:shadow-lg">
                            <img src="/img/bike.jpeg" alt="" class="rounded-md aspect-video object-cover object-center">
                            <strong class="text-red-600 leading-8">AFN 5,000</strong>
                            <p class="text-gray-900 text-sm font-semibold">JAVA Hybrid Bike</p>
                            <p class="text-sm">Herat</p>
                        </div>
                    </a>
                </div>

                <div class="item-card w-1/2 md:w-1/4 lg:w-1/5 p-3 px-2">
                    <a href="#" class="">
                        <div class="rounded p-3 shadow-md hover:shadow-lg">
                            <img src="/img/phone.jpeg" alt="" class="rounded-md aspect-video object-cover object-center">
                            <strong class="text-red-600 leading-8">AFN 1,000</strong>
                            <p class="text-gray-900 text-sm font-semibold">Samsung S22 Ultra</p>
                            <p class="text-sm">Herat</p>
                        </div>
                    </a>
                </div>

                <div class="item-card w-1/2 md:w-1/4 lg:w-1/5 p-3 px-2">
                    <a href="#" class="">
                        <div class="rounded p-3 shadow-md hover:shadow-lg">
                            <img src="/img/pickup-truck.jpeg" alt="" class="rounded-md aspect-video object-cover object-center">
                            <strong class="text-red-600 leading-8">AFN 250,000</strong>
                            <p class="text-gray-900 text-sm font-semibold">Toyota Hilux 2023</p>
                            <p class="text-sm">Kandahar</p>
                        </div>
                    </a>
                </div>

                <div class="item-card w-1/2 md:w-1/4 lg:w-1/5 p-3 px-2">
                    <a href="#" class="">
                        <div class="rounded p-3 shadow-md hover:shadow-lg">
                            <img src="/img/lamp.jpeg" alt="" class="rounded-md aspect-video object-cover object-center">
                            <strong class="text-red-600 leading-8">AFN 4000</strong>
                            <p class="text-gray-900 text-sm font-semibold">Lamp Shade</p>
                            <p class="text-sm">Kandahar</p>
                        </div>
                    </a>
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
      icon: 'pi pi-map-marker text-gray-700',
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
        icon: 'pi pi-bell text-gray-700',
        // badge: 3
    },
    {
        label: 'Favorites',
        icon: 'pi pi-heart text-red-600',
        // badge: 3
    },
    {
        label: 'Chats',
        icon: 'pi pi-comments text-gray-700',
    }
]);

const megaMenuItems = ref([
    {
        label: 'Furniture',
        items: [
            [
                {
                    label: 'Living Room',
                    items: [{ label: 'Accessories', url: '#' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                }
            ],
            [
                {
                    label: 'Kitchen',
                    items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                },
                {
                    label: 'Bathroom',
                    items: [{ label: 'Accessories' }]
                }
            ],
            [
                {
                    label: 'Bedroom',
                    items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                }
            ],
            [
                {
                    label: 'Office',
                    items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                }
            ]
        ]
    },
    {
        label: 'Electronics',
        items: [
            [
                {
                    label: 'Computer',
                    items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                }
            ],
            [
                {
                    label: 'Home Theather',
                    items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                }
            ],
            [
                {
                    label: 'Gaming',
                    items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                }
            ],
            [
                {
                    label: 'Appliances',
                    items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                }
            ]
        ]
    },
    {
        label: 'Sports',
        items: [
            [
                {
                    label: 'Football',
                    items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                }
            ],
            [
                {
                    label: 'Running',
                    items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                }
            ],
            [
                {
                    label: 'Swimming',
                    items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                }
            ],
            [
                {
                    label: 'Tennis',
                    items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                }
            ]
        ]
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
