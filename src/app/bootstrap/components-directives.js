import Vue from 'vue';

// Vendor
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

// Own
import modal from 'Common/modal/modal';

// Directives
import freezeBody from 'Directives/freeze-body';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('modal', modal);

Vue.directive('freeze-body', freezeBody);
