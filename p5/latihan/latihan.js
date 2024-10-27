
let submitForm = document.getElementById('submitForm')
// input
let Username = document.getElementById('Username')
let nama = document.getElementById('nama')
let alamat = document.getElementById('alamat')
let stambuk = document.getElementById('stambuk')
let NoTelp = document.getElementById('NoTelp')

// text
let UsernameText = document.getElementById('UsernameText')
let namaText = document.getElementById('namaText')
let alamatText = document.getElementById('alamatText')
let stambukText = document.getElementById('stambukText')
let NoTelpText = document.getElementById('NoTelpText')



submitForm.addEventListener('submit', function(event){
    // validasi
    // 
    let errorUsername = document.getElementById('errorUsername')
    let errorNama = document.getElementById('errorNama')
    let errorAlamat = document.getElementById('errorAlamat')
    let errorStambuk = document.getElementById('errorStambuk')
    let errorNoTelp = document.getElementById('errorNoTelp')
    
    
    
    
    event.preventDefault()

    let valid = true
    // validasi username

    if (Username.value == ''|| Username.value == null) {
        errorUsername.innerHTML = 'Username Tidak Boleh Kosong'
        valid = false

    }
    else if (Username.value.length < 3){
        errorUsername.innerHTML = 'Username minimal 3 karakter'
        valid = false
    }
    else if (Username.value.length > 30){
        errorUsername.innerHTML = 'Username maksimal 30 karakter'
        valid = false
        
    }
    else {
        errorUsername.innerHTML = ''
    }

    // validasi nama
    if (nama.value == '' || nama.value == null){
        errorNama.innerHTML = 'Nama tidak boleh kosong'
        valid = false
    }
    else if (nama.value.length < 3){
        errorNama.innerHTML = 'Nama minimal 3 karakter'
        valid = false
    }
    else {
        errorNama.innerHTML = ''
    }


    // validasi alamat
    if (alamat.value == '' || alamat.value == null){
        errorAlamat.innerHTML = 'Alamat tidak boleh kosong'
        valid = false
    }
    else if (alamat.value.length < 10){
        errorAlamat.innerHTML = 'Alamat minimal 10 karakter'
        valid = false
    }
    else {
        errorAlamat.innerHTML = ''
    }


    // validasi stambuk

    if (stambuk.value == ''|| stambuk.value == null) {
        errorStambuk.innerHTML = 'Stambuk Tidak Boleh Kosong'
        valid = false

    }
    else if (stambuk.value.length > 6){
        errorStambuk.innerHTML = 'Stambuk maksimal 6 karakter'
        valid = false
        
    }
    else {
        errorStambuk.innerHTML = ''
    }

    
    // validasi no telpon

    if (NoTelp.value == ''|| NoTelp.value == null) {
        errorNoTelp.innerHTML = 'No telpon Tidak Boleh Kosong'
        valid = false

    }
    else if (NoTelp.value.length < 10){
        errorNoTelp.innerHTML = 'No telpon minimal 10 karakter'
        valid = false
    }
    else if (NoTelp.value.length > 13){
        errorNoTelp.innerHTML = 'No telpon maksimal 13 karakter'
        valid = false
        
    }
    else {
        errorNoTelp.innerHTML = ''
    }


    // jika berhasil / tidak submit form
    if (valid){
        UsernameText.innerHTML= 'Username : ' + Username.value
        namaText.innerHTML='Nama :' + nama.value
        alamatText.innerHTML='Alamat : ' + alamat.value
        stambukText.innerHTML = 'Stambuk : '+ stambuk.value
        NoTelpText.innerHTML = 'No Telp : '+ NoTelp.value
    }
    else {
        UsernameText.innerHTML = 'Username :'
        namaText.innerHTML = 'Nama : '
        alamatText.innerHTML = 'Alamat : '
        stambukText.innerHTML = 'Stambuk : '
        NoTelpText.innerHTML = 'No Telp : '


    }
    
    


})
