
exports.helloMlEnginePredict = function helloMlEnginePredict (req, res) {  
  predict(req,res);
};

// [START predict]
function predict (req, res) {
	// This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
	// environment variables.
	var google = require('googleapis');
	var machinelearning = google.ml('v1');
	google.auth.getApplicationDefault(function (err, authClient, projectId) {
	  	if (err) {
	    	console.log('Authentication failed because of ', err);
	    	return;
	  	}
	  	if (authClient.createScopedRequired && authClient.createScopedRequired()) {
	    	var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
	    	authClient = authClient.createScoped(scopes);
	  	}
	  	var resourceData= req.body;
  		console.log(resourceData);
	  	var request = {
	    	name: "projects/" + projectId + "/models/census",
	    	resource: resourceData,
	
	    	// This is a "request-level" option
	    	auth: authClient
	  	};
	
	  	machinelearning.projects.predict(request, function (err, result) {
	    	if (err) {
	      		console.log(err);
	    	} else {
	      		console.log(result);
	      		res.status(200).send('Hello, world! This is the prediction: ' + JSON.stringify(result)).end();
	    	}
	  	});
	});
}
// [END predict]
