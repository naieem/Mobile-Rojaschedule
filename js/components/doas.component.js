Vue.component('allduah-component', {
    data: function () {
        return {
        }
    },
    methods: {
        changeRoute:function(name){
            this.$emit('changeroute', name);
        }
    },
    template: '#all-duah-template',
});