import { MD2Colors } from "react-native-paper";
import { View, Text, ActivityIndicator } from "react-native-web";

function LoadingSpinner() {
    return (
        <View role="status">
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        </View>
    )
}

export default LoadingSpinner;