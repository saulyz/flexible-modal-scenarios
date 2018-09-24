export default {
    template: '#text-input-template',
    name: 'text-input-modal',

    props: ['content', 'onClose'],

    data() {
        return {
            localContent: ''
        }
    },

    computed: {
        error() {
            return this.localContent.length < 3;
        }
    },

    created() {
        this.localContent = this.content;
    },

    methods: {
        submit() {
            if (!this.error) {
                this.onClose({
                    answer: true,
                    content: this.localContent,
                    shouldSubmit: this.shouldSubmit
                });
            }
        }
    }
}
