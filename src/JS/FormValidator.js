export default class FormValidator {
    constructor(userInfo, cardList, popUp) {
        this.form = document.querySelector('.popup__form');
        this.inputName = document.querySelector('.popup__input_type_name');      
        this.inputAbout = document.querySelector('.popup__input_type_about');

        // Errors
        this.nameError = document.getElementById('error-name');
        this.aboutError = document.getElementById('error-about');

        this.cardList = cardList;
        this.userInfo = userInfo;
        this.popUp = popUp;

        this.setEventListeners();
    }

    chooseForm() {
        if (this.form.getAttribute('name') === 'new') {
            this.cardList.addCard(this.inputName.value, this.inputAbout.value);
            this.popUp.close();
        } else if (this.form.getAttribute('name') === 'about') {
            this.userInfo.updateUserInfo(this.inputName.value, this.inputAbout.value);
        } 
    }

    checkInputValidity(event) {
        // отмена дефолтного действия submit                                              
        event.preventDefault();

        // за основу взял пример из лекции, задаю перменную по которой буду проверять валидность
        let isValidForm = true;

        const inputs = Array.from(this.form.elements);

        if (!this.validate()) {
            isValidForm = false;
            console.log('form is still not validated');
        } else {
            this.chooseForm();
            console.log('success!');
        }
    }

    validate() {
        // для поля name
        let validName = () => {
            if (!this.form.elements.name.checkValidity()) {
                	// Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов' 
                    // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
                    // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
                    // Далее words передаётся в функцию и используется.
                this.nameError.textContent = 'Это обязательное поле';
                return false;
            } else {
                this.nameError.textContent = '';
                return true;
            }
        }

        // для поля about
        let validAbout = () => {
            if (!this.form.elements.about.checkValidity()) {
                this.aboutError.textContent = 'Это обязательное поле';
                return false;
            } else {
                this.aboutError.textContent = '';
                return true;
            }
        }
        
        validName();
        validAbout();

        // вернет true или false
        return validName() && validAbout();
    }

    // индивидуальная проверка на валидацию поля name
    checkName() {
        if (!this.form.elements.name.checkValidity()) {
            if (this.form.elements.name.value === '') {
                this.nameError.textContent = 'Это обязательное поле';
            } else {
                this.nameError.textContent = 'Должно быть от 2 до 30 символов';
            }
            return true;
        } else {
            this.nameError.textContent = '';
            return false;
        }
    }

    // индивидуальная проверка на валидацию поля about
    checkAbout() {
        if (this.form.getAttribute('name') === 'new') {
            if (!this.form.elements.about.checkValidity()) {
                if (this.form.elements.about.value === '') {
                    this.aboutError.textContent = 'Это обязательное поле';
                } else {
                    this.aboutError.textContent = 'Здесь должна быть ссылка';
                }
                return true;
            } else {
                this.aboutError.textContent = '';
                return false;
            }
        } else {
            if (!this.form.elements.about.checkValidity()) {
                if (this.form.elements.about.value === '') {
                    this.aboutError.textContent = 'Это обязательное поле';
                } else {
                    this.aboutError.textContent = 'Должно быть от 2 до 30 символов';
                }
                return true;
            } else {
                this.aboutError.textContent = '';
                return false;
            }
        }
    }

    setSubmitButtonState() {
        if ((this.form.elements.about.checkValidity()) && (this.form.elements.name.checkValidity())) {
            this.form.submit.classList.add('popup__button_valid');
        } else {
            this.form.submit.classList.remove('popup__button_valid');
        }
    }

    setEventListeners() {
        this.form.submit
            .addEventListener('click', event => this.checkInputValidity(event));

        this.form.elements.name
            .addEventListener('input', this.checkName.bind(this));

        this.form.elements.about
            .addEventListener('input', this.checkAbout.bind(this));

        this.form
            .addEventListener('input', this.setSubmitButtonState.bind(this));
    }
}

