pipeline {
  agent any

  environment {
    IMAGE_NAME = 'frontendapp'
  }

  def dockerImage

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    // Test is define in Dockerfile 
    stage('Build Docker Image') {
      steps {
        script {
          sh 'whoami'
          dockerImage = docker.build("${IMAGE_NAME}")
        }
      }
    }

    stage('Deploy on EC2 intance') {
      steps {
          sh """
            docker stop reactjs-app || true
            docker rm reactjs-app || true
            docker run -d --name reactjs-app -p 80:80 ${dockerImage}
          """
        }
    }
  }

  post {
    failure {
      echo 'Pipeline failed.'
    }
    success {
      echo 'App successfully built, tested, pushed, and deployed.'
    }
  }
}
