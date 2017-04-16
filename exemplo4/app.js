new Vue({
    el: '#app',
    data: {
        title: 'Hello World VueJS!! :)',
        link: 'http://google.com'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});