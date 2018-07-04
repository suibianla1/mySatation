/*
* @Author: Administrator
* @Date:   2018-06-27 17:02:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-27 17:13:28
*/
function search(data) {
	let url = '/php/common/search.php';

	return new Promise((resolve, reject) => {
		$.post(url, data, res => {
			resolve(res);
		}, 'json');
	})
}