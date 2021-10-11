node{
  
  stage('Checkout'){
    git branch: 'develop', url: 'https://github.com/hyperxtend/MarketOverview'   
  }
  
   stage('Install dependencies') {
        sh 'npm install'
   }
     
    stage('Test') {
        sh 'npm test'
    }     
}
