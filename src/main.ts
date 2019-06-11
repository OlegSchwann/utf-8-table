import Vue, { VNode } from 'vue';
import InputOutputForm from './components/InputOutputForm.vue';

Vue.config.productionTip = false;

new Vue({
    render: (createElement): VNode => {
        return createElement(InputOutputForm);
    },
}).$mount('#app');
