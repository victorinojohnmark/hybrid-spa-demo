import axios from 'axios';
<template>
    <form action="#" @submit.prevent="handleSubmitItem">
        <div class="flex flex-col gap-y-3">
            <div class="flex flex-col gap-2">
                <label for="name">Item Name</label>
                <InputText id="name" v-model="item.name" aria-describedby="name-help" />
                <!-- <small id="name-help" class="text-red-600">Enter your username to reset your password.</small> -->
            </div>

            <div class="flex flex-col gap-2">
                <label for="price">Price</label>
                <InputNumber v-model="item.price" inputId="price" mode="currency" currency="AFN" locale="en-US" :minFractionDigits="2" :maxFractionDigits="2" />
                <!-- <small id="price-help" class="text-red-600">Enter your username to reset your password.</small> -->
            </div>

            <div class="flex flex-col gap-2">
                <label for="quantity">Quantity</label>
                <InputNumber v-model="item.quantity" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="1">
                    <template #incrementbuttonicon>
                        <span class="pi pi-plus" />
                    </template>
                    <template #decrementbuttonicon>
                        <span class="pi pi-minus" />
                    </template>
                </InputNumber>
                <!-- <small id="quantity-help" class="text-red-600">Enter your username to reset your password.</small> -->
            </div>

            <div class="flex flex-col gap-2">
                <label for="description">Description</label>
                <Textarea v-model="item.description" rows="5" cols="30" />
                <!-- <small id="description-help" class="text-red-600">Enter your username to reset your password.</small> -->
            </div>

            

            <div class="flex flex-col gap-2">
                <label for="quantity">Image File</label>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                <input @change="handleFileChange" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="image_file" type="file">
            </div>

            <Button label="Submit" type="submit" />
        </div>
    </form>
</template>

<script setup>
import axios from 'axios'

const { item } = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const emits = defineEmits(['itemAdded'])

const handleFileChange = async (e) => {
    console.log(e.target.files)
    item.image = e.target.files[0]
}


const proccessData = () => {
    const formData = new FormData()

    formData.append('name', item.name)
    formData.append('price', item.price)
    formData.append('quantity', item.quantity)
    formData.append('image', item.image)
    formData.append('description', item.description)

    return formData
}

const handleSubmitItem = async() => {
    console.log(item)

    try {
        const data = proccessData()
        const res = await axios.post('/api/products', data, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })

        if(res) {
            emits('itemAdded', res.data)
        }

        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


</script>