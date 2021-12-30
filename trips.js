function like(obj) {
    let index = obj.nextElementSibling;
    let value = index.innerHTML;
    let nValue = parseInt(value) +1;
    index.innerHTML = nValue;
}

function dislike(obj){
    let index = obj.nextElementSibling;
    let value = index.innerHTML;
    let nValue = parseInt(value) +1;
    index.innerHTML = nValue;
}

function tweet(){
    let oValue = document.querySelector("#div3");
    let pValue = oValue.innerHTML;
    let value = document.querySelector("#input").value;

    let nValue = `<div class="col-6 col-md-3 p-3" style="background-color: #232323">
    <div class="card" style="height: 250px">
      <div
        class="card-header fs-6 fw-bold"
        style="background-color: black; color:aliceblue"
      >
        #Mytrip
      </div>
      <div class="card-body" style="height:100px; overflow-y: auto"id="id1">${value}</div>
      <div class="card-footer fs-6" style="background-color: black">
        
        <div><input
        id="input"
        class="w-75 mt-3 rounded-3"
        type="text"
        value=""
        placeholder="Comments.."
      /></div>
      </div>
    </div>
  </div>`

oValue.innerHTML = pValue + nValue;

document.querySelector("#input").value="";


}