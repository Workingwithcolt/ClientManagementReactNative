export const SchemaTypes = {
    Number: "Number",
    String: "String",
    UUID: "UUID",
    KN_PAN: "KN_PAN",
    KN_PIN: "KN_PIN",
    KN_GSTIN: "KN_GSTIN",
    DATE: "date",
    radio: "radio",
    file: "file",
    EMAIL: "email",
    IMAGE: "image",
    ADHAR_CARD: "aadharCard",
    DROP_DOWN: "dropdown",
    headline: "Headline",
    PASSWORD: "password",
    Password: "password",
    STD_DROPDOWN: "standarddropdown",
    checkbox: "checkbox",
    DIV_DROPDOWN: "divisiondropdown",
    PHONE_NUMBER: "PHONE_NUMBER",
    IFSC_CODE: "IFSC_CODE",
    ESTD: "ESTD",
    UDISE: "UDISE",
    USER_LEVEL_DROPDOWN: "userleveldropdown",
    TextArea: "TextArea",
    Title: "title"
}

export const urlHead = 'localhost:3000/auth'
export const users = "Users"
export const NODATA = "NoData"
export const JPG_CONTENT_TYPE = 'image/jpeg'
export const PNG_CONTENT_TYPE = 'image/png'
export const PDF_CONTENT_TYPE = "application/pdf"

export const Propertylist = {
    title: {
        name: "title",
        placeholder: "title",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    clientName: {
        name: "clientName",
        placeholder: "clientName",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    projectType: {
        name: "projectType",
        placeholder: "projectType",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    projectHead: {
        name: "projectHead",
        placeholder: "projectHead",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    rccDesignerName: {
        name: "rccDesignerName",
        placeholder: "rccDesignerName",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    BuildingApprovalDate: {
        name: "BuildingApprovalDate",
        placeholder: "Building Approval Date",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.DATE
    },
    plinth: {
        name: "plinth",
        placeholder: "plinth",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    buildingCompletionDate: {
        name: "buildingCompletionDate",
        placeholder: "buildingCompletionDate",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    }, pan: {
        name: "pan",
        placeholder: "pan",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    adhar: {
        name: "adhar",
        placeholder: "adhar",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    pin: {
        name: "pin",
        placeholder: "pin",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    email: {
        name: "email",
        placeholder: "email",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.EMAIL
    },
    PresentationDraw: {
        name: "PresentationDraw",
        placeholder: "PresentationDraw",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    FileModel3D: {
        name: "FileModel3D",
        placeholder: "FileModel3D",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    AllFloorPlan: {
        name: "AllFloorPlan",
        placeholder: "AllFloorPlan",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    }, AllElevation: {
        name: "AllElevation",
        placeholder: "AllElevation",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    }, toilet: {
        name: "toilet",
        placeholder: "toilet",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    }, submissionDate: {
        name: "submissionDate",
        placeholder: "submissionDate",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.DATE
    }, Plint: {
        name: "Plint",
        placeholder: "Plint",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    RevisedSactionDate: {
        name: "RevisedSactionDate",
        placeholder: "RevisedSactionDate",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.DATE
    },
    CompletionDate: {
        name: "CompletionDate",
        placeholder: "CompletionDate",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.DATE
    },
    RCCDrawing1: {
        name: "RCCDrawing1",
        placeholder: "RCCDrawing1",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    RCCDrwaing2: {
        name: "RCCDrwaing2",
        placeholder: "RCCDrwaing2",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    ColumnFooting: {
        name: "ColumnFooting",
        placeholder: "ColumnFooting",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    PleanthBeam: {
        name: "PleanthBeam",
        placeholder: "PleanthBeam",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    StairCaseDraw: {
        name: "StairCaseDraw",
        placeholder: "StairCaseDraw",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    Slab: {
        name: "Slab",
        placeholder: "Slab",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    SecondSlab: {
        name: "SecondSlab",
        placeholder: "SecondSlab",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    ThirdSlab: {
        name: "ThirdSlab",
        placeholder: "ThirdSlab",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    pleanthCompletion: {
        name: "pleanthCompletion",
        placeholder: "pleanthCompletion",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.String
    },
    SanctionDrawing: {
        name: "SanctionDrawing",
        placeholder: "SanctionDrawing",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    }
    ,
    SanctionLetter: {
        name: "SanctionLetter",
        placeholder: "SanctionLetter",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    ReviseSanction: {
        name: "ReviseSanction",
        placeholder: "ReviseSanction",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    CompletionLetter: {
        name: "CompletionLetter",
        placeholder: "CompletionLetter",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    Drawing: {
        name: "Drawing",
        placeholder: "Drawing",
        style: {
            height: '30px',
            borderColor: 'gray',
            borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    }
}

export const Section6 = [
    Propertylist.SanctionDrawing,
    Propertylist.SanctionLetter,
    Propertylist.pleanthCompletion,
    Propertylist.ReviseSanction,
    Propertylist.CompletionLetter,
    Propertylist.Drawing
]
export const Section1 = [
    Propertylist.title,
    Propertylist.clientName,
    Propertylist.projectType,
    Propertylist.projectHead,
    Propertylist.rccDesignerName,
    Propertylist.BuildingApprovalDate,
    Propertylist.plinth,
    Propertylist.buildingCompletionDate,
    Propertylist.pin,
    Propertylist.pan,
    Propertylist.adhar,
    Propertylist.email
]

export const Section4 = [
    Propertylist.AllFloorPlan,
    Propertylist.AllElevation,
    Propertylist.toilet,
    Propertylist.CompletionDate
]

export const Section5 = [
    Propertylist.ColumnFooting,
    Propertylist.PleanthBeam,
    Propertylist.StairCaseDraw,
]