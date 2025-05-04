// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../components/layout";
import "../styles/pages/articlepage.css";

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // В реальном проекте здесь будет запрос к API для получения статьи по ID
    // Здесь мы используем имитацию загрузки данных
    setTimeout(() => {
      // Заглушка данных статьи
      const mockArticle = {
        id: articleId || '1',
        date: '3 МАРТА 2025',
        title: 'Как выбрать домашнего кролика',
        image: '/img/article-image.jpg',
        intro: 'Выбор домашнего кролика — дело ответственное. Но что делать, если вам хочется чего-то... необычного? Например, кролика с человеческим лицом? Давайте разберемся, на что обращать внимание, чтобы не прогадать.',
        sections: [
          {
            title: '1. Проверяем выражение лица',
            content: 'Кролик с человеческим лицом должен вызывать эмоции. Желательно, чтобы оно выражало мудрость, тоску по неизведанному или легкое недовольство мировыми событиями. Если кролик смотрит на вас так, будто собирается повысить налог на морковку — это хороший знак.'
          },
          {
            title: '2. Уши: кроличьи или человеческие?',
            content: 'Кролик с человеческим лицом должен вызывать эмоции. Желательно, чтобы оно выражало мудрость, тоску по неизведанному или легкое недовольство мировыми событиями. Если кролик смотрит на вас так, будто собирается повысить налог на морковку — это хороший знак.'
          },
          {
            title: '3. Его отношение к морковке',
            content: 'Обычные кролики любят морковку. Кролик с человеческим лицом может вместо этого требовать кофе и эклеры. Решите заранее, готовы ли вы к этому.'
          }
        ],
        conclusion: {
          title: 'Итог',
          content: 'Выбирать кролика с человеческим лицом — сложная, но захватывающая задача. Главное — следить, чтобы он не начал ходить по дому в халате, ворчать на молодежь и требовать подписку на газету. Если все перечисленные пункты вас не смущают, поздравляем! Вы нашли идеального питомца.'
        }
      };
      
      setArticle(mockArticle);
      setLoading(false);
    }, 500);
  }, [articleId]);

  if (loading) {
    return (
      <div className="article-page">
        <Header />
        <div className="container">
          <div className="loading-indicator">Загрузка статьи...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="article-page">
      <Header />
      
      <div className="article-container">
        {article && (
          <>
            <div className="article-date">{article.date}</div>
            <h1 className="article-title">{article.title}</h1>
            
            <div className="article-image">
              {article.image ? (
                <img src={article.image} alt={article.title} />
              ) : (
                <div className="placeholder-image"></div>
              )}
            </div>
            
            <div className="article-intro">
              <p>{article.intro}</p>
            </div>
            
            <div className="article-content">
              {article.sections.map((section, index) => (
                <div className="article-section" key={index}>
                  <h2 className="section-title">{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              ))}
              
              {article.conclusion && (
                <div className="article-conclusion">
                  <h2 className="section-title">{article.conclusion.title}</h2>
                  <p>{article.conclusion.content}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;