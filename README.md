# Hello Cloud Machine Learning Engine from Node.js

This is a sample application that shows how to use the [predict method](https://cloud.google.com/ml-engine/reference/rest/v1/projects/predict) on [Cloud Machine Learning Engine](https://cloud.google.com/ml-engine/) to perform a prediction on a machine learning model hosted on Google Cloud ML.

* [Setup](#setup)
* [Running locally](#running-locally)
* [Deploying to App Engine](#deploying-to-app-engine)
* [Running the tests](#running-the-tests)

## Setup

Before you can run or deploy the sample, you need to do the following:

1. Enable Google Cloud Machine Learning Engine API
2. Install dependencies:

    With `npm`:

        npm install

    or with `yarn`:

        yarn install
        
## Running locally

This sample uses the default authentication credentials to access Cloud ML. For that reason we need to set the project that we want to use.

1. Use gcloud to set the property value of your active project.

```bash
gcloud config set project <MY-GCP-PROJECT>
```

2. Start the application.
With `npm`:

    npm start

or with `yarn`:

    yarn start

## Deploying to App Engine

With `npm`:

    npm run deploy

or with `yarn`:

    yarn run deploy
