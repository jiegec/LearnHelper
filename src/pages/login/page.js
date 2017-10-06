import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

export default ({ dispatch }) => (
  <ContainerView>
    <WelcomeText>
      Please Login
    </WelcomeText>
    <InstructionsText>
      To get started, edit index.ios.js
      Edit Edit Edit
    </InstructionsText>
    <InstructionsText>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </InstructionsText>
    <TouchableOpacity onPress={() => dispatch({ type: 'NAVIGATE_TO', routeName: 'homeTab' })}>
      <WelcomeText>
        Go to Home
      </WelcomeText>
    </TouchableOpacity>
  </ContainerView>
);
