const shamble = document.getElementById('but');

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function another(inputText) {
      if (inputText.value.match(mailformat)) {  
                  window.open('http://127.0.0.1:5500/index1.html');
            return true;
      }
      else {
            alert("You have entered an invalid email address!");
            return false;
      }
} 