import Vue from 'vue';

import modalService from 'App/components/modal-service';
import plainTextModal from 'Modals/plain-text/plain-text';

import modalHelperService from 'App/services/modal-helper-service';
import modalScenariosService from 'App/services/modal-scenarios-service';

new Vue({
    el: '#page-home',
    name: 'page-home',

    methods: {
        // primitive modal call
        openModalPlainText() {
            return modalService.create()
                .setTitle('Plaintext dumb component')
                .setComponent(plainTextModal)
                .open();
        },

        // modal helper service
        openModalApiLuck(title) {
            modalHelperService.openLuckApi(title);
        },

        // modal scenarios service for cycles
        openModalShare(title) {
            modalScenariosService.startShareInitialScenario(title);
        }
    }
});
