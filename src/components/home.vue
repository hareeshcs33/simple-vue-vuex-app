<template>
    <div class="container">
        <h4>Home</h4>
        <counter></counter>
        <result></result>
        <AnotherResult></AnotherResult>
    </div>
</template>
<script>
import Counter from './counter.vue';
import Result from './result.vue';
import AnotherResult from './AnotherResult.vue';

export default {
    components: {
        Counter,
        Result,
        AnotherResult,
    }
}
</script>