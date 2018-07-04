/*
* @Author: Administrator
* @Date:   2018-06-21 16:41:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-21 16:41:01
*/
$(function(){
  
  
  // console.log(id);
  // content.forEach(item=>{
  //   if (item.id === parseInt(id)) {
  //     $('.title').html(item.title);
  //     $('.author').html('文／' +item.author);
  //     $('#content').html(item.content);
  //     // console.log(item.content);
  //     $('.editor').html('责任编辑：'+item.pageEditor);
  //     $('.from').html(item.from);
  //     $('.page-title').html(`${item.author}周源远<span style="font-size: 10px">&nbsp;${item.account}</span>`);
  //     $('.avater').attr('src', item.authorImg);
  //     $('.page-summary').html(item.summery);
  //   }
  // })

  function getArts(){
    let id = getId();
    let url = '../php/discovery/getArtsById.php';

    $.get(url, {id:id}, res=>{
      if (res.code === 0) {
        // console.log(res);
        let item = res.data[0];
        $('.title').html(item.title);
        $('.author').html('文／' +item.author);
        $('#content').html(item.content);
        // console.log(item.content);
        $('.editor').html('责任编辑：'+item.pageEditor);
        $('.from').html(item.from);
        $('.page-title').html(`${item.author}<span style="font-size: 10px">&nbsp;${item.account}</span>`);
        $('.avater').attr('src', item.authorImg);
        $('.page-summary').html(item.summery);
      }
    }, 'json');
  }

  getArts();
})