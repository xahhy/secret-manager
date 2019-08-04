pipeline {
    agent { docker { image 'node:10.16' } }
    stages {
        stage('dependency') {
          steps{
            sh 'npm ci'
          }
        }

        stage('test') {
          steps{
            sh 'npm test'
          }
        }

        stage('audit') {
          steps{
            sh 'npm audit'
          }
        }

        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm build'
            }
        }

        stage('publish') {
          steps{
            sh 'npm publish'
          }
        }
    }
}