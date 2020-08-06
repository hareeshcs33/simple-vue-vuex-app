<template>
    <div class="container-fluid">
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    methods: {
    },
    components: {
    }
}
</script>
<style>
ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
ul li {
    padding: 10px 15px;
}
</style>