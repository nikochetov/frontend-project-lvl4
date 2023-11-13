export default {
  translation: {
    authForm: {
      authorization: 'Авторизация',
      register: 'Регистрация',
      login: 'Войти',
      logout: 'Выйти',
      username: 'Имя пользователя',
      password: 'Пароль',
      passwordConfirmation: 'Подтверждение пароля',
      placeholder: {
        enterUsername: 'Введите имя пользователя',
        enterPassword: 'Введите пароль',
        passwordConfirmation: 'Подтвердите пароля',
      },
      actions: {
        register: 'Зарегистрироваться',
        login: 'Войти',
      },
      errors: {
        wrongUsernameOrPassword: 'Неверный логин и/или пароль',
        userExist: 'Пользователь уже существует',
      },
    },
    channels: {
      channels: 'Каналы',
      addChannel: 'Добавить канал',
    },
    messages: {
      messages: 'Сообщения',
      sendMessage: 'Отправить сообщение',
      enterMessage: 'Введите сообщение...',
    },
    actions: {
      rename: 'Переименовать',
      remove: 'Удалить',
      cancel: 'Отмена',
      add: 'Добавить',
    },
    validation: {
      range: 'От {{from}} до {{to}} символов',
      min: 'Не менее {{count}} символов',
      max: 'Не более {{count}} символов',
      notEqualPasswords: 'Пароли должны совпадать',
      required: 'Обязательное поле',
      channelExist: 'Канал уже существует',
    },
    modal: {
      addChannel: 'Добавление канала',
      removeChannel: 'Удаление канала',
      renameChannel: 'Переименование канала',
      form: {
        enterChannelName: 'Введите название канала',
      },
      message: {
        removeConfirm: 'Вы действительно хотите удалить канал',
      },
    },
    connectNotification: {
      success: 'Соединение восстановлено',
      error: 'Ошибка соединения',
    },
  },
};
