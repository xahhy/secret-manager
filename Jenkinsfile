pipeline {
    agent { docker { image 'node:10.16' } }
    parameters {
      string(name: 'version', defaultValue: '1.0.0', description: 'Package Version')
    }
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
          when {
                allOf {
                    expression { params.version != null }
                }
            }
            steps{
              withCredentials([string(credentialsId: 'NPM_TOKEN', variable: 'NPM_TOKEN')]) {
                sh '''
                  echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
                  cat ~/.npmrc
                  npm version --no-git-tag-version --allow-same-version \${version}
                  npm publish
                  '''
              }
            }
        }
    }
}