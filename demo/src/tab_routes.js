/**
 * Created by Rick on 2017-12-28.
 */

'use strict';
import HomeComp from './components/MainTabs/HomeComp.vue';
import CompanyNewsComp from './components/MainTabs/CompanyNewsComp.vue';

import PlantsComp from './components/PlantsTabs/PlantsComp.vue';
import AsparagusComp from './components/PlantsTabs/AsparagusComp.vue';
import BlackberryComp from './components/PlantsTabs/BlackberryComp.vue';
import BlueberryComp from './components/PlantsTabs/BlueberryComp.vue';
import RaspberryComp from './components/PlantsTabs/RaspberryComp.vue';
import StrawberryComp from './components/PlantsTabs/StrawberryComp.vue';

import CustomerServiceComp from './components/CustomerServiceTabs/CustomerServiceComp.vue';
import AboutComp from './components/CustomerServiceTabs/AboutComp.vue';
import ContactComp from './components/CustomerServiceTabs/ContactComp.vue';
import DirectionsComp from './components/CustomerServiceTabs/DirectionsComp.vue';
import ShippingComp from './components/CustomerServiceTabs/ShippingComp.vue';
import TestimonialsComp from './components/CustomerServiceTabs/TestimonialsComp.vue';

import HowToComp from './components/HowToTabs/HowToComp.vue';
import GrowPlantsComp from './components/HowToTabs/GrowPlantsComp.vue';
import SelectPlantsComp from './components/HowToTabs/SelectPlantsComp.vue';

import GrowingCornerComp from './components/GrowingCornerTabs/GrowingCornerComp.vue';
import HardinessComp from './components/GrowingCornerTabs/HardinessComp.vue';
import OtherLinksComp from './components/GrowingCornerTabs/OtherLinksComp.vue';
import PlantGuideComp from './components/GrowingCornerTabs/PlantGuideComp.vue';
import PlantSelectComp from './components/GrowingCornerTabs/PlantSelectComp.vue';
import QandAComp from './components/GrowingCornerTabs/QandAComp.vue';
import VideoGuideComp from './components/GrowingCornerTabs/VideoGuideComp.vue';

import CommercialGrowersComp from './components/CommercialGrowersTabs/CommercialGrowersComp.vue';
import NewGrowerComp from './components/CommercialGrowersTabs/NewGrowerComp.vue';
import NewsletterComp from './components/CommercialGrowersTabs/NewsletterComp.vue';

export const tab_routes = [
  {path: '/',component:HomeComp, name: 'Home'},
  {path: '/plants',
    component: PlantsComp,
    name: 'Plants',
    children: [
      {path: 'strawberry',component:StrawberryComp,name:'Strawberries'},
      {path: 'raspberry',component:RaspberryComp,name:'Raspberries'},
      {path: 'blueberry',component:BlueberryComp,name:'Blueberries'},
      {path: 'blackberry', component: BlackberryComp, name: 'Blackberry'},
      {path: 'asparagus',component: AsparagusComp, name: 'Asparagus'},
    ]
  },
  {path: '/customer_service',
    component: CustomerServiceComp,
    name: 'Customer Service',
    children: [
      {path: 'shipping',component:ShippingComp,name: 'Shipping Information'},
      {path: 'testimonials',component:TestimonialsComp,name:'Testimonials'},
      {path: 'directions',component:DirectionsComp,name:'Directions'},
      {path: 'about',component:AboutComp,name:'About Us'},
      {path: 'contact',component:ContactComp,name:'Contact Us'}
    ]
  },
  {path: '/howto',
    component: HowToComp,
    name: 'How To...',
    children: [
      {path: 'select_plants',component:SelectPlantsComp,name:'Selecting Plants'},
      {path: 'grow_plants',component:GrowPlantsComp,name:'Growing Plants'}
    ]
  },
  {path: '/growing_corner',
    component: GrowingCornerComp,
    name: 'Growing Corner',
    children: [
      {path: 'hardiness',component:HardinessComp,name: 'Hardiness Zones'},
      {path: 'plantselect',component:PlantSelectComp,name: 'Plant Selection'},
      {path: 'plantguide',component:PlantGuideComp,name: 'Plant Guide'},
      {path: 'videoguide',component:VideoGuideComp,name: 'Video Guide'},
      {path: 'qa',component:QandAComp,name:'Q and A'},
      {path: 'otherlinks',component:OtherLinksComp,name:'Other Links'}
    ]
  },
  {path: '/commercial_grower',
    component: CommercialGrowersComp,
    name: 'Commercial Growers',
    children: [
      {path: 'newgrower',component:NewGrowerComp,name:'New Grower'},
      {path: 'newsletter',component:NewsletterComp,name:'Newsletters'}
    ]
  },
  {path: '/company_news', component: CompanyNewsComp, name: 'Company News'}
];