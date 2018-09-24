import Vue from 'vue';

import modalHelperService from 'App/services/modal-helper-service';

new Vue({
    el: '#page-visual-templates',
    name: 'page-visual-templates',

    methods: {
        openModalMap() {
            modalHelperService.openMap();
        }
    }
});
