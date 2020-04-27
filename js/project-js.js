
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
(function () {
    new Vue({
        el: '#app',
        data: {
            activeRoute: 'home',
            isSideNavOpen:false
        },
        methods: {
            changeRoute: function (name) {
                // console.log(router);
                // router.push(name);
                this.activeRoute = name;
            },
            openSideNav: function () {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("app").style.marginLeft = "250px";
                this.isSideNavOpen=true;
            },
            closeSideNav: function () {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("app").style.marginLeft = "0";
                this.isSideNavOpen=false;
            }
        }
        // mounted: function () {
        //     // console.log(router.currentRoute);
        //     this.activeRoute = router.currentRoute.name;
        //     alert(this.activeRoute);
        //     router.push('/');
        // },
        // updated() {
        //     // console.log(router.currentRoute);
        //     this.activeRoute = router.currentRoute.name;
        // },
        // router
    });
})(window);