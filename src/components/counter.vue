<template>
<div>
    <button class="btn btn-success" @click="increment">Increment</button>
    <button class="btn btn-danger" @click="decrement">decrement</button>
</div>
</template>
<script>
export default {
    methods: {
        increment(){
            this.$store.state.counter++;
        },
        decrement(){
            this.$store.state.counter--;
        }
    }
}
</script>