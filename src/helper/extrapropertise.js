export const SchemaTypes = {
    Number: "numeric",
    String: "text",
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

export const urlHead = 'backend-client-management.vercel.app/auth'
export const users = "Users"
export const NODATA = "NoData"
export const JPG_CONTENT_TYPE = 'image/jpeg'
export const PNG_CONTENT_TYPE = 'image/png'
export const PDF_CONTENT_TYPE = "application/pdf"
export const INVALID_DATE = "Invalid Date"
export const Propertylist = {
    title: {
        name: "title",
        placeholder: "title",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    clientName: {
        name: "clientName",
        placeholder: "clientName",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    projectType: {
        name: "projectType",
        placeholder: "projectType",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    projectHead: {
        name: "projectHead",
        placeholder: "projectHead",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    rccDesignerName: {
        name: "rccDesignerName",
        placeholder: "rccDesignerName",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    BuildingApprovalDate: {
        name: "BuildingApprovalDate",
        placeholder: "Building Approval Date",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.DATE
    },
    plinth: {
        name: "plinth",
        placeholder: "plinthDate",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.DATE
    },
    buildingCompletionDate: {
        name: "buildingCompletionDate",
        placeholder: "buildingCompletionDate",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.DATE
    }, pan: {
        name: "pan",
        placeholder: "pan",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    adhar: {
        name: "adhar",
        placeholder: "adhar",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    pin: {
        name: "pin",
        placeholder: "pin",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    email: {
        name: "email",
        placeholder: "email",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.EMAIL
    },
    PresentationDraw: {
        name: "PresentationDraw",
        placeholder: "PresentationDraw",
        style: {
            height: '30px',
            borderColor: 'gray',
            // borderWidth: '1px',
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
            // borderWidth: '1px',
            marginTop: '10px'
        },
        type: SchemaTypes.file
    },
    AllFloorPlan: {
        name: "AllFloorPlan",
        placeholder: "AllFloorPlan",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    }, AllElevation: {
        name: "AllElevation",
        placeholder: "AllElevation",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    }, toilet: {
        name: "toilet",
        placeholder: "Plumbing toilet",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    }, submissionDate: {
        name: "submissionDate",
        placeholder: "submissionDate",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.DATE
    }, Plint: {
        name: "Plint",
        placeholder: "Plint",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    RevisedSactionDate: {
        name: "RevisedSactionDate",
        placeholder: "RevisedSactionDate",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.DATE
    },
    CompletionDate: {
        name: "CompletionDate",
        placeholder: "CompletionDate",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.DATE
    },
    RCCDrawing1: {
        name: "RCCDrawing1",
        placeholder: "RCCDrawing1",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    RCCDrwaing2: {
        name: "RCCDrwaing2",
        placeholder: "RCCDrwaing2",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    ColumnFooting: {
        name: "ColumnFooting",
        placeholder: "ColumnFooting",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    PleanthBeam: {
        name: "PleanthBeam",
        placeholder: "PleanthBeam",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    StairCaseDraw: {
        name: "StairCaseDraw",
        placeholder: "StairCaseDraw",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    Slab: {
        name: "Slab",
        placeholder: "Slab",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    SecondSlab: {
        name: "SecondSlab",
        placeholder: "SecondSlab",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    ThirdSlab: {
        name: "ThirdSlab",
        placeholder: "ThirdSlab",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    pleanthCompletion: {
        name: "pleanthCompletion",
        placeholder: "pleanthCompletion",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    SanctionDrawing: {
        name: "SanctionDrawing",
        placeholder: "SanctionDrawing",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    }
    ,
    SanctionLetter: {
        name: "SanctionLetter",
        placeholder: "SanctionLetter",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    ReviseSanction: {
        name: "ReviseSanction",
        placeholder: "ReviseSanctionDrawing",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    CompletionLetter: {
        name: "CompletionLetter",
        placeholder: "CompletionLetter",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    Drawing: {
        name: "Drawing",
        placeholder: "Drawing",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    CardFile: {
        name: "CardFile",
        placeholder: "Card file",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    Map: {
        name: "Map",
        placeholder: "Map file",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    gsNo: {
        name: "gsNo",
        placeholder: "gsNo file",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    gsfile: {
        name: "gsfile",
        placeholder: "Gs file",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    mahareraNo: {
        name: "mahareraNo",
        placeholder: "mahareraNo ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    mahareraFile: {
        name: "mahareraFile",
        placeholder: "maharera File ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    institudeNo: {
        name: "institudeNo",
        placeholder: "institudeNo ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    panFile: {
        name: "panFile",
        placeholder: "panFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    adharFile: {
        name: "adharFile",
        placeholder: "adharFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    additionalDetailCommentRemark: {
        name: "additionalDetailCommentRemark",
        placeholder: "additionalDetailCommentRemark ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },
    CompletionDrawingFile: {
        name: "CompletionDrawingFile",
        placeholder: "CompletionDrawingFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    AllSectionFile: {
        name: "AllSectionFile",
        placeholder: "AllSectionFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    AllElectricDrawingFile: {
        name: "AllElectricDrawingFile",
        placeholder: "AllElectricDrawingFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    AllGrillsAndRailingFile: {
        name: "AllGrillsAndRailingFile",
        placeholder: "AllGrillsAndRailingFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    tileLayoutFile: {
        name: "tileLayoutFile",
        placeholder: "tileLayoutFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    ReviseSanctionLetterFile: {
        name: "ReviseSanctionLetterFile",
        placeholder: "ReviseSanctionLetterFile ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.file
    },
    siteAddress: {
        name: "siteAddress",
        placeholder: "siteAddress ",
        style: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        type: SchemaTypes.String
    },

}

export const Section6 = [
    Propertylist.SanctionDrawing,
    Propertylist.SanctionLetter,
    Propertylist.pleanthCompletion,
    Propertylist.ReviseSanctionLetterFile,
    Propertylist.ReviseSanction,//file
    Propertylist.CompletionLetter,//file
    Propertylist.Drawing,//file
    Propertylist.CompletionDate,
    Propertylist.CompletionDrawingFile//file
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
    Propertylist.siteAddress,
    Propertylist.CardFile,//file
    Propertylist.Map,//file
    Propertylist.gsNo,//String
    Propertylist.gsfile,//file
    Propertylist.mahareraNo,//String
    Propertylist.mahareraFile,//file
    Propertylist.institudeNo,//String
    Propertylist.pan,
    Propertylist.panFile,//file
    Propertylist.adharFile,//file
    Propertylist.adhar,
    Propertylist.email,
    Propertylist.additionalDetailCommentRemark,//string
]

export const Section4 = [
    Propertylist.AllFloorPlan,//file
    Propertylist.AllElevation,//file
    Propertylist.AllSectionFile,//file
    Propertylist.AllElectricDrawingFile,//file
    Propertylist.AllGrillsAndRailingFile,//file
    Propertylist.tileLayoutFile,//file
    Propertylist.toilet,
    Propertylist.ColumnFooting,
    Propertylist.PleanthBeam,
    Propertylist.StairCaseDraw,
    Propertylist.CompletionDate
]

export const Section5 = [
    Propertylist.Slab// we can add multiple slab file 
]