import React from 'react';
import { withRouter, } from 'react-router-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';
/* const TabNavigator = createMaterialBottomTabNavigator(
  RouteConfigs,
  MaterialBottomTabNavigatorConfig
);
 */
export default withRouter( ({history}) => {
    return(
        <Footer>
        <FooterTab>
          <Button  onPress={()=>history.push('/')}>
            <Icon name="apps" />
          </Button>
          <Button onPress={()=>history.push('/about')}>
            <Icon name="camera" />
          </Button>
        </FooterTab>
      </Footer>
    );
});