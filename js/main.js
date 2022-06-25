
// https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2p2Cc2RJlATPVJBmesRTrhfgZiHXW4rbSDNEFVJ4tkl4FnriRNZg5fhGw

let allData=[];


async function getMovise(){

    let allMovise = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2p2Cc2RJlATPVJBmesRTrhfgZiHXW4rbSDNEFVJ4tkl4FnriRNZg5fhGw")
    let movise= await allMovise.json();
    allData =movise.results;

   console.log(movise.results)
   displayMoves();
}

getMovise()
displayMoves();
function displayMoves(){
let html="";
for(let i=0; i<allData.length; i++){
    html +=` <div class="col-md-4">
    <div class="items">
        
            <img class="w-100  image-movies" src="https://image.tmdb.org/t/p/w500/${allData[i].poster_path}" alt="boster">

            
            <div class="layer d-flex align-items-center" >
            <div>
                <h2>${allData[i].title}</h2>
        <p>${allData[i].overview}</p>
        <p> rate:${allData[i].vote_average}</p>
        <p>${allData[i].release_date}</p>
            </div>
       </div>
        
    </div>
</div>`
}
document.querySelector(".bosters").innerHTML = html;

}
let innerWidth =$(".side-nav").outerWidth(true)


$(".close-open").click(function(){
  
    if($(".side-nav").css("left") == "0px"){

        $(".side-nav").animate({left:-innerWidth},1000);
    }
    else{
        $(".side-nav").animate({left:"0px"},1000);
    }
})

 document.querySelector(".search-movies").addEventListener("keyup",function(e){
    let usaeValue=e.target.value;
    

 })





let userName=document.getElementById("name")
let userMail=document.getElementById("mail")
let userPhone=document.getElementById("phone")
let userAge=document.getElementById("age")
let userPas=document.getElementById("pass")
let userRePas=document.getElementById("repass")
let allUsers=[];
let users={
    userName:userName.value,
    userMail:userMail.value,
    userPhone:userPhone.value,
    userAge:userAge.value,
    userPas:userPas.value,
    userRePas:userRePas.value
}

 function validateName(){

    var regex = /[a-z]{3,8}/;
      return regex.test(userName.value);
    }   
  
    function validatemail(){

    var regex = /^[a-z]{3,8}$/;
      return regex.test(userMail.value);
    } 
  
    function validatephon(){

        var regex = /^[a-z]{3,8}$/;
          return regex.test(userPhone.value);
      } 
      function validateAge(){

        var regex = /^[a-z]{3,8}$/;
          return regex.test(userAge.value);
      } 
      function validatpass(){

        var regex = /^[a-z]{3,8}$/i;
          return regex.test(userPas.value);
      } 
      function validatREpass(){

        var regex = /^[0-9]{11,}$/i;
          return regex.test(userRePas.value);
      } 


      if( validateName() && validatemail() && validatephon() && validateAge() && validatpass() && validatREpass()==true ){
         allUsers.push(users)
      }
      else{
        document.getElementById("alret").style.display = "block"
        document.getElementById("alret2").style.display = "block"
        document.getElementById("alret3").style.display = "block"
        document.getElementById("alret4").style.display = "block"
        document.getElementById("alret5").style.display = "block"
        document.getElementById("alret6").style.display = "block"
      }
      // https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2tLM97derUVGrow9ZyG36bPI5oR3zXO43EqTFSGtmob4jmDbn6My9soD0&query&query=Jack+Reacher

      $("#search").keyup(function(e){

       let userValue= e.target.value;
       searchMovise(userValue);
      })


      async function searchMovise(term){

        let allMovise = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2tLM97derUVGrow9ZyG36bPI5oR3zXO43EqTFSGtmob4jmDbn6My9soD0&query&query=${term}`)
        let movise= await allMovise.json();
        allData =movise.results;
    
       console.log(movise.results)
       displayMoves();
    }

