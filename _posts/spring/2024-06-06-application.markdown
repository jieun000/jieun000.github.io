---
layout: post
title: application.properties와 application.yml
image: 202404/spring1.jpeg
date: 2024-06-06 12:00:00 +1000
tags: [Spring, Spring Boot, application, properties와, yml]
categories: spring
toc: true
---
application.properties와 application.yml은 주로 Spring Boot 프로젝트에서 애플리케이션 설정을 관리하기 위해 사용되는 파일 형식입니다. 두 형식 모두 설정 정보를 정의하지만, 표현 방식이 다릅니다.


## application.properties
application.properties파일은 간단한 <mark>키-값 쌍</mark>을 사용하여 애플리케이션 **설정을 정의**합니다. 각 설정은 별도의 줄에 작성되며 구문이 매우 직관적입니다. 간단하고 직관적이지만 복잡한 설정을 다루기 어려울 수 있으며, 설정이 많아질수록 가독성이 떨어질 수 있습니다. 따라서, <u>간단한 프로젝트나 설정이 비교적 적을 때 유용</u>합니다.

application.properties

```
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=pass
logging.level.org.springframework=DEBUG
```

## application.yml
application.yml은 YAML 형식을 사용하여 설정을 정의합니다. YAML은 <mark>들여쓰기</mark>를 사용하여 **계층 구조를 표현**하므로, 복잡한 설정을 더 명확하게 나타낼 수 있습니다. 또한 YAML은 JSON과 호환되며, 가독성이 좋고 유지보수가 용이합니다. 계층 구조가 명확하여 복잡한 설정을 더 쉽게 이해할 수 있으며, 설정이 많아져도 비교적 가독성이 좋습니다. 따라서, <u>복잡한 설정이나 계층 구조가 필요할 때 유용</u>합니다.

yaml

```
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: pass

logging:
  level:
    org:
      springframework: DEBUG

```