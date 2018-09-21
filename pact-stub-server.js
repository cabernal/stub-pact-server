var pact = require("@pact-foundation/pact-node");


var server = pact.createStub({
	pactUrls: ['<pact contract url>'],
	port: 8091
});

server.start().then(function(){});	
