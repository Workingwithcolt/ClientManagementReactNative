import { Button, SafeAreaView, ScrollView, View } from "react-native-web";
import { CommonClass } from "../styles/Commonclass";
import { dataview } from "../styles/Dataview";
import { JPG_CONTENT_TYPE, PNG_CONTENT_TYPE } from "../helper/extrapropertise";
import { Card, Text } from "react-native-paper";
import { BodyList } from "./BodyList";
import { FileCard } from "./FileCard";

const ResponsiveCard = ({ item }) => {
    return (
        <SafeAreaView >
            <FileCard
                item={item}
            />
        </SafeAreaView>
    )
}

export const ShowTableFiles = ({ route, navigation }) => {
    const { key, value } = route?.params;
    return (
        <BodyList
            body={
                <ScrollView >
                    <View>
                        <table style={CommonClass.table}>
                            {
                                value.map((item) => <ResponsiveCard key={key} item={item} />)
                            }
                        </table>
                    </View>
                </ScrollView>
            }
            label={key}
        />
    )
}