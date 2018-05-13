import Vue from 'vue';

import modalService from 'App/components/modal-service';
import plainTextModal from 'Modals/plain-text/plain-text';
import apiLuckModal from 'Modals/api-luck/api-luck';

new Vue({
    el: '#page-home',
    name: 'page-home',

    methods: {
        openModalPlainText() {
            return modalService.create()
                .setTitle('Plaintext dumb component')
                .setComponent(plainTextModal)
                .open();
        },

        openModalApiLuck() {
            return modalService.create()
                .setTitle('Test your luck API')
                .setComponent(apiLuckModal)
                .open();
        }
    }
});
