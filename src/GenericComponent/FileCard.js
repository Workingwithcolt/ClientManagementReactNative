import { Button, Card, Text } from "react-native-paper";
import { dataview } from "../styles/Dataview";
import { JPG_CONTENT_TYPE, PNG_CONTENT_TYPE } from "../helper/extrapropertise";

export const FileCard = ({ item }) => {
    return (
        <Card>
            <Card.Content>
                <Text variant="bodyMedium">{item.fileName || "Show File"}</Text>
                {
                    (item.ContentType === PNG_CONTENT_TYPE || item.ContentType === JPG_CONTENT_TYPE)
                    &&
                    <img style={dataview.img} src={item?.value} alt="link chalana"></img>
                }
            </Card.Content>
            <Card.Actions>
                <Button><a style={{
                    textDecoration: 'none',
                    cursor: 'auto'
                }} download={item.fileName} href={item?.value}>Download</a></Button>
            </Card.Actions>
        </Card >
    )
}