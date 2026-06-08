import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">GW</span>
              <span className="logo-text">Phoenix<span className="logo-dot">.</span></span>
            </div>
            <p className="footer-desc">
              2003년 설립 이래 컴퓨터 판매, 소프트웨어 개발, 웹 개발 분야에서
              고객의 디지털 성장을 함께해왔습니다.
            </p>
          </div>

          <div className="footer-links">
            <h4>바로가기</h4>
            <ul>
              <li><a href="#home">홈</a></li>
              <li><a href="#about">회사소개</a></li>
              <li><a href="#services">서비스</a></li>
              <li><a href="#portfolio">포트폴리오</a></li>
              <li><a href="#contact">연락처</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>서비스</h4>
            <ul>
              <li><a href="#services">컴퓨터 판매</a></li>
              <li><a href="#services">소프트웨어 개발</a></li>
              <li><a href="#services">웹사이트 개발</a></li>
              <li><a href="#services">IT 컨설팅</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>연락처</h4>
            <ul>
              <li>📧 contact@gwphoenix.co.kr</li>
              <li>📞 02-000-0000</li>
              <li>📍 서울특별시</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2003–{new Date().getFullYear()} GW Phoenix. All rights reserved.</p>
          <p className="footer-since">Since 2003.09.23</p>
        </div>
      </div>
    </footer>
  )
}
