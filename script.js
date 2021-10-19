const task=document.getElementsByClassName("task")[0]
const btn=document.getElementsByClassName("btn");

task.innerHTML=`<form  onsubmit="event.preventDefault()">
                <h1>register with us</h1>
                <label class="form">User name</label>
                <input id="username" placeholder="enter username"><br><br>
                <label class="form">Email</label>
                <input id="email" placeholder="enter Email"><br><br>
                <label class="form">password</label>
                <input type="password" id="password1" placeholder="enter password"><br><br>
                <label class="form">confirm password</label>
                <input type="password" id="password2" placeholder="enter password again">
                <br><br>
                <button onclick="add()" class="btn">Submit</button>
                </form>`
          
function add(){
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password1=document.getElementById("password1").value;
    const password2=document.getElementById("password2").value;
    console.log("user name :"+username);
    console.log("Email : "+email);
    console.log("password : "+password1);
    console.log("confirm password : "+password2);

}
     
    
   


