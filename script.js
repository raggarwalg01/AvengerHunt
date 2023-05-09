// < -- < img src = "background.png" width = "1500px" > -->
"use strict"
let count = 0;
let currlevel = 0;
let maxlevel = 10;
let gamehtml = document.getElementById("game");
let html0 = `



  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
Welcome to the Avengers Hunt Game!</h1>
      <p class="mb-8 leading-relaxed">
      Are you ready to join the ranks of the mighty Avengers and put your skills to the test? This game is designed to challenge and inspire you, with puzzles and challenges that will test your knowledge, skills, and creativity.
<br>
Each level of the game will take you on a journey through the Marvel Cinematic Universe, with challenges and puzzles inspired by the different characters, movies, and stories of this epic franchise. From math and logic puzzles to challenges that require keen observation and attention to detail, this game has it all.
<br>
So, are you ready to suit up and join the Avengers on this exciting adventure? Let's get started and see if you have what it takes to become a true hero!
</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">login</button>

        <button id="Button2"class=" ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Start Game </button>
      </div>
    </div>
  </div>
                                                
                                                
                                                `;
let html1 = `<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
<table>
                                        <tr>
                                                <th><img class="a" src="shield.png" alt="shield"></th>
                                                <th><img class="a" src="shield.png" alt="shield"></th>
                                                <th><img class="a" src="shield.png" alt="shield"></th>
                                                <th><img class="a" src="shield.png" alt="shield"></th>
                                                <th><img class="b" src="equal-to.png" alt="equal"></th>
                                                <th><img class="a" src="number-20.png" alt="shield"></th>

                                        </tr>
                                        <tr>

                                                <td><img class="a" src="spiderman.png" alt="spider"></td>
                                                <td><img class="a" src="avatar.png" alt="avatar"></td>
                                                <td><img class="a" src="thor-hammer.png" alt="thor"></td>

                                                <td><img class="a" src="shield.png" alt="shield"></td>
                                                <td><img class="b" src="equal-to.png" alt="equal"></td>

                                                <td><img class="a" src="number-19.png" alt="19"></td>

                                        </tr>
                                        <tr>

                                                <td><img class="a" src="spiderman.png" alt="spider"></td>
                                                <td><img class="a" src="spiderman.png" alt="spider"></td>

                                                <td><img class="a" src="shield.png" alt="shield"></td>
                                                <td><img class="a" src="spiderman.png" alt="spider"></td>
                                                <td><img class="b" src="equal-to.png" alt="equal"></td>

                                                <td><img class="a" src="number-14.png" alt="22"></td>


                                        </tr>
                                        <tr>
                                                <td><img class="a" src="shield.png" alt="shield"></td>
                                                <td><img class="a" src="thor-hammer.png" alt="thor"></td>
                                                <td><img class="a" src="thor-hammer.png" alt="thor"></td>
                                                <td><img class="a" src="spiderman.png" alt="spider"></td>
                                                <td><img class="b" src="equal-to.png" alt="equal"></td>

                                                <td><img class="a" src="number-22.png" alt="22"></td>

                                        </tr>
                                        <tr>
                                                <td><img class="c" src="equal-to.png" alt="equal"></td>
                                                <td><img class="c" src="equal-to.png" alt="equal"></td>
                                                <td><img class="c" src="equal-to.png" alt="equal"></td>
                                                <td><img class="c" src="equal-to.png" alt="equal"></td>

                                        </tr>
                                        <tr>
                                                <td><img class="a" src="number-16.png" alt="16"></td>
                                                <td><img class="a" src="number-19.png" alt="19"></td>
                                                <td><img class="a" src="number-24.png" alt="24"></td>
                                                <td><img class="a" src="number-16.png" alt="16"></td>

                                        </tr>



                                        <!-- <tr>
                                                <td><img class="a" src="avatar.png" alt="avatar"></td>
                                                <td><img class="b" src="add.png" alt="add"></td>
                                                <td><img class="a"  src="shield.png" alt="shield"></td>
                                            </tr> -->

                                </table>
                        </div>
                        <div
                        
                                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Welcome to Level 1 of the Avengers Hunt Game! 
                                </h1>
                                <p class="mb-8 leading-relaxed">
                                In this level, you'll need to use your puzzle-solving skills to find the result of the following.
                                </p>

                                <br>
                                <table>
                                
                                                <td><img class="a" src="avatar.png" alt="spider"></td>

                                                
                                                <td><img class="b" src="add.png" alt="spider"></td>

                                                <td><img class="a" src="shield.png" alt="shield"></td>
                                                <td><img class="b" src="equal-to.png" alt="equal"></td>

                                                <td><img class="d" src="question.png" alt="22"></td>
                                </table>

                                <br>
                                <br>
                                <div class="flex justify-center">
                                        <!-- <button
                                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                                        </button> -->
                                        <input type="text" id="answerinput"
                                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">

                                        <button  id = "Button2" class="button2 bg-violet-400 border-0  btn v1">Avengers Assemble!</button>
                                </div>

                                
                        </div>`;

