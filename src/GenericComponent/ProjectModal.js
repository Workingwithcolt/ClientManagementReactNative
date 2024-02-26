import React, { useReducer, useState } from 'react';
import { Modal, View, Button, Text, ScrollView } from 'react-native';
import { JPG_CONTENT_TYPE, PNG_CONTENT_TYPE, Propertylist, SchemaTypes, Section1, Section4, Section5, Section6 } from '../helper/extrapropertise';
import { blobToBase64, deepCopyObject } from '../helper/helper';
import { dataview } from '../styles/Dataview';
import ModallImageView from '../screens/ModalImageView';
import { Divider } from 'react-native-paper';
import { CommonClass } from '../styles/Commonclass';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LoadingSpinner from './LoadingSpinneer';
import { UPDATE_ON_ACCOUNT } from '../Endpoints/endpoints';

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
                { value: action.payload.value, ContentType: action.payload.ContentType, fileName: action.payload.fileName };
            break
        case REMOVE_PROPS_TYPE:
            delete currentState[action.payload];
            break;
        default:
    }

    return currentState;
};


export const ProjectModal = ({ init = {}, onSubmit, modalVisible, setModalVisible }) => {
    const [state, dispatch] = useReducer(reducer, init);
    const queryClient = useQueryClient();
    const ConvertToBase64 = async (index, name, e) => {
        let data = await blobToBase64(e.target.files[0])
        dispatch({
            type: UPDATE_PROP_VALUES, payload:
                { ContentType: e.target.files[0]?.type, index: index, name: name, value: data, fileName: e.target.files[0]?.name }
        })
    }
    const Onchange = async (e, element) => {
        if (element.type === SchemaTypes.file) {
            let data = await blobToBase64(e.target.files[0])
            dispatch({ type: ADD_PROPS_TYPE, payload: { fileName: e.target.files[0]?.name, name: element.name, value: data, ContentType: e.target.files[0]?.type } })
        } else {
            dispatch({ type: ADD_PROPS_TYPE, payload: { name: element.name, value: e.target.value } })
        }
    }

    const { isSuccess, isPending, error, mutate } = useMutation({
        mutationFn: async () => await onSubmit(state),
        onSuccess: () => {
            queryClient.invalidateQueries({
                predicate: (query) =>
                    query.queryKey.includes(UPDATE_ON_ACCOUNT)
            })
        },

    })

    var stausClass = (isPending || isSuccess) ? {
        position: 'relative', top: '50%', width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10
    } : { backgroundColor: 'white', padding: 20, borderRadius: 10 }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 'auto' }}>
                <ScrollView style={stausClass}>
                    {
                        isPending ?
                            <View>
                                <LoadingSpinner size='large' />
                            </View >
                            : error ? (<View>
                                {error}
                            </View>)
                                : isSuccess ?
                                    (<View>
                                        Added or Updated Successfully !!
                                    </View>)
                                    :
                                    <View>
                                        <Text>Section 1: Client Basic Details</Text>
                                        {
                                            Section1.map(element => {
                                                return (
                                                    <>
                                                        <label for={element.name} style={{ marginTop: 0 }}>{element.placeholder}</label>
                                                        <input
                                                            id={element.name}
                                                            placeholder={element.placeholder}
                                                            value={(state[element.name]) ? state[element.name] : ""}
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
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 2:Add Presentation Drawing</Text>
                                        <View>
                                            {
                                                state?.[Propertylist.PresentationDraw.name] && Object.entries(state[Propertylist.PresentationDraw.name])?.map(([key, value], index) => {
                                                    return (
                                                        <View >
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
                                                            {
                                                                (value && Propertylist.PresentationDraw.type === SchemaTypes.file)
                                                                &&
                                                                <ModallImageView
                                                                    src={value.value}
                                                                    title={value.fileName}
                                                                />
                                                            }
                                                        </View>
                                                    )
                                                })
                                            }
                                            <Button title="Add" onPress={() => {
                                                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.PresentationDraw.name } })
                                            }} />
                                        </View>
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 3: Add 3d Models</Text>
                                        <View>
                                            {
                                                state?.[Propertylist.FileModel3D.name] && Object.entries(state[Propertylist.FileModel3D.name])?.map(([key, value], index) => {
                                                    return (
                                                        <View >
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
                                                            {
                                                                (value && Propertylist.FileModel3D.type === SchemaTypes.file)
                                                                &&
                                                                <ModallImageView
                                                                    src={value.value}
                                                                    title={value.fileName}
                                                                />
                                                            }
                                                        </View>
                                                    )
                                                })
                                            }
                                            <Button title="Add" onPress={() => {
                                                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.FileModel3D.name } })
                                            }} />
                                        </View>
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 4</Text>
                                        {
                                            Section4.map(element => {
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
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 5: Add RCC Drawing</Text>
                                        <View>
                                            {
                                                state?.[Propertylist.RCCDrawing1.name] && Object.entries(state[Propertylist.RCCDrawing1.name])?.map(([key, value], index) => {
                                                    return (
                                                        <View >
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
                                                            {
                                                                (value && Propertylist.RCCDrawing1.type === SchemaTypes.file)
                                                                &&
                                                                <ModallImageView
                                                                    src={value.value}
                                                                    title={value.fileName}
                                                                />
                                                            }
                                                        </View>
                                                    )
                                                })
                                            }
                                            <Button title="Add" onPress={() => {
                                                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.RCCDrawing1.name } })
                                            }} />
                                        </View>
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 5</Text>
                                        {
                                            Section5.map(element => {
                                                let value = undefined
                                                if (element.type !== SchemaTypes.file) {
                                                    value = state[element.name] ? state[element.name] : ""
                                                }
                                                return (
                                                    <>
                                                        <label for={element.name} style={{ marginTop: 0 }}>{element.placeholder}</label>
                                                        <input
                                                            id={element.name}
                                                            placeholder={element.placeholder}
                                                            value={value}
                                                            onChange={(e) =>
                                                                Onchange(e, element)
                                                            }
                                                            type={element.type}
                                                            style={element.style}
                                                        />
                                                        {
                                                            (state[element.name] && element.type === SchemaTypes.file)
                                                            &&
                                                            <ModallImageView
                                                                title={state[element.name].fileName}
                                                                src={state[element.name].value}
                                                            />
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 5:Add Slab files</Text>
                                        <View>
                                            {
                                                state?.[Propertylist.Slab.name] && Object.entries(state[Propertylist.Slab.name])?.map(([key, value], index) => {
                                                    return (
                                                        <View style={dataview.fileContainer}>
                                                            <input
                                                                id={Propertylist.Slab.name}
                                                                placeholder={Propertylist.Slab.placeholder}
                                                                // value={value}
                                                                onChange={async (e) =>
                                                                    await ConvertToBase64(index, Propertylist.Slab.name, e)
                                                                }
                                                                type={Propertylist.Slab.type}
                                                                style={Propertylist.Slab.style}
                                                            />
                                                            {
                                                                (value && Propertylist.Slab.type === SchemaTypes.file)
                                                                &&
                                                                <ModallImageView
                                                                    src={value.value}
                                                                    title={value.fileName}
                                                                />
                                                            }
                                                        </View>
                                                    )
                                                })
                                            }
                                            <Button title="Add" onPress={() => {
                                                dispatch({ type: ADD_ARRAY, payload: { name: Propertylist.Slab.name } })
                                            }} />
                                        </View>
                                        <Divider />
                                        <Text style={CommonClass.sectionTitle}>Section 6</Text>
                                        {
                                            Section6.map(element => {
                                                let value = undefined
                                                if (element.type !== SchemaTypes.file) {
                                                    value = state[element.name] ? state[element.name] : ""
                                                }
                                                return (
                                                    <>
                                                        <label for={element.name} style={{ marginTop: 0 }}>{element.placeholder}</label>
                                                        <input
                                                            id={element.name}
                                                            placeholder={element.placeholder}
                                                            value={value}
                                                            onChange={(e) =>
                                                                Onchange(e, element)
                                                            }
                                                            type={element.type}
                                                            style={element.style}
                                                        />
                                                        {
                                                            (state[element.name] && element.type === SchemaTypes.file)
                                                            &&
                                                            <ModallImageView
                                                                title={state[element.name].fileName}
                                                                src={state[element.name].value}
                                                            />
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                        <Button title="Submit" onPress={() => mutate()} />
                                    </View>

                    }
                    <Button disabled={isPending} title="Close" onPress={() => setModalVisible(false)} />
                </ScrollView>
            </View>
        </Modal>
    )
}