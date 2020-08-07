<template>
    <div class="container">
        <h4>Home</h4>
        <counter></counter>
        <double-counter></double-counter>
        <counter-buttons></counter-buttons>
        <another-counter-buttons></another-counter-buttons>
    </div>
</template>
<script>
import Counter from './counter.vue';
import CounterButtons from './counter-buttons.vue';
import DoubleCounter from './double-counter.vue';
import AnotherCounterButtons from './another-counter-buttons.vue';

export default {
    components: {
        Counter,
        CounterButtons,
        DoubleCounter,
        AnotherCounterButtons,
    }
}
</script>