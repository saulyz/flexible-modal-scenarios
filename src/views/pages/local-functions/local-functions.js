import Vue from 'vue';
import eventBus from 'App/components/event-bus';

import modalService from 'App/components/modal-service';
import text1 from 'Common/text/text-1';
import text2 from 'Common/text/text-2';
import text3 from 'Common/text/text-3';
import text4 from 'Common/text/text-4';
import text5 from 'Common/text/text-5';
import text6 from 'Common/text/text-6';

new Vue({
    el: '#page-local-functions',
    name: 'page-local-functions',

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

        openInModalText6() {
            return modalService.create()
                .setComponent(text6)
                .open();
        }
    }
});
