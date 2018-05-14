import Vue from 'vue';

import modalService from 'App/components/modal-service';
import plainTextModal from 'Modals/plain-text/plain-text';

import modalHelperService from 'App/services/modal-helper-service';

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

        openModalApiLuck(title) {
            modalHelperService.openLuckApi(title);
                // .setTitle('Test your luck API')
                // .setComponent(apiLuckModal)
                // .open();
        }
    }
});
