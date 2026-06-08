import './Home.css'

const services = [
  {
    icon: '🖥️',
    title: '컴퓨터 판매',
    desc: '개인용부터 기업용까지, 최적의 하드웨어 솔루션을 제공합니다.',
    color: 'blue',
  },
  {
    icon: '⚙️',
    title: '소프트웨어 개발',
    desc: '비즈니스 맞춤형 프로그램 개발로 업무 효율을 극대화합니다.',
    color: 'green',
  },
  {
    icon: '🌐',
    title: '웹사이트 개발',
    desc: '반응형 웹사이트와 쇼핑몰, 기업 사이트를 전문적으로 구축합니다.',
    color: 'red',
  },
]

const stats = [
  { value: '20+', label: '년 업력' },
  { value: '500+', label: '납품 고객사' },
  { value: '300+', label: '개발 프로젝트' },
  { value: '99%', label: '고객 만족도' },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-badge">Since 2003.09.23</div>
          <h1 className="hero-title">
            디지털 세상을 <br />
            <span className="highlight-blue">함께 만들어갑니다</span>
          </h1>
          <p className="hero-desc">
            GW Phoenix는 2003년부터 컴퓨터 판매, 소프트웨어 개발, 웹 개발을 통해
            <br />고객의 비즈니스 성장을 지원해온 IT 전문 기업입니다.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">서비스 보기</a>
            <a href="#contact" className="btn-outline">문의하기</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map(stat => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">주요 서비스</h2>
          <p className="section-subtitle">전문성과 경험을 바탕으로 최고의 IT 서비스를 제공합니다</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.title} className={`service-card service-card--${service.color}`}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <a href="#contact" className="service-link">자세히 보기 →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="section about-section">
        <div className="container about-inner">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>20년 이상의<br /><span className="highlight-blue">전문 IT 기업</span></h2>
            <p className="about-desc">
              GW Phoenix는 2003년 9월 23일 창립 이래, 컴퓨터 판매부터 맞춤형 소프트웨어 개발,
              전문 웹 개발까지 IT 전 분야에 걸쳐 폭넓은 서비스를 제공해왔습니다.
            </p>
            <p className="about-desc">
              수많은 기업 및 개인 고객과의 신뢰를 바탕으로 성장해온 저희는,
              기술의 변화에 빠르게 대응하며 고객의 성공을 최우선으로 합니다.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>상담 신청</a>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div className="about-year">2003</div>
              <div className="about-year-label">창립연도</div>
            </div>
            <div className="about-card about-card--accent">
              <div className="about-year">20<span>+</span></div>
              <div className="about-year-label">년의 경험</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">프로젝트를 시작할 준비가 되셨나요?</h2>
            <p className="cta-desc">지금 바로 문의하시면 전문 담당자가 빠르게 도와드립니다.</p>
            <a href="mailto:contact@gwphoenix.co.kr" className="btn-primary cta-btn">무료 상담 신청</a>
          </div>
        </div>
      </section>
    </main>
  )
}
