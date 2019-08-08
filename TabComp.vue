<template>
  <div class="tabComp">
    <header class="tabComp_header">
      <slot name="header"></slot>
    </header>

    <section class="tabComp_mainNavSec">
        <span class="tabComp_tabBox" v-for="(route,index) in tab_routes" :key="index" v-on:mouseover="main_mouseover(route)">
          <router-link :to="route.path">{{route.name}}</router-link>
        </span>
    </section>

    <section class="tabComp_subNavSec">
        <span class="tabComp_tabBox" v-if="subtab_routes.length > 0" v-for="(route,index) in subtab_routes" :key="index" v-on:click = sub_clicked(route)>
          {{route.name}}
        </span>
    </section>

    <router-view></router-view>
    <footer class="tabComp_footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'TabComp',
    data(){
      return {
        subtab_routes: [],
        current_main_route: null
      }
    },
    props: {
      tab_routes: {
        type: Array,
        default: null
      },
      css_variables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    methods: {
      main_mouseover: function(route){
        this.current_main_route = route.path;
        if(route.children !== undefined){
          this.subtab_routes = route.children;
        }else {
          this.subtab_routes = [];
        }
      },
      sub_clicked:function(route){
        this.$router.push(`${this.current_main_route}/${route.path}`);
      }
    },
    mounted(){
      if(this.css_variables !== null){
        for(let key of Object.keys(this.css_variables)){
          this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
        }
      }
    }
  }
</script>

<style lang="less">
  :root {
    --tab_comp_font_family: Verdana,serif;
    --tab_comp_background_color: #2E1076;

    --tab_comp_main_nav_background_color: #7B53DC;

    --tab_comp_tab_color: white;
    --tab_comp_tab_font_size: 1rem;
    --tab_comp_tab_hover_color: violet;
  }

  .tabComp {
    font-family: var(--tab_comp_font_family);
    background-color: var(--tab_comp_background_color);
    display: flex;
    flex-direction: column;
    padding: .5rem;

    &_header {
      padding: 1rem 0 1.5rem 0;
    }

    &_mainNavSec {
      display: flex;
      flex-direction: row;
      height: 2rem;
      padding: .4rem 0 .4rem 0;
      background-color: var(--tab_comp_main_nav_background_color);
    }

    &_tabBox {
      font-size: var(--tab_comp_tab_font_size);
      color: var(--tab_comp_tab_color);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      margin-left: 2rem;
      cursor: pointer;

      a {
        text-decoration: none;
        color: var(--tab_comp_tab_color);

        &:hover {
          color: var(--tab_comp_tab_hover_color);
        }
      }
    }

    &_subNavSec {
      display: flex;
      flex-direction: row;
      height: 2rem;
      padding: .4rem 0 .4rem 0;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &_footer {
      padding: 1.5rem 0 1rem 2rem;
    }
  }
</style>