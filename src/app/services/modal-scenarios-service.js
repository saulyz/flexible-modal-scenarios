import modalHelperService from 'App/services/modal-helper-service';

class ModalScenariosService {
    
    startShareInitialScenario() {
        return modalHelperService.openShareInitial()
            .then(answer => {
                if (answer === 'print') {
                    return this.startSharePrintScenario();
                } else if (answer === 'email') {
                    return this.startShareEmailScenario();
                } else if (answer === 'social') {
                    return this.startShareSocialScenario();
                }
            });
    }

    startSharePrintScenario() {
        return modalHelperService.openSharePrint()
            .then(answer => {
                if (answer === 'share') {
                    return this.startShareInitialScenario();
                }
            });
    }

    startShareEmailScenario() {
        return modalHelperService.openShareEmail()
            .then(answer => {
                if (answer === 'share') {
                    return this.startShareInitialScenario();
                }
            });
    }

    startShareSocialScenario() {
        return modalHelperService.openShareSocial()
            .then(answer => {
                if (answer === 'share') {
                    return this.startShareInitialScenario();
                }
            });
    }
}

export default new ModalScenariosService();
