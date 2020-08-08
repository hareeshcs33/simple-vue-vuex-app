<template>
<div>
    <button class="btn btn-success" @click="increment(100)">Increment</button>
    <button class="btn btn-danger" @click="decrement(50)">decrement</button>
</div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ])
    }
}
</script>