document.querySelector('.img-btn').addEventListener('click',function()
{
    document.querySelector('.cont').classList.toggle('s-signup')
}
)

// Mong muốn của chúng ta 
validator({
    form: '#form-sign-up',
    rules: [
        validator.isRequired('#fullname'),
        validator.isEmail('#email'),
    ]
})