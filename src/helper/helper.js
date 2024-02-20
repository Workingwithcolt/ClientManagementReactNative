export const blobToBase64 = async (blob) => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();

        reader.onloadend = function () {
            var pdfBase64Data = reader.result;
            resolve(pdfBase64Data);
        };

        reader.onerror = function (error) {
            reject(error);
        };

        reader.readAsDataURL(blob);
    });
};

export function deepCopyObject(fromObject) {
    return JSON.parse(JSON.stringify(fromObject));
}

export const getIndex = (obj)=>{
    if(!obj || Object.keys(obj) === 0){
        return 1;
    }
    return Object.keys(obj).length + 1;
}