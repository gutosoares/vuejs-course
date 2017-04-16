new Vue({
    el: '#app',
    data: {
        title: 'Hello World VueJS!! :)'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value; 
        }
    }
});