import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const meetupsData = {
  1: {
    date: '26 марта 2025',
    title: 'InfraDevMeetup от VK Tech',
    subtitle: 'InfraDev Meetup #1 — первый митап серии',
    videoId: '456239033',
    image: '/img/meetup/1.jpg',
    description: 'Первый митап, посвящённый разработке и эксплуатации инфраструктурных платформ. Хардовые доклады от спикеров из VK Tech, Selectel, Wildberries и Kaspersky.',
    talks: [
      {
        title: 'SDS для самых маленьких',
        speaker: 'Василий Степанов, руководитель команды разработки Storage, VK Cloud',
        description: '«Хорошее облако не построить без хорошего SDS. А как выбрать SDS для собственного облака? Из чего/как выбрать SDS для облака? Есть ли жизнь вообще без SDS? Как устроены SDS в общем? На эти и другие вопросы мы ответим в нашем докладе, а ещё посмотрим на стандартные ходовые архитектуры хранилищ, их масштабируемость и применимость».',
      },
      {
        title: 'Мастер-класс: «Восставший из пепла, или Как спасти самое важное, когда Ceph лёг на дно»',
        speaker: 'Артемий Капитула, техлид группы разработки систем хранения, Wildberries',
        description: '«Когда случается отказ — это плохо. Если происходит отказ СХД — это уже авария. А если отказ не удаётся устранить и всё идёт к потере данных — это уже катастрофа. Можно ли спасти данные клиентов, когда Ceph «лёг на дно и дальше не поплывёт»? Узнаем, какие инструменты есть, чтобы сохранить данные, как их можно использовать, и что можно спасти из кластера Ceph».',
      },
      {
        title: 'Небольшой сбой в RabbitMQ с большими последствиями. Опыт эксплуатации SDN OpenStack Neutron',
        speaker: 'Александр Шишебаров, ведущий разработчик, Selectel',
        description: '«Даже при кратковременном сбое RabbitMQ может значительно повлиять на работу Neutron и других компонентов OpenStack. В докладе расскажу, с какими проблемами мы столкнулись при масштабировании OpenStack Neutron, поделюсь опытом эксплуатации данного SDN и доработки его компонентов».',
      },
      {
        title: 'Что делать, когда автотестам требуется свой датацентр?',
        speaker: 'Александр Крымов, старший разработчик, Hive Test Infrastructure Development, Kaspersky',
        description: '«Так бывает, что ваши автотесты выросли, научились снимать и откатывать снапшоты, эмулировать сетевые атаки, ронять машины в BSOD, а запускаться им каждый раз нужно на различных провайдерах виртуализации. В докладе мы поговорим об оркестраторе Hive собственной разработки Лаборатории Касперского».',
      },
    ],
  },
  2: {
    date: '16 июля 2025',
    title: 'DarkSideoftheCloud',
    subtitle: 'InfraDev Meetup #2: сетевая сторона облаков',
    videoId: '456239039',
    image: '/img/meetup/2.jpg',
    photoUrl: 'https://vk.com/album-208050206_282977196',
    description: 'Специальный выпуск InfraDev Meetup про «теневую» сетевую сторону облачных сервисов. Хардовые доклады от спикеров из VK Tech и VK, Positive Technologies и K2Cloud.',
    talks: [
      {
        title: 'За пределами виртуализации: BareMetal aaS в VK Cloud',
        speaker: 'Кирилл Фролов, эксперт в команде разработки платформы, VK Cloud, VK Tech',
        description: '«В наш век никого не удивить облаками. Все привыкли запускать свой софт на виртуальных машинах. Но что делать если виртуальной машины недостаточно? Мы, внутри VK Cloud, столкнулись с такой задачей. В этом докладе хотим рассказать как мы спроектировали BareMetal as a Service».',
      },
      {
        title: 'VPC наизнанку: устройство сердца облачной сети',
        speaker: 'Влад Одинцов, Tech Lead и Product Owner сетевых сервисов, K2 Cloud',
        description: '«Многие пользователи облачных платформ так или иначе взаимодействуют с облачной сетью: пользуются её возможностями, словно они — единственные клиенты своего провайдера. В своем докладе расскажу, как устроено VPC на сегодняшний день, а также благодаря каким технологиям мы делаем виртуальную сеть и сетевые сервисы».',
      },
      {
        title: 'Нельзя просто так взять и получить максимум производительности от файрволла в облаках',
        speaker: 'Юрий Дышлевой, инженер, Positive Technologies',
        description: '«Или можно? Мы в Positive Technologies, оттестировав самый производительный российский межсетевой экран в российских облаках, готовы пояснить за каждую звёздочку в даташите. А ещё расскажу, где кончается магия и начинаются суровые задачи масштабирования DPDK в виртуализации».',
      },
      {
        title: 'Доставляем трафик в сеть доставки контента (CDN)',
        speaker: 'Дмитрий Радчук, Team Lead группы граничных сервисов, VK',
        description: '«Распределение серверов по большому количеству территорий и провайдерам создает не только задачи по доставке трафика в CDN сервера из интернета. Расскажу, как мы решаем любые возникающие задачи при помощи туннелей и BGP».',
      },
    ],
  },
  3: {
    date: '18 декабря 2025',
    title: 'Cloud Fail ((Over))',
    subtitle: 'InfraDev Meetup #3: New Year Special',
    videoId: '456239049',
    image: '/img/meetup/3.jpg',
    photoUrl: 'https://vk.com/vkdigitaltech?z=album-208050206_311113022',
    description: 'Без фейлов не обходится ни один крутой продукт, ну а истории успеха — «за ширмой» оказываются историями поисков и ошибок с удачным концом. Поговорили про то, какие проблемы возникают под капотом инфраструктурных продуктов.',
    talks: [
      {
        title: 'Понедельник начался в ночь на субботу: как минорное обновление СУБД остановило создание дисков в облаке',
        speaker: 'Василий Степанов, Руководитель направления инфраструктурных сервисов, VK Cloud',
        description: '«Как на самом деле работает select for update в mysql? По моей статистике девять разработчиков из десяти не могут ответить на этот вопрос. Как мы отловили дедлоки в базе, как искали причину и устраняли последствия — расскажу в докладе».',
      },
      {
        title: 'Где мой трафик, чувак? Организационно-технический рассказ про серые отказы',
        speaker: 'Константин Крамлих, Руководитель поднаправления сетевых продуктов, Yandex Cloud',
        description: '«Хорошо, когда система просто работает. Нехорошо, но хотя бы понятно, когда она не работает. Но что если она делает вид, что работает, но на самом деле это не так? Расскажу о серых отказах и наших фейлах в попытке их починить».',
      },
      {
        title: 'Пейн, я сеть не чувствую: чтобы ваш стартап выжил, нужно просто…',
        speaker: 'Алексей Учакин, Независимый эксперт, ex-директор по инфраструктуре EdgeЦентр',
        description: '«Итак, ваш стартап вырос из ноутбука фаундера и "полетел". Любой инцидент с сетью кладёт прод на десятки минут. Давайте на примере одного успешного стартапа посмотрим, на какие грабли можно наступить, если вовремя не заняться вопросами сетевой инфраструктуры».',
      },
    ],
  },
  4: {
    date: '10 июня 2026',
    title: 'Summer Edition: про AI и не только',
    subtitle: 'InfraDev Meetup #4: Summer Edition: про AI и не только',
    videoOwnerId: '239259953',
    videoId: '456239025',
    image: '/img/meetup/4.jpg',
    description: 'Прямо сейчас мы наблюдаем как AI в SDLC меняет процесс разработки — об удачных примерах и кейсах поговорим в этот раз. Обсудим, как разрабатывать инфраструктурные сервисы с помощью AI и как построить MLOps-платформу для обучения моделей. И не только: пока AI не перестроил DevOps-цикл, классические вызовы сборки образов для виртуальных машин остаются актуальными.',
    talks: [
      {
        title: 'Вы не поверите, на что мы тратим время после прихода LLM в команду',
        speaker: 'Кирилл Фролов, эксперт-разработчик в отделе разработки базовых сервисов, VK Cloud, VK Tech',
        description: 'Идея ускорить разработку с помощью AI не нова, но когда речь заходит про инфраструктурный сервис уровня Bare-Metal-as-a-Service, где цена ошибки в проде высокая, многие справедливо опасаются доверять агентам системные компоненты. Мы прошли этот путь от первых экспериментов до состояния, когда часть нашей кодовой базы пишется с участием LLM — и при этом мы сохраняем контроль над тем, что уезжает в прод. Ключ оказался не в доверии к LLM, а в структуре: архитектуре, спецификациях и тестах. В докладе расскажу, как у нас сместилось понимание того, что является исходным кодом, почему задача больше не «писать больше», а «писать меньше», и какие принципы инженерии оказались критичны при работе «рука об руку» с агентами — от управления архитектурными слоями и спецификациями до организации Code Review и тестирования.',
      },
      {
        title: 'Дивный мир инфраструктуры обучения больших моделей на HPC',
        speaker: 'Павел Шипилов, Старший разработчик ML Платформы в Avito',
        description: 'Распределённое обучение LLM на кластере из HGX — это не просто «больше GPU». Это новый уровень сложности: Kubernetes должен дружить с InfiniBand и GPU, стабильно работать с системой, стартовать быстро большие контейнеры и правильно их шедулить. В докладе расскажу про запуск нашего HPC, как мы в Avito прошли этот путь при создании Aviflow: от размещения железок в ДЦ, до создание отдельного сервиса для запуска распределенных задач. Покажем эволюционный путь который прошли с выбором между Slurm и Kubernetes, шедулером и другими компонентами инфраструктуры. Подсветим проблемы, которые к нас возникли в ходе эксплуатации и развертывании кластера.',
      },
      {
        title: 'Сборка имаджей для облака: надо всего лишь...',
        speaker: 'Александр Александров, системный архитектор в направлении разработки и управления инфраструктурой, VK Cloud, VK Tech',
        description: 'Кажется, что собрать образ ВМ — дело пяти минут: взял готовый ISO, установил ОС, далее-далее, загрузил в хранилище. Пока у вас не появились десятки дистрибутивов, требования к «запечённой» конфигурации, необходимость тестировать каждый билд на IaaS и PaaS, и понимание, что готовых образов для ваших задач просто нет. Как мы автоматизировали весь цикл — от сборки до скрытия старых релизов — и сократили время исправления бага в образе Linux до пары часов, расскажу в докладе.',
      },
    ],
  },
  5: {
    date: 'Q4 2026',
    title: 'InfraDev Meetup #5',
    subtitle: 'Следующий митап — дата будет объявлена',
    upcoming: true,
    description: 'Проводим митапы 1–2 раза в полгода. Следите за анонсами в нашем Telegram-канале.',
    topics: [
      'SDN/SDS — разработка, эксплуатация, опыт внедрения',
      'Compute — виртуализация, контейнеры, оркестрация',
      'Истории падений и восстановлений',
      'Локальная инфраструктура vs облака',
      'Автоматизация инфраструктурных задач',
      'Дизайн систем на отказ',
      'Масштабирование — от "ноутбука" до датацентра',
    ],
    format: [
      '3–4 доклада по 30 минут + 10 минут на вопросы',
      'Офлайн в Москве (100+ человек) + онлайн-трансляция',
      'Афтепати с нетворкингом и пивом 🍺',
    ],
  },
};

