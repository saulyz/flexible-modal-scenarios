import { print, share } from '@fortawesome/fontawesome-free-solid';
import { envelope } from '@fortawesome/fontawesome-free-regular';

export default {
    name: 'share-general',
    template: `
        <div>
            <div class="mb-20" @click="close('print')">
                <span>
                    <font-awesome-icon class="share-icon print" icon="print"></font-awesome-icon>
                </span>
                Print this page
            </div>
            <div class="mb-20" @click="close('email')">
                <span>
                    <font-awesome-icon class="share-icon email" icon="envelope"></font-awesome-icon>
                </span>
                Email this page
            </div>
            <div class="mb-20" @click="close('social')">
                <span>
                    <font-awesome-icon class="share-icon social" icon="share"></font-awesome-icon>
                </span>
                Share via social media
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
