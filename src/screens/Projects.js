
import { UPDATE_ON_ACCOUNT, endpoints } from "../Endpoints/endpoints"
import { NODATA, users } from "../helper/extrapropertise"
import DataView from "../GenericComponent/Dataview"
import { SafeAreaView, View } from "react-native-web"
import { dataview } from "../styles/Dataview"
import { ProjectDetailView } from "./ProjectDetailView"
import {  Card, Text } from 'react-native-paper';

const ResponsiveCard = ({ item }) => {
    return (
        <Card style={{minWidth:"500px"}}>
            <Card.Content>
                <Text variant="titleLarge"> {item.clientName || NODATA}</Text>
                <Text variant="bodyMedium"> {item.email}</Text>
                <Text variant="bodyMedium"> {item.aadhar}</Text>
            </Card.Content>
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