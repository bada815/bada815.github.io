---
title: Hexo 메모
date: 2020-09-07 15:55:06
tags:
---
## 기본 사용법
### Create a new post


``` bash 
 hexo new "New page" 
```   

### Run server 
``` bash 
 hexo server 
```   

### 서버 실행 후 페이지 확인  
http://localhost:4000

### 빌드, 배포한번에 
``` bash  
hexo g -d

```   
### 작성확인 

로컬에서 포스트 작성, 설정 변경 등 작업을 하고 결과를 확인한 후에, 빌드 및 배포하는 식으로 작업합니다. 배포가 되면 https://bada815.github.io 으로 접속해서 확인합니다. 

link : https://wonderbout.tistory.com/122
마크다운(MarkDown) 문법 : https://heropy.blog/2017/09/30/markdown/

### ERROR Deployer not found: git  
-deploy(배포)를 실패하고 있다는 의미.  
해결방법: $ npm install hexo-deployer-git --save 를 통해서 deployer 설치 


 