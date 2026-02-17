import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <p className="not-found-text">Страница не найдена</p>
          <p className="not-found-description">
            Возможно, вы перешли по устаревшей ссылке или страница была перемещена.
          </p>
          <Link to="/" className="btn btn-primary">
            ← На главную
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
