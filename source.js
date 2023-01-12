function aesDecrypt(aes_key){
    var ciphertext = "97f677e1d503f71eefb344d4352773f1ac8b9913a307b1b9856d1709865468ddc4fecfcd894b020717bd7037c4a4faa27d467b3def8adeacd031a15fb4085078cfd001f5e6135daa19453736e3931c1e7e6b2cedcb7474d89a4faedfb7a6afca1e461c7d16f2f8ae4881a8abcf401950d8b7c96c75d19079231696af2ffce8bab6b9aabf76b4860273afc3eb6901264038782795b6a88bb3f4f8c62965466855f387c86cb18bff92c80b0f9b96b43337644efc9eea1b54b0395f245e96acf5b80ed5f14949af328c8b5d70dc433f6cd68f18b7e231edbb6cf745886e434e5137b39ba8f73dba7d453f725e9b9da62f787462175fde4fed9d14700951caff3a02a7754519b965ef8d372efc8ec35a6d8b5e6ac6a9ed82ea5564c2a928d62ca5c4178efd1790bddb6ccb9930ca8293e9ec";
    var key = aes_key + aes_key + "!!"
    var iv = "hohohohohohohoho";

    var ciphertextWA = CryptoJS.enc.Hex.parse(ciphertext);
    var keyWA = CryptoJS.enc.Utf8.parse(key);
    var ivWA = CryptoJS.enc.Utf8.parse(iv);
    var ciphertextCP = { ciphertext: ciphertextWA };

    var decrypted = CryptoJS.AES.decrypt(
        ciphertextCP,
        keyWA, 
        { iv: ivWA }
    );
    
    decr = decrypted.toString(CryptoJS.enc.Utf8)

    document.getElementById('decrypted').innerHTML = decr
}

//xor = perfektne bezpecna kryptografia
function xorStrings(str, key){
    var result = '';
    for (var i = 0; i < str.length; i++){
        result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function decipher(){
    var v = document.getElementById('input').value

    var xorKey = atob('c3RyYXNuZXRham55a2x1Yw==')
    if (btoa(xorStrings(md5(v), xorKey)) == 'Fk0WBxJbARZVC1tMWQ1GB0REF1FHCFNAUVoISA9VRVA='){
        aesDecrypt(v)
    } else {
        alert('Nesprávny kód!!!')
    }
}