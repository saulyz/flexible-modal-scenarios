import eventBus from 'App/components/event-bus';

import { faTimes } from '@fortawesome/fontawesome-free-solid';

export default {
    template: '#modal-template',
    name: 'modal',

    data() {
        return {
            modal: null,
            isOpen: false
        }
    },

    created() {
        eventBus.$on('modal.open', (modal) => this.open(modal));
        eventBus.$on('modal.close', (answer) => this.close(answer));
    },

    methods: {
        open(modal) {
            this.modal = modal;
            this.isOpen = true;
        },
        
        close(answer = null) {
            this.modal.onClose(answer);
            
            this.modal = null;
            this.isOpen = false;
        }
    },

    computed: {
        title() {
            return this.modal.title;
        }
    }
}
