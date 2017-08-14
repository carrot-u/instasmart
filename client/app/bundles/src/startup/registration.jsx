import ReactOnRails from 'react-on-rails';

import Index from './index';
import ServerRouterApp from './ServerRouterApp';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Index,
  ServerRouterApp
});
