node{
  stage('SCM Checkout'){
    git branch: 'develop', url: 'https://github.com/hyperxtend/MarketOverview'   
  }
  stage('Install packages'){
    npm 'install'
  }
}
