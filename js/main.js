$(function () {

  let content = [];

  function getArts() {
    let url = '../php/tuewn/getTuwen.php';

    $.get(url, res=>{
      // console.log(res);
      if (res.code === 0) {
        let content = res.data;
        let html = '';
        for (var i = 0; i < content.length; i++) {
          html += `<div class="mui-card">
          <a href="./pages/tuwen.html?id=${content[i].id}">
          <!--页眉，放置标题-->
            <div class="mui-card-header">
              <img src="${content[i].titleImg}" alt="">
              <div class="mui-media-body">
                ${content[i].author}
                <p>发表于 ${content[i].time}</p>
              </div>
            </div>
            <!--内容区-->
            <div class="mui-card-content">
              <img src="${content[i].img}" alt="">
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer">${content[i].title}</div>
            </a>
          </div>`;
        }
        $('.main').html(html);
      }
    }, 'json')
  }

  getArts();

  //搜索图文
  $('.mui-icon-search').on('tap', function(){
    
    let key = $('input[name="search"]').val();
    // console.log(key);
    if (key == '') {
      getArts();
      return;
    }
    let params = {
      key,
      type: 'tuwen'
    }
    search(params).then(res=>{
      // console.log(res);
      let html = '';
      if (res.code === 0) {
        let content = res.data;
        html = `<div class="mui-card">
          <a href="./pages/tuwen.html?id=${content[0].id}">
          <!--页眉，放置标题-->
            <div class="mui-card-header">
              <img src="${content[0].titleImg}" alt="">
              <div class="mui-media-body">
                ${content[0].author}
                <p>发表于 ${content[0].time}</p>
              </div>
            </div>
            <!--内容区-->
            <div class="mui-card-content">
              <img src="${content[0].img}" alt="">
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer">${content[0].title}</div>
            </a>
          </div>`;
      } else {
        html = '<p style="text-align: center; font-size: 16px; margin-top:100px">' + res.msg + '</p>';
      }
      $('.main').html(html);
    })
  })
});