node{
  stage('SCM Checkout'){
    git branch: 'develop', url: 'https://github.com/hyperxtend/MarketOverview'   
  }
   stage('List config') {
      steps {
        sh 'npm config ls'
      }
}
