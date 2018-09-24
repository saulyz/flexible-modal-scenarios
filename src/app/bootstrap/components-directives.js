import Vue from 'vue';

// Vendor
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

// Own
import modal from 'Common/modal/modal';
import text1 from 'Common/text/text-1';
import text2 from 'Common/text/text-2';
import text3 from 'Common/text/text-3';
import text4 from 'Common/text/text-4';
import text5 from 'Common/text/text-5';
import text6 from 'Common/text/text-6';
import list from 'Common/list/list';
import hiddenInput from 'Common/hidden-input/hidden-input';

// Directives
import freezeBody from 'Directives/freeze-body';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('modal', modal);
Vue.component('text-1', text1);
Vue.component('text-2', text2);
Vue.component('text-3', text3);
Vue.component('text-4', text4);
Vue.component('text-5', text5);
Vue.component('text-6', text6);
Vue.component('list', list);
Vue.component('hidden-input', hiddenInput);

Vue.directive('freeze-body', freezeBody);
