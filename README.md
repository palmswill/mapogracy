Mapocracy
==============
![](https://github.com/palmswill/mapogracy/blob/main/public/front-top.png)
<br/>

![](https://github.com/palmswill/mapogracy/blob/main/public/poll-display.png)
<br/>

![](https://github.com/palmswill/mapogracy/blob/main/public/poll-create.png)
<br/>

![](https://github.com/palmswill/mapogracy/blob/main/public/user%20profile.png)

<br/>



Mapocracy is a platform created for users to voice and represent themselves through their geographic location. Polls traditionally are only done by governments or news agencies, Mapocracy breaks the barrier, provides the platform that lets anyone, whether you are a politician or a taxi driver, to represents themselves by creating their polls or casting  votes. With the help of geolocation, we can pinpoint the location and use it to represent their regional groups. 

This project was supported by  [The Mapocracy- API](https://github.com/alou64/mapocracy-api).




## Features
* Users will be automatically granted an account once they log in using social media or using verification code based on email sent to their mail box.
* Users can browse different polls based on topics, regions and popularity.

* Users can click to see the poll details and inspect the result voted by others based on their geolocation.
* Users can vote on ongoing polls.
* Users can create poll by providing the question, context, location to be asked and date to be asked.
* Users can edit their personal profile by entering the user interface.
* Users can view the polls they created by entering the "Your Poll" page.


## Tech Stack



####Authorization
* [Auth0](https://auth0.com/)
####Map Display
* [ArcGIS API](https://developers.arcgis.com/)
#### Web
* React
* React Router
* Axios
* SASS
* [Material UI](https://mui.com/)


For back end, please check out [The Mapocracy- API](https://github.com/alou64/mapocracy-api).




## Getting Started

##### Intallation

To install the app, run: 
 ### `npm install`

 <br/>


#####Environmental Variables

Please open an `.env` file , and fill in the following environmental variables:

###### Auth0
`REACT_APP_AUTH0_DOMAIN`
`REACT_APP_CLIENT_ID`

Both can be found in application tab of auth0  dashboard. Please also set up for the page redirect to function:
`Allowed Callback URLs`
`Allowed Logout URLs`
`Allowed Web Origins`

<br/>
###### Arcgis API
`REACT_APP_ARCGIS_KEY`

Please see [API Keys](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/create-and-manage-an-api-key/).


##### Starting the project

To start the project, run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Dependencies

* @arcgis/core: 4.22.2
* @auth0/auth0-react: 1.9.0
* @emotion/react: 11.8.2
* @emotion/styled: 11.8.1
* @mui/lab: 5.0.0-alpha.74
* @mui/material: 5.5.1
* axios: 0.26.1
* date-fns: 2.28.0
* react: 17.0.2,
* react-router-dom: 6.2.2
* sass: 1.49.9


## Contributors
* [William Liu](https://github.com/palmswill) 
* [Alou64](https://github.com/alou64)
* [Ezechiel ITIMBIEN KAKANA](https://github.com/eze1er) 