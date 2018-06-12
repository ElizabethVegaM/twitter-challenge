
const tweetBtn = document.getElementById('tweetBtn');
let tweetTxt = document.getElementById('tweetTxt').value;

if(tweetTxt === '') {
  tweetBtn.disabled = true;
};

const char = () => {
  tweetBtn.disabled = false;
};
tweetBtn.addEventListener('click', () => {
  let tweetTxt = document.getElementById('tweetTxt').value;
  document.getElementById('msg').innerHTML = tweetTxt;

});

