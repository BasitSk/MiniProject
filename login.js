
function login(){
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;


    if((email == "bhavesh@gmail.com" || email == "bhim@gmail.com"|| email == "basit@gmail.com") && pass == 1234){
        let parent = document.querySelector("#div");
        let child = parent.innerHTML;
        let newChild = `<a href="review2.html"><button
        id="btn"
        onclick="login()"
        style="background-color: rgb(0, 3, 8); color: aliceblue"
        class="im6"
      >
        <b>Log In</b>
      </button> </a>`
      parent.innerHTML = newChild;

    }
    else{
        alert("You have entered wrong password or email..!!");
    }

}

function review(){
    let highlight = document.querySelector("#highlight").value;
    let title = document.querySelector("#title").value;
    let city = document.querySelector("#city").value;
    let extra = document.querySelector("#extra").value;

    let child = document.querySelector("#reviewdiv").innerHTML;
    let newChild =  `<div
    style="border: 2px solid aliceblue; padding: 10px"
  >
${title} - ${city}<br />
    <i>“${highlight}”</i>${extra} </div>`;

    document.querySelector("#reviewdiv").innerHTML = child+newChild;



}

function login2(){
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;


    if((email == "bhavesh@gmail.com" || email == "bhim@gmail.com"|| email == "basit@gmail.com") && pass == 1234){
        let parent = document.querySelector("#div");
        let child = parent.innerHTML;
        let newChild = `<a href="trips.html"><button
        id="btn"
        onclick="login()"
        style="background-color: rgb(0, 3, 8); color: aliceblue"
        class="im6"
      >
        <b>Log In</b>
      </button> </a>`
      parent.innerHTML = newChild;

    }
    else{
        alert("You have entered wrong password or email..!!");
    }

}