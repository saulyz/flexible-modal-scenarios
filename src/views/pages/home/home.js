import Vue from 'vue';
import modalService from 'App/components/modal-service';

new Vue({
    el: '#page-home',
    name: 'page-home',

    methods: {
        openModal() {
            console.log('openModal func', modalService);
            
            return modalService.create()
                .setTitle('my first modal')
                .open();
        }
    }
});
