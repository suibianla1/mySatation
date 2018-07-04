$(function(){
  //显示登陆框
  $('.main').animate({
    transform: "translate(-50%, -60%)",
    opacity: 1,
  }, 1000);

  function getRegister(){
    let url = '../php/login/register.php';
    let data = $('.form').serialize();
    //将获取的值转成对象
    // console.log(data);
    let params = {};
    let arr = data.split('&');
    arr.forEach(item => {
      let tepmArr = item.split('=');
      params[tepmArr[0]] = tepmArr[1];
    });
    params.username = decodeURI(params.username);

    $.post(url, params, function(res){
      // console.log(res);
      if (res.code === 0) {
        alert(res.msg);
        location.href = '../pages/login.html';
      }
    }, 'json')
  }

  $('.register').on('click', function (){
    getRegister();
    return false;
  });
})