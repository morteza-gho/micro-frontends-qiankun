// import 'zone.js'; // for angular subapp
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from '../../es';
import './index.less';

/**
 * Main application **Any technology stack can be used**
 * The following are examples of React and Vue respectively, you can switch to try
 */
// import render from './render/ReactRender';
import render from './render/VueRender';

/**
 * Step1 Initialize the application (optional)
 */
render({ loading: true });

const loader = loading => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'vue3',
      entry: '//localhost:7105',
      container: '#subapp-viewport',
      loader,
      activeRule: '/vue3',
    },
    {
      name: 'react16',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      loader,
      activeRule: '/react16',
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 Set the default sub-application
 */
setDefaultMountApp('/vue3');

/**
 * Step4 Start the app
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
