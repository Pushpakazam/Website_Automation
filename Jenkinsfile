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
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Convert HTML Report to PDF') {
            steps {
                bat 'node utils/html-to-pdf.js'
            }
        }

        stage('Send Email with PDF') {
            steps {
                bat 'node utils/send-pdf-report.js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            archiveArtifacts artifacts: 'Playwright_Test_Report.pdf', fingerprint: true
        }
    }
}


