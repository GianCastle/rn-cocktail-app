import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, NavigationNavigator } from 'react-navigation';
import { routes } from './routes';
import { Provider } from 'react-redux';
import {store} from './redux/store';

const AppNavigator: NavigationNavigator<{ key: string }, { screen: any }> = 
  createStackNavigator(routes);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
