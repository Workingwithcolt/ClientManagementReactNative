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