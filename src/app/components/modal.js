import modalService from './modal-service';

export class Modal {
    constructor() {
        this.component = null;
        this.title = '';
        this.customClass = '';
        this.parameters = null;
        this.transition = 'fade-zoom';
        this.resolver = null;
        this.handler = new Promise(resolve => this.resolver = resolve);
    }

    setComponent(component) {
        this.component = component;

        return this;
    }
    
    setTitle(title) {
        this.title = title;
        
        return this;
    }

    setParameters(parameters) {
        this.parameters = parameters;

        return this;
    }

    setCustomClass(classList) {
        this.customClass = classList;

        return this;
    }

    setTransition(transition) {
        this.transition = transition;

        return this;
    }

    open() {
        this.modalService.open(this);

        return this.handler;
    }

    onClose(answer) {
        this.resolver(answer);
    }

}
