let currentTab = "all";
const allContainer=document.getElementById("all-container");
const interviewContainer=document.getElementById("interview-container");
const rejectedContainer=document.getElementById("rejected-container");

const noInterview=document.getElementById("no-interview");
const noRejected=document.getElementById("no-rejected");

const totalStat=document.getElementById("start-total");
const interviewStat=document.getElementById("start-interview");
const rejectStat=document.getElementById("start-reject");
const availableState=document.getElementById("section-count");

function switchTab(tab) {
  const tabs=["all","interview","rejected"];
  
  for(const t of tabs){
    const tabName=document.getElementById("tab-" + t);
    if(t === tab){
      currentTab=t;
      tabName.classList.remove("tab-inactive");
      tabName.classList.add("tab-active");
    }else{
      tabName.classList.remove("tab-active");
      tabName.classList.add("tab-inactive");
    }
  }

  allContainer.classList.add("hidden");
  interviewContainer.classList.add("hidden");
  rejectedContainer.classList.add("hidden");
  noInterview.classList.add("hidden");
  noRejected.classList.add("hidden");

  const noAll = document.getElementById("no-all");

  if(tab==="all"){
  allContainer.classList.remove("hidden");
  if(allContainer.querySelectorAll(".job-card").length < 1) {
    noAll.classList.remove("hidden");
  }
  }else if(tab==="interview"){
    interviewContainer.classList.remove("hidden");
    if(interviewContainer.querySelectorAll(".job-card").length < 1) {
      noInterview.classList.remove("hidden");
    }
  }else{
    rejectedContainer.classList.remove("hidden");
    if(rejectedContainer.querySelectorAll(".job-card").length < 1) {
      noRejected.classList.remove("hidden");
    }
  }
  updateStat();
}

function updateStat(){
  const allCount = allContainer.querySelectorAll(".job-card").length;
  const interviewCount = interviewContainer.querySelectorAll(".job-card").length;
  const rejectCount = rejectedContainer.querySelectorAll(".job-card").length;

  totalStat.innerText = allCount;
  interviewStat.innerText = interviewCount;
  rejectStat.innerText = rejectCount;

  let count = 0;
  if(currentTab === "all"){
    count = allCount;
    document.getElementById("no-all").classList.toggle("hidden", allCount > 0);
  } else if(currentTab === "interview"){
    count = interviewCount;
    noInterview.classList.toggle("hidden", interviewCount > 0);
  } else if(currentTab === "rejected"){
    count = rejectCount;
    noRejected.classList.toggle("hidden", rejectCount > 0);
  }

  availableState.innerText = count + " jobs";
}
totalStat.innerText=allContainer.querySelectorAll(".job-card").length;

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event) {
  const clickedElement=event.target;
  const card=clickedElement.closest(".job-card");
  if(!card) return;

  const parent=card.parentNode;
  const status=card.querySelector(".status");

  if(clickedElement.classList.contains("interview-btn")) {
    status.innerText="Interviewed";
    interviewContainer.appendChild(card);
    updateStat();
  }

  if(clickedElement.classList.contains("reject-btn")) {
    status.innerText ="Rejected";
    rejectedContainer.appendChild(card);
    updateStat();
  }

  if (clickedElement.closest(".delete-btn")) {
    parent.removeChild(card);
    updateStat();
  }
});


  