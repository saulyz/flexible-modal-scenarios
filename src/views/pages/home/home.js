import Vue from 'vue';
import modalService from 'App/components/modal-service';
import demoModal from 'Modals/demo/demo';

new Vue({
    el: '#page-home',
    name: 'page-home',

    methods: {
        openModal() {
            return modalService.create()
                .setTitle('my first modal')
                .setComponent(demoModal)
                .open();
        }
    }
});
