<!--TODO: убрать промежуточный компонент.-->

<template>
    <div id="app">
        <input-output-form/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import InputOutputForm from './components/InputOutputForm.vue';

    @Component({
        components: {
            InputOutputForm,
        },
    })
    export default class App extends Vue {
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
    }
</style>
