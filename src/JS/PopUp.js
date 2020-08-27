export default class PopUp {
    constructor(userInfo, cardList) {
        this.editButton = document.querySelector('.user-info__button_edit');
        this.addButton = document.querySelector('.user-info__button_add');

        this.container = document.querySelector('.popup');

        this.popUpForm = document.querySelector('.popup__content');
        this.form = document.querySelector('.popup__form');
        this.inputName = document.querySelector('.popup__input_type_name');      
        this.inputAbout = document.querySelector('.popup__input_type_about');
        this.popUpTitle = document.querySelector('.popup__title');
        this.popUpButton = document.querySelector('.popup__button');
        this.closeButtonForm = document.querySelector('.popup__close');

        this.userInfo = userInfo;
        this.cardList = cardList;

        this.setEventListener();
    }

    open(type) {
        this.container.classList.add('popup_is-opened');

        if (type === 'userInfo') {
            this.setInfoProps();
        } else if (type === 'newCard') {
            this.setCardProps();
        }
    }

    close() {
        this.container.classList.remove('popup_is-opened');
        this.popUpButton.classList.remove('popup__button_edit');
        this.popUpButton.classList.remove('popup__button_content');
        this.popUpButton.classList.remove('popup__button_valid');

        this.form.removeAttribute('name');
        this.inputAbout.removeAttribute('type', 'url');
        
    }

    setInfoProps() {
        this.popUpButton.classList.add('popup__button_edit');
        this.popUpTitle.textContent = 'Редактировать профиль';
        this.inputName.placeholder = 'Имя';                  
        this.inputAbout.placeholder = 'О себе';                   
        this.popUpButton.textContent = 'Сохранить';

        this.inputName.value = this.userInfo.setUserInfo('name');
        this.inputAbout.value = this.userInfo.setUserInfo('about');
        this.popUpButton.classList.add('popup__button_valid');

        this.form.setAttribute('name', 'about');

        this.inputName.setAttribute('minlength', '2');                     
        this.inputName.setAttribute('maxlength', '30');
        this.inputAbout.setAttribute('minlength', '2');                     
        this.inputAbout.setAttribute('maxlength', '30');
    }

    setCardProps() {
        this.popUpButton.classList.add('popup__button_content');
        this.popUpTitle.textContent = 'Новое место';
        this.inputName.placeholder = 'Название';   
        this.inputAbout.placeholder = 'Ссылка на картинку';     
        this.inputName.value = '';
        this.inputAbout.value = '';
        this.popUpButton.textContent = '+';

        this.form.setAttribute('name', 'new');
        
        this.inputName.setAttribute('minlength', '2');                     
        this.inputName.setAttribute('maxlength', '30');                    
        this.inputAbout.setAttribute('type', 'url');
    }

    setEventListener() {
        this.editButton.addEventListener('click', () => this.open('userInfo'));
        this.addButton.addEventListener('click', () => this.open('newCard'));
        this.closeButtonForm.addEventListener('click', event => this.close());
    }
}