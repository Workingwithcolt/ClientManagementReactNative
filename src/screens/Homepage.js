import React, { useReducer, useState } from 'react';
import { Modal, View, Button, Text, ScrollView } from 'react-native';
import { Propertylist, SchemaTypes, Section1, Section4, Section5, urlHead } from '../helper/extrapropertise';
import { blobToBase64, deepCopyObject, getIndex } from '../helper/helper';
import { endpoints } from '../Endpoints/endpoints';

const init = {};

const ADD_PROPS_TYPE = "Add_Property";
const REMOVE_PROPS_TYPE = "Remove_Property";
const ADD_ARRAY = "push"
const UPDATE_PROP_VALUES = "update"

const reducer = (state, action) => {
  var currentState = deepCopyObject(state);
  if ((action.type === ADD_ARRAY || action.type === UPDATE_PROP_VALUES) && state[action.payload.name]) {
    currentState[action.payload.name] = [...state[action.payload.name]]
  }
  switch (action.type) {
    case ADD_PROPS_TYPE:
      let data = undefined
      if (action.payload?.ContentType) {
        data = { value: action.payload.value, ContentType: action.payload.ContentType, fileName: action.payload.fileName }
      } else {
        data = action.payload.value
      }
      currentState[action.payload.name] = data;
      break;
    case ADD_ARRAY:
      if (!currentState[action.payload.name]) {

        currentState[action.payload.name] = []
      }
      currentState[action.payload.name].push({})
      break;
    case UPDATE_PROP_VALUES:
      currentState[action.payload.name][action.payload.index] =
        { value: action.payload.value, ContentType: action.payload.ContentType,fileName: action.payload.fileName };
      break
    case REMOVE_PROPS_TYPE:
      delete currentState[action.payload];
      break;
    default:
  }

  return currentState;
};
const ProjectDetailsModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, init);

  const ConvertToBase64 = async (index, name, e) => {
    let data = await blobToBase64(e.target.files[0])
    console.log(e.target.files[0]?.type);
    dispatch({
      type: UPDATE_PROP_VALUES, payload:
        { ContentType: e.target.files[0]?.type, index: index, name: name, value: data, fileName: e.target.files[0]?.name }
    })
  }

  const Modal1Bkcall = async () => {

    let data = endpoints.Account.create(state);
    setModalVisible(false);
    console.log("lets print form data", data);
    console.log(data);
  };

  const Onchange = async (e, element) => {
    if (element.type === SchemaTypes.file) {
      let data = await blobToBase64(e.target.files[0])
      console.log(e.target.files[0]);
      dispatch({ type: ADD_PROPS_TYPE, payload: { fileName: e.target.files[0]?.name, name: element.name, value: data, ContentType: e.target.files[0]?.type } })
    } else {
      dispatch({ type: ADD_PROPS_TYPE, payload: { name: element.name, value: e.target.value } })
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <Button title="Add new Project Details" onPress={() => setModalVisible(true)} />
      <Button title="Users" onPress={() =>
        navigation.navigate('Users')
      } />
      <Button title="Projects" onPress={() =>
        navigation.navigate('Projects')
      } />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <ScrollView style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Section 1: Client Basic Details</Text>
            {
              Section1.map(element => {
                return (
                  <>
                    <label for={element.name} style={{ marginTop: 0 }}>{element.placeholder}</label>
                    <input
                      id={element.name}
                      placeholder={element.placeholder}
                      value={state[element.name] ? state[element.name] : ""}
                      onChange={(e) =>
                        Onchange(e, element)
                      }
                      type={element.type}
                      style={element.style}
                    />
                  </>
                )
              })
            }
            <Text>Section 2:Add Presentation Drawing</Text>
            <View>
              {
                state?.[Propertylist.PresentationDraw.name] && Object.entries(state[Propertylist.PresentationDraw.name])?.map((element, index) => {
                  return (
                    <View >
                      <label for={Propertylist.PresentationDraw.name} style={{ marginTop: 0 }}>{Propertylist.PresentationDraw.placeholder}</label>
                      <input
                        id={Propertylist.PresentationDraw.name}
                        placeholder={Propertylist.PresentationDraw.placeholder}
                        // value={element}
                        onChange={async (e) =>
                          await ConvertToBase64(index, Propertylist.PresentationDraw.name, e)
                        }
                        type={Propertylist.PresentationDraw.type}
                        style={Propertylist.PresentationDraw.style}
                      />
                    </View>
                  )
                })
              }
              <Button title="Add" onPress={() => {
                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.PresentationDraw.name } })
              }} />
            </View>
            <Text>Section 3: Add 3d Models</Text>
            <View>
              {
                state?.[Propertylist.FileModel3D.name] && Object.entries(state[Propertylist.FileModel3D.name])?.map((element, index) => {
                  return (
                    <View >
                      <label for={Propertylist.FileModel3D.name} style={{ marginTop: 0 }}>{Propertylist.FileModel3D.placeholder}</label>
                      <input
                        id={Propertylist.FileModel3D.name}
                        placeholder={Propertylist.FileModel3D.placeholder}
                        // value={element}
                        onChange={async (e) =>
                          await ConvertToBase64(index, Propertylist.FileModel3D.name, e)
                        }
                        type={Propertylist.FileModel3D.type}
                        style={Propertylist.FileModel3D.style}
                      />
                    </View>
                  )
                })
              }
              <Button title="Add" onPress={() => {
                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.FileModel3D.name } })
              }} />
            </View>
            <Text>Section 4</Text>
            {
              Section4.map(element => {
                return (
                  <>
                    <label for={element.name} style={{ marginTop: 0 }}>{element.placeholder}</label>
                    <input
                      id={element.name}
                      placeholder={element.placeholder}
                      // value={state[element.name] ? state[element.name] : ""}
                      onChange={(e) =>
                        Onchange(e, element)
                      }
                      type={element.type}
                      style={element.style}
                    />
                  </>
                )
              })
            }
            <Text>Section 5: Add RCC Drawing</Text>
            <View>
              {
                state?.[Propertylist.RCCDrawing1.name] && Object.entries(state[Propertylist.RCCDrawing1.name])?.map((element, index) => {
                  return (
                    <View >
                      <label for={Propertylist.RCCDrawing1.name} style={{ marginTop: 0 }}>{Propertylist.RCCDrawing1.placeholder}</label>
                      <input
                        id={Propertylist.RCCDrawing1.name}
                        placeholder={Propertylist.RCCDrawing1.placeholder}
                        // value={element}
                        onChange={async (e) =>
                          await ConvertToBase64(index, Propertylist.RCCDrawing1.name, e)
                        }
                        type={Propertylist.RCCDrawing1.type}
                        style={Propertylist.RCCDrawing1.style}
                      />
                    </View>
                  )
                })
              }
              <Button title="Add" onPress={() => {
                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.RCCDrawing1.name } })
              }} />
            </View>
            <Text>Section 5</Text>
            {
              Section5.map(element => {
                return (
                  <>
                    <label for={element.name} style={{ marginTop: 0 }}>{element.placeholder}</label>
                    <input
                      id={element.name}
                      placeholder={element.placeholder}
                      // value={state[element.name] ? state[element.name] : ""}
                      onChange={(e) =>
                        Onchange(e, element)
                      }
                      type={element.type}
                      style={element.style}
                    />
                  </>
                )
              })
            }
            <Text>Section 5:Add Slab files</Text>
            <View>
              {
                state?.[Propertylist.firstSlab.name] && Object.entries(state[Propertylist.firstSlab.name])?.map((element, index) => {
                  return (
                    <View >
                      <label for={Propertylist.firstSlab.name} style={{ marginTop: 0 }}>{Propertylist.firstSlab.placeholder}</label>
                      <input
                        id={Propertylist.firstSlab.name}
                        placeholder={Propertylist.firstSlab.placeholder}
                        // value={element}
                        onChange={async (e) =>
                          await ConvertToBase64(index, Propertylist.firstSlab.name, e)
                        }
                        type={Propertylist.firstSlab.type}
                        style={Propertylist.firstSlab.style}
                      />
                    </View>
                  )
                })
              }
              <Button title="Add" onPress={() => {
                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.firstSlab.name } })
              }} />
            </View>
            <Button title="Submit" onPress={() => Modal1Bkcall()} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </ScrollView>
        </View>
      </Modal>
      <br></br>
    </View>
  );
};

export default ProjectDetailsModal;
