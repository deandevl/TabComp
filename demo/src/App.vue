<template>
  <div>
    <tab-comp :tab_routes="tab_routes">
      <div class="headerbox" slot="header">
        <div class="titlebox">Fairfield Nursery</div>
        <div class="sourcebox">
          Web site at <a href="http://fairfieldfruits.com">Fairfield Fruits</a>
        </div>
      </div>

      <div slot="footer">
        <div class="sourcebox">
          Built at <a href="https://github.com/deandevl">deandevl</a>
        </div>
      </div>
    </tab-comp>
  </div>
</template>

<script>
  import TabComp from 'tabcomp';
  import VueRouter from 'vue-router';
  import {tab_routes} from './tab_routes';

  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: tab_routes
  });

  export default {
    name: 'App',
    router: router,
    data() {
      return {
        tab_routes: tab_routes
      };
    },
    components: {
      TabComp
    }
  }
</script>

<style>
  .headerbox {
    padding: 1rem;
    background: linear-gradient(to bottom, #1e5799 0%,#207cca 53%,#7db9e8 100%);
  }
  .titlebox {
    margin-bottom: 1rem;
    font: normal normal bold 42px/1 Arial Black, Gadget, sans-serif;
    text-shadow: 4px 0 9px rgba(86,170,255,0.9) , 4px 0 9px rgba(86,170,255,0.9) ;
  }
  .sourcebox{
    font: normal normal bold 12px/1 Arial Black, Gadget, sans-serif;
    text-shadow: 4px 0 9px rgba(86,170,255,0.9) , 4px 0 9px rgba(86,170,255,0.9) ;
  }
</style>