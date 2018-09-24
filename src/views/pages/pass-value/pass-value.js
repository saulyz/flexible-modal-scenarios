import Vue from 'vue';

import textInput from 'Modals/inputs/text-input';
Vue.component('text-input', textInput);

new Vue({
    el: '#page-pass-value',
    name: 'page-pass-value',

    methods: {
        // see hidden-input component with its own functions

        onSubmit() {
            console.log('form submit');
            this.$refs.form.submit();
        }
    }
});
