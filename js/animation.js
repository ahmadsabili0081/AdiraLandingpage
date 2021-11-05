
window.addEventListener('scroll', function() {
  let btnScroll = document.querySelector('.btn');
  btnScroll.classList.toggle('showBtn', window.scrollY > 50);
});
function btnScrolll(){
  document.body.scrollTop = 0;

  document.documentElement.scrollTop = 0;
}

function myLoader(){
  var loader = setTimeout(showpage,3000);
}
function showpage(){
  document.getElementById('loader').style.display="none";
  document.getElementById('hide').style.visibility="unset";
}
AOS.init({
    disable: false,
    offset: 120,
    duration: 400,
  });

