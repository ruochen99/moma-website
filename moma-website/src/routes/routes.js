import Landing from '../views/Landing';
import About from '../views/About';
import Download from '../views/Download';
import Explore from '../views/Explore';
import Publication from '../views/Publication';
import Error from '../views/Error';

// name should be unique, used as react key
const routes = [
  // redirect
  // { path: '/', name: 'RedirectToLanding', redirect: true, exact: true, to: '/landing' },
  { path: '/',    name: 'Landing',   exact: true,    component: Landing },
  { path: '/about',    name: 'About',          component: About },
  { path: '/download',    name: 'Download',          component: Download },
  { path: '/explore',    name: 'Explore',          component: Explore },
  { path: '/publication',    name: 'Publication',          component: Publication },
  { path: '/error',      name: 'Error',         component: Error },
  { /* no path */        name: '404',           component: Error },

];

export default routes;
