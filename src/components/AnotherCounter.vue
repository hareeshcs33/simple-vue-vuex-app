<template>
<div>
    <button class="btn btn-success" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
    <button class="btn btn-danger" @click="asyncDecrement({by: 50, duration: 500})">decrement</button>
</div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
        ])
    }
}
</script>