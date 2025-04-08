
# Overview
This is a simple reactjs demo application, which is written in reactjs and impliment CI/CD with Jenkins Pipeline (Jenkinsfile).


## Project Structure
```
Task-2-with-Jenkins-CI-CD/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── logo.svg
|   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── Dockerfile
├── Jenkinsfile
├── README.md
├── package.json
└── package-lock.json

```
## Prerequisites
Ensure you have the following installed on your Machine:
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Git](https://git-scm.com/downloads/linux)
- [Jenkins](https://www.jenkins.io/doc/book/installing/linux/)
- [Java](https://www.jenkins.io/doc/book/installing/linux/)



## Installation & Setup

To deploy this project launch the EC2 instance on AWS and 8080 port should be allowed in Security Group.
In our case we launch ubuntu machine.
After that run following command on your Machine.

### Update the Machine.
```
sudo apt-get update
```
### Install Git
```
sudo apt-get install -y git
```
### Install Docker 
```
sudo apt-get install -y docker.io
```
### Install Java 
```
sudo apt update
sudo apt install fontconfig openjdk-17-jre
java -version
```
### Install Jenkins
```
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
sudo systemctl start jenkins.service
```

### Add your Jenkins user in docker group.
```
sudo usermod -aG docker jenkins
```
### update the group
```
newgrp docker
```
### Access the Jenkins dashboard
```
http://<instance-public-ip>:8080/
```

## GitHub Configuration

```
# Create a repository in your github account.
# In your repo settings click on Webhooks options, add webhooks.
# Payload URL:- http://<jenkins-server-ip>:8080/github-webhook/
# Content type :- application/json
# Select "Just the push event"
```

## Jenkins Configuration
```
# Create a pipeline.
# Go to your Jenkins job:
# Project → Configure
# Under Build Triggers, check: ✅ GitHub hook trigger for GITScm polling
# In Pipeline > Definition, choose: Pipeline script from SCM
    Set:
    SCM: Git
    Repository URL: https://github.com/your-username/your-repo.git
    Branch: usually */main
```

### Now, Clone the Repository on you local machine
```
git clone https://github.com/Pankajarya1058/Task-2-with-Jenkins-CI-CD.git
```

### Push to your own Repository that you have recently created
```
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<Your-user-name>/<Your-repo-name>.git
git push origin main 
```

## Access the application through browser

```
http://<instance-public-ip>
```

## Authors

- [@pankajarya](https://github.com/Pankajarya1058)
