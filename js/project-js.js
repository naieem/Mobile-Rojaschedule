// on ready device ackowledgement gatherer
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
// bottom nav click event listener
(function () {
    // var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
    // debugger;
    // navItems.forEach(function (e, i) {
    //     e.addEventListener("click", function (e) {
    //         navItems.forEach(function (e2, i2) {
    //             e2.classList.remove("mobile-bottom-nav__item--active");
    //         })
    //         this.classList.add("mobile-bottom-nav__item--active");
    //     });
    // });
})();

// vue initializer
(function () {
    new Vue({
        el: '#app',
        data: {
            currentRojaIndex: 0,
            days: {
                sat: "শনিবার",
                sun: "রবিবার",
                mon: "সোমবার",
                tue: "মঙ্গলবার",
                wed: "বুধবার",
                thurs: "বৃহস্পতিবার",
                fri: "শুক্রবার"
            },
            month: {
                ap: "এপ্রিল",
                may: "মে"
            },
            number: {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                10: "১০",
                11: "১১",
                12: "১২",
                13: "১৩",
                14: "১৪",
                15: "১৫",
                16: "১৬",
                17: "১৭",
                18: "১৮",
                19: "১৯",
                20: "২০",
                21: "২১",
                22: "২২",
                23: "২৩",
                24: "২৪",
                25: "২৫",
                26: "২৬",
                27: "২৭",
                28: "২৮",
                29: "২৯",
                30: "৩০",
                31: "৩১",
                32: "৩২",
                33: "৩৩",
                34: "৩৪",
                35: "৩৫",
                36: "৩৬",
                37: "৩৭",
                38: "৩৮",
                39: "৩৯",
                40: "৪০",
                41: "৪১",
                42: "৪২",
                43: "৪৩",
                44: "৪৪",
                45: "৪৫",
                46: "৪৬",
                47: "৪৭",
                48: "৪৮",
                49: "৪৯",
                50: "৫০",
                51: "৫১",
                52: "৫২",
                53: "৫৩",
                54: "৫৪",
                55: "৫৫",
                56: "৫৬",
                57: "৫৭",
                58: "৫৮",
                59: "৫৯",
                60: "৬০"
            },
            schedule: [
                {
                    date: "25",
                    month: "ap",
                    day: "sat",
                    sehri_time1: "4",
                    sehri_time2: "5",
                    iftar_time1: "6",
                    iftar_time2: "28",
                },
                {
                    date: "26",
                    month: "ap",
                    day: "sun",
                    sehri_time1: "4",
                    sehri_time2: "4",
                    iftar_time1: "6",
                    iftar_time2: "29",
                },
                {
                    date: "27",
                    month: "ap",
                    day: "mon",
                    sehri_time1: "4",
                    sehri_time2: "3",
                    iftar_time1: "6",
                    iftar_time2: "29",
                },
                {
                    date: "28",
                    month: "ap",
                    day: "tue",
                    sehri_time1: "4",
                    sehri_time2: "2",
                    iftar_time1: "6",
                    iftar_time2: "29",
                },
                {
                    date: "29",
                    month: "ap",
                    day: "wed",
                    sehri_time1: "4",
                    sehri_time2: "1",
                    iftar_time1: "6",
                    iftar_time2: "30",
                },
                {
                    date: "30",
                    month: "ap",
                    day: "thurs",
                    sehri_time1: "4",
                    sehri_time2: "0",
                    iftar_time1: "6",
                    iftar_time2: "30",
                },
                {
                    date: "1",
                    month: "may",
                    day: "fri",
                    sehri_time1: "3",
                    sehri_time2: "59",
                    iftar_time1: "6",
                    iftar_time2: "31",
                },
                {
                    date: "2",
                    month: "may",
                    day: "sat",
                    sehri_time1: "3",
                    sehri_time2: "58",
                    iftar_time1: "6",
                    iftar_time2: "31",
                },
                {
                    date: "3",
                    month: "may",
                    day: "sun",
                    sehri_time1: "3",
                    sehri_time2: "57",
                    iftar_time1: "6",
                    iftar_time2: "32",
                },
                {
                    date: "4",
                    month: "may",
                    day: "mon",
                    sehri_time1: "3",
                    sehri_time2: "55",
                    iftar_time1: "6",
                    iftar_time2: "32",
                },
                {
                    date: "5",
                    month: "may",
                    day: "tue",
                    sehri_time1: "3",
                    sehri_time2: "54",
                    iftar_time1: "6",
                    iftar_time2: "32",
                },
                {
                    date: "6",
                    month: "may",
                    day: "wed",
                    sehri_time1: "3",
                    sehri_time2: "53",
                    iftar_time1: "6",
                    iftar_time2: "33",
                },
                {
                    date: "7",
                    month: "may",
                    day: "thurs",
                    sehri_time1: "3",
                    sehri_time2: "52",
                    iftar_time1: "6",
                    iftar_time2: "34",
                },
                {
                    date: "8",
                    month: "may",
                    day: "fri",
                    sehri_time1: "3",
                    sehri_time2: "51",
                    iftar_time1: "6",
                    iftar_time2: "34",
                },
                {
                    date: "9",
                    month: "may",
                    day: "sat",
                    sehri_time1: "3",
                    sehri_time2: "50",
                    iftar_time1: "6",
                    iftar_time2: "35",
                },
                {
                    date: "10",
                    month: "may",
                    day: "sun",
                    sehri_time1: "3",
                    sehri_time2: "50",
                    iftar_time1: "6",
                    iftar_time2: "35",
                },
                {
                    date: "11",
                    month: "may",
                    day: "mon",
                    sehri_time1: "3",
                    sehri_time2: "49",
                    iftar_time1: "6",
                    iftar_time2: "36",
                },
                {
                    date: "12",
                    month: "may",
                    day: "tue",
                    sehri_time1: "3",
                    sehri_time2: "49",
                    iftar_time1: "6",
                    iftar_time2: "36",
                },
                {
                    date: "13",
                    month: "may",
                    day: "wed",
                    sehri_time1: "3",
                    sehri_time2: "48",
                    iftar_time1: "6",
                    iftar_time2: "36",
                },
                {
                    date: "14",
                    month: "may",
                    day: "thurs",
                    sehri_time1: "3",
                    sehri_time2: "48",
                    iftar_time1: "6",
                    iftar_time2: "37",
                },
                {
                    date: "15",
                    month: "may",
                    day: "fri",
                    sehri_time1: "3",
                    sehri_time2: "47",
                    iftar_time1: "6",
                    iftar_time2: "37",
                },
                {
                    date: "16",
                    month: "may",
                    day: "sat",
                    sehri_time1: "3",
                    sehri_time2: "47",
                    iftar_time1: "6",
                    iftar_time2: "38",
                },
                {
                    date: "17",
                    month: "may",
                    day: "sun",
                    sehri_time1: "3",
                    sehri_time2: "46",
                    iftar_time1: "6",
                    iftar_time2: "38",
                },
                {
                    date: "18",
                    month: "may",
                    day: "mon",
                    sehri_time1: "3",
                    sehri_time2: "46",
                    iftar_time1: "6",
                    iftar_time2: "39",
                },
                {
                    date: "19",
                    month: "may",
                    day: "tue",
                    sehri_time1: "3",
                    sehri_time2: "45",
                    iftar_time1: "6",
                    iftar_time2: "39",
                },
                {
                    date: "20",
                    month: "may",
                    day: "wed",
                    sehri_time1: "3",
                    sehri_time2: "44",
                    iftar_time1: "6",
                    iftar_time2: "40",
                },
                {
                    date: "21",
                    month: "may",
                    day: "thurs",
                    sehri_time1: "3",
                    sehri_time2: "44",
                    iftar_time1: "6",
                    iftar_time2: "40",
                },
                {
                    date: "22",
                    month: "may",
                    day: "fri",
                    sehri_time1: "3",
                    sehri_time2: "43",
                    iftar_time1: "6",
                    iftar_time2: "41",
                },
                {
                    date: "23",
                    month: "may",
                    day: "sat",
                    sehri_time1: "3",
                    sehri_time2: "43",
                    iftar_time1: "6",
                    iftar_time2: "42",
                },
                {
                    date: "24",
                    month: "may",
                    day: "sun",
                    sehri_time1: "3",
                    sehri_time2: "42",
                    iftar_time1: "6",
                    iftar_time2: "42",
                }
            ]
        },
        methods: {
            prev: function (event) {
                this.currentRojaIndex = this.currentRojaIndex - 1;
            },
            next: function (event) {
                this.currentRojaIndex = this.currentRojaIndex + 1;
            },
            reset: function () {
                var currentDate = new Date();
                var date = currentDate.getDate().toString();
                var month = (currentDate.getMonth() + 1 == 4) ? 'ap' : 'may';
                this.schedule.forEach((roja, ind, arr) => {
                    if (roja.date == date && roja.month == month) {
                        this.currentRojaIndex = ind;
                    }
                });
            }
        },
        created: function () {
            console.log("mal created");
            var currentDate = new Date();
            var date = currentDate.getDate().toString();
            var month = (currentDate.getMonth() + 1 == 4) ? 'ap' : 'may';
            this.schedule.forEach((roja, ind, arr) => {
                if (roja.date == date && roja.month == month) {
                    this.currentRojaIndex = ind;
                }
            });
        },
        beforeMount: function () {
            console.log("before mount");
        },
        mounted: function () {
            console.log("mal mounted");
        }
    });
})();