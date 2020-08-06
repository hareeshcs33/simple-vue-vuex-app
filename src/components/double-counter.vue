<template>
    <div>
        <h1>using getters :=> <span>double-counter</span> : {{doubleCounter}}</h1>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    }
}
</script>
