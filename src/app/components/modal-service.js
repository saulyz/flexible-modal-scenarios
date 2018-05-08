import eventBus from './event-bus';
import { Modal } from './modal';

class ModalService {
    constructor(eventBusService) {
        this.eventBus = eventBusService;
    }

    create() {
        return new Modal();
    }

    open(modal) {
        this.eventBus.$emit('modal.open', modal);
    }

    close(answer) {
        this.eventBus.$emit('modal.close', answer);
    }
}

export default new ModalService(eventBus);
