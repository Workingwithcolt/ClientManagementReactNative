import { View, Text } from "react-native-web"
import { dataview } from "../styles/Dataview"
import { CommonClass } from "../styles/Commonclass"
import { NODATA } from "../helper/extrapropertise"
import { DataTable } from 'react-native-paper';


export const TableList = ({ name, value }) => {
    return (
        <DataTable.Row>
            <DataTable.Cell >{name}</DataTable.Cell>
            <DataTable.Cell > {value || NODATA}</DataTable.Cell>
        </DataTable.Row>
    )
}