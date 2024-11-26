pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository containing your Playwright tests
                git branch: 'main', url: 'https://github.com/alexandruheremciuc/playwright_demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Install Playwright') {
            steps {
                // Install Playwright dependencies
                sh '''
                    npm i-D @playwright/test
                    npx palywright install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Archive test results (if configured to generate reports)
            junit '**/test-results/*.xml'
        }
        success {
            echo 'Playwright tests completed successfully!'
        }
        failure {
            echo 'Playwright tests failed. Please check the logs.'
        }
    }
}