let html3 = `
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <input type="number" class="numb" min="4" max="4">
                                <input type="number" class="numb" min="5" max="5">
                                <input type="number" class="numb" min="6" max="6">
                                <input type="number" class="numb" min="8" max="8">
                                <input type="number" class="numb" min="3" max="3">
                                <input type="number" class="numb" min="9" max="9">
                                <input type="number" class="numb" min="6" max="6">
                                <input type="number" class="numb" min="8" max="8">
                                <input type="number" class="numb" min="3" max="3">
                                <input type="number" class="numb" min="0" max="0">
                                <input type="number" class="numb" min="0" max="0">
                                <input type="number" class="numb" min="0" max="0">
                        </div>
                        
                        <div
                        
                                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Welcome to Level 2 of the Avengers Hunt Game! 
                                </h1>
                                <br>
                                <p class="mb-10 leading-relaxed">
                                In this level, you'll be working on deciphering a message that was left for you by none other than Tony Stark's daughter, Morgan,
                                <br>
                                and she loves ice-cream.
                                </p>


                                <br>
                                <div class="flex justify-center">
                                        <!-- <button
                                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                                        </button> -->
                                        <input type="text" id="answerinput"
                                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">

                                        <button  id = "Button2" class="button2 bg-violet-400 border-0  btn v1">Ice Cream        !</button>
                                </div>

                                
                        </div>`;
let html5 = `<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img src="triangle.png" width = "500px">
                        </div>
                        
                        <div
                                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">


                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Welcome to Level 3 of the Avengers Hunt Game! 
                                </h1>
                                <br>
                                <p class="mb-10 leading-relaxed">
                                        Just like how Tony's Arc Reactor kept him powered up, this level is all about counting triangles to keep your brain powered up! 
                                        <br>We know you're up for the challenge because you've got that genius-level intellect just like Tony.
                                </h1>

                                </p>




                                <div class="flex justify-center">
                                        <!-- <button
                                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                                        </button> 
                                        <input type="text" id="answerinput"
                                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">

                                        <button id="Button2"
                                                class=" ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button2</button>
                                                -->
                                        <div id="decrement-count">
                                                <input type="image" id="up-arrow" src="less-than-symbol (1).png" />
                                        
                                        </div>
                                        <div id="total-count">

                                        </div>
                                        <div id="increment-count">
                                                <input type="image" id="down-arrow" src="greater-than-symbol.png" />
                                        </div>
                                        <button  id = "Button2" class="rounded-full size-10 button2 bg-violet-400 border-0  btn v1">Suit-Up</button>
                                </div>
                        </div>
                        
                        
                        `;

let html7 = `

                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">        
                        <img src="clock.jpeg" width = "500px">

                        </div>


                        <div
                        
                                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Welcome to Level 4 of the Avengers Hunt Game! 
                                </h1>
                                <br>
                                <p class="mb-10 leading-relaxed">
                                Time will tell how much i love you. 
                                <br> ~ Christine
                                </p>


                                <br>
                                <div class="flex justify-center">
                                        <!-- <button
                                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                                        </button> -->
                                        <input type="text" id="answerinput"
                                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">

                                        <button  id = "Button2" class="button2 bg-violet-400 border-0  btn v1">Time up</button>
                                </div>




                        `;


