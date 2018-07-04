$(function() {
  //显示登陆框
  $('.main').animate({
    transform: "translate(-50%, -60%)",
    opacity: 1,
  }, 1000);

  //登录
  $('.login').click(function (event){
    let e = event || window.event;
    e.preventDefault()
    let data = $('.form').serialize();
    //将获取的值转成对象
    console.log(data);
    let params = {};
    let arr = data.split('&');
    arr.forEach(item => {
      let tepmArr = item.split('=');
      params[tepmArr[0]] = tepmArr[1];
    });
    params.username = decodeURI(params.username);
    // console.log(params);
    if (!params.username) {
      alert('请输入用户名/昵称')
      return;
    }
    if (!params.pwd) {
      alert('请输入密码');
      return;
    }
    //发送登陆请求
    let url = '../php/login/login.php'
    $.post(url, params, res=>{
      console.log(res);
      if (res.code === 0) {
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        alert(res.msg);
        location.href = '../pages/me.html';
      }else{
        alert(res.msg);
      }
    }, 'json')
  })
})