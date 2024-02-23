import { SafeAreaView, View } from "react-native-web"
import { Text } from 'react-native-paper';
import { dataview } from "../styles/Dataview";

export const BodyList = ({ label, body }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={dataview.textStyle} variant="bodyMedium">{label}</Text>
                <View>
                    {body}
                </View>
            </View>
        </SafeAreaView>
    )
}