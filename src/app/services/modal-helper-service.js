import Vue from 'vue';

import modalService from 'App/components/modal-service';

import plainTextModal from 'Modals/plain-text/plain-text';
import apiLuckModal from 'Modals/api-luck/api-luck';
import share from 'Modals/share/share';
import sharePrint from 'Modals/share/print';
import shareEmail from 'Modals/share/email';
import shareSocial from 'Modals/share/social';
import map from 'Modals/map/map';
import confirmPrompt from 'Modals/confirm/confirm';
import requestResolved from 'Modals/general/request-resolved';
import requestRejected from 'Modals/general/request-rejected';
import generalInfo from 'Modals/general/info';

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

    openMap() {
        return modalService.create()
            .setTitle('Kaunas, Lithuania')
            .setComponent(map)
            .setCustomClass('modal-medium-on-wide')
            .open();
    }

    confirm() {
        return modalService.create()
            .setCustomClass('modal-small-on-wide')
            .setTransition('fade-zoom')
            .setComponent(confirmPrompt)
            .open()
            .then((answer) => {
                if (answer) {
                    return true;
                }

                throw false;
            });
    }

    // API response success/failure handlers

    generalResponse(response) {
        if (response.status === 200) {
            this.openGeneralRequestResolvedModal(response.title, response.message);

            return response;
        }

        this.openGeneralRequestRejectedModal(response.title, response.message);

        throw response;
    }

    openGeneralRequestResolvedModal(title, msg) {
        return modalService.create()
            .setCustomClass('modal-small-on-wide')
            .setComponent(requestResolved)
            .setParameters({
                title: title,
                message: msg
            })
            .open();
    }

    openGeneralRequestRejectedModal(title, msg) {
        return modalService.create()
            .setCustomClass('modal-small-on-wide')
            .setComponent(requestRejected)
            .setParameters({
                title: title,
                message: msg
            })
            .open();
    }

    openGeneralInfoModal(content) {
        return modalService.create()
            .setCustomClass('modal-small-on-wide')
            .setComponent(generalInfo)
            .setParameters({
                content: content
            })
            .open();
    }
}

export default new ModalHelperService();
