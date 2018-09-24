import Vue from 'vue';

import textInput from 'Modals/inputs/text-input';
Vue.component('text-input', textInput);

new Vue({
    el: '#page-fifth',
    name: 'page-fifth',

    methods: {
        // see hidden-input component with its own functions

        onSubmit() {
            console.log('form submit');
            this.$refs.form.submit();
        }
    }
});
