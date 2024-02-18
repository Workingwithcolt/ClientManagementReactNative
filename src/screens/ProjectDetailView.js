import { Button, SafeAreaView, ScrollView } from "react-native-web";
import { dataview } from "../styles/Dataview";
import { View, Text } from "react-native";
import { TableList } from "../GenericComponent/CardList";
import { CommonClass } from "../styles/Commonclass";
import { BodyList } from "../GenericComponent/BodyList";

export const ProjectDetailView = ({ item, navigation }) => {
    return (
        <SafeAreaView style={dataview.DetailView} >
            <BodyList
                body={
                    <View style={dataview.heightAndOverflow}>
                        <ScrollView >
                            <table style={CommonClass.table}>
                                {
                                    Object.entries(item).map(([key, value]) => {
                                        if (!(key == "_id" || key == "__v")) {
                                            return (
                                                <TableList name={key} key={key} value={value} />
                                            )
                                        }
                                    })
                                }
                            </table>
                        </ScrollView>
                    </View>
                }
                label={"Detail"}
            />
            <View>
                <Button title="Files" onPress={() =>
                    navigation.navigate('Files', {
                        id: item._id,
                    })
                } />
            </View>
        </SafeAreaView>
    )
}