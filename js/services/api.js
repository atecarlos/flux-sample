import request from 'superagent';

export default {
	getInitiatives: () => {
		return new Promise((resolve, reject) => {
			request
				.get('/initiatives.json')
				.end((err, response) => {
					if(err){
						reject(err);
					}else{
						resolve(response.body);
					}
				});
		});
	}
};