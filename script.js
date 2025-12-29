function login(){
  if(document.getElementById("pwd").value === "BIETCAMPUS"){
    document.getElementById("login").style.display="none";
    document.getElementById("dashboard").classList.remove("hidden");
  }else{
    alert("Invalid College Access Password");
  }
}

function logout(){
  location.reload();
}

function startApp(){
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function showTab(tab){
  document.querySelectorAll(".tab").forEach(t=>t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

function addLost(){
  let r = new FileReader();
  r.onload = ()=>{
    lostList.innerHTML += `
    <div class="card">
      <img src="${r.result}">
      <h3>${lostName.value}</h3>
      <p>Contact: ${lostContact.value}</p>
    </div>`;
  }
  r.readAsDataURL(lostImg.files[0]);
}

function addFound(){
  let r = new FileReader();
  r.onload = ()=>{
    foundList.innerHTML += `
    <div class="card">
      <img src="${r.result}">
      <h3>${foundName.value}</h3>
      <p>Contact: ${foundContact.value}</p>
      <button onclick="this.innerText='Returned ✔'; this.disabled=true;">
        Confirm Returned
      </button>
    </div>`;
  }
  r.readAsDataURL(foundImg.files[0]);
}
