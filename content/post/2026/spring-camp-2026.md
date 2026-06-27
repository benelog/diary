---
title: "SpringCamp 2026"
date: 2026-06-13T21:00:00+09:00
categories: ["2026년"]
description: "SpringCamp 2026"
---

6월 13일에 열린 SpringCamp 2026에 다녀왔다.
유익한 발표가 많았고, 오랜만에 반가운 분들을 많이 볼 수 있어서 좋았다.
매년 이 행사를 이어가고 있는 분들께 감사한 마음이 들었다.

전체 발표 자료는 [springcamp/presentations](https://github.com/springcamp/presentations/tree/main/SpringCamp-2026-Presentations) 저장소에 공개되어 있다.

## Spring I/O 2026. 변화하는 스프링, 떠오르는 AI, 그리고 우리의 준비

풍성한 정보가 많은 발표였는데, 아래 내용이 특히 흥미로웠다.

* MicroService -> Modular Monolith로의 변화 
  * Spring Modulith 활용
      * 컴파일러가 내부 패키지를 외부 접근 불가하게함.
  카카오뱅킹 오픈뱅킹에 WebFlux가 적용되어 있지만, 기술 난이도가 높아서 소수만이 유지보수할수 있음.
    * Spring MVC로 마이그리에션 중

'코드 생성 비용이 낮아질수록, 방향을 정하는 능력의 가치가 올라간다'는 문장도 기억에 남는다.

* 발표 자료: [변화하는 스프링, 떠오르는 AI, 그리고 우리의 준비 (고동균·최상현)](https://github.com/springcamp/presentations/blob/main/SpringCamp-2026-Presentations/%5B%EA%B3%A0%EB%8F%99%EA%B7%A0%EB%8B%98%2C%20%EC%B5%9C%EC%83%81%ED%98%84%EB%8B%98%5D%20Spring%20I_O%202026%20-%20%EB%B3%80%ED%99%94%ED%95%98%EB%8A%94%20%EC%8A%A4%ED%94%84%EB%A7%81%2C%20%EB%96%A0%EC%98%A4%EB%A5%B4%EB%8A%94%20AI%2C%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EC%9A%B0%EB%A6%AC%EC%9D%98%20%EC%A4%80%EB%B9%84.pptx)
* 참고 자료
    * [MSA로의 여정에서 만난 Spring Modulith 체리픽 해본 후기](https://tech.kakaobank.com/posts/2507-legacy-to-modular-monolith-with-spring-modulith/)

## 자율 에이전트를 활용한 AI 네이티브 자바 개발

요즘 다들 고민하는 AI를 이용한 워크플로우에 대한 발표였다.
AWS에서 공개한 AI DLC도 더 자세히 살펴봐야겠다.

* 발표 자료: [자율 에이전트를 활용한 AI 네이티브 자바 개발 (최용호)](https://github.com/springcamp/presentations/blob/main/SpringCamp-2026-Presentations/%5B%EC%B5%9C%EC%9A%A9%ED%98%B8%EB%8B%98%5D%20%EC%9E%90%EC%9C%A8%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%A5%BC%20%ED%99%9C%EC%9A%A9%ED%95%9C%20AI%20%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C%20%EC%9E%90%EB%B0%94%20%EA%B0%9C%EB%B0%9C.pdf)
* 참고 자료
    * [AI-DLC(AI-Driven Development Life Cycle)](https://github.com/awslabs/aidlc-workflows)
    * [CJ올리브영의 AI 협업 개발 프로세스 구축, AI-DLC 실전 도입 사례
      ](https://aws.amazon.com/ko/blogs/tech/cj-oliveyoung-aidlc-tech-blog/)

## 출렁이지 않는 편안함 - AOT 빌드와 Project Leyden

K8S 환경에서 어플리케이션 서버가 트래픽을 받기 전에 JVM 웜업한다고 많은 노력을 했던 기억이 떠올랐다.
AOT cache를 사용하려면 운영 배포 전 빌드에서 캐쉬를 생성하는 단계가 더 들어가긴 하지만, 과거보다는 많이 편리해질듯하다.

* 발표 자료: [출렁이지 않는 편안함 - AOT 빌드와 Project Leyden (김민규)](https://github.com/springcamp/presentations/blob/main/SpringCamp-2026-Presentations/%5B%EA%B9%80%EB%AF%BC%EA%B7%9C%EB%8B%98%5D%20%EC%B6%9C%EB%A0%81%EC%9D%B4%EC%A7%80%20%EC%95%8A%EB%8A%94%20%ED%8E%B8%EC%95%88%ED%95%A8%20-%20AOT%20%EB%B9%8C%EB%93%9C%EC%99%80%20Project%20Leyden.pdf)
* 참고자료
    * [Project Leyden](https://openjdk.org/projects/leyden/)

## 워크플로우 코드 왜 항상 복잡할까? - Temporal이 보여준 다른 방법

친절함과 완성도가 높은 내용을 담은 발표였다.
작년에 이어서 승주님께서 발표 준비를 정성들여 많이 하셨다는 느낌이 확 들었다.

Temporal은 핵심 비지니스 흐름을 DSL처럼 추상화 수준을 기술할 수 있다는 점에서 흥미로웠다.AOP와 유사하게, 일단적인 코드와 다른 마법을 이해하고 써야 의도하지 않은 부작용을 막을수 있지 않을까하는 추측이 들었다.

AI를 활용한 워크플로우에 Temporal를 활용한 사례를 최근 보기도해서 이 발표를 복습해봐야 겠다는 생각도 들었다.

* 발표 자료: [워크플로우 코드 왜 항상 복잡할까? - Temporal이 보여준 다른 방법 (정승주)](https://github.com/springcamp/presentations/blob/main/SpringCamp-2026-Presentations/%5B%EC%A0%95%EC%8A%B9%EC%A3%BC%EB%8B%98%5D%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20%EC%BD%94%EB%93%9C%20%EC%99%9C%20%ED%95%AD%EC%83%81%20%EB%B3%B5%EC%9E%A1%ED%95%A0%EA%B9%8C_%20Temporal%EC%9D%B4%20%EB%B3%B4%EC%97%AC%EC%A4%80%20%EB%8B%A4%EB%A5%B8%20%EB%B0%A9%EB%B2%95.pdf)
* 참고자료
    * [Temporal Workflow](https://docs.temporal.io/workflows)

## Is Java Alive and Kicking?

자기 소개 없이 시작하신 서두부터 희승님의 위엄이 느껴졌다. (소개가 불필요하신 분이니...)
과거와 '기술지형'이 달라져서 JVM이 적합한 선택지인 경우가 줄어들고 있다는 내용에 공감이 갔다.
기술지형이라는 단어를 나도 앞으로 많이 써먹어야겠다 싶다.

Docker/k8s 생태계가 떠오를부터 JVM이 이 시대에 과연 맞을까하는 생각을 나도 종종 했었다.
JVM이 차지하는 많은 메모리와 느린 부팅 시간이 Docker/k8s 생태계와는 안 어울리지 않나 싶었다.
그래서 그때부터 GraalVM의 native 이미지, CRaC, CDS등 이를 극복하는 방안들에 많은 관심을 가졌었다.
native 이미지는 장기 연재되는 드라마에서 초기 설정에 없었던 인물을 넣는 느낌이였다.
JIT 생태계에 AOT가 뒤늦게 들어오다보니 이를 맞추기 위한  노력이 많이 들어가는 것이 그랬다.
아주 간단한 어플리케이션 빌드에서 수분이 넘어가는 빌드타임도 절망적이였다.
CRaC, CDS 등 부팅시간을 줄이기 위한 시도도 제약이 크고 편의성도 충분히 만족스러울 정도는 안 되었다.
프로젝트 Leyden도 긍정적으로 생각하고 있으나, 배포 전의 단계가 늘어나고, 메모리 사용량을 줄여주는 기술은 아닌듯하여 현재 시대에서 필요한 요구를 다 만족시키기에는 어렵다고 생각한다.

희승님 발표 마지막에 ''자바가 다른 기술 대비 적합한 경우가 감소했을 뿐'이라는 내용을 보고 여전히 JVM이 적합한 곳은 데이터 플랫폼 영역이 아닐까 싶었다.
메모리가 많은 큰 서버에서 오랫동안 실행되고 성능 피크치가 중요하고, 관련 생태계가 풍부하니까..

메모리 가격이 많이 올라가니 서버 댓수가 많은 시스템일 수록 JVM, Node.js, Python이 최적선택인 경우는 줄어들듯하다.
Antropic의 엔지니어에게 들은 이야기로, Antropic에서도 Python으로 만든 플랫폼을 Go, Rust로 전환하고 있다고한다.
Claude가 Rust를 앞으로 더 잘하게 되려나 싶기도하다.

최근 개인적으로 만든 여러 도구의 프로그래밍 언어를 돌아보니 Go를 가장 많이 쓰긴했다.
CLI도구나 데스크탑 어플리케이션이다보니 Go가 제일 적절할 것 같아서 선택었했다.
Rust도 배워봐야하나하는 생각도 든다.

앞으로 생계 잘 유지하기 위해서는 주말에 더 많은 공부를 해야겠다 싶었다.

* 발표 자료: [Is Java Alive and Kicking? (이희승)](https://github.com/springcamp/presentations/blob/main/SpringCamp-2026-Presentations/%5B%EC%9D%B4%ED%9D%AC%EC%8A%B9%EB%8B%98%5D%20Is%20Java%20Alive%20and%20Kicking_.pdf)

## MSA 성능 튜닝 가이드

과거 프로젝트에서 적용했봤던 기법들이 체계적으로 정리된 발표였다.
김용옥님의 작년 발표에 이어서 유익했다. 김용옥 님의 책도 읽어봐야겠다.

* 발표 자료: [MSA 성능 튜닝 가이드 (김용욱)](https://github.com/springcamp/presentations/blob/main/SpringCamp-2026-Presentations/%5B%EA%B9%80%EC%9A%A9%EC%9A%B1%EB%8B%98%5D%20MSA%20%EC%84%B1%EB%8A%A5%20%ED%8A%9C%EB%8B%9D%20%EA%B0%80%EC%9D%B4%EB%93%9C.pdf)
* 참고 자료
    * (2025년 스프링캠프) [실전! MSA 트랜잭션 개발 가이드](https://github.com/springcamp/presentations/blob/main/SpringCamp-2025-Presentations/%EC%8B%A4%EC%A0%84_%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%EA%B0%9C%EB%B0%9C%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20%EA%B9%80%EC%9A%A9%EC%9A%B1_81.pdf)
    * [마이크로서비스 아키텍처 구축 가이드](https://play.google.com/store/books/details/%EA%B9%80%EC%9A%A9%EC%9A%B1_%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EA%B5%AC%EC%B6%95_%EA%B0%80%EC%9D%B4%EB%93%9C?id=tImsEAAAQBAJ)
