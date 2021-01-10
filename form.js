var firebaseConfig = {
    apiKey: "AIzaSyCnfRcx-ZKrZOFVSb5QNmLv9rfPiFv6pY8",
    authDomain: "ronaldlat-fa29e.firebaseapp.com",
    databaseURL: "https://ronaldlat-fa29e.firebaseio.com",
    projectId: "ronaldlat-fa29e",
    storageBucket: "ronaldlat-fa29e.appspot.com",
    messagingSenderId: "821082348263",
    appId: "1:821082348263:web:2dfc171fb7535e2aa3a042",
    measurementId: "G-4HDWP7Z1NS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//form handling

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Reference message collection
let verification = document.querySelector('.verification')


var messageRef = firebase.database().ref('messages');

let submitBtn = document.querySelector('.submit');
document.querySelector('form').addEventListener('submit', submitForm)



//submit form
function submitForm(e) {
    e.preventDefault()

    //get values
    let warning = document.querySelector('.warning')

    let name = getInputVal('#name')
    let email = getInputVal('#email')
    let phone = getInputVal('#phone')
    let time = firebase.database.ServerValue.TIMESTAMP
    let message = getInputVal('#message')

    if (name == '' || email == '' || phone == '' || message == '') {
        warning.style.display = 'block'

        setTimeout(() => {
            warning.style.display = 'none'

        }, 4000);
    } else {
        //save message
        saveMessage(name, phone, email, time, message)


    }

}

//function to get form values
function getInputVal(id) {
    return document.querySelector(id).value
}

//save message to  firebase
function saveMessage(name, phone, email, time, message) {


    let newMessageRef = messageRef.push();
    newMessageRef.set({
            name: name,
            email: email,
            phone: phone,
            message: message,
            time: time
        })
        .then(() => {

            document.querySelector('form').reset()

            verification.style.display = 'block'

            setTimeout(() => {
                verification.style.display = 'none'

            }, 4000);
        });
}