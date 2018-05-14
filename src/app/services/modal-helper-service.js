import Vue from 'vue';

import modalService from 'App/components/modal-service';

import plainTextModal from 'Modals/plain-text/plain-text';
import apiLuckModal from 'Modals/api-luck/api-luck';
import share from 'Modals/share/share';
import sharePrint from 'Modals/share/print';
import shareEmail from 'Modals/share/email';
import shareSocial from 'Modals/share/social';

class ModalHelperService {

    openLuckApi(title) {
        return modalService.create()
            .setTitle(title)
            .setComponent(apiLuckModal)
            .setCustomClass('modal-medium-on-wide')
            .open();
    }

    openShareInitial(title) {
        return modalService.create()
            .setTitle(title)
            .setComponent(share)
            .setCustomClass('modal-small-on-wide')
            .open();
    }

    openSharePrint() {
        return modalService.create()
            .setTitle('Print')
            .setComponent(sharePrint)
            .setCustomClass('modal-medium-on-wide')
            .open();
    }

    openShareEmail() {
        return modalService.create()
            .setTitle('Email')
            .setComponent(shareEmail)
            .setCustomClass('modal-small-on-wide')
            .open();
    }

    openShareSocial() {
        return modalService.create()
            .setTitle('Social networks')
            .setComponent(shareSocial)
            .setCustomClass('modal-medium-on-wide')
            .open();
    }
}

export default new ModalHelperService();
