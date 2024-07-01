# 코드잇 sprint4기 part4 3팀
## 🐾 반려동물(반려견 & 반려묘) 용품 공동구매 플랫폼 ‘포잉마켓’ 🐾
- 개발 기간: 2024.05.18 ~ 2024.06.27
- 배포 주소: https://pawing-market.vercel.app/
- 노션 주소: https://url.kr/idipxY
### 프로젝트 소개
🐾 기획 배경
- 반려동물 산업은 매년 커지고 있고, 반려동물 양육비도 매년 증가하고 있습니다.
- 공동구매는 구매자와 판매자 모두에게 이윤이 있는 수익구조를 만듭니다.
  
🐾 '포잉마켓'의 핵심 기능과 차별성
- 구매자는 반려동물(반려견&반려묘) 용품을 공동구매를 이용해 더 저렴하게 구매할 수 있습니다.
- 구매자는 반려동물 정보를 입력해 맞춤 상품을 추천받을 수 있습니다.
- 구매자는 상품 리뷰 등을 확인해 적절한 상품을 구매할 수 있습니다.
- 판매자는 구매자의 공동구매 시 링크 공유를 유도하면서 더 많은 이들에게 상품을 홍보할 수 있습니다.

<div align="center">
<img width="100%" alt="포잉마켓 랜딩 페이지" src="https://github.com/Together-3team/petFrontend/assets/144193370/4beaa558-b7e2-447e-84db-93060fa4371c">
</div>

## Together 3team 팀원 소개

<div align="center">
<table>
  <tr>
    <td>
      <a href="https://github.com/devwqc">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/69f37032-43fc-4b90-b5c1-50b1d221804d" width="150px" height="15%"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/q45402sk">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/c3373bc6-0edb-4d44-832c-708412a9f82c" width="150px" height="15%"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/minyoung0503">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/2d575124-02b8-466b-b631-6db1dcbb91ab" width="150px" height="15%"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/seolsis">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/7ee39ec8-085a-4bd3-a476-780817f183a5" width="150px" height="15%"/>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      팀장 [FE]
      <a href="https://github.com/devwqc">
    정봉찬
      </a>
    </td>
    <td align="center">
      [FE]
      <a href="https://github.com/q45402sk">
      기송은
      </a>
    </td>
    <td align="center">
      [FE]
      <a href="https://github.com/minyoung0503">
      김민영
      </a>
    </td>
    <td align="center">
      [FE]
        <a href="https://github.com/seolsis">
        백지원
        </a>
      </td>
  </tr>
  <td>
    <a href="https://github.com/Seoin02">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/b02fb05d-18e6-405e-9d5d-a2df5e904dea" width="150px" height="15%"/>
    </a>
    </td>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/e71be71c-9871-4e0e-9b01-d4d153b667ff" width="150px" height="15%"/>
    </td>
    <td>
      <a href="https://github.com/go891017">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/8d41e647-eeb0-4df6-9806-29cd56d9d3ca" width="150px" height="15%"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/tmdwns1521">
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/a9482a03-a4e8-42d0-9da8-7cc049032e4c" width="150px" height="15%"/>
      </a>
    </td>
    <tr>
    <td align="center">
      [FE]
      <a href="https://github.com/Seoin02">
    이서인
      </a>
    </td>
    <td align="center">
      [DESIGN]
      백주연
      </a>
    </td>
    <td align="center">
      [BE]
      <a href="https://github.com/go891017">
      박정훈
      </a>
    </td>
    <td align="center">
      [BE]
        <a href="https://github.com/tmdwns1521">
        오승준
        </a>
      </td>
  </tr>
</table>
</div>
</div>

## R&R
- [FE] 기송은: 상품 상세 / 구매 / 찜 / 배송지
- [FE] 김민영: 공동구매(웹소켓) / 리뷰 / 별점
- [FE] 백지원: 결제(토스 페이먼츠) / 장바구니
- [FE] 이서인: 인증&인가(카카오, 구글 OAuth) / 마이
- [FE] 정봉찬: 레이아웃 / 상품 목록 / CI·CD 구축 / 배포
- [DESIGN] 백주연: 기획 / UI·UX 디자인
- [BE] 박정훈: OAuth2 인증 / 장바구니·주문 목록 / 구매 내역
- [BE] 오승준: 공동구매(웹소켓) / 상품 목록 / 결제

## 기술스택

<div align="left">
  
### FE
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
  
### BE
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"> 
<img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=Socket.IO&logoColor=white">
<img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">
<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white">

</div>

## Communication

<div align="left">
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865f2?style=for-the-badge&logo=discord&logoColor=black">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">

</div>

## 프로젝트 소개

<div align="center">
<table>
  <tr>
    <td>
       <img src="https://github.com/Together-3team/petFrontend/assets/144193370/275796be-8193-4c6e-9d4e-58ad016ad611" width="100%" height=auto />
    </td>
    <td>
     <img src="https://github.com/Together-3team/petFrontend/assets/144193370/efd0a436-8b08-4a20-96b3-5ee984b7c0fc" width="100%" height=auto />
    </td>
  </tr>
  <tr>
    <td align="center">
      회원가입
    <br/>
    react-hook-form, yup을 사용해 회원가입 폼을 구현했습니다.
    </td>
    <td align="center">
      마이 페이지
       <br/>
    구글, 카카오 OAuth 로그인을 할 수 있습니다.
    </td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/01eee37f-da16-46cf-b2e8-9c7e34afb570" width="100%" height=auto />
    </td>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/d42c283d-370b-4f1b-bfa8-428befbf795b" width="100%" height=auto />
    </td>
  </tr>
  <tr>
    <td align="center">
      랜딩 페이지
      <br/>
      맞춤·인기 상품 추천, 검색 기능을 이용할 수 있습니다.
    </td>
    <td align="center">
      제품 상세
      <br/>
      바텀시트로 옵션을 선택해 상품을 구매할 수 있습니다.
    </td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/c0996b0a-065f-46da-ab09-59c93b192cf7" width="100%" height=auto />
    </td>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/d52ff92f-045b-4d3e-b284-29516adadf53" width="100%" height=auto />
    </td>
  </tr>
  <tr>
       <td align="center">
      장바구니
         <br/>
         상품을 담거나 삭제하고, 결제 예정 금액을 확인할 수 있습니다.
    </td>
    <td align="center">
      찜
      <br/>
    리액트 쿼리 낙관적 업데이트를 사용해 상품을 찜할 수 있습니다.
    </td>
  </tr>
</table>
  <table>
  <tr>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/d94249c2-3061-49d9-bc1d-f6aff8dff494" width="100%" height=auto />
    </td>
    <td>
      <img src="https://github.com/Together-3team/petFrontend/assets/144193370/2701564a-2a3c-4a3d-8b2c-ce2223eec83e" width="100%" height=auto />
    </td>
  </tr>
  <tr>
       <td align="center">
      공동구매(웹소켓)
    <br/>
         웹소켓을 사용해 공동구매를 실시간 확인하고 참여할 수 있습니다.
    </td>
    <td align="center">
    결제
      <br/>
      토스페이먼츠 API를 사용해서 결제를 할 수 있습니다.
    </td>
  </tr>
</table>  
</div>

### 
