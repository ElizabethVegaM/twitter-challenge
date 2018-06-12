const tweetBtn = document.getElementById('tweetBtn');
let tweetTxt = document.getElementById('tweetTxt').value;

if(tweetTxt === '') {
  tweetBtn.disabled = true;
};

const char = () => {
  tweetBtn.disabled = false;
};

const count = () => {
  let str = document.getElementById('tweetTxt').value;
  let long = str.length;
  if(long <= 140) {
    document.getElementById('counter').value = 140 - long; 
  }
} 



tweetBtn.addEventListener('click', () => {
  let tweetTxt = document.getElementById('tweetTxt').value;
  document.getElementById('msg').innerHTML = tweetTxt;
});

