## tab-comp

**tab-comp** is a Vue.js (>= 2.5) web component that provides page tabs with content routing and styling options.  

**tab-comp** can be installed via with the included `package.json` file for a local installation via the [npm install](https://docs.npmjs.com/cli/install.html "npm install") command.  **tab-comp** depends on the [vue.js](https://vuejs.org/ "Vue.js") framework.  A demo folder is provided that used [Parcel](https://parceljs.org/) together with its associated `package.json` file to bundle together  **tab-comp** along with its [vue.js](https://vuejs.org/ "Vue.js") dependency for a simple application.  Further details are provided below for running the demo.

## Props

A prop in Vue.js is a custom attribute for passing information from a parent component hosting **tab-comp** instance(s) to an **tab-comp** as a child component.   **tab-comp** has the following props for a parent to bind and send information to:

`css_variables` -- defines the css variables for quick, easy styling of  **tab-comp** (object, default: null)

`tab_routes` -- defines the paths to both main tab and sub tab routes to page content defined as a Vue.js component (array, default: null)

The creation of a `tab_routes` array follows Vue.js' discussion on [nested routes](https://router.vuejs.org/en/essentials/nested-routes.htmlnested "nested route") .  An example of `tab_routes` taken from the demo is shown below:

```
export const tab_routes = [
  {path: '/',component:HomeComp, name: 'Home'},
  {path: '/plants', component: PlantsComp, name: 'Plants',
    children: [
      {path: 'strawberry',component:StrawberryComp,name:'Strawberries'},
      {path: 'raspberry',component:RaspberryComp,name:'Raspberries'},
      {path: 'blueberry',component:BlueberryComp,name:'Blueberries'},
      {path: 'blackberry', component: BlackberryComp, name: 'Blackberry'},
      {path: 'asparagus',component: AsparagusComp, name: 'Asparagus'},
    ]
  },
  {path: '/customer_service', component: CustomerServiceComp, name: 'Customer Service',
    children: [
      {path: 'shipping',component:ShippingComp,name: 'Shipping Information'},
      {path: 'testimonials',component:TestimonialsComp,name:'Testimonials'},
      {path: 'directions',component:DirectionsComp,name:'Directions'},
      {path: 'about',component:AboutComp,name:'About Us'},
      {path: 'contact',component:ContactComp,name:'Contact Us'}
    ]
  },
  {path: '/howto', component: HowToComp, name: 'How To...',
    children: [
      {path: 'select_plants',component:SelectPlantsComp,name:'Selecting Plants'},
      {path: 'grow_plants',component:GrowPlantsComp,name:'Growing Plants'}
    ]
  },
  {path: '/growing_corner', component: GrowingCornerComp, name: 'Growing Corner',
    children: [
      {path: 'hardiness',component:HardinessComp,name: 'Hardiness Zones'},
      {path: 'plantselect',component:PlantSelectComp,name: 'Plant Selection'},
      {path: 'plantguide',component:PlantGuideComp,name: 'Plant Guide'},
      {path: 'videoguide',component:VideoGuideComp,name: 'Video Guide'},
      {path: 'qa',component:QandAComp,name:'Q and A'},
      {path: 'otherlinks',component:OtherLinksComp,name:'Other Links'}
    ]
  },
  {path: '/commercial_grower', component: CommercialGrowersComp, name: 'Commercial Growers',
    children: [
      {path: 'newgrower',component:NewGrowerComp,name:'New Grower'},
      {path: 'newsletter',component:NewsletterComp,name:'Newsletters'}
    ]
  },
  {path: '/company_news', component: CompanyNewsComp, name: 'Company News'}
];
```

## Styling

The **css_variables** prop is a javascript object that contains any combination of css variable names as keys and associated values.  The following list are the css variable names along with their default values:

```
{
  tab_comp_font_family: 'Verdana,serif',
  tab_comp_background_color: '#2E1076',

  tab_comp_main_nav_background_color: '#7B53DC',

  tab_comp_tab_color: 'white',
  tab_comp_tab_font_size: '1rem',
  tab_comp_tab_hover_color: 'violet',
}
```

## Events

There are no published events for **tab-comp** .

## Demonstration

A demonstration of **tab-comp** is provided by hosting the `index.html` file under the `demo/dist` folder.  The parent (templated in the `App.vue` file) defines seven main tabs with some of these tabs having sub tabs.  

As a suggestion, install [http-server](https://www.npmjs.com/package/http-server "http-server") locally/globally via [npm](https://www.npmjs.com/ "npm") then enter the command `http-server`in the **tab-comp** `dist` directory.  From a browser enter the url: `localhost:8080/` to view the demo.

Here is some example code for using **tab-comp**  taken from the  `App.vue` file:

```
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
```

You'll note in the above code there is a reference to two of **tab-comp**'s named slots -- `header` and `footer`.  Within these slots you can place html content specific to the application.  See [named slots](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slotsnamed) from Vue.js documentation.