function VideoEmbed({ videoId, ownerId = '208050206' }) {
  const [isLoading, setIsLoading] = useState(true);
  const videoUrl = `https://vk.com/video_ext.php?oid=-${ownerId}&id=${videoId}&hd=2&autoplay=0`;
  const vkVideoUrl = `https://vkvideo.ru/video-${ownerId}_${videoId}`;

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div
        className="video-embed"
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-card)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      >
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-card)',
              border: '2px dashed var(--color-border)',
              borderRadius: '12px',
              zIndex: 1
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬</div>
            <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
              Загрузка видео...
            </p>
          </div>
        )}
        <iframe
          src={videoUrl}
          width="100%"
          height="400"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          style={{
            display: 'block',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        ></iframe>
      </div>
      <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
        <a
          href={vkVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{ fontSize: '0.875rem' }}
        >
          🔗 Открыть видео на VK
        </a>
      </div>
    </div>
  );
}

function MeetupPage() {
  const { id } = useParams();
  const meetup = meetupsData[id];

  if (!meetup) {
    return (
      <div className="container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h1>Митап не найден</h1>
        <Link to="/" className="btn btn-secondary">← На главную</Link>
      </div>
    );
  }

  return (
    <>
      <section className="meetup-header">
        <div className="container">
          <p className="date">{meetup.date}</p>
          <h1>{meetup.title}</h1>
          <p className="meetup-subtitle">{meetup.subtitle}</p>

          {!meetup.upcoming && meetup.videoId && (
            <VideoEmbed videoId={meetup.videoId} ownerId={meetup.videoOwnerId} />
          )}

          {meetup.image ? (
            <img src={meetup.image} alt={meetup.title} className="meetup-header-image" />
          ) : (
            <div className="meetup-header-image meetup-image stay-tuned">
              <span>🔜 Stay Tuned</span>
            </div>
          )}

          <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {meetup.registrationUrl && (
              <a href={meetup.registrationUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                🎫 Регистрация
              </a>
            )}
            {meetup.photoUrl && (
              <a href={meetup.photoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                📷 Фото с мероприятия
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="meetup-content">
        <div className="container">
          {meetup.upcoming ? (
            <>
              <div className="upcoming-info" style={{ maxWidth: '700px', margin: '2rem auto', padding: '2rem', background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
                <h3 style={{ color: 'var(--color-accent-light)', marginBottom: '1rem' }}>🚀 Готовим следующий митап</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                  {meetup.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                  <a href="https://t.me/infradevcommunity" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Подписаться на Telegram</a>
                  <Link to="/cfp" className="btn btn-secondary">Хочу выступить</Link>
                </div>
              </div>

              <div className="topics" style={{ marginBottom: '2rem' }}>
                <h3>🎯 Ищем доклады на темы:</h3>
                <ul>
                  {meetup.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="topics">
                <h3>🎤 Формат</h3>
                <ul>
                  {meetup.format.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                {meetup.description}
              </p>

              {meetup.talks.map((talk, idx) => (
                <article className="talk" key={idx}>
                  <h3>{talk.title}</h3>
                  <span className="speaker">{talk.speaker}</span>
                  <p className="description" dangerouslySetInnerHTML={{ __html: talk.description }} />
                </article>
              ))}
            </>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/" className="btn btn-secondary">← На главную</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetupPage;
