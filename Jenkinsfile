pipeline {
    agent { docker { image 'node:10.16' } }
    stages {
        stage('test') {
          sh 'npm test'
        }

        stage('audit') {
          sh 'npm audit'
        }

        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm build'
            }
        }

        stage('publish') {
          sh 'npm publish'
        }
    }
}