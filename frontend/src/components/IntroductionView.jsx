import '../styles/IntroductionView.css';
import instagramQrImage from '../assets/images/instagramQr.png'; // QR 코드 이미지 경로

export default function IntroductionView() {
    return (
        <div className="introduction-wrapper">
            <div className="intro-text">
                <div className="introduction-view">
                    <section className="intro-hero">
                        <h1>SchedulingGo</h1>
                        <strong>당신의 하루를 정리하는 가장 직관적인 방법</strong>
                        <p>
                            바쁜 하루, 쏟아지는 일정 속에서 우리는 효율적인 정리가 필요합니다. <br />
                            <strong>SchedulingGo</strong>는 일정을 카테고리별로 시각화하여
                            더 쉽게, <br/>
                            더 정확하게 스케줄을 파악할 수 있게 도와줍니다.
                        </p>
                    </section>

                    <section className="intro-why">
                        <strong>왜 SchedulingGo가 필요한가요?</strong>
                        <p>
                            매번 일정 앱을 열어도 뭘 해야 할지 헷갈리셨나요?<br />
                            여러 가지 할 일이 머릿속에만 맴돌고 있진 않나요?
                        </p>
                        <p>
                            <strong>SchedulingGo</strong>는 복잡한 일정을 단순화합니다.<br />
                            📊 시각적으로 보이고, 🖱️ 쉽게 조작할 수 있도록,<br />
                            가장 기본에 충실하면서도 효율적인 일정관리 도구를 만들었습니다.
                        </p>
                    </section>

                    <section className="intro-features">
                        <h3>주요 기능</h3>
                        <ul>
                                    <li><strong>✅ 일정 등록/수정/삭제</strong> = 하루 일정부터 장기계획까지 쉽게 추가하고 관리할 수 있어요.</li>
                                    <li><strong>✅ 카테고리별 색상 태그</strong> = 업무, 개인, 약속 등 카테고리를 색으로 구분해 한눈에 확인 가능</li>
                        </ul>            
                    </section>

                    <section className="intro-tech">
                        <h3>사용 기술 스택</h3>
                        <ul>
                            <li><strong>🧩 Frontend:</strong> React + Bootstrap</li>
                            <li><strong>🛠️ Backend:</strong> Node.js (Express)</li>
                            <li><strong>🗄️ Database:</strong> MongoDB / MySQL</li>
                            <li><strong>🔗 기타:</strong> RESTful API, Fetch 기반 통신, CORS 설정</li>
                        </ul>
                    </section>

                    <section className="intro-future">
                        <h3>향후 업데이트 예정 기능</h3>
                        <ul>
                            <li>📆 Google Calendar 연동</li>
                        </ul>
                    </section>

                    <section className="intro-contact">
                        <h3>문의 & 피드백</h3>
                        <p>궁금한 점이나 버그 제보는 아래로 연락 주세요💌</p>
                        <img width="100px" src={instagramQrImage} alt="SchedulingGo 공식계정 QR 코드" />
                    </section>
                </div>
            </div>

            <div className="intro-video">
                <iframe
                    src="https://www.youtube.com/embed/영상ID"
                    title="가이드 영상"
                    style={{ border: 'none' }}
                    width="400"
                    height="250"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}