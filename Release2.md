Steps for running the microservices API

1) Clone the repo proj-release-2 to local machine
2) Set up Visual Studio Code and open the downloaded folder
3) Open the terminal and navigate to the home path and change directory to "server"
4) Execute the command 'npm run start'. This command will make the API to be up and running and listening on the port 3000
5) Validate the URL by opening a browser and go to the url 'http://localhost:3000/listrepos'
6) This microservice API list all the repos - reading a yaml file under /src/data/data.yaml


Steps for bringing the client side UI up and running

1) Go to the root directory of the cloned repo
2) Execute the command quasar.cmd dev
3) This will make the quaser UI up and running 
4) Validate the UI by navigating to 'http://localhost:8080/#/'
5) Navigate to the 'Image Gallery' link on the left side panel
6) On the page that is getting popped up - click on the Git_repos link
7) On clicking the link, it will invoke the API internally and the contents from API will be displayed in the web page.


Few installations are required prior to perform above

1) Install quaser
2) Install npm
3) Install axios