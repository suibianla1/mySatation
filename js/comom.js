$(function () {
  $('.mui-icon-bars').on('tap', function () {
    // console.log(123);
    $('.side').animate({ 'left': "0" }, 500);
    $('.mask').show();
  })
  $('.mask').on('tap', function () {
    $('.side').animate({ 'left': "-100%" }, 500);
    setTimeout(() => {
      $(this).hide();
    }, 300);
  });
})

function getId() {
  let urlData = window.location.search;
  let params = {};
  let arr = urlData.slice(1).split('&');
  arr.forEach(item => {
    params[item.split('=')[0]] = item.split('=')[1];
  });

  return params.id;
}

function isLogin(){
  let url = '../php/login/isLogin.php';
  $.get(url, res=>{
    if (res.code === 0) {
      
    }else{
      location.href = './login.html';
      // alert(res.msg)
    }
  }, 'json')
}

function search(data) {
  let url = '/php/common/search.php';

  return new Promise((resolve, reject) => {
    $.post(url, data, res => {
      resolve(res);
    }, 'json');
  })
}