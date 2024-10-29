pipeline {
  agent {
    node {
      label 'xrjsmvn20j17'
    }

  }
  environment {
        REGISTRY = 'docker.io'
  }
  stages {
    stage('拉取代码') {
      steps {
          checkout(scm)
      }
    }
    stage('编译项目') {
      steps {
            sh '''
node -v && npm -v
npm config set registry https://nexusproxy.devops.foxhis.com/repository/npm-public/
npm install
DATE="`date +%Y%m%d%H`"
VERSION="`npm pkg get version`"
new_version=$(echo $VERSION | sed 's/"//g')
echo ${new_version}-$DATE
npm pkg set version=${new_version}-$DATE
npm run build

'''
      }
    }
    stage('发布制品') {
      steps {
        sh 'mvn deploy org.apache.maven.plugins:maven-antrun-plugin:run@id-pack  -Pfox.pack'
      }
    }
    stage('保存制品') {
      steps {
        archiveArtifacts artifacts: 'target/upload/**/*.tar.gz'
      }
    }
    stage('上传制品') {
      steps {
        sh 'mvn initialize org.apache.maven.plugins:maven-antrun-plugin:run@id-upload  -Pfox.upload '
      }
    }
//     stage('部署测试') {
//       steps {
//         sh 'mvn initialize org.codehaus.mojo:wagon-maven-plugin:sshexec@id-devtest -Pfox.devtest'
//       }
//     }
  }
}