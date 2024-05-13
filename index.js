//Binary To Decimal Conversion - İkilik Saydan Onluğ Saya Keçid


let binary = "10110010101";

function convertBinaryToDecimal(binary) {

    let cəm = 0;
    let üst = 0;

    for (let i = binary.length - 1; i >= 0; i--) {

        if (Number(binary.charAt(i)) != 0) {
            cəm += Number(binary.charAt(i)) * Math.pow(2, üst);
        }
        üst++;
    }

    console.log("Nəticə : " + cəm);
}
convertBinaryToDecimal(binary);