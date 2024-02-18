import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native-web"
import { blobToBase64 } from "../helper/helper"
import { endpoints } from "../Endpoints/endpoints"
import LoadingSpinner from "./LoadingSpinneer"
import { PNG_CONTENT_TYPE } from "../helper/extrapropertise"
import { CommonClass } from "../styles/Commonclass"
import { dataview } from "../styles/Dataview"

const process = {
    loading: false,
    success: false,
    error: ""
}

export const UploadFile = ({ navigation, route }) => {
    const [file, setFile] = useState(undefined)
    const [pro, setProcess] = useState(process)
    const [name, setName] = useState("")
    const { id } = route?.params;

    const handleUpload = async (e) => {
        try {
            if (file) {
                setProcess({
                    loading: true,
                    success: false,
                    error: ""
                })
                let data = await blobToBase64(file)
                const formData = new FormData()
                formData.Base64Data = data
                formData.contentType = PNG_CONTENT_TYPE
                formData.id = id
                formData.UniqueID = name;
                let result = await endpoints.File.create(formData);

                if (result?.id) {
                    setProcess({
                        loading: false,
                        success: true,
                        error: ""
                    })
                }

            }
        } catch (e) {
            console.log(e);
            setProcess({
                loading: false,
                success: false,
                error: "Something Went Wrong"
            })
        }
    }

    if (pro.loading) {
        return (<View  >
            <LoadingSpinner />
        </View >)
    }

    if (pro.success) {
        return (
            <>Successfully Updated</>
        )
    }

    if (pro.error) {
        return (
            <View >
                <View role="alert">
                    {pro.error}
                </View>
            </View>
        )
    }

    return (
        <View style = {CommonClass.container}>
            <input onChange={(e) => setName(e.target.value)} placeholder="Enter the Unique Id" style={CommonClass.input} />
            <input style={CommonClass.input} type='file' onChange={e => setFile(e.target.files[0])}></input>
            <Button title="Upload" onPress={handleUpload}/>
        </View>
    )
}