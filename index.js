let app = new Vue({
    el: '#app',
    data: {
        message: 'Add something new?',
        todos: [
            'Learn JavaScript',
            'Learn Vue',
            'Make something cool',
        ],
        buttonType: 'button',
        isDisabled: false,
        isDone: true,
        isChecked: true,

    }
})

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Изучить JavaScript'},
            {text: 'Изучить Vue'},
            {text: 'Создать что-нибудь классное'}
        ]
    }
});

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});


Vue.component('todo-item' , {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
})

let app6 = new Vue({
    el: '#app6',
    data: {
        nvmList: [
            {id: 0, text: 'Thing1'},
            {id: 1, text: 'Thing2'},
            {id: 2, text: 'Thing3'}
        ]
    }
})
