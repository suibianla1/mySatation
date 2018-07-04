
$(function(){
	let id = getId();

	function getArtsById(){
		let url = '../php/tuewn/getTuwenById.php';
		$.get(url, { id: id }, res => {
			// console.log(res.data[0]);
			if (res.code === 0) {
				let data = res.data[0];
				let html = `<div class="item">
	  		<img src="${data.img}" alt="">
	  		<p class="author">摄影 | ${data.author}</p>
	  		<p class="date">${data.day}</p>
	  		<p class="month">${data.month}</p>
	  		<div class="line"></div>
	  		<p class="contnet">${data.content}</p>
	  	</div>`;
				$('.main').html(html);
			}
		}, 'json');
	}
	
	getArtsById();
})