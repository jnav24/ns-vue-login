import Vue from 'nativescript-vue';
import App from './components/App';
import Login from './components/Login';
import VueDevtools from 'nativescript-vue-devtools';

Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');


new Vue({
    components: {
        App,
        Login
    },
    template: `
        <Frame>
            <Login />
        </Frame>`,
  // render: h => h('frame', [h(App)])
}).$start();
