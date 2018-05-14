import Vue from 'vue';

import modalService from 'App/components/modal-service';
import plainTextModal from 'Modals/plain-text/plain-text';
import apiLuckModal from 'Modals/api-luck/api-luck';

class ModalHelperService {

    openLuckApi(title) {
        return modalService.create()
            .setTitle(title)
            .setComponent(apiLuckModal)
            .open();
    }
}

export default new ModalHelperService();
