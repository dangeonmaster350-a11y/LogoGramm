document.addEventListener('DOMContentLoaded', () => {

    // === БАЗА ДАННЫХ (ДЕМО) ===
    // (С ID сообщений и новыми типами)
    const demoData = {
        chats: [{
                id: 'favorites',
                name: 'Избранное',
                originalName: 'Избранное',
                avatarInitials: '★',
                avatarColor: 'bg-amber-100 text-amber-600',
                lastMessage: 'Мои заметки и файлы...',
                time: '',
                online: false,
                isGroup: false,
                isFavorites: true,
                isChannel: false,
                info: {
                    email: 'my@fastmessage.com',
                    username: '@me',
                    status: 'Личные заметки'
                },
                messages: [{
                    id: 'fav_1',
                    from: 'me',
                    type: 'text',
                    text: 'Это ваше личное пространство. Сообщения здесь видите только вы.',
                    time: '12:00',
                    status: 'read'
                }]
            },
            {
                id: 'alisa',
                name: 'Алиса Грин',
                originalName: 'Алиса Грин',
                avatarInitials: 'АГ',
                avatarColor: 'bg-pink-200 text-pink-700',
                lastMessage: 'Хорошо, я посмотрю',
                time: '10:30',
                online: true,
                isGroup: false,
                isFavorites: false,
                isChannel: false,
                info: {
                    email: 'alisa.green@example.com',
                    username: '@alisagreen',
                    status: 'в сети'
                },
                messages: [{
                        id: 'a_1',
                        from: 'me',
                        type: 'text',
                        text: 'Привет! Как дела?',
                        time: '10:25',
                        status: 'read'
                    },
                    {
                        id: 'a_2',
                        from: 'them',
                        type: 'text',
                        text: 'Привет! Все отлично. Заканчиваю отчет.',
                        time: '10:26'
                    },
                    {
                        id: 'a_3',
                        from: 'them',
                        type: 'text',
                        text: 'Ты видел новый макет?',
                        time: '10:27'
                    },
                    {
                        id: 'a_4',
                        from: 'me',
                        type: 'text',
                        text: 'Да, выглядит супер. Только один момент...',
                        time: '10:28',
                        status: 'read'
                    },
                    {
                        id: 'a_5',
                        from: 'them',
                        type: 'text',
                        text: 'Какой?',
                        time: '10:29'
                    },
                    {
                        id: 'a_6',
                        from: 'me',
                        type: 'text',
                        text: "Кнопка 'Отправить' кажется немного большой.",
                        time: '10:29',
                        status: 'read'
                    },
                    {
                        id: 'a_7',
                        from: 'them',
                        type: 'text',
                        text: 'Хорошо, я посмотрю',
                        time: '10:30'
                    },
                ]
            },
            {
                id: 'marko',
                name: 'Марко Левин',
                originalName: 'Марко Левин',
                avatarInitials: 'МЛ',
                avatarColor: 'bg-indigo-200 text-indigo-700',
                lastMessage: 'Давай созвонимся позже',
                time: '09:15',
                online: false,
                isGroup: false,
                isFavorites: false,
                isChannel: false,
                info: {
                    email: 'marko.levin@example.com',
                    username: '@markolevin',
                    status: 'был 2 часа назад'
                },
                messages: [{
                        id: 'm_0',
                        date: 'Вчера'
                    },
                    {
                        id: 'm_1',
                        from: 'me',
                        type: 'text',
                        text: 'Марко, привет! Нужна твоя помощь по проекту.',
                        time: '17:30',
                        status: 'delivered'
                    },
                    {
                        id: 'm_2',
                        from: 'them',
                        type: 'text',
                        text: 'Привет. Сейчас занят, на встрече.',
                        time: '17:32'
                    },
                    {
                        id: 'm_3',
                        from: 'them',
                        type: 'text',
                        text: 'Давай созвонимся позже',
                        time: '17:32'
                    },
                ]
            },
            {
                id: 'dev',
                name: 'Команда разработки',
                originalName: 'Команда разработки',
                avatarInitials: 'КР',
                avatarColor: 'bg-purple-200 text-purple-700',
                lastMessage: 'Новая версия готова',
                time: '10:05',
                online: false,
                isGroup: true,
                isFavorites: false,
                isChannel: false,
                info: {
                    email: 'dev@fastmessage.com',
                    username: '@devs',
                    status: '5 участников'
                },
                messages: [{
                        id: 'd_1',
                        from: 'other',
                        name: 'Павел',
                        type: 'text',
                        text: 'Всем привет. Залил фиксы в dev-ветку.',
                        time: '09:45'
                    },
                    {
                        id: 'd_2',
                        from: 'me',
                        type: 'text',
                        text: 'Отлично, спасибо!',
                        time: '09:46',
                        status: 'sent'
                    },
                    {
                        id: 'd_3',
                        from: 'other',
                        name: 'Елена',
                        type: 'text',
                        text: 'Новая версия готова',
                        time: '10:05'
                    },
                ]
            },
            {
                id: 'design',
                name: 'Дизайн-студия',
                originalName: 'Дизайн-студия',
                avatarInitials: 'ДС',
                avatarColor: 'bg-teal-200 text-teal-700',
                lastMessage: 'Отправили обновлённый макет',
                time: 'Вчера',
                online: false,
                isGroup: true,
                isFavorites: false,
                isChannel: false,
                info: {
                    email: 'design@example.com',
                    username: '@designstudio',
                    status: '3 участника'
                },
                messages: [{
                    id: 'ds_1',
                    from: 'other',
                    name: 'Дизайнер',
                    type: 'text',
                    text: 'Отправили обновлённый макет',
                    time: '16:50'
                }, ]
            },
            {
                id: 'anna',
                name: 'Анна Петрова',
                originalName: 'Анна Петрова',
                avatarInitials: 'АП',
                avatarColor: 'bg-amber-200 text-amber-700',
                lastMessage: 'Перезвони, когда сможешь',
                time: 'Вчера',
                online: true,
                isGroup: false,
                isFavorites: false,
                isChannel: false,
                info: {
                    email: 'anna.petrova@example.com',
                    username: '@annapetrova',
                    status: 'в сети'
                },
                messages: [{
                    id: 'an_1',
                    from: 'them',
                    type: 'text',
                    text: 'Перезвони, когда сможешь',
                    time: '12:00'
                }, ]
            },
        ],
        currentUser: 'me',
        emojis: ['😀', '😂', '👍', '❤️', '😢', '🙏', '🔥', '🎉', '🤔', '👀', '👋', '💀']
    };

    // === ЭЛЕМЕНТЫ DOM ===
    // Элементы входа
    const loginScreen = document.getElementById('login-screen');
    const loginForm = document.getElementById('login-form');
    const phoneInput = document.getElementById('phone-input');
    const loginError = document.getElementById('login-error');
    const mainAppContainer = document.getElementById('main-app-container');

    // Элементы чата
    const chatListContainer = document.getElementById('chat-list-container');
    const messageList = document.getElementById('message-list');
    const messageForm = document.getElementById('message-input-form');
    const messageInput = document.getElementById('message-input');
    const typingIndicator = document.getElementById('typing-indicator');
    const typingName = document.getElementById('typing-name');
    const searchInput = document.getElementById('search-input'); // Поиск

    // Заголовки
    const chatHeaderAvatar = document.getElementById('chat-header-avatar');
    const chatHeaderName = document.getElementById('chat-header-name');
    const chatHeaderStatus = document.getElementById('chat-header-status');

    // Панели
    const chatWindowPanel = document.getElementById('chat-window-panel');
    const infoPanel = document.getElementById('info-panel');
    const settingsPanel = document.getElementById('settings-panel');

    // Правая панель (Инфо)
    const infoAvatar = document.getElementById('info-avatar');
    const infoName = document.getElementById('info-name');
    const infoNameInput = document.getElementById('info-name-input');
    const editNameBtn = document.getElementById('edit-name-btn');
    const saveNameBtn = document.getElementById('save-name-btn');
    const cancelNameBtn = document.getElementById('cancel-name-btn');
    const infoStatus = document.getElementById('info-status');
    const infoEmail = document.getElementById('info-email');
    const infoUsername = document.getElementById('info-username');
    const infoContactDetails = document.getElementById('info-contact-details');
    const infoChannelDetails = document.getElementById('info-channel-details');
    const infoChannelDescription = document.getElementById('info-channel-description');

    // Мобильные кнопки
    const burgerMenuBtn = document.getElementById('burger-menu-btn');
    const closeChatListBtn = document.getElementById('close-chat-list-btn');
    const infoToggleBtn = document.getElementById('info-toggle-btn');
    const closeInfoPanelBtn = document.getElementById('close-info-panel-btn');
    const chatListPanel = document.getElementById('chat-list-panel');

    // Настройки
    const settingsBtn = document.getElementById('settings-btn');
    const burgerMenuBtnSettings = document.getElementById('burger-menu-btn-settings');
    const settingsForm = document.getElementById('settings-form');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const soundToggle = document.getElementById('sound-toggle'); // Звук
    const logoutBtn = document.getElementById('logout-btn'); // Выход

    // Смайлики
    const emojiToggleBtn = document.getElementById('emoji-toggle-btn');
    const emojiPicker = document.getElementById('emoji-picker');

    // Форма ввода
    const attachBtn = document.getElementById('attach-btn');
    const sendBtn = document.getElementById('send-btn');
    const micBtn = document.getElementById('mic-btn');

    // Ответы
    const replyPreview = document.getElementById('reply-preview');
    const replyPreviewName = document.getElementById('reply-preview-name');
    const replyPreviewText = document.getElementById('reply-preview-text');
    const cancelReplyBtn = document.getElementById('cancel-reply-btn');

    // Новые элементы "Создать"
    const createNewBtn = document.getElementById('create-new-btn');
    const createNewMenu = document.getElementById('create-new-menu');
    const newGroupBtn = document.getElementById('new-group-btn');
    const newChannelBtn = document.getElementById('new-channel-btn');

    // Модальное окно Группы
    const createGroupModal = document.getElementById('create-group-modal');
    const cancelGroupBtn = document.getElementById('cancel-group-btn');
    const createGroupForm = document.getElementById('create-group-form');
    const groupContactsList = document.getElementById('group-contacts-list');
    const groupNameInput = document.getElementById('group-name-input');
    const groupError = document.getElementById('group-error');

    // Модальное окно Канала
    const createChannelModal = document.getElementById('create-channel-modal');
    const cancelChannelBtn = document.getElementById('cancel-channel-btn');
    const createChannelForm = document.getElementById('create-channel-form');
    const channelNameInput = document.getElementById('channel-name-input');
    const channelDescInput = document.getElementById('channel-desc-input');

    // Глобальное состояние
    let currentChatId = null;
    let isReplyingTo = null; // ID сообщения, на которое отвечаем
    let synth; // Для Tone.js

    // === ФУНКЦИИ ===

    /**
     * Рендерит список чатов слева
     */
    function renderChatList() {
        chatListContainer.innerHTML = '';
        demoData.chats.forEach(chat => {
            const isActive = chat.id === currentChatId;
            const activeClasses = isActive ? 'bg-highlight dark:bg-dark-highlight' : 'hover:bg-highlight dark:hover:bg-dark-highlight';

            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(chat.name)}&rounded=true&background=random&format=svg`;

            const chatCard = document.createElement('div');
            chatCard.className = `chat-card flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-colors duration-150 ${activeClasses}`;
            chatCard.dataset.chatid = chat.id;

            chatCard.innerHTML = `
                        <div class="relative flex-shrink-0">
                            <img src="${avatarUrl}" alt="${chat.name}" class="w-12 h-12 rounded-full bg-gray-200">
                            ${chat.online ? '<span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-ui-block rounded-full"></span>' : ''}
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-sm font-semibold text-text-main dark:text-dark-text-main truncate">${chat.name}</h3>
                            <p class="text-sm text-text-secondary dark:text-dark-text-secondary truncate">${chat.lastMessage}</p>
                        </div>
                        <span class="text-xs text-text-secondary dark:text-dark-text-secondary flex-shrink-0">${chat.time}</span>
                    `;

            // Обработчик клика
            chatCard.addEventListener('click', () => selectChat(chat.id));

            chatListContainer.appendChild(chatCard);
        });
    }

    /**
     * Выбирает чат и отображает его
     */
    function selectChat(chatId) {
        // Показать чат, скрыть настройки
        settingsPanel.classList.add('hidden');
        settingsPanel.classList.remove('flex');
        chatWindowPanel.classList.remove('hidden');
        chatWindowPanel.classList.add('flex');
        infoPanel.classList.remove('hidden');
        infoPanel.classList.add('lg:flex');

        // Сброс
        resetNameEditMode();
        cancelReply();

        currentChatId = chatId;
        const chat = demoData.chats.find(c => c.id === chatId);
        if (!chat) return;

        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(chat.name)}&rounded=true&background=random&format=svg`;

        // Обновляем шапку чата
        chatHeaderAvatar.src = avatarUrl;
        chatHeaderName.textContent = chat.name;

        // Обновляем правую панель
        infoAvatar.src = avatarUrl;
        infoName.textContent = chat.name;
        infoEmail.textContent = chat.info.email;
        infoUsername.textContent = chat.info.username;

        // --- ЛОГИКА ДЛЯ КАНАЛОВ И ГРУПП ---
        if (chat.isChannel) {
            messageForm.classList.add('hidden'); // Скрыть поле ввода
            infoContactDetails.classList.add('hidden');
            infoChannelDetails.classList.remove('hidden');
            infoChannelDescription.textContent = chat.info.description || 'Нет описания.';
            editNameBtn.classList.add('hidden');

            chatHeaderStatus.textContent = chat.info.status || 'Канал';
            infoStatus.textContent = chat.info.status || 'Канал';

        } else if (chat.isGroup) {
            messageForm.classList.remove('hidden');
            infoContactDetails.classList.remove('hidden');
            infoChannelDetails.classList.add('hidden');
            editNameBtn.classList.add('hidden');

            chatHeaderStatus.textContent = chat.info.status || 'Группа';
            infoStatus.textContent = chat.info.status || 'Группа';

        } else {
            // Это обычный чат
            messageForm.classList.remove('hidden');
            infoContactDetails.classList.remove('hidden');
            infoChannelDetails.classList.add('hidden');

            editNameBtn.classList.toggle('hidden', chat.isFavorites);

            chatHeaderStatus.textContent = chat.isFavorites ? chat.info.status : (chat.online ? 'в сети' : chat.info.status);
            infoStatus.textContent = chatHeaderStatus.textContent;
        }

        // Рендерим сообщения
        renderMessages(chat.messages);

        // Обновляем активный чат в списке
        renderChatList();

        // На мобильных: скрываем список чатов
        if (window.innerWidth < 768) {
            chatListPanel.classList.add('-translate-x-full');
        }

        infoPanel.classList.add('hidden');
        infoPanel.classList.remove('flex');

        emojiPicker.classList.add('hidden');
    }

    /**
     * Рендерит сообщения в окне чата
     */
    function renderMessages(messages) {
        messageList.innerHTML = '';
        messages.forEach(msg => {
            messageList.appendChild(createMessageElement(msg));
        });
        // Прокрутка вниз
        messageList.scrollTop = messageList.scrollHeight;
    }

    /**
     * Создает HTML-элемент для одного сообщения
     */
    function createMessageElement(msg) {
        // Контейнер для меню и самого сообщения
        const msgContainer = document.createElement('div');
        msgContainer.className = 'message-container relative group';
        msgContainer.dataset.messageId = msg.id;

        // Разделитель даты
        if (msg.date) {
            msgContainer.className = 'flex justify-center my-2';
            msgContainer.innerHTML = `<span class="bg-gray-200 text-gray-600 dark:bg-dark-separator dark:text-dark-text-secondary text-xs font-semibold px-2 py-0.5 rounded-full">${msg.date}</span>`;
            return msgContainer;
        }

        const chat = demoData.chats.find(c => c.id === currentChatId);
        const isMe = msg.from === 'me';
        const isDeleted = msg.type === 'deleted';

        // --- Иконка статуса ---
        let statusIcon = '';
        if (isMe && chat && !chat.isFavorites && !isDeleted) {
            if (msg.status === 'read') {
                statusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline><path d="M16 11.08V12a6 6 0 1 1-3.53-5.5"></path><polyline points="16 4 10 10.01 8 8.01"></polyline></svg>';
            } else if (msg.status === 'delivered') {
                statusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-text-secondary dark:text-dark-text-secondary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline><path d="M16 11.08V12a6 6 0 1 1-3.53-5.5"></path><polyline points="16 4 10 10.01 8 8.01"></polyline></svg>';
            } else {
                statusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-text-secondary dark:text-dark-text-secondary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
            }
            statusIcon = `<span class="ml-1.5 flex-shrink-0">${statusIcon}</span>`;
        }

        // --- Имя автора в группе ---
        let authorName = '';
        if (!isMe && (msg.from === 'other' || (chat && chat.isChannel))) {
            authorName = `<div class="text-sm font-semibold text-primary-dark mb-1">${msg.name}</div>`;
        }

        // --- Блок ответа (Цитирование) ---
        let quoteHtml = '';
        if (msg.replyTo) {
            const originalMsg = chat.messages.find(m => m.id === msg.replyTo);
            if (originalMsg) {
                const originalAuthor = originalMsg.from === 'me' ? 'Вы' : (originalMsg.name || chat.name);
                const originalText = originalMsg.type === 'text' ? originalMsg.text : (originalMsg.type === 'voice' ? 'Голосовое сообщение' : 'Файл');

                quoteHtml = `
                        <div class="mb-2 p-2 border-l-2 border-primary bg-primary/10 rounded-r-lg">
                            <div class="text-sm font-semibold text-primary">${originalAuthor}</div>
                            <p class="text-xs text-text-secondary dark:text-dark-text-secondary truncate">${originalText}</p>
                        </div>
                        `;
            }
        }

        // --- Контент сообщения (Текст, Голос, Файл, Удалено) ---
        let contentHtml = '';
        if (isDeleted) {
            contentHtml = `<p class="text-text-secondary dark:text-dark-text-secondary text-sm italic">Сообщение удалено</p>`;
        } else if (msg.type === 'voice') {
            contentHtml = `
                    <div class="flex items-center space-x-2 w-48">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary flex-shrink-0"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path></svg>
                        <div class="flex-1 h-1 bg-primary/30 rounded-full"></div>
                        <span class="text-xs text-text-secondary dark:text-dark-text-secondary">${msg.text}</span>
                    </div>`;
        } else if (msg.type === 'file') {
            contentHtml = `
                    <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        <span class="text-text-main dark:text-dark-text-main text-sm font-medium">${msg.text}</span>
                    </div>`;
        } else {
            // Обычный текст
            contentHtml = `<p class="text-text-main dark:text-dark-text-main text-sm">${msg.text}</p>`;
        }

        // --- Меню действий (Ответ, Удаление) ---
        let actionsHtml = '';
        if (!isDeleted && !chat.isChannel) {
            const deleteBtn = isMe ? `
                        <button data-action="delete" class="p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    ` : '';

            actionsHtml = `
                    <div class="message-actions absolute -top-4 ${isMe ? 'left-0' : 'right-0'} bg-ui-block dark:bg-dark-ui-block border border-separator dark:border-dark-separator rounded-full shadow-md p-1 flex space-x-1 text-text-secondary dark:text-dark-text-secondary">
                        <button data-action="reply" class="p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
                        </button>
                        ${deleteBtn}
                    </div>
                    `;
        }

        // Сборка
        const bubbleClasses = isDeleted ?
            (isMe ? 'bg-gray-100 dark:bg-dark-ui-bg' : 'bg-gray-100 dark:bg-dark-ui-bg') :
            (isMe ? 'bg-msg-out dark:bg-dark-msg-out' : 'bg-msg-in dark:bg-dark-msg-in');

        msgContainer.innerHTML = `
                    <div class="flex ${isMe ? 'justify-end' : 'justify-start'}">
                        <div class="max-w-xs md:max-w-md message-bubble relative">
                            ${authorName}
                            <div class="${bubbleClasses} p-3 rounded-2xl ${isMe ? 'rounded-br-lg' : 'rounded-bl-lg'} shadow-sm">
                                ${quoteHtml}
                                ${contentHtml}
                            </div>
                            <div class="text-xs text-text-secondary dark:text-dark-text-secondary mt-1 flex items-center ${isMe ? 'justify-end' : 'justify-start'}">
                                <span>${msg.time}</span>
                                ${statusIcon}
                            </div>
                        </div>
                    </div>
                    ${actionsHtml}
                `;
        return msgContainer;
    }

    /**
     * Отправка сообщения (текст, голос, файл)
     */
    function sendNewMessage(type, text) {
        const chat = demoData.chats.find(c => c.id === currentChatId);
        if (!chat) return;

        // 1. Создаем и добавляем сообщение пользователя
        const newMessage = {
            id: 'msg_' + Date.now(),
            from: 'me',
            type: type, // 'text', 'voice', 'file'
            text: text,
            time: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            status: 'sent',
            replyTo: isReplyingTo // Добавляем ID сообщения для ответа
        };
        chat.messages.push(newMessage);
        messageList.appendChild(createMessageElement(newMessage));

        // 2. Обновляем последнее сообщение в списке чатов
        let lastMsgText = text;
        if (type === 'voice') lastMsgText = 'Голосовое сообщение';
        if (type === 'file') lastMsgText = 'Файл';
        chat.lastMessage = lastMsgText;
        renderChatList();

        // 3. Сброс
        messageInput.value = '';
        cancelReply(); // Сброс ответа
        toggleInputButtons(); // Возвращаем микрофон
        messageList.scrollTop = messageList.scrollHeight;

        // 4. Имитация ответа (только если это не "Избранное" и не "Канал")
        if (!chat.isFavorites && !chat.isChannel) {
            simulateReply(chat);
        }
    }

    // Обработчик формы
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = messageInput.value.trim();
        if (text === '') return;
        sendNewMessage('text', text);
    });

    /**
     * Имитация ответа собеседника
     */
    function simulateReply(chat) {
        // Показать "Печатает..."
        typingName.textContent = chat.name.split(' ')[0]; // 'Алиса'
        typingIndicator.classList.remove('hidden');
        typingIndicator.classList.add('flex');
        messageList.scrollTop = messageList.scrollHeight;

        setTimeout(() => {
            // Скрыть "Печатает..."
            typingIndicator.classList.add('hidden');
            typingIndicator.classList.remove('flex');

            // Добавить ответ
            const replyMessage = {
                id: 'msg_' + Date.now(),
                from: 'them',
                type: 'text',
                text: 'Поняла. Спасибо за фидбэк!',
                time: new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            if (chat.isGroup) {
                replyMessage.from = 'other';
                replyMessage.name = chat.name.split(' ')[0];
                replyMessage.text = 'Принято!';
            }

            chat.messages.push(replyMessage);
            messageList.appendChild(createMessageElement(replyMessage));

            // Обновить последнее сообщение
            chat.lastMessage = replyMessage.text;
            renderChatList();

            messageList.scrollTop = messageList.scrollHeight;

            // Воспроизвести звук
            playNotificationSound();

        }, 1500 + Math.random() * 1000); // Случайная задержка
    }

    /**
     * Показывает панель настроек
     */
    function showSettings() {
        // 1. Скрыть панели чата
        chatWindowPanel.classList.add('hidden');
        chatWindowPanel.classList.remove('flex');
        infoPanel.classList.remove('lg:flex'); // Скрыть инфо-панель
        infoPanel.classList.add('hidden');

        // 2. Показать панель настроек
        settingsPanel.classList.remove('hidden');
        settingsPanel.classList.add('flex');

        // 3. Сбросить выделение в списке чатов
        currentChatId = null;
        renderChatList();

        // 4. На мобильных: скрыть список
        if (window.innerWidth < 768) {
            chatListPanel.classList.add('-translate-x-full');
        }

        // 5. Скрыть пикер смайликов
        emojiPicker.classList.add('hidden');
    }

    /**
     * Логика темной темы
     */
    function setupThemeToggle() {
        // Проверяем системные настройки или localStorage
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            darkModeToggle.checked = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkModeToggle.checked = false;
        }

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            }
        });
    }

    /**
     * Логика Emoji Picker
     */
    function setupEmojiPicker() {
        // Заполняем пикер смайликами
        demoData.emojis.forEach(emoji => {
            const emojiSpan = document.createElement('span');
            emojiSpan.className = 'text-2xl cursor-pointer p-1 rounded-md hover:bg-highlight dark:hover:bg-dark-highlight';
            emojiSpan.textContent = emoji;
            emojiPicker.appendChild(emojiSpan);
        });

        // Клик по кнопке смайликов
        emojiToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            emojiPicker.classList.toggle('hidden');
        });

        // Клик по смайлику
        emojiPicker.addEventListener('click', (e) => {
            if (e.target.tagName === 'SPAN') {
                messageInput.value += e.target.textContent;
                emojiPicker.classList.add('hidden');
                messageInput.focus();
                toggleInputButtons(); // Показать кнопку "Отправить"
            }
        });

        // Клик снаружи пикера
        document.addEventListener('click', (e) => {
            if (e.target !== emojiToggleBtn && !emojiPicker.contains(e.target)) {
                emojiPicker.classList.add('hidden');
            }
        });
    }

    /**
     * Логика редактирования имени
     */
    function setupNameEditing() {
        editNameBtn.addEventListener('click', () => {
            const chat = demoData.chats.find(c => c.id === currentChatId);
            if (!chat || chat.isFavorites || chat.isGroup) return; // Защита

            // Переключаем видимость
            infoName.classList.add('hidden');
            editNameBtn.classList.add('hidden');

            infoNameInput.classList.remove('hidden');
            saveNameBtn.classList.remove('hidden');
            cancelNameBtn.classList.remove('hidden');

            infoNameInput.value = infoName.textContent;
            infoNameInput.focus();
        });

        cancelNameBtn.addEventListener('click', resetNameEditMode);

        saveNameBtn.addEventListener('click', () => {
            const newName = infoNameInput.value.trim();
            const chat = demoData.chats.find(c => c.id === currentChatId);

            if (newName && chat) {
                // Обновляем "базу данных"
                chat.name = newName;

                // Обновляем UI
                infoName.textContent = newName;
                chatHeaderName.textContent = newName;

                // Перерисовываем список чатов
                renderChatList();
            }
            resetNameEditMode();
        });
    }

    function resetNameEditMode() {
        infoName.classList.remove('hidden');

        // Проверяем, нужно ли вообще показывать кнопку
        const chat = demoData.chats.find(c => c.id === currentChatId);
        if (chat && !chat.isFavorites && !chat.isGroup && !chat.isChannel) {
            editNameBtn.classList.remove('hidden');
        } else {
            editNameBtn.classList.add('hidden');
        }

        infoNameInput.classList.add('hidden');
        saveNameBtn.classList.add('hidden');
        cancelNameBtn.classList.add('hidden');
    }


    // === НОВЫЕ ФУНКЦИИ ДЛЯ ГРУПП И КАНАЛОВ ===
    function showCreateGroupModal() {
        groupContactsList.innerHTML = ''; // Очищаем список
        groupError.classList.add('hidden');
        groupNameInput.value = '';

        const contacts = demoData.chats.filter(c => !c.isGroup && !c.isFavorites && !c.isChannel);

        contacts.forEach(contact => {
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&rounded=true&background=random&format=svg`;
            const contactEl = document.createElement('label');
            contactEl.className = "flex items-center space-x-3 p-2 rounded-lg hover:bg-highlight dark:hover:bg-dark-highlight cursor-pointer";
            contactEl.innerHTML = `
                        <input type="checkbox" value="${contact.id}" class="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary">
                        <img src="${avatarUrl}" alt="${contact.name}" class="w-10 h-10 rounded-full bg-gray-200">
                        <span class="text-text-main dark:text-dark-text-main text-sm font-medium">${contact.name}</span>
                    `;
            groupContactsList.appendChild(contactEl);
        });

        createGroupModal.classList.remove('hidden');
        createNewMenu.classList.add('hidden');
    }

    function handleCreateGroup(e) {
        e.preventDefault();
        const groupName = groupNameInput.value.trim();
        const selectedCheckboxes = groupContactsList.querySelectorAll('input[type="checkbox"]:checked');

        if (selectedCheckboxes.length === 0) {
            groupError.classList.remove('hidden');
            return;
        }

        groupError.classList.add('hidden');

        const newGroupId = 'group_' + Date.now();
        const newGroup = {
            id: newGroupId,
            name: groupName,
            originalName: groupName,
            avatarInitials: groupName.substring(0, 2).toUpperCase(),
            avatarColor: 'bg-purple-200 text-purple-700', // (не используется, т.к. есть avatarUrl)
            lastMessage: `${selectedCheckboxes.length + 1} участника`,
            time: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            online: false,
            isGroup: true,
            isFavorites: false,
            isChannel: false,
            info: {
                email: '',
                username: '',
                status: `${selectedCheckboxes.length + 1} участника`
            },
            messages: [{
                id: 'grp_1',
                from: 'me',
                type: 'text',
                text: `Я создал(а) группу "${groupName}"`,
                time: new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                status: 'sent'
            }]
        };

        demoData.chats.unshift(newGroup); // Добавляем в начало
        renderChatList();
        selectChat(newGroupId);
        createGroupModal.classList.add('hidden');
    }

    function showCreateChannelModal() {
        channelNameInput.value = '';
        channelDescInput.value = '';
        createChannelModal.classList.remove('hidden');
        createNewMenu.classList.add('hidden');
    }

    function handleCreateChannel(e) {
        e.preventDefault();
        const channelName = channelNameInput.value.trim();
        const channelDesc = channelDescInput.value.trim();

        if (!channelName) return;

        const newChannelId = 'channel_' + Date.now();
        const newChannel = {
            id: newChannelId,
            name: channelName,
            originalName: channelName,
            avatarInitials: '📢', // Иконка для канала
            avatarColor: 'bg-blue-200 text-blue-700',
            lastMessage: 'Канал успешно создан.',
            time: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            online: false,
            isGroup: false,
            isFavorites: false,
            isChannel: true,
            info: {
                email: '',
                username: '',
                status: '1 подписчик',
                description: channelDesc
            },
            messages: [{
                id: 'ch_1',
                from: 'other',
                name: channelName,
                type: 'text',
                text: 'Канал успешно создан.',
                time: new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }]
        };

        demoData.chats.unshift(newChannel); // Добавляем в начало
        renderChatList();
        selectChat(newChannelId);
        createChannelModal.classList.add('hidden');
    }

    // --- НОВЫЕ ФУНКЦИИ (ПОИСК, ЗВУК, ДЕЙСТВИЯ) ---

    function setupSearch() {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const chatCards = document.querySelectorAll('.chat-card');
            chatCards.forEach(card => {
                const chatName = card.querySelector('h3').textContent.toLowerCase();
                if (chatName.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    function playNotificationSound() {
        if (soundToggle.checked && synth) {
            // Воспроизводим короткий "пип"
            synth.triggerAttackRelease("C5", "8n");
        }
    }

    function toggleInputButtons() {
        if (messageInput.value.trim().length > 0) {
            sendBtn.classList.remove('hidden');
            micBtn.classList.add('hidden');
        } else {
            sendBtn.classList.add('hidden');
            micBtn.classList.remove('hidden');
        }
    }

    function startReply(messageId) {
        isReplyingTo = messageId;
        const chat = demoData.chats.find(c => c.id === currentChatId);
        const msg = chat.messages.find(m => m.id === messageId);
        if (!msg) return;

        const authorName = msg.from === 'me' ? 'Вы' : (msg.name || chat.name);
        const msgText = msg.type === 'text' ? msg.text : (msg.type === 'voice' ? 'Голосовое сообщение' : 'Файл');

        replyPreviewName.textContent = authorName;
        replyPreviewText.textContent = msgText;
        replyPreview.classList.remove('hidden');
        messageInput.focus();
    }

    function cancelReply() {
        isReplyingTo = null;
        replyPreview.classList.add('hidden');
    }

    function deleteMessage(messageId) {
        const chat = demoData.chats.find(c => c.id === currentChatId);
        const msgIndex = chat.messages.findIndex(m => m.id === messageId);
        if (msgIndex === -1) return;

        // Не удаляем, а заменяем контент
        chat.messages[msgIndex].type = 'deleted';
        chat.messages[msgIndex].text = 'Сообщение удалено';
        chat.messages[msgIndex].replyTo = null; // Убираем цитату, если она была

        renderMessages(chat.messages);
    }


    // === ОБРАБОТЧИКИ СОБЫТИЙ ===

    // *** ВХОД ***
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const phoneNumber = phoneInput.value.trim();

        if (phoneNumber.length > 5) {
            // Инициализируем аудио
            await Tone.start();
            synth = new Tone.Synth().toDestination();

            loginScreen.classList.add('hidden');
            mainAppContainer.classList.remove('hidden');

            // ЗАПУСК ИНИЦИАЛИЗАЦИИ ЧАТА
            setupEmojiPicker();
            setupNameEditing();
            setupCreateActions();
            setupSearch(); // Запуск поиска

            selectChat('favorites');
            renderChatList();

        } else {
            loginError.classList.remove('hidden');
            phoneInput.classList.add('ring-2', 'ring-red-500');
        }
    });

    phoneInput.addEventListener('input', () => {
        loginError.classList.add('hidden');
        phoneInput.classList.remove('ring-2', 'ring-red-500');
    });

    // --- Обработчики ввода ---
    messageInput.addEventListener('input', toggleInputButtons);

    micBtn.addEventListener('click', () => {
        sendNewMessage('voice', '0:07'); // Отправка "голосового"
    });

    attachBtn.addEventListener('click', () => {
        sendNewMessage('file', 'document_final.pdf'); // Отправка "файла"
    });

    // --- Обработчики действий с сообщениями (делегирование) ---
    messageList.addEventListener('click', (e) => {
        const actionButton = e.target.closest('button[data-action]');
        if (!actionButton) return;

        const messageId = actionButton.closest('.message-container').dataset.messageId;
        const action = actionButton.dataset.action;

        if (action === 'reply') {
            startReply(messageId);
        } else if (action === 'delete') {
            deleteMessage(messageId);
        }
    });

    // Отмена ответа
    cancelReplyBtn.addEventListener('click', cancelReply);

    // --- Настройки ---
    settingsBtn.addEventListener('click', showSettings);

    burgerMenuBtnSettings.addEventListener('click', () => {
        chatListPanel.classList.remove('-translate-x-full');
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Настройки профиля сохранены (демо)');
    });

    logoutBtn.addEventListener('click', () => {
        mainAppContainer.classList.add('hidden');
        loginScreen.classList.remove('hidden');
        phoneInput.value = '';
        // Сбрасываем состояние
        currentChatId = null;
        cancelReply();
    });

    // --- Мобильные меню ---
    burgerMenuBtn.addEventListener('click', () => {
        chatListPanel.classList.remove('-translate-x-full');
    });
    closeChatListBtn.addEventListener('click', () => {
        chatListPanel.classList.add('-translate-x-full');
    });

    infoToggleBtn.addEventListener('click', () => {
        infoPanel.classList.remove('hidden');
        infoPanel.classList.add('flex');
    });

    closeInfoPanelBtn.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
        infoPanel.classList.remove('flex');
    });


    // --- Создание групп/каналов ---
    function setupCreateActions() {
        createNewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            createNewMenu.classList.toggle('hidden');
        });

        newGroupBtn.addEventListener('click', showCreateGroupModal);
        cancelGroupBtn.addEventListener('click', () => createGroupModal.classList.add('hidden'));
        createGroupForm.addEventListener('submit', handleCreateGroup);

        newChannelBtn.addEventListener('click', showCreateChannelModal);
        cancelChannelBtn.addEventListener('click', () => createChannelModal.classList.add('hidden'));
        createChannelForm.addEventListener('submit', handleCreateChannel);
    }

    // Клик снаружи меню "Создать"
    document.addEventListener('click', (e) => {
        if (mainAppContainer.classList.contains('hidden')) return;
        if (!createNewBtn.contains(e.target) && !createNewMenu.contains(e.target)) {
            createNewMenu.classList.add('hidden');
        }
    });


    // === ИНИЦИАЛИЗАЦИЯ (ТОЛЬКО ТЕМА) ===
    setupThemeToggle();
    // Вся остальная инициализация перенесена в обработчик `loginForm`

});
