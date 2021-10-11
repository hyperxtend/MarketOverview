node{
  stage('Checkout'){
    git branch: 'develop', url: 'https://github.com/hyperxtend/MarketOverview'   
  }
   stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }

}
