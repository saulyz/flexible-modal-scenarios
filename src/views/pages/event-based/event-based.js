import Vue from 'vue';
import eventBus from 'App/components/event-bus';

import image from 'Common/image/image';

new Vue({
    el: '#event-based',
    name: 'event-based-page',

    methods: {
        openModalViaEvent() {
            eventBus.$emit('modal.open', {
                title: 'Voila! You see a modal opened via event',
                component: image,
                parameters: {
                    name: 'baby.jpg',
                    title: 'Voila!'
                },
                onClose: () => false
            })
        }
    }    
});
