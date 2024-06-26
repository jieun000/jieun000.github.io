---
layout: post
title: 그래들gradle과 메이븐maven
image: 202404/spring1.jpeg
date: 2024-06-05 12:00:00 +1000
tags: [Spring, Spring Boot, 그래들, gradle, 메이븐, maven]
categories: spring
toc: true
---
Gradle과 Maven은 주로 Java 프로젝트에서 사용되는 <mark>빌드 자동화 도구</mark>입니다. 이 도구들은 프로젝트의 빌드, 관리, 배포 등을 자동화하여 개발자의 생산성을 높이고 프로젝트의 일관성을 유지하는 데 도움을 줍니다. 

## Gradle
Gradle은 유연하고 강력한 빌드 도구로, JVM(Java Virtual Machine)에서 실행됩니다. 이 도구는 **Groovy 또는 Kotlin**을 스크립트 언어로 사용하여 빌드 스크립트를 작성하는데, 비교적 자유롭고 유연한 프로그래밍적 접근이 가능합니다. Gradle은 병렬 빌드와 빌드 캐싱을 통해 빠른 빌드 성능을 제공하며, 점점 더 많은 프로젝트에서 채택되고 있습니다. 특히 Android 프로젝트에서 기본 빌드 도구로 사용됩니다.

build.gradle

```
plugins {
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web:2.5.4'
    testImplementation 'junit:junit:4.13.2'
}

```

## Maven
Maven은 Apache Software Foundation에서 개발한 빌드 관리 도구로, 프로젝트의 빌드, 보고서 생성, 문서화 등을 자동화합니다. **XML** 기반의 POM(Project Object Model) 파일을 사용하여 프로젝트의 구조와 의존성을 정의합니다. 표준화된 방식으로 접근하기 쉬우나, 복잡한 빌드 로직에는 다소 제약이 있을 수 있습니다. Maven은 오래된 도구로, 더 많은 플러그인과 문서화된 사례가 있습니다.

pom.xml

```
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>2.5.4</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```