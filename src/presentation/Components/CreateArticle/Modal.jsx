import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';

import Text from '../../../infrastructure/Components/Text';
import Button from '../../../infrastructure/Components/Button';

export default function  MyModal ({isVisible, setIsVisible,modalText}) {


  const hideModal = () => setIsVisible(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={isVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text center>
          My Markdown Instructions
      
          </Text>
          <Text center>
          # Some title # ,
          </Text>
          <Text center>
          : Some Description : ,
          </Text>
          <Text center>
          &lt; Some body &gt;
          </Text>
          <Text color='red' center>it is important to separate them with commas</Text>
          <Button text='Got it!' onPress={hideModal}/>
        </Modal>
      </Portal>
    </Provider>
  );
};

