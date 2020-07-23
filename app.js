var todo = new Vue({
    el: '#todo',
    data: {
        placeholder: 'Type something then add',
        message: '',
        todos: [],
        timestamps: [],
    },
    methods: {
        addTodo: function (){
            this.todos.push({id: this.todos.length, 
                            text: this.message, 
                            ts: new Date().toLocaleTimeString() 
                            });
            this.message = '';
        }
    }
})