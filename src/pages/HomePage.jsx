import { Link } from 'react-router-dom';
import meetupImg from '/img/meetup/3.jpg';

function HomePage() {
  const meetups = [
    {
      id: 4,
      date: '2025–2026',
      title: 'InfraDev Meetup #4',
      subtitle: 'Следующий митап — дата будет объявлена',
      description: 'Готовим следующий митап по инфраструктурной разработке. 1–2 раза в полгода.',
      speakers: ['📅 Следите за анонсами'],
      image: meetupImg,
      upcoming: true,
    },
    {
      id: 3,
      date: '18 декабря 2025',
      title: 'Cloud Fail ((Over))',
      subtitle: 'InfraDev Meetup #3: New Year Special',
      description: 'Без фейлов не обходится ни один крутой продукт. Истории падений и героических восстановлений под капотом инфраструктурных продуктов.',
      speakers: ['Василий Степанов', 'Константин Крамлих', 'Алексей Учакин'],
      image: '/img/meetup/3.jpg',
    },
    {
      id: 2,
      date: '16 июля 2025',
      title: 'DarkSideoftheCloud',
      subtitle: 'InfraDev Meetup #2: сетевая сторона облаков',
      description: 'Специальный выпуск про «теневую» сторону облачных сервисов: BareMetal, VPC, файрволлы, CDN.',
      speakers: ['Кирилл Фролов', 'Влад Одинцов', 'Юрий Дышлевой', 'Дмитрий Радчук'],
      image: '/img/meetup/2.jpg',
    },
    {
      id: 1,
      date: '26 марта 2025',
      title: 'InfraDevMeetup от VK Tech',
      subtitle: 'Первый митап серии',
      description: 'SDS для самых маленьких, восстановление Ceph, SDN OpenStack Neutron и инфраструктура для автотестов.',
      speakers: ['Василий Степанов', 'Артемий Капитула', 'Александр Шишебаров', 'Александр Крымов'],
      image: '/img/meetup/1.jpg',
    },
  ];

  const committee = [
    {
      name: 'Георгий Меликов',
      description: 'Founder Genesis Core, экс-руководитель IaaS в VK Cloud. Контрибьютор OpenZFS, SDN/SDS разработчик.',
      image: '/img/pk/меликов.png',
    },
    {
      name: 'Александр Попов',
      description: 'Техлид IaaS в VK Cloud. Разработка и эксплуатация SDN-решений, автор EVPN-connector.',
      image: '/img/pk/попов.png',
    },
    {
      name: 'Евгений Зобницев',
      description: 'CTO Factor Group, экс-руководитель эксплуатации сети магистрального оператора связи.',
      image: '/img/pk/зобницев.png',
    },
    {
      name: 'Влад Одинцов',
      description: 'Tech Lead сетевых сервисов K2 Cloud. Контрибьютор Open vSwitch, OVN, создатель OVS/OVN russian community.',
      image: '/img/pk/одинцов.png',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <img src={meetupImg} alt="InfraDev Meetup" className="hero-image" />
          <h1>InfraDev Meetup</h1>
          <p className="hero-subtitle">Митапы по разработке и эксплуатации инфраструктурных платформ — от разработчиков для разработчиков</p>
          <div className="hero-tags">
            <span className="tag">SDN</span>
            <span className="tag">SDS</span>
            <span className="tag">Compute</span>
            <span className="tag">DevOps</span>
            <span className="tag">SRE</span>
            <span className="tag tag-outline">Cloud</span>
          </div>
          <div className="hero-actions">
            <a href="https://t.me/infradevcommunity" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Присоединиться к сообществу</a>
            <Link to="/cfp" className="btn btn-secondary">Подать заявку на доклад</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>О митапе</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>🎯 Для кого</h3>
              <p>Программисты, архитекторы, DevOps, SRE и все, кто создаёт инфраструктурные платформы и хочет обмениваться опытом.</p>
            </div>
            <div className="about-card">
              <h3>🎤 Формат</h3>
              <p>3-4 хардовых доклада по 30 минут + 10 минут на вопросы. Афтепати с нетворкингом и пивом 🍺</p>
            </div>
            <div className="about-card">
              <h3>📍 Локация</h3>
              <p>Офлайн в Москве (100+ человек) + онлайн-трансляция. Возможна запись отдельных докладов без публикации.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meetups Section */}
      <section className="meetups" id="meetups">
        <div className="container">
          <h2>Митапы</h2>
          <div className="meetups-list">
            {meetups.map((meetup) => (
              <Link
                key={meetup.id}
                to={`/meetup/${meetup.id}`}
                className={`meetup-card ${meetup.upcoming ? 'meetup-upcoming' : 'meetup-past'}`}
              >
                {meetup.upcoming ? (
                  <div className="meetup-image stay-tuned">
                    <span>🔜 Stay Tuned</span>
                  </div>
                ) : (
                  <img src={meetup.image} alt={meetup.title} className="meetup-image" />
                )}
                <div className="meetup-date">{meetup.date}</div>
                <h3 className="meetup-title">{meetup.title}</h3>
                <p className="meetup-subtitle">{meetup.subtitle}</p>
                <p className="meetup-description">{meetup.description}</p>
                <div className="meetup-speakers">
                  {meetup.speakers.map((speaker, idx) => (
                    <span key={idx} className="speaker">{speaker}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="committee" id="committee">
        <div className="container">
          <h2>Программный комитет</h2>
          <div className="committee-grid">
            {committee.map((member, idx) => (
              <div key={idx} className="committee-member">
                <img src={member.image} alt={member.name} className="committee-photo" />
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Хотите выступить?</h2>
          <p>Ищем доклады про инфраструктурную разработку: SDN, SDS, Compute, автоматизацию, облака, фейлы и восстановления.</p>
          <Link to="/cfp" className="btn btn-primary btn-large">Подать заявку на доклад</Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
