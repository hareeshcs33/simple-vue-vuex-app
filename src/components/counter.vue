<template>
    <div>
        <h1><span>counter</span> : {{counter}}</h1>
    </div>
</template>
<script>
export default {
    computed: {
        counter(){
            return this.$store.state.counter;
        }
    }
}
</script>