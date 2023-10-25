const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

function sendEmail(e) {
    e.preventDefault();

    if (name === '' | email === '' | message === '') {
        alert("Os Campos não fora preenchidos corretamentes!")
        return;
    }

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }
    emailjs.send("service_ez28ub5", "template_coz0a2j", templateParams, "ijrW80v11RoGryDbi")
        .then((response) => {
            alert("Email Enviado Consucesso:", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (erro) => {
            console.log("Ocorreu um erro: ", erro)
        })
}