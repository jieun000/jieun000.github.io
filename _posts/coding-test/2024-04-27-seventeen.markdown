---
layout: post
title: 프로그래머스 Lv.0 【 17번 공배수 】
image: programmers/logo_0.jpg
date: 2024-04-27 12:00:00 +1000
tags: [프로그래머스, programmers, 알고리즘, algorithm, Lv0]
categories: coding-test
code: true
---
<figure style="width: 50%; text-align: center;">
    <img src="/assets/programmers/programmers017.jpg">
    <figcaption><a href="https://school.programmers.co.kr/learn/courses/30/lessons/181936">출처: 프로그래머스</a></figcaption>
</figure>

<br>

```python
def solution(number, n, m):
    answer = int(number%n==0 and number%m==0)
    return answer
```

```ruby
def solution(number, n, m)
    answer = (number%n==0) && (number%m==0) ? 1:0
end
```

```java
class Solution {
    public int solution(int number, int n, int m) {
        int answer = (number%n==0&&number%m==0) ? 1:0;
        return answer;
    }
}
```

```javascript
function solution(number, n, m) {
    var answer =  +!(number % n || number % m);
    return answer;
}
```