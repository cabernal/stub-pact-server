var pact = require("@pact-foundation/pact-node");


var server = pact.createStub({
	pactUrls: ['C:\\Users\\BERNC2A\\git\\stub-pact-server\\pact-provider.json'],
	port: 8091
});

server.start().then(function(){});	
