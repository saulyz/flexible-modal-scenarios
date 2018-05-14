import { envelope } from '@fortawesome/fontawesome-free-regular';

export default {
    name: 'share-email',
    template: `
        <div>
            <div class="share-icon-wrapper">    
                <div class="share-icon-box email">
                    <font-awesome-icon class="share-icon email" icon="envelope"></font-awesome-icon>
                </div>
            </div>
            <div class="share-title-wrapper">
                <h4 class="share-title">Email this page</h4>
                <p>And all email options...</p>
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
