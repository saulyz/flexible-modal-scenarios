import { check } from '@fortawesome/fontawesome-free-regular';

export default {
    name: 'request-resolved',
    template: `
        <div class="request-feedback-general">
            <font-awesome-icon class="icon resolved" icon="check"></font-awesome-icon>

            <div class="title" v-if="!title">Success</div>
            <div class="title" v-else v-text="title"></div>

            <p class="text" v-html="message"></p>
        </div>
    `,

    props: ['message', 'title']
}
