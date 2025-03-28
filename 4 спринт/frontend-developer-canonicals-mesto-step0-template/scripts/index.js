const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const profileFormElement  = profilePopup.querySelector('.popup__form');

// поля ввода в попапе профеля
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const descriptionInput = profileFormElement.querySelector('.popup__input_type_description');


// Функция открытия попапа
function openModal(popup) {
    nameInput.value = profileTitle.textContent;
    descriptionInput.value = profileDescription.textContent;
    popup.classList.add('popup_is-opened');
}

// Функция закрытия попапа
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

// Обработчики для профиля
const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const buttonCloseProfileEdit = profilePopup.querySelector('.popup__close');

buttonOpenProfileEdit.addEventListener('click', function(){
    openModal(profilePopup);
});

buttonCloseProfileEdit.addEventListener('click', function(){
    closeModal(profilePopup);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    closeModal(profilePopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

const profileAddButton = document.querySelector('.profile__add-button')
const buttonCloseAdd = cardPopup.querySelector('.popup__close');

profileAddButton.addEventListener('click', function(){
    openModal(cardPopup);
});

buttonCloseAdd.addEventListener('click', function(){
    closeModal(cardPopup);
});

const cardFormElemnt = cardPopup.querySelector('.popup__form');

// поля ввода в попапе добавления места
const namePlaces = cardFormElemnt.querySelector('.popup__input_type_card-name');
const urlPlaces = cardFormElemnt.querySelector('.popup__input_type_url');

// Обработчик «отправки» формы
function handleCardFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    const newCard = {
        name: namePlaces.value,
        link: urlPlaces.value
    }

    initialCards.unshift(newCard);
    /*renderInitialCards(); плчему без этого работает*/

    const cardsContainer = document.querySelector('.places__list');
    cardsContainer.prepend(createCard(newCard));    /*метод, который вставляет элемент в начало контейнера*/

    closeModal(cardPopup);
}

cardFormElemnt.addEventListener('submit', handleCardFormSubmit );



// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
