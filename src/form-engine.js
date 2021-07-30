// animated form by devEd
function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling


            //  Check for validation
            if (input.type === 'text' && validateUser(input)) {
                // progress indicator
                gsap.to('#namePass', {
                    duration: 0.5,
                    backgroundColor: '#23c552'
                });

                gsap.from(nextForm, {
                    duration: 0.5,
                    y: 50,
                    ease: 'sine'
                });

                nextField(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                // progress indicator

                gsap.to('#emailPass', {
                    duration: 0.5,
                    backgroundColor: '#23c552'
                });
                gsap.from(nextForm, {
                    duration: 0.5,
                    y: 50,
                    ease: 'sine'
                });
                // input.addEventListener('keypress', e => {
                //     if (e.key == 'g') {
                //         console.log(e)
                //         nextField(parent, nextForm)

                //     }
                //     console.log(e)
                // })
                nextField(parent, nextForm)
            } else if (input.tagName === 'TEXTAREA' && validateMessage(input)) {
                // progress indicator
                gsap.to('#messagePass', {
                    duration: 0.5,
                    backgroundColor: '#23c552'
                });
                // next field animation
                gsap.from(nextForm, {
                    duration: 0.5,
                    y: 50,
                    ease: 'sine'

                });

                nextField(parent, nextForm)
            } else if (input.type === 'submit') {
                // nextField(parent, nextForm)
            } else {
                // parent.style.animation = 'shake 0.5s ease'
                // gsap.from(parent, {
                //     duration: 0.5,
                //     rotate: 10,
                //     ease: 'bounce'
                // });
                // gsap.from('.form-progress-bar', {
                //     duration: 0.5,
                //     y: -20,
                //     ease: 'bounce'
                // });
            }
            // get rid of animation
            // parent.addEventListener('animationend', () => {
            //     parent.style.animation = ''
            // })
        })
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log('not enough characters')
        error('#F84F31', user)
    } else {
        // error('#23c552', user);
        return true
    }
}

function validateMessage(message) {
    if (message.value.length < 6) {
        console.log('not enough characters')
        error('#F84F31', message)
    } else {
        // error('#23c552', message);

        return true
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        return true;
    } else {
        error('#F84F31', email)
    }
}

document.querySelector('.contact-form-parent form').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()

    gsap.to('#submitPass', {
        duration: 0.5,
        backgroundColor: '#23c552'
    });
    // next field animation
    gsap.from('.field-finish', {
        duration: 0.5,
        y: 50,
        ease: 'sine'

    });
    // gsap.to('.contact-form-wrapper', {
    //     duration: 1.5,
    //     backgroundColor: 'navy',
    //     ease: 'sine'
    // });
    document.querySelector('form').reset()

    document.querySelector('.field-submit').classList.add('inactive')
    document.querySelector('.field-submit').classList.remove('active')
    document.querySelector('.field-finish').classList.add('active')

}


function nextField(parent, nextForm) {

    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color, e) {
    let parent = e.parentElement
    // gsap.to('', {
    //     duration: 0.5,
    //     backgroundColor: 'navy'
    // });
    if (parent.classList.contains('field-name')) {
        gsap.to('#namePass', {
            duration: 0.5,
            backgroundColor: color
        });
        gsap.from('#namePass', {
            duration: 0.5,
            y: -20,
            ease: 'bounce'
        });
    } else if ((parent.classList.contains('field-email'))) {
        gsap.to('#emailPass', {
            duration: 0.5,
            backgroundColor: color
        });
        gsap.from('#emailPass', {
            duration: 0.5,
            y: -20,
            ease: 'bounce'
        });
    } else if ((parent.classList.contains('field-message'))) {
        gsap.to('#messagePass', {
            duration: 0.5,
            backgroundColor: color
        });
        gsap.from('#messagePass', {
            duration: 0.5,
            y: -20,
            ease: 'bounce'
        });
    }
}

animatedForm();
document.querySelector('.field-email input').addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        e.preventDefault()

    }
})