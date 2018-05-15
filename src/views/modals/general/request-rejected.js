import { exclamation } from '@fortawesome/fontawesome-free-regular';

export default {
    name: 'request-rejected',
    template: `
        <div class="request-feedback-general">
            <font-awesome-icon class="icon rejected" icon="exclamation"></font-awesome-icon>

            <div class="title" v-if="!title">Failure</div>
            <div class="title" v-else v-text="title"></div>

            <p class="text" v-html="message"></p>
        </div>
    `,
    props: ['message', 'title']
}
