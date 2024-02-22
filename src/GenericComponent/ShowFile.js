import { Button, SafeAreaView, View, Text } from "react-native-web";
import { endpoints } from "../Endpoints/endpoints";
import DataView from "./Dataview";
import { dataview } from "../styles/Dataview";
import { JPG_CONTENT_TYPE, PNG_CONTENT_TYPE } from "../helper/extrapropertise";

const Card = ({ item }) => {
    return (
        <SafeAreaView >
            <View style={dataview.img} >

                {
                    (item.ContentType === PNG_CONTENT_TYPE || item.ContentType === JPG_CONTENT_TYPE)
                        ?
                        <img src={item?.value} alt="link chalana"></img>
                        : <Button
                            title={item.fileName || "Show File"}
                            onPress={async () => {
                                const r = await fetch(item.value);
                                const blob = await r.blob();
                                window.open(URL.createObjectURL(blob), "_blank");
                            }} />
                }
            </View>
        </SafeAreaView>
    )
}

export const ShowFile = ({ route, navigation }) => {
    const { id } = route?.params;

    const queryKey = [id, "Images"]

    const queryFunction = async () => {
        var data = await endpoints.Account.getAll(null, { _id: id })
        let result = []
        Object.entries(data[0]).forEach(([key, value]) => {
            if (value instanceof Array) {
                result.push(...value)
            } else if (value instanceof Object) {
                result.push(value)
            }
        });
        return result
    }
    const getValueToSearch = (current) => {
        return (
            current.fileName || ""
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