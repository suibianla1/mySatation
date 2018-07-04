//判断是否登陆
isLogin();
$(function(){
  
  //获取用户信息;
  getInfo();
  //点击修改
  $('.mui-icon-more').on('click', function(){
    // console.log(123);
    $(".xiugai").show();
  });

  //取消
  $('.no').on("click", function(){
    $('.xiugai').hide();
    return false;
  });

  //确认修改
  $('.yes').on('click', function(){
    let data = $('.form').serialize();
    //将获取的值转成对象
    // console.log(data);
    let params = {};
    let arr = data.split('&');
    arr.forEach(item => {
      let tepmArr = item.split('=');
      params[tepmArr[0]] = tepmArr[1];
    });
    params.userId = JSON.parse(localStorage.getItem('userInfo')).userId;
    params.username = decodeURI(params.username);
    params.gender = decodeURI(params.gender) == '男'? 1:2;
    params.signature = decodeURI(params.signature);

    if (params.username == '') {
      alert('请输入用户名');
      return false;
    }
    // console.log(params);
    let url = '../php/user/motifyUserInfo.php';
    $.post(url, params, function(res){
      if (res.code === 0) {
        alert(res.msg);
        // console.log(res.data);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        location.reload();
      }else{
        alert(res.msg);
      }
    },"json");
    return false;
  });

  //退出
  $('.singout button').on('click',function(){
    // console.log(123);
    $.post('../php/login/logout.php', res=>{
      // console.log(res);
      if (res.code == 0) {
        localStorage.removeItem('userInfo');
        location.href = '../../index.html';
      }else{
        alert('退出失败');
      }
    }, 'json')
  });

  //获取用户信息
  function getInfo(){
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // console.log(userInfo);
    if (userInfo) {
    // console.log(123);
      if (userInfo.uerImg) {
        $('.pic img').attr('src', userInfo.uerImg);
      }
      $('.name span').html(decodeURI(userInfo.username));
      $('.username').html('昵称：'+decodeURI(userInfo.username));
      let gender = userInfo.gender == 1? '男':'女';
      // console.log(gender);
      $('.gender').html('性别：'+ gender);
      let age = userInfo.age? userInfo.age:'未知';
      $('.age').html('年龄：' + age);
      let signature = userInfo.signature ? userInfo.signature: '本宝宝还没签名哦！';
      $('.qianming').html('自我介绍：' + signature );

      $('input[name="username"]').val(userInfo.username);
      $('input[name="gender"]').val(gender);
      $('input[name="age"]').val(userInfo.age);
      $('input[name="signature"]').val(userInfo.signature);
    } 
  }

  //上传图片
  $('#upload').on('change', function () {
    // console.log(123);
    let file = this.files[0];
    let xhr = new XMLHttpRequest();
    xhr.open('post', '../php/user/upload.php');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let res = JSON.parse(xhr.responseText);
        if (res.code === 0) {
          // console.log(res.data);
          $('.pic img').attr('src', res.data.imgUrl);
          let userId = JSON.parse(localStorage.getItem('userInfo')).userId;
          $.post('../php/user/motifyUserInfo.php', {userId: userId, uerImg: res.data.imgUrl}, res=>{
            if (res.code===0) {
              // console.log(res);
              localStorage.setItem('userInfo', JSON.stringify(res.data));
            }
          }, 'json');
        }
      }
    }
    let formdata = new FormData();
    formdata.append("file", file);
    xhr.send(formdata);
  });
})