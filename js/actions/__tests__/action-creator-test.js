describe('action creator', function(){
	var creator = require('../action-creator');

	it('updates message', function(){
		expect(creator.updateMessage).toBeDefined();
	});
});