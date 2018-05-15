import Vue from 'vue';

import modalService from 'App/components/modal-service';
import text1 from 'Common/text/text-1';
import text2 from 'Common/text/text-2';
import text3 from 'Common/text/text-3';
import text4 from 'Common/text/text-4';
import text5 from 'Common/text/text-5';

new Vue({
    el: '#page-first',
    name: 'page-first',

    methods: {
        // primitive modal call
        openInModalText1() {
            return modalService.create()
                .setTitle('Opening Text1 component')
                .setComponent(text1)
                .open();
        },

        openInModalText2() {
            return modalService.create()
                .setTitle('Opening Text2 component')
                .setComponent(text2)
                .open();
        },

        openInModalText3() {
            return modalService.create()
                .setTitle('Opening Text3 component')
                .setComponent(text3)
                .open();
        },

        openInModalText4() {
            return modalService.create()
                .setTitle('Opening Text4 component')
                .setComponent(text4)
                .open();
        },

        openInModalText5() {
            return modalService.create()
                .setTitle('Opening Text5 component')
                .setComponent(text5)
                .open();
        },

        openModalPlainText() {
            return modalService.create()
                .setTitle('Plaintext dumb component')
                .setComponent(plainTextModal)
                .open();
        }

    }
});
