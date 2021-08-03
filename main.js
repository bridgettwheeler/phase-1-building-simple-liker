// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

var heartElement = document.getElementsByClassName("like-glyph");
var errorModal = document.getElementById('modal');


for (var i = 0; i < heartElement.length; i++) {
  heartElement[i].addEventListener('click', function() {
    mimicServerCall().then((response) => {
      if (this.innerText == EMPTY_HEART){
        this.innerText = FULL_HEART;
        this.classList.add('activated-heart');
      } else {
        this.innerText = EMPTY_HEART;
        this.classList.remove('activated-heart');
      }
    }).catch((response)=>{
      errorModal.classList.remove('hidden');
      setTimeout(function(){
        errorModal.classList.add('hidden')
      }, 3000);
    })
  });
}
 




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
