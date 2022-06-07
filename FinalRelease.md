Steps for bringing the client side UI up and running and listing the gists

1) Go to the root directory of the cloned repo
2) Edit the config.ts file in the directory /src/propertyConfig
3) Update the gitaccesstoken between the quotes. Access token is provided in the black board
4) Execute the command quasar.cmd dev
5) This will make the quaser UI up and running
6) Validate the UI by navigating to 'http://localhost:8080/#/'
7) Navigate to the 'Github' route on the top right of Home page
8) On the page , there are two buttons available. One is Authorized for authorized users and other one for unauthorized users.
9) On clicking the authorized button, it will return the users public as well as secret gists.
10) On clicking the unauthorized button, it will return the users public gist only


Few installations are required prior to perform above

1) Install quaser
2) Install npm
3) Install axios



Github oAuth integration

oAuth is the mechanism used to authenticate client app to server app with an access token. This is to make sure the client is authorized to make API calls to the server.
First, the client app needs to be registered with github. Once app is registered, client id and a client secret will be shared. Client app then use the callback function to create a session code. Session code along with client id and client secret is used to generate an access toke. Access token can be appended with the request so that the server can verify if the client is authorized and can provide the respose accordingly. 

Another easiest way to authenticate with the GitHub API is by using basic personal access token. In the github, the user can create personal access token and can define a scope for the token. Client whike making API call can use this token along with request header.