let html8 = `
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">        
                        <img src="asgard.jpg" width = "500px">

                        </div>


                        <div
                        
                                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Welcome to Level 5 of the Avengers Hunt Game! 
                                </h1>
                                <br>
                                <p class="mb-10 leading-relaxed" style = "font-size:25px;" >

                                <b>
                                .- ... --. .- .-. -.. / .. ... / -. --- - / .- / .--. .-.. .- -.-. . --..-- / .. - / .. ... / - .... . / .--. . --- .--. .-.. . .-.-.-
                                </b>
                                </p>


                                <br>
                                <div class="flex justify-center">
                                        <!-- <button
                                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                                        </button> -->
                                        <input type="text" id="answerinput"
                                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">

                                        <button  id = "Button2" class="button2 bg-violet-400 border-0  btn v1">Mjolnir</button>
                                </div>
`;


let html9 = `<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <!-- <a href="https://crosswordlabs.com/embed/avengers-210"> -->
                                <button
                                        class="inline-flex text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg">

                                        <a href="https://crosswordlabs.com/embed/avengers-210" target="_blank"class="button button--hoo">
        <div class="button__wrapper">
            <span class="button__text">Don't Click </span>
        </div>
        <div class="characterBox">
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
                <div class="charactor__body"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
                <div class="charactor__body"></div>
            </div>
            <div class="character">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
                <div class="charactor__body"></div>
            </div>
        </div>
    </a>
                                <!-- </a> -->
                        </div>




                        


                        <div
                        
                                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                        Welcome to Level 6 of the Avengers Hunt Game! 
                                </h1>
                                <br>
                                <p class="mb-10 leading-relaxed">
                                At Some Point, We All Have to Choose, Between What the World Wants You to Be, and Who You Are
                                <br>
                                But the answer always lies between what you see and The Almighty God.
                                
                                </p>


                                <br>
                                <div class="flex justify-center">
                                        <!-- <button
                                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                                        </button> -->
                                        <input type="text" id="answerinput"
                                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">

                                        <button  id = "Button2" class="button2 bg-violet-400 border-0  btn v1">I am Groot</button>
                                </div>




                        `;


function progressbar(x) {
        document.getElementById(
                "progressbardiv"
        ).style.width =
                x + "%";
        document.getElementById(
                "progressbarspan"
        ).innerText =
                x + "%";
}


let leveltime = {
        0: [0, 0, 0]
};
let [sec, min, hr] = [0, 0, 0];
let displaytime = document.getElementById("timer");

function stopwatch() {
        if (leveltime[currlevel] == undefined) {
                leveltime[currlevel] = [0, 0, 0];
        }

        [sec, min, hr] = leveltime[currlevel];
        sec++;
        if (sec == 60) {
                sec = 0;
                min++;
                if (min == 60) {
                        min = 0;
                        hr++;
                }
        }
        let h = (hr < 10) ? "0" + hr : hr;
        let m = (min < 10) ? "0" + min : min;
        let s = (sec < 10) ? "0" + sec : sec;
        if (currlevel !== 0)
                displaytime.innerHTML = `${h} : ${m} : ${s}`;
        leveltime[currlevel] = [sec, min, hr];
        // console.log(leveltime[currlevel]);
        localStorage.setItem("timestore", JSON.stringify(leveltime));
}

window.onload = function () {
        localStorage.setItem("timestore", JSON.stringify(leveltime));
}
function watchstart() {
        if (timer !== null) {
                clearInterval(timer)
        }

        setInterval(stopwatch, 1000);
}

