import { View, Text } from "react-native-web"
import { dataview } from "../styles/Dataview"
import { CommonClass } from "../styles/Commonclass"
import { NODATA } from "../helper/extrapropertise"

export const TableList = ({ name, value }) => {
    return (
        <tr style={CommonClass.th}>
            <td style={CommonClass.td}>
                <Text style={CommonClass.textStyle}>
                    {name}
                </Text>
            </td>
            <td style={CommonClass.td}>
                <Text style={CommonClass.textStyle} >
                    {value || NODATA}
                </Text>
            </td>
        </tr>
    )
}