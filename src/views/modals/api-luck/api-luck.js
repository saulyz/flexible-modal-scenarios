import dataService from 'App/services/data-service';

import { faThumbsUp } from '@fortawesome/fontawesome-free-regular';
import { faThumbsDown } from '@fortawesome/fontawesome-free-regular';

export default {
    name: 'api-luck',
    template: `
        <div>
            <p class="mb-30">This is luck checker API test. On component create ir requests API and shows the API response.</p>
            <div class="api-response-wrapper">
                <div v-if="response" class="response-icon-wrapper">    
                    <div class="response-icon-box"
                        :class="{'success': success }">
                        <font-awesome-icon 
                            class="response-icon"
                            :class="{'success': success }" 
                            :icon="icon">
                        </font-awesome-icon>
                    </div>
                </div>
                <pre v-text="response"></pre>
            </div>
            <div class="text-align-center">
                <button class="btn btn-medium" @click="onClose('user close')">Close</button>
            </div>
        </div>
    `,

    props: ['onClose'],

    data() {
        return {
            response: null
        }
    },

    created() {
        dataService.testLuck()
            .then(response => response.data)
            .then(response => {
                this.response = response
            })
    },

    computed: {
        success() {
            return (this.response && this.response.status === 200);
        },

        icon() {
            if (this.success) {
                return faThumbsUp;
            } else {
                return faThumbsDown;
            }
        }
    }
}