function show() {
        // console.log('show called');
        let temptime = localStorage.getItem("timestore");
        if (temptime == null) {
                console.log('haha');
                leveltime = { 0: [0, 0, 0] };
        } else {
                leveltime = JSON.parse(temptime);
        }
        // console.log(currlevel); 
        // console.log(leveltime);
        // console.log('nabab');
        // if (currlevel !== 0) {
        watchstart();
        // }
        let notes = localStorage.getItem("levelstore");
        if (notes == null) {
                currlevel = 0;

        } else {
                currlevel = JSON.parse(notes);
        }
        if (currlevel == 0) {
                gamehtml.innerHTML = html0;
                progressbar(0);
        } else if (currlevel == 1) {
                gamehtml.innerHTML = html1;
        }
        else if (currlevel == 3) {
                gamehtml.innerHTML = html3;
        } else if (currlevel == 5) {
                gamehtml.innerHTML = html5;
                count = 0;
                const incrementCount =
                        document.getElementById(
                                "increment-count"
                        );
                const decrementCount =
                        document.getElementById(
                                "decrement-count"
                        );
                const totalCount =
                        document.getElementById(
                                "total-count"
                        );
                // Variable to track count
                // Display initial count value
                totalCount.innerHTML = count;
                // Function to increment count
                const handleIncrement = () => {
                        count++;
                        totalCount.innerHTML = count;
                };
                // Function to decrement count
                const handleDecrement = () => {
                        count--;
                        totalCount.innerHTML = count;
                };
                // Add click event to buttons
                incrementCount.addEventListener(
                        "click",
                        handleIncrement
                );
                decrementCount.addEventListener(
                        "click",
                        handleDecrement
                );
        } else if (currlevel == 7) {
                gamehtml.innerHTML = html7;
                // let puzzb =
                //         document.getElementById("puzz");
                // puzzb.addEventListener(
                //         "click",
                //         function () {
                //                 window.location.href =
                //                         "https://crosswordlabs.com/embed/avengers-210";
                //         }
                // );
        } else if (currlevel == 8) {
                gamehtml.innerHTML = html8;
        }
        else if (currlevel == 9) {
                gamehtml.innerHTML = html9;
        }
        else if (currlevel == 11) {
                gamehtml.innerHTML = "html" + currlevel;
                ;
        }


        if (currlevel <= maxlevel) {
                progressbar(100 * currlevel / maxlevel);
        }
        work();

}

function setlevel(a) {

        currlevel = a;
        localStorage.setItem(
                "levelstore",
                JSON.stringify(
                        currlevel
                )
        );
        localStorage.setItem("timestore", JSON.stringify(leveltime));
        show();
        // watchstart();
        location.reload();
}
show();
function work() {
        let btn = document.getElementById("Button2");
        btn.addEventListener("click", function () {
                console.log(currlevel);
                if (currlevel == 0) {
                        setlevel(1);
                } else if (currlevel == 1) {
                        console.log("hi");
                        let ans =
                                document.getElementById(
                                        "answerinput"
                                );
                        console.log(ans.value);
                        if (ans.value == "9") {
                                // let text2 = prompt('hi');
                                // console.log(text2);
                                setlevel(3);

                        }
                        ans.value = "";
                }
                else if (currlevel == 3) {
                        let ans =
                                document.getElementById(
                                        "answerinput"
                                ).value;
                        let check = ans.toLowerCase();
                        if (check == "i love you 3000" || "iloveyou3000") {
                                setlevel(5);
                        }
                        ans.value = "";

                } else if (currlevel == 5 && count == "27") {
                        setlevel(7);
                } else if (currlevel == 7) {
                        let ans =
                                document.getElementById(
                                        "answerinput"
                                ).value;
                        let check = ans.toLowerCase();
                        if (check == "doctor strange" || check == "doctorstrange") {
                                setlevel(8);
                        }
                        ans.value = "";
                }
                else if (currlevel == 8) {
                        let ans =
                                document.getElementById(
                                        "answerinput"
                                ).value;
                        let check = ans.toLowerCase();
                        if (check == "odin") {
                                setlevel(9);
                        }
                        ans.value = "";

                }
                else if (currlevel == 9) {
                        let ans = document.getElementById("answerinput").value;
                        let check = ans.toLowerCase();
                        if (
                                check == "star lord" ||
                                check == "starlord") {

                                window.location.href =
                                        "avengerhunthint.html";
                        }
                        // setlevel(9);

                        ans.value = "";
                }
        });
}






