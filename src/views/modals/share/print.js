import { print } from '@fortawesome/fontawesome-free-solid';

export default {
    name: 'share-print',
    template: `
        <div>
            <div class="share-icon-wrapper">    
                <div class="share-icon-box print">
                    <font-awesome-icon class="share-icon print" icon="print"></font-awesome-icon>
                </div>
            </div>
            <div class="share-title-wrapper">
                <h4 class="share-title">Print this page</h4>
                <p>And all print options...</p>
            </div>
            <div class="text-align-center">
                <button class="btn btn-medium" @click="close('share')">Done</button>
            </div>
        </div>
    `,
    props: ['onClose'],

    methods: {
        close(answer) {
            // do something for finishing this job
            this.onClose(answer);
        }
    }
}
