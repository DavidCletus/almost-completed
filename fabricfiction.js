let body = document.getElementById("body");
// let nav =document.getElementById("nav");
nav.addEventListener("click", function(e){
    if (e.target.tagName === "NAV"){
        e.target.classList .toggle("checked");
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
},false);

section.addEventListener("click", function(e){
    if (e.target.tagName === "BODY"){
        e.target.classList .toggle("checked");
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.appendChild("nav");
    }
},true);


// Function to initiate Google sign-in
function Google() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // User is signed in.
        const user = result.user;
        console.log(user);
        // You can redirect to another page or handle the signed-in user here
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }
  
  









// function openNav(){
//     section.classList.add("openNav")
//     let section = document.createElement("section");
//     section.innerHTML = section;
//     section.appendChild("nav");
//     alert("great job");
    // if(nav === open){
    //     alert('close nav');
    // }
// // let nav =document.getElementById("nav");
// // let section = document.getElementById("section");
// }
// function closeNvav(){
//     section.classList.remove("openNav");
// }