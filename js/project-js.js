
// on ready device ackowledgement cordova
(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);
        document.addEventListener("menubutton", onMenuKeyDown, false);
        // Add similar listeners for other events
    }
    function onPause() {
        // alert("mal gesega");
    }

    function onResume() {
        // alert("mal abar aiche");
        // navigator.splashscreen.show();
    }

    function onMenuKeyDown() {
        // alert("mal menu capse");
    }
    window.onload = function () {
        console.log('' + (+new Date) + ': Onload fired');
        navigator.splashscreen.hide();
    };
    document.onreadystatechange = function () {
        console.log('' + (+new Date) + ': Ready state changed');
        if (document.readyState == "complete") {
            console.log('' + (+new Date) + ': Ready = Complete');
            // alert("mal ready done");
        }
    };
})();

// vue initializer
var router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { name: 'home', path: '/', component: homeComponent },
        { name: 'rules', path: '/rules', component: rulesComponent }
    ]
})
new Vue({
    el: '#app',
    data: {
        activeRoute: ''
    },
    methods: {
        changeRoute: function (name) {
            alert(name);
            router.push(name);
        }
    },
    mounted: function () {
        // console.log(router.currentRoute);
        this.activeRoute = router.currentRoute.name;
        alert(this.activeRoute);
        router.push('/');
    },
    updated() {
        // console.log(router.currentRoute);
        this.activeRoute = router.currentRoute.name;
        alert(this.activeRoute);
    },
    router
});