<template>
    <div class="container">
        <h4>Home</h4>
        <counter></counter>
        <counter-buttons></counter-buttons>
    </div>
</template>
<script>
import Counter from './counter.vue';
import CounterButtons from './counter-buttons.vue';

export default {
    components: {
        Counter,
        CounterButtons,
    }
}
</script>