export default {
    name: 'confirm-prompt',
    template: `
        <div class="confirm-prompt-dialog">
            <div class="question mb-30">Are you sure?</div>
            <div class="flex-secenter mb-20">
                <button @click="confirm()" class="btn btn-medium btn-blue uppercase">Yes</button>
                <button @click="deny()" class="btn btn-medium btn-outline uppercase">No</button>
            </div>
        </div>
    `,

    props: {
        onClose: {
            required: true
        }
    },

    methods: {
        confirm() {
            this.onClose(true);
        },

        deny() {
            this.onClose(false);
        }
    }
};
