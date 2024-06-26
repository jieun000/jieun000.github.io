---
layout: post
title: 프로그래밍 언어
image: 202404/programmingLanguage.jpg
date: 2024-04-04 12:00:00 +1000
categories: cs
tags: [programming_language, 프로그래밍 언어]
toc: true
---
<style>
    table td:first-child { width: 25%; }
    blockquote { width: 85%; margin: auto; }
</style>

## 프로그래밍 언어
프로그래밍 언어(programming language)는 <u>컴퓨터에게 명령을 내리고 작업을 수행하기 위한 <strong>규칙적인 구문과 의미 체계의 집합</strong></u>입니다. <br>
각 언어는 고유한 특징과 용도를 가지고 있으며, 다양한 분야에서 사용됩니다. 

| 개념 | 설명 |
|:---:|:---:|
| 1. 변수와 데이터 유형 | 변수를 사용하여 데이터를 저장하고 조작 <br> 각 변수는 특정한 데이터 유형을 가지며, 이는 숫자, 문자열, 불리언 등의 값을 가짐 |
| 2. 연산자 | 변수나 값에 대한 연산을 수행하는 기호나 키워드 <br> <small>산술 연산자(+, -, *, /), 논리 연산자(\|\|, &&), 비교 연산자(==, !=, >, <) 등</small> |
| 3. 제어 구조 | 프로그램의 실행 흐름을 제어하는데 사용  <br> <small>조건문(if, else), 반복문(for, while), switch문 등이 포함</small> |
| 4. 함수 및 메서드 | 함수: 특정한 작업을 수행하는 코드의 블록을 나타내며, 재사용성과 모듈화를 위해 사용 <br> 메서드: 객체 지향 프로그래밍에서 사용되는 함수로, 특정한 클래스나 객체에 속함 |
| 5. 배열과 컬렉션 | 배열: 여러 개의 값을 순차적으로 저장하는 자료 구조 <br> 컬렉션: 여러 개의 값을 저장하고 관리하는 자료 구조를 일반적으로 나타냄 |
| 6. 클래스와 객체 | 클래스: 객체의 설계도이며, 객체: 클래스의 인스턴스. <br> <small>객체 지향 프로그래밍에서 클래스와 객체는 중요한 개념으로, 속성과 메서드를 포함</small> |
| 7. 모듈 및 패키지 | 모듈: 프로그램의 기능을 논리적으로 구분하고 모듈화하는 방법을 제공함 <br> 패키지: 관련된 모듈을 그룹화하고 이름 공간을 나타냄 |
| 8. 예외 처리 | 프로그램이 예기치 않은 상황에 대비하여 오류를 처리하고 복구하는 기능을 제공 |
| 9. 입출력 | 입력과 출력은 프로그램이 사용자로부터 데이터를 받아들이고 결과를 출력하는 기능을 냄 <br> <small>파일 입출력, 네트워크 통신 등</small> |


<br><br>

## 언어 타입
프로그래밍 언어는 일반적으로 강 타입 언어와 약 타입 언어로 분류됩니다. <br>
이들은 변수의 데이터 유형을 처리하는 방식에 대한 차이를 나타냅니다.

<br>

<blockquote>
1. 강 타입 언어 (Strongly Typed Language) <br>
변수의 데이터 유형을 <strong>엄격하게 검사</strong>하며, 데이터 유형의 호환성이 없는 경우 컴파일러가 오류를 발생시킵니다.
변수의 데이터 유형은 명시적으로 선언되거나, 컴파일러가 유추할 수 있습니다.
대표적인 강 타입 언어로는 <u>Java, C++, C# 등</u>이 있습니다.
<br><br>
2. 약 타입 언어 (Weakly Typed Language) <br>
변수의 데이터 유형을 엄격하게 검사하지 않거나, <strong>자동으로 형 변환</strong>을 수행합니다.
데이터 유형의 호환성을 확인하지 않거나, 필요한 경우에만 강제 형 변환을 수행합니다.
대표적인 약 타입 언어로는 <u>JavaScript, PHP, Python 등</u>이 있습니다.
</blockquote>

> 컴파일러 <br>
컴파일러는 **소스 코드를 한 번에 전체**를 읽어들여, 이를 기계어 또는 중간 언어로 변환하여 실행 파일을 생성합니다. 이 과정에서 발견되는 오류는 컴파일 단계에서 모두 보고되며, <u>컴파일이 완료된 후에 프로그램을 실행</u>할 수 있습니다.


<br><br>


## 언어 종류
<mark>프로그래밍 언어 몇 가지</mark>

- Python: 읽기 쉽고 간결한 문법으로 유명한 고급 프로그래밍 언어입니다. 웹 개발, 데이터 과학, 인공 지능, 자동화, 게임 개발 등 다양한 용도로 활용합니다.

- Ruby: Matz(유키히로 마츠모토)에 의해 개발된 동적 타입의 객체 지향 프로그래밍 언어입니다. 간결한 문법과 직관적인 코드 작성을 지향하여 웹 애플리케이션을 빠르고 효율적으로 개발할 수 있습니다.

- JavaScript: JavaScript는 웹 개발에서 가장 널리 사용되는 프로그래밍 언어로, HTML과 CSS와 함께 웹 페이지의 동적인 요소를 구현하는 데 사용됩니다. Node.js를 사용하여 서버 측 백엔드 개발에도 활용합니다.

- TypeScript: TypeScript는 Microsoft에서 개발한 정적 타입을 지원하는 JavaScript의 상위 집합 언어입니다. JavaScript 코드를 작성할 때 정적 타입 검사를 제공하여 개발자가 코드의 안전성을 유지하고 유지 보수를 더 쉽게 할 수 있도록 돕습니다. TypeScript는 JavaScript와 완전히 호환되며, Angular와 같은 프레임워크 및 라이브러리에서 널리 사용합니다.

- Java: 다양한 플랫폼에서 실행될 수 있는 객체 지향 프로그래밍 언어입니다. 기업급 애플리케이션, 안드로이드 앱 개발, 대규모 시스템 개발 등 다양한 분야에서 사용하고 있습니다.

- C++: C 언어를 기반으로 하며, 객체 지향 프로그래밍을 지원하는 언어입니다. 시스템 프로그래밍, 게임 개발, 과학 및 엔지니어링 애플리케이션 등에서 사용합니다.

- C# (C Sharp): 마이크로소프트에서 개발한 객체 지향 프로그래밍 언어로, .NET 프레임워크를 기반으로 합니다. 윈도우 애플리케이션, 웹 애플리케이션, 게임 개발 등에 널리 사용합니다.

- Swift: 애플에서 개발한 객체 지향 프로그래밍 언어로, iOS 및 macOS 애플리케이션 개발에 사용됩니다. 간결한 문법과 안전한 코드를 지원하여 개발자들에게 편의를 제공합니다.

- R: 통계 및 데이터 분석을 위한 프로그래밍 언어이자 환경입니다. 데이터 시각화, 머신러닝, 통계 모델링 등의 분석 작업에 사용합니다.

- PHP: 웹 개발을 위한 서버 측 스크립팅 언어로, 동적인 웹 페이지를 생성하고 데이터베이스와 상호 작용하는 데 사용합니다.