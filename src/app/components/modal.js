export class Modal {
    constructor() {
        this.title = '';
        this.customClass = '';
        this.transition = 'fade-zoom';
        this.component = null;
        this.parameters = null;
        this.resolver = null;
        this.handler = new Promise(resolve => this.resolver = resolve);
    }

    //...
}
