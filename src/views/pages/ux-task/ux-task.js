import Vue from 'vue';

import dataService from 'App/services/data-service';
import modalHelperService from 'App/services/modal-helper-service';

new Vue({
    el: '#page-ux-task',
    name: 'page-ux-task',

    methods: {
        // see list component with own functions

        doApiWithResponse() {
            // imagine some API service call
            dataService.testLuckRaw()
                .then(response => response.data)
                .then(response => {
                    modalHelperService.generalResponse(response);
                })
                .catch(() => {})
        }
        
    }
});
