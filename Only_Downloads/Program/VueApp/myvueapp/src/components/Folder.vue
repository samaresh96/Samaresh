<script setup>
defineProps({
    maker:{
        type:String,
        required:true
    }
})
    
</script>

<template>

<div>
 <p>{{maker}}</p>

</div>

</template>