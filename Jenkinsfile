pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Generate Allure HTML') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Convert Allure to PDF') {
            steps {
                bat 'node utils/allure-to-pdf.js'
            }
        }

        stage('Send Email with PDF') {
            steps {
                bat 'node utils/send-allure-email.js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report.pdf', fingerprint: true
        }
    }
}


