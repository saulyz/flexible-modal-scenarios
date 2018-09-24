import modalService from 'App/components/modal-service';
import { faEdit } from '@fortawesome/fontawesome-free-solid';

export default {
    template: '#hidden-input-template',
    name: 'hidden-input',

    props: ['name', 'value', 'title', 'component'],

    data() {
        return {
            content: ''
        }
    },

    created() {
        this.content = this.value;
    },

    methods: {
        openEditModal() {

            return modalService.create()
                .setTitle(this.title)
                .setCustomClass('modal-small-on-wide')
                .setComponent(this.component)
                .setParameters({ content: this.content })
                .open()
                .then((response) => {
                    if (response.answer) {
                        this.content = response.content;
                    }

                    return response;
                })
        }
    }
}
