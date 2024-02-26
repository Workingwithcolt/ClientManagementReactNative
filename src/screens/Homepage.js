import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { endpoints } from '../Endpoints/endpoints';
import { ProjectModal } from '../GenericComponent/ProjectModal';

const ProjectDetailsModal = ({ navigation, route }) => {
  const { data } = route?.params;
  const [modalVisible, setModalVisible] = useState(false);

  const Modal1Bkcall = async (state) => {
    let data = endpoints.Account.create(state);
    return data;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <Button title="Add new Project Details" onPress={() => setModalVisible(!modalVisible)} />
      <Button title="Users" onPress={() =>
        navigation.navigate('Users')
      } />
      <Button title="Projects" onPress={() =>
        navigation.navigate('Projects')
      } />
      {
        modalVisible ?
          <ProjectModal
            init={{}}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            onSubmit={Modal1Bkcall}
          />
          : <></>
      }
      <br></br>
    </View>
  );
};

export default ProjectDetailsModal;
