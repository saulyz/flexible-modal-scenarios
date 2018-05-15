import Vue from 'vue';

import modalHelperService from 'App/services/modal-helper-service';

new Vue({
    el: '#page-second',
    name: 'page-second',

    methods: {
        openModalMap() {
            modalHelperService.openMap();
        }
    }
});
