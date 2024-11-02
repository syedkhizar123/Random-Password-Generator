function password_generator(){
    var random_keys = "!@#$%^&*abcdefghijklmnopqr123456789stuvwxyz1234567890!@#$%^&*ABCDEFGHIJKLMNOPQR123456789STUVWXYZ!@#$%^&*_"
    var random_password = ""
    for (var i = 0; i < 10; i++) {
        random_password += random_keys[Math.floor(Math.random() * random_keys.length)]
    }
    document.getElementById("passvalue").innerHTML = `<span>${random_password}</span>`
}
