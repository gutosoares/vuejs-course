new Vue({
    el: '#app',
    data: {
        name: 'Augusto Soares',
        age: 25,
        img: 'http://www.vuejs-brasil.com.br/content/images/2016/06/logo.png'
    },
    methods: {
        multiAge: function(num) {
            return (this.age * num);
        },
        random: function() {
            return Math.floor(Math.random() * 10) + 1;
        }
    }
});