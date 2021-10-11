node{
  stage('SCM Checkout'){
    git branch: 'develop', url: 'https://github.com/hyperxtend/MarketOverview'   
  }
  stage('List config'){
        sh 'npm config ls'
  }
}
