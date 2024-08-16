// src/pages/MediaPage.js
import React, { useState, useEffect } from 'react';
import MediaManagement from '../components/MediaManagement';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MediaPage = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch media from API
    const fetchMedia = async () => {
      try {
        const response = await fetch('/api/media');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) return <p>Loading media...</p>;
  if (error) return <p>Error loading media: {error}</p>;

  return (
    <div>
      <Header />
      <main>
        <h1>Media Management</h1>
        <MediaManagement media={media} />
      </main>
      <Footer />
    </div>
  );
};

export default MediaPage;
