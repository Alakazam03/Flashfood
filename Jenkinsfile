pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'ls'
                sh 'curl -H "Content-Type: application/json" --data "{"build": true}" -X POST https://registry.hub.docker.com/u/suryavampire/flashfood/trigger/a12db615-59a1-43f4-bd1a-2d2d5e8e2c2a/'   
            }
        }
        stage('Deploy') {
            steps {
                build 'rundeckjob'
            }
        }
        stage('Test') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
