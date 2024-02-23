
import { UPDATE_ON_USER, endpoints } from "../Endpoints/endpoints"
import { users } from "../helper/extrapropertise"
import DataView from "../GenericComponent/Dataview"
import { SafeAreaView, View, Text } from "react-native-web"
import { dataview } from "../styles/Dataview"
import { Card } from "react-native-paper"

const ResponsiveCard = ({ item }) => {
    return (
        <Card style={{ minWidth: "500px" }}>
            <Card.Content>
                <Text variant="bodyMedium">  {item.name}</Text>
                <Text variant="bodyMedium"> {item.email}</Text>
                <Text variant="bodyMedium">  {item.address}</Text>
            </Card.Content>
        </Card>
    )
}

export const Users = ({ navigation }) => {
    const queryKey = [UPDATE_ON_USER]
    const queryFunction = async () => {
        var data = await endpoints.Users.getAll()
        var accounts = await endpoints.Account.getAll()
        return data
    }
    const getValueToSearch = (current) => {
        return (
            current.name || ""
        )
    }

    return (
        <SafeAreaView >
            <DataView
                queryFunction={queryFunction}
                queryKey={queryKey}
                getSearchableValue={getValueToSearch}
                Card={ResponsiveCard}
                dataviewTitle={"Users"}
                navigation={navigation}
            />
        </SafeAreaView>
    )

}