<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-danger" @click="decrement">decrement</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ])
    }
}
</script>