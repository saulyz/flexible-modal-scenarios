import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import config from 'App/config/config.local';

Vue.use(VueGoogleMaps, {
    load: {
        key: config.googleMapsApi,
        libraries: 'places'
    }
});
