# Contentful Winning Demo

## Steps to run:

1. clone the repo
1. create/select a new space
1. add the following locales to your space:
    - "en-US"
    - "de-DE"
1. import `contentful_exports/SEDemo.json` into a new blank space
1. change values in `src/components/config.js` to match your space
1. run `yarn` or `npm install`
1. run `yarn run dev` or `npm run dev`
1. open browser to http://localhost:8080


## Content model

![Content model simple](./winning-demo-content-model-simple.png)

![Content model full](./winning-demo-content-model.png)