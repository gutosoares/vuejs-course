new Vue({
    el: '#app',
    data: {
        title: 'Hello World VueJS!! :)',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com" target="_blank">Google</a>'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});