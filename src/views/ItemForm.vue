<template>
    <div class="flex flex-col">
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="productName" v-model="item.productName" aria-describedby="productName-help" />
            <small id="productName-help" class="text-red-600">Enter your username to reset your password.</small>
        </div>
    </div>
</template>

<script setup>

const item = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>