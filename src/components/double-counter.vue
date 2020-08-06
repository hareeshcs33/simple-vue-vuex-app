<template>
    <div>
        <h1>using getters :=> <span>double-counter</span> : {{counter}}</h1>
    </div>
</template>
<script>
export default {
    computed: {
        counter(){
            return this.$store.getters.doubleCounter;
        }
    }
}
</script>
