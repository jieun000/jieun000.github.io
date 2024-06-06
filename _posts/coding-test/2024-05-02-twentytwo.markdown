---
layout: post
title: 프로그래머스 Lv.0 【 22번 등차수열의 특정한 항만 더하기 】
image: programmers/logo_0.jpg
date: 2024-05-02 12:00:00 +1000
tags: [프로그래머스, programmers, 알고리즘, algorithm, Lv0]
categories: coding-test
code: true
---
<figure style="width: 50%; text-align: center;">
    <img src="/assets/programmers/programmers022.jpg">
    <figcaption><a href="https://school.programmers.co.kr/learn/courses/30/lessons/181931">출처: 프로그래머스</a></figcaption>
</figure>

<br>

```python
def solution(a, d, included):
    answer = 0
    for i in included:
        if i: answer += a
        a += d
    return answer
```

```ruby
def solution(a, d, included)
    included.map.with_index { |value, index| (a + d * index) * (value ? 1:0) }.sum
end
```

```java
import java.util.stream.IntStream;

class Solution {
    public int solution(int a, int d, boolean[] included) {
        int answer = IntStream.range(0, included.length)
            .filter(idx - included[idx])
            .map(idx - a + d * idx)
            .sum();
        return answer;
    }
}
```

```javascript
function solution(a, d, included) {
    var answer = included.reduce((acc, cur, index) = cur ? acc + a + d * index : acc, 0)
    return answer
}
```