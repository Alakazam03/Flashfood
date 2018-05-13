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
                script {
                    step([$class: "RundeckNotifier",
                          includeRundeckLogs: true,
                          jobId: "99999999-9999-9999-9999-999999999999"
                          nodeFilters: "",
                          options: """
                            PARAM_1=value1
                            PARAM_2=value2
                            PARAM_3=
                            """,
                          rundeckInstance: "Default",
                          shouldFailTheBuild: true,
                          shouldWaitForRundeckJob: true,
                          tags: "",
                          tailLog: true])
                    }
            }
        }
        stage('Test') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
