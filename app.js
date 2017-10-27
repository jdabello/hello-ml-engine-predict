'use strict';

// [START app]
const express = require('express');


const app = express();

app.get('/', (req, res) => {
  predict(res,req);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]

// [START predict]

function predict (res, req) {
	var google = require('googleapis');
	var machinelearning = google.ml('v1');
	// This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
	// environment variables.
	var temp;
	google.auth.getApplicationDefault(function (err, authClient, projectId) {
	  	if (err) {
	    	console.log('Authentication failed because of ', err);
	    	return;
	  	}
	  	if (authClient.createScopedRequired && authClient.createScopedRequired()) {
	    	var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
	    	authClient = authClient.createScoped(scopes);
	  	}
	  	var request = {
	    	name: "projects/" + projectId + "/models/census",
	    	resource: {"instances": [{"age": 25, "workclass": " Private", "education": " 11th", "education_num": 7, "marital_status": " Never-married", "occupation": " Machine-op-inspct", "relationship": " Own-child", "race": " Black", "gender": " Male", "capital_gain": 0, "capital_loss": 0, "hours_per_week": 40, "native_country": " United-States"}]},
	
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
	console.log(temp);		
}
// [END predict]
