<template>
    <div class="container">
        <h4>Home</h4>
        <hr/>
        <result></result>
        <AnotherResult></AnotherResult>
        <hr/>
        <counter></counter>
        <AnotherCounter></AnotherCounter>
    </div>
</template>
<script>
import Counter from './counter.vue';
import Result from './result.vue';
import AnotherResult from './AnotherResult.vue';
import AnotherCounter from './AnotherCounter.vue';

export default {
    components: {
        Counter,
        Result,
        AnotherResult,
        AnotherCounter,
    }
}
</script>