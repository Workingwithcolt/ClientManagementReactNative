import { Button, SafeAreaView, View, Text } from "react-native-web";
import { endpoints } from "../Endpoints/endpoints";
import DataView from "./Dataview";
import { dataview } from "../styles/Dataview";

const Card = ({ item }) => {
    return (
        <SafeAreaView >
            <View style={dataview.img} >
                <img src={item?.Base64Data} alt="link chalana"></img>
            </View>
        </SafeAreaView>
    )
}

export const ShowFile = ({ route, navigation }) => {
    const { id } = route?.params;

    const queryKey = [id, "Images"]

    const queryFunction = async () => {
        var data = await endpoints.File.getAll(null, { id: id })
        console.log(data);
        return data
    }
    const getValueToSearch = (current) => {
        return (
            current.UniqueID || ""
        )
    }

    return (
        <SafeAreaView >
            <DataView
                queryFunction={queryFunction}
                queryKey={queryKey}
                getSearchableValue={getValueToSearch}
                Card={Card}
                dataviewTitle={"Users"}
                navigation={navigation}
                newDataButton={
                    <Button title="Add File" onPress={() =>
                        navigation.navigate('Upload', {
                            id: id
                        })
                    } />
                }
            />
        </SafeAreaView>

    )
}