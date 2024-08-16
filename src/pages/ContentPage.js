// src/pages/ContentPage.js
import React, { useState, useEffect } from 'react';
import ContentManagement from '../components/ContentManagement';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContentPage = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // Fetch content from API
    const fetchContents = async () => {
      try {
        const response = await fetch('/api/contents');
        const data = await response.json();
        setContents(data);
      } catch (error) {
        console.error('Error fetching contents:', error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Content Management</h1>
        <ContentManagement contents={contents} />
      </main>
      <Footer />
    </div>
  );
};

export default ContentPage;
