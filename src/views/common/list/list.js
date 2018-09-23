import modalHelperService from 'App/services/modal-helper-service';

import { trash } from '@fortawesome/fontawesome-free-regular';

export default {
    name: 'list',
    template: `
        <div>
            <div v-for="(item, index) in list">
                <span v-text="item.title"></span>
                <font-awesome-icon class="ml-10 icon-trash link" icon="trash" @click="onRemove(index)"></font-awesome-icon>
            </div>
            <div v-if="!list.length">The list is empty</div>
        </div>
    `,
    
    data() {
        return {
            list: [
                { title: 'Vilnius' },
                { title: 'Riga' },
                { title: 'Tallin' }
            ]
        }
    },

    methods: {
        onRemove(index) {
            return modalHelperService.confirm()
            .then (() => {
                this.removeItem(index);
            }, () => {
                // silent do nothing
            })
        },
        
        removeItem(index) {
            this.list.splice(index, 1);
        }
    }

}
