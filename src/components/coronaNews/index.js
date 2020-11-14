import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';
import './style.css';

const convertTanggal = (tanggal) => {
  const tanggalLokal = new Date(tanggal).toLocaleString('id-ID', {
    dateStyle: 'full',
  });
  return tanggalLokal;
};

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  console.log(news);

  return (
    <div>
      <h2>data corona</h2>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div>
          {news.map((newsItem) => {
            return (
              <div className="news">
                <h3>{convertTanggal(newsItem.date)}</h3>
                {newsItem.activity.map((activityItem) => {
                  return (
                    <div className="news-activity">
                      <a
                        href={activityItem.url}
                        target="_blank"
                        rel="noreferrer"
                        className="news-title"
                      >
                        <h4>{activityItem.title}</h4>
                      </a>
                      <p className="news-description">{activityItem.desc}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CoronaNews;
