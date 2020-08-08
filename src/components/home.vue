<template>
    <div class="container">
        <h4>Home</h4>
        <hr/>
        <result></result>
        <AnotherResult></AnotherResult>
        <hr/>
        <counter></counter>
        <AnotherCounter></AnotherCounter>
        <hr/>
        <input type="text" v-model="value" >
        {{value}}
    </div>
</template>
<script>
import Counter from './counter.vue';
import Result from './result.vue';
import AnotherResult from './AnotherResult.vue';
import AnotherCounter from './AnotherCounter';

export default {
    computed: {
        value: {
            get(){
                return this.$store.getters.value;
            },
            set(value){
                this.$store.dispatch('updateValue', value);
            }
        }
    },
    methods: {
        updateValue(event) {
            this.$store.dispatch('updateValue', event.torget.value);
        }
    },
    components: {
        Counter,
        Result,
        AnotherResult,
        AnotherCounter,
    }
}
</script>