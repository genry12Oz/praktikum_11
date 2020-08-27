export const config = {
    cardsUrl: (NODE_ENV === 'development') ? 'http://nomoreparties.co/cohort9/cards' : 'https://nomoreparties.co/cohort9/cards',
    infoUrl: (NODE_ENV === 'development') ? 'http://nomoreparties.co/cohort9/users/me': 'https://nomoreparties.co/cohort9/users/me',
    options: {
        headers: {
            authorization: 'cbb262b1-dd93-4685-a69f-8e082b08e5ce'
          }
    }
}