function myFunction() {
    // create varible to hold random letters and numbers 
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < 20; i++) {
        let generate = letters[Math.floor(Math.random() * 64)];
        password += generate;

    }


    document.getElementById("test").innerHTML = password;
}
