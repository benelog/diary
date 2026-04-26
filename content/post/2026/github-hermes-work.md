---
title: "GitHub와 Hermes 작업 기록"
date: 2026-04-26T21:59:00+09:00
categories: ["2026년"]
description: "발표 자료 저장소, 위키, Hermes Modal 환경을 정리한 하루"
tags: ["github", "hermes", "발표"]
---

오늘은 GitHub에 꽤 많은 흔적이 남은 날이었다. 겉으로 보면 대부분의 활동은 `benelog/presentations` 저장소에 집중되어 있었지만, 실제로는 발표 자료 정리, 위키 업데이트, Hermes Modal 환경 점검이 함께 이어진 하루였다.

먼저 발표 자료 저장소를 정리했다. 기존에 Google Slides 중심으로 관리하던 발표 자료 흐름을 Marp와 GitHub Pages 기반으로 바꾸고, README에 슬라이드 목록과 배포 URL을 정리했다. PDF 출력에서 한글 폰트가 깨지는 문제도 수정했다. 발표 자료를 파일과 코드로 관리하고, 빌드와 배포까지 자연스럽게 이어지게 만들기 위한 기반 작업이었다.

AI Agent 발표 자료도 많이 다듬었다. 발표 내용을 보강하고, 다이어그램과 MCP 설정을 추가하고, draw.io 빌드 스크립트도 붙였다. 이후에는 `blog.benelog.net`의 초록색 계열을 참고해 발표 테마를 정리했다. H2 밑줄 길이, 제목 슬라이드 정렬, 본문 상단 정렬, 날짜와 이름의 위치, 줄바꿈 같은 세부 요소도 여러 번 손봤다. 발표 자료는 내용도 중요하지만 보는 사람이 받는 첫인상과 흐름도 중요하다는 점을 다시 느꼈다.

다만 `improve-ai-gent-slides` 브랜치를 만들고 `Improve AI agent presentation` PR을 열어 병합한 일은 내가 직접 한 작업이라기보다는, 내가 요청하고 Hermes Agent가 수행한 작업이었다. PR은 `https://github.com/benelog/presentations/pull/1` 로 남았다. 혼자 작업하더라도 이런 식으로 브랜치와 PR 단위로 변경을 묶어두면, 어떤 맥락에서 무엇을 바꿨는지가 더 잘 남는다.

오후와 저녁에는 예전 발표 자료들도 현재 구조로 옮겼다. 2022년 Yonsei RC101 발표 자료와 Q&A를 추가했고, 2021년 발표 자료의 asset 구조도 정리했다. `entity-dev` AsciiDoc 발표 덱도 Marp Markdown으로 포팅했다. 오래된 발표 자료들이 흩어진 파일이 아니라 다시 빌드되고 배포될 수 있는 형태로 들어오기 시작했다.

위키 저장소에는 `성구 기사 업데이트` 커밋을 남겼다. 레전드 모임의 전성구에 대한 언론보도를 다시 찾아보고, 시간순으로 정리하는 흐름이 실제 문서 업데이트로 이어졌다. 개인적인 기록과 공개된 기사, 그리고 위키 문서가 서로 연결되는 경험이었다.

Hermes Modal 환경에서도 몇 가지 의미 있는 확인과 정리가 있었다. QMD가 정상 동작하는지 확인했고, QMD 검색 결과를 인용할 때 원본 마크다운 경로가 아니라 `benelog.net`의 배포 URL을 바로 보여주도록 `qmd-result-citation` skill을 보강했다. 중복되던 `qmd-hugo-content-url-lookup` skill은 삭제했다. 장창모가 말을 걸면 특정 문구로 응답해야 한다는 `SOUL.md` 규칙도 다시 확인했다.

또 Hermes 환경에서 GitHub 작업을 하면서 인증 방식도 확인했다. 처음에는 GitHub 인증이 없는 것처럼 보였지만, 실제로는 `~/.hermes/.env`에 `GITHUB_TOKEN`이 있었고, Hermes Modal의 secret 생성 스크립트도 이 값을 사용하도록 되어 있었다. `gh` CLI는 없었지만 GitHub REST API와 토큰을 이용해 브랜치 push, PR 확인, merge까지 처리할 수 있었다. Modal 환경 안에서 Agent가 실제 GitHub 작업을 끝까지 수행할 수 있다는 것을 확인한 셈이다.

오늘의 작업을 한마디로 요약하면, 흩어져 있던 기록과 발표 자료를 다시 살아 있는 구조로 옮긴 날이었다. 발표 자료는 Marp와 GitHub Pages로 관리 가능한 형태가 되었고, 예전 자료도 현재의 구조 안으로 들어오기 시작했다. 위키에는 오래된 인물 기록을 보강했고, Hermes Modal 환경에서는 QMD와 GitHub 연동 방식이 더 명확해졌다. 화려한 기능을 새로 만든 날은 아니지만, 앞으로의 작업을 더 쉽게 만들 기반을 다진 하루였다.
