const constructMonthCalendar = () => {
            //console.log("oi")

            /*
            const year = now.getFullYear();      // e.g., 2026
            const month = now.getMonth();    // Important: getMonth() is 0-indexed (0 = January), so add 1
            const day = now.getDate();          // Day of the month (1-31)
            const weekday = now.getDay();          // Day of the week(mon - sun)

            console.log(`Year: ${year}, Month: ${months[month]}, Day: ${day}, Weekday: ${weekdays[weekday]}`);
            */



            const m = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            //console.log(m);

            const monthStart = new Date(`${months[now.getMonth()]} 1 ${now.getFullYear()} 0:0:0`);
            const weekdayStart = monthStart.getDay();          // Day of the week(mon - sun)
            const weekdayEnd = new Date(`${months[now.getMonth()]} ${m} ${now.getFullYear()} 0:0:0`);
            const prevMonth = new Date(`${months[now.getMonth() - 1]} ${new Date(now.getFullYear(), now.getMonth(), 0).getDate()} ${now.getFullYear()} 0:0:0`);
            const nextMonth = new Date(`${months[now.getMonth() + 1]} ${new Date(now.getFullYear(), now.getMonth() + 2, 1).getDate()} ${now.getFullYear()} 0:0:0`);


            const curentMonth = document.getElementById("mes");
            curentMonth.innerHTML = meses[now.getMonth()];


            let element = document.getElementById("dias");

            //element.remove();
            //console.log(element);

            const f = document.createElement("tbody");
            f.className = "dias";
            f.setAttribute("id", "dias");

            element.before(f);

            element.remove();



            //element.appendChild(f);
            //console.log(f);
            const idCreator = [];
            //const semanas = [];
            let isfirstweek = true;
            for (i = 0; i < m; i++) {
                var cadaSemana = [];
                if (isfirstweek) {
                    if (weekdayStart != 0) {
                        for (x = weekdayStart; x > 0; x--) {
                            //console.log(prevMonth.getDate());
                            // console.log(x);
                            var p = prevMonth.getDate() - x + 1 + "_" + months[prevMonth.getMonth()] + "_" + prevMonth.getFullYear();
                            //console.log(p);
                            idCreator.push(p);

                        }

                    }
                    isfirstweek = false;
                }
                idCreator.push(monthStart.getDate() + i + "_" + months[monthStart.getMonth()] + "_" + monthStart.getFullYear());

                if (i == m - 1) {
                    //console.log(weekdayEnd.getDay());
                    var k = 0;
                    for (l = weekdayEnd.getDay(); l < 6; l++) {

                        var n = nextMonth.getDate() + k + "_" + months[nextMonth.getMonth()] + "_" + nextMonth.getFullYear();
                        k += 1;
                        //console.log(n);
                        idCreator.push(n);

                    }
                }
            }
            // console.log(idCreator);
            var id = idCreator;
            // console.log(id.length);
            const sem = idCreator.length / 7;
            for (w = 0; w < sem; w++) {
                // console.log(sem);
                // console.log(w);
                createTr = document.createElement("tr");
                var tr = f.appendChild(createTr);

                for (i = 0; i < 7; i++) {

                    createTd = document.createElement("td");
                    createTd.setAttribute("id", id[0]);

                    const texto = id[0].split("_");
                    const td = tr.appendChild(createTd);
                    if (texto[1] != months[now.getMonth()])
                        td.className = "other_month";
                    const textNode = document.createTextNode(texto[0]);
                    td.appendChild(textNode);
                    //console.log(i);
                    id.shift();

                }
            }


            const games = [{
                id: "2_September_2026",
                url: "../img/lancamentos/1.png"
            }, {
                id: "3_September_2026",
                url: "../img/lancamentos/4.png"
            }, {
                id: "4_September_2026",
                url: "../img/lancamentos/7.png"
            }, {
                id: "5_September_2026",
                url: "../img/lancamentos/8.png"
            }, {
                id: "15_September_2026",
                url: "../img/lancamentos/5.png"
            }, {
                id: "18_September_2026",
                url: "../img/lancamentos/9.png"
            }, {
                id: "24_September_2026",
                url: "../img/lancamentos/3.png"
            }, {
                id: "25_September_2026",
                url: "../img/lancamentos/2.png"
            }, {
                id: "29_September_2026",
                url: "../img/lancamentos/6.png"
            }, {
                id: "4_August_2026",
                url: "../img/lancamentos/10.png"
            }, {
                id: "6_August_2026",
                url: "../img/lancamentos/11.png"
            }, {
                id: "7_August_2026",
                url: "../img/lancamentos/12.png"
            }, {
                id: "27_August_2026",
                url: "../img/lancamentos/13.png"
            }, {
                id: "1_October_2026",
                url: "../img/lancamentos/14.png"
            }, {
                id: "2_October_2026",
                url: "../img/lancamentos/15.png"
            }, {
                id: "23_October_2026",
                url: "../img/lancamentos/16.png"
            }];






            for (i = 0; i < games.length; i++) {

                if (document.getElementById(games[i].id)) {

                    const url = `url ("${games[i].url}")`;
                    //console.log(document.getElementById(games[i].id));
                    const e = document.getElementById(games[i].id);
                    e.style.backgroundImage = `url('${games[i].url}')`;

                }

            };



        }
