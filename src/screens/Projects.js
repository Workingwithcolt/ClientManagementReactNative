
import { UPDATE_ON_ACCOUNT, endpoints } from "../Endpoints/endpoints"
import { NODATA, users } from "../helper/extrapropertise"
import DataView from "../GenericComponent/Dataview"
import { Button, SafeAreaView, View } from "react-native-web"
import { dataview } from "../styles/Dataview"
import { ProjectDetailView } from "./ProjectDetailView"
import { Card, Text } from 'react-native-paper';
import { ProjectModal } from "../GenericComponent/ProjectModal"
import { useState } from "react"
import LoadingSpinner from "../GenericComponent/LoadingSpinneer"
import { useQueryClient } from "@tanstack/react-query"

const ResponsiveCard = ({ item, navigation, setSelectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const queryClient = useQueryClient()
    const [status, setStatus] = useState({
        isloading: false, error: undefined, isSuccess: false
    })

    const updateItem = async (state) => {
        try {
            await endpoints.Account.update(state, { _id: state._id })
            return state._id;
        } catch (e) {
            return Promise.reject(e.message)
        }
    }
    const deleteItem = async (item) => {
        try {
            setStatus({
                isloading: true, error: undefined, isSuccess: false
            })
            await endpoints.Account.delete(null, { _id: item._id })
            setStatus({
                isloading: false, error: undefined, isSuccess: true
            })
            queryClient.invalidateQueries({
                predicate: (query) =>
                    query.queryKey.includes(UPDATE_ON_ACCOUNT)
            })
        } catch (e) {
            setStatus({
                isloading: false, error: e.message, isSuccess: false
            })
        }
    }

    return (
        <Card style={{ width: "100%" }}>
            <Card.Content>
                <Text variant="titleLarge"> {item.clientName || NODATA}</Text>
                <Text variant="bodyMedium"> {item.email}</Text>
                <Text variant="bodyMedium"> {item.aadhar}</Text>
            </Card.Content>
            {
                modalVisible ?
                    <ProjectModal
                        init={item}
                        onSubmit={updateItem}
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                    />
                    : <></>
            }
            <Card.Actions>

                {
                    status.isloading ?
                        <View>
                            <LoadingSpinner />
                        </View >
                        : status.error ? (<View>
                            {status.error}
                        </View>)
                            : status.isSuccess ?
                                (<View>
                                    Deleted Successfully !!
                                </View>)
                                :
                                (<> <Button title="Detail" onPress={() => setSelectedItem(item)} />
                                    <Button title="update" onPress={() => setModalVisible(true)} />
                                    <Button title="delete" onPress={async () => await deleteItem(item)} /></>)}
            </Card.Actions>
        </Card>
    )
}

export const Projects = ({ navigation }) => {
    const queryKey = [UPDATE_ON_ACCOUNT]
    const queryFunction = async () => {
        var accounts = await endpoints.Account.getAll()
        console.log(accounts);
        return accounts
    }
    const getValueToSearch = (current) => {
        console.log(current);
        return (
            (current?.email +
                current?.clientName +
                current?.aadhar) || ""
        )
    }

    return (
        <SafeAreaView>
            <DataView
                queryFunction={queryFunction}
                queryKey={queryKey}
                getSearchableValue={getValueToSearch}
                Card={ResponsiveCard}
                dataviewTitle={"Projects"}
                navigation={navigation}
                DetailedElement={ProjectDetailView}
            />
        </SafeAreaView>
    )

}