import { View, Text } from "react-native-web"
import { CommonClass } from "../styles/Commonclass"

export const BodyList = ({ label, body }) => {
    return (
        <View>
            <Text style={CommonClass.textStyle}>{label}</Text>
            <View>
                {body}
            </View>
        </View>
    )
}