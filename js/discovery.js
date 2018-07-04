$(function(){
  // let content = data;
  // console.log(data)
  // console.log(tuwen)
  // let html = '';
  // content.forEach(item=>{
  //   // console.log(item.title)
  //   html += ` 
  //     <div class="mui-card" artId='${item.id}'>
  //       <div class="title">
  //         <p class="title-content">${item.title}</p>
  //         <p class="author">文 / ${item.author}</p>
  //       </div>
  //       <div class="mui-card-content">
  //         <img src="${item.img}" alt="">
  //       </div>
  //       <div class="mui-card-footer">${item.day}</div>
  //     </div>`;
  // });

  // $('.main').html(html);

  function getArts(){
    let url = '../php/discovery/getArts.php';
    $.get(url, res=>{
      // console.log(res);
      if (res.code === 0){
        // console.log(res.data);
        let html = '';
        let content = res.data;
        content.forEach(item => {
          html += ` 
            <div class="mui-card" artId='${item.id}'>
              <div class="title">
                <p class="title-content">${item.title}</p>
                <p class="author">文 / ${item.author}</p>
              </div>
              <div class="mui-card-content">
                <img src="${item.img}" alt="">
              </div>
              <div class="mui-card-footer">${item.day}</div>
            </div>`;
        });
        // console.log(html);

        $('.main').html(html);
      }
    }, 'json')
  }

  getArts();

  //点击卡片
  $('.main').on('tap', '.mui-card', function(){
    // console.log($(this).attr('id'));
    location.href = './content.html?id=' + $(this).attr('artid');
  });

  //搜索文章
  $('.mui-icon-search').on('tap', function () {
    let key = $('input[name="search"]').val();
    let params = {
      key,
      type: 'article'
    };
    search(params).then(res=>{
      let html = '';
      if (res.code === 0) {
        let item = res.data[0];
        html = ` 
          <div class="mui-card" artId='${item.id}'>
            <div class="title">
              <p class="title-content">${item.title}</p>
              <p class="author">文 / ${item.author}</p>
            </div>
            <div class="mui-card-content">
              <img src="${item.img}" alt="">
            </div>
            <div class="mui-card-footer">${item.day}</div>
          </div>`;
      }else{
        html = '<p style="text-align: center; font-size: 16px; margin-top:100px">'+res.msg+'</p>';
      }
      $('.main').html(html);
    })
  })
})

