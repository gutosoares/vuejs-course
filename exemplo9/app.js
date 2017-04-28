new Vue({
    el: '#app',

    data: {
        value: 0
    },

    computed: {
        result: function() {
            return this.value == 37 ? 'done' : 'not there yet';
        }
    }
});