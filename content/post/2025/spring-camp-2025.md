---
title: "SpringCamp 2025"
date: 2025-06-28
categories: ["2025년"]
description: "SpringCamp 2025 참관 메모"
---

https://springcamp.ksug.org/2025/

## [Talk 1 - 개발자 커뮤니티 (박용권, 김지헌, 이상훈)](https://www.youtube.com/watch?v=u7Ny-IGE744)
* 커뮤니티나 스터디 그룹 운영 시 명확한 목적 설정과 목표 공유가 중요함. 개인별 목표를 적어 두고 이를 모아 조율하는 방법을 추천

## [Talk 2 - 함께 성장하기 (변정훈, 박재성, 이경일)](https://www.youtube.com/watch?v=bhH1n5aNIf8)
* 성장의 의미
    * 박재성 님 : 정신적인 성장의 중요성. 삶과 연결시켜서.
* 부정적인 피드백을 어떻게 전달할지
    * 박재성 님 : 부정적인 피드백을 어떻게 할지에 대한 질문. 관계 형성과 진심어린 피드백. 진심은 표정 등으로 알 수 있음.
    * 변정훈 님:  부정적인 피드백을 할 때의 쿠션화를 의식하고 있음. (nit, 바로 안해도 되는데.. 등)

## [Talk 3 - 기술 Talk (이동욱, 안영회, 조영호)](https://www.youtube.com/watch?v=eFvpsU1RYwc)
* JPA Entity와 도메인 객체를 나눌까?
    * 두 객체가 변화하는 방향이 다를때 분리.
    * 처음에 확실하지 않다면 처음에 합쳐서 출발해라.
* 확장성, 오버엔지니어링, 단순한 설계
    * 미래에 대한 지나친 예측(예언)과, 필요 이상의 설계는 오히려 팀과 코드의 변화 가능성을 막는다며 “가장 단순한 설계가 장기적으로 변경에 강하다”고 강조
    *  실제 요구사항이 “확정”되어야만 유연성 추가 작업을 하라
    *  지나친 트렌드 추종이나 초기부터의 구조화(오버엔지니어링)는 피하고, 현재의 문제 복잡도에 맞는 최소 단위를 만들라

## [ HR SaaS는 왜 복잡할까?](https://www.youtube.com/watch?v=-FNpC07OcaQ)

* HR 시스템 통합은 생각보다 복잡
   * 교육/ 근태 / 복리후생 /성과 등 
   * HR  도메인에서 인가 판단의 난이도가 높음
* 개념
    * 인증(Authentication) : 사용자 식별
    * 권한(Permission) : 권한을 부여
    * 인가(Authorization) : 자원 접근을 허용
        * 대상 리소스에도 계층이 있음.
* Access Control  방식
    *  RBAC : Role Based Access Control
    *  ReBAC : Relation Based Access Control
    *  ABAC  : Attribute Based Access Control
* 구현
    * [Zanzibar](https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/)
    * [OpenFGA](https://openfga.dev/)

## [ 실전! MSA 트랜잭션 개발 가이드](https://www.youtube.com/watch?v=0UiE9YJi_f4)
* 저서 : [마이크로 서비스 아키텍처 구축 가이드](https://www.yes24.com/product/goods/117189273)  (한빛 미디어)
* 두 발 자전거가 넘어지지 않는 이유를 길게 이론적으로 설명 가능해도 사람들은 '그래서 한번도 안 넘어졌어?'라고 물어본다.
* Microservice : 각 팀이 서로 독립적으로 일하는 것이 목적
* 가장 중요한 것은 DB 분리. 물리적보다 논리적. 다른 서비스의 DB에 접근하는 것을 차단
* 2PC is not an option. (Single point of failure.  Reduced throughput)

## [빅뱅 방식으로 최선의 개발하기](https://www.youtube.com/watch?v=C7in-dAGLJE)
소감
* 비즈니스 도메인에 대한 체계적인 분석 방식이 인상적이었습니다.
* Tree 구조의 개념 정리는 당장 실천해보려고 이런저런 도구들을 집에가서 설치해봤습니다.
