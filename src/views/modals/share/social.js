import { share } from '@fortawesome/fontawesome-free-solid';

export default {
    name: 'share-social',
    template: `
        <div>
            <div class="share-icon-wrapper">    
                <div class="share-icon-box social">
                    <font-awesome-icon class="share-icon social" icon="share"></font-awesome-icon>
                </div>
            </div>
            <div class="share-title-wrapper">
                <h4 class="share-title">Share on social networks</h4>
                <p>And all sharing options...</p>
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
