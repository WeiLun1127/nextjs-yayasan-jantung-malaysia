'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';

const Bulletin = () => {
  // List of PDF URLs and file names
  const pdfFiles = [
    { name: "Berita YJM Vol 60", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file60" },
    { name: "Berita YJM Vol 59", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file59" },
    { name: "Berita YJM Vol 58", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file58" },
    { name: "Berita YJM Vol 57", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file57" },
    { name: "Berita YJM Vol 56", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file56" },
    { name: "Berita YJM Vol 55", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file55" },
    { name: "Berita YJM Vol 54", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file54" },
    { name: "Berita YJM Vol 53", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file53" },
    { name: "Berita YJM Vol 52", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file52" },
    { name: "Berita YJM Vol 51", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file51" },
    { name: "Berita YJM Vol 50", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file50" },
    { name: "Berita YJM Vol 49", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file49" },
    { name: "Berita YJM Vol 48", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file48" },
    { name: "Berita YJM Vol 47", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file47" },
    { name: "Berita YJM Vol 46", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file46" },
    { name: "Berita YJM Vol 45", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file45" },
    { name: "Berita YJM Vol 44", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file44" },
    { name: "Berita YJM Vol 43", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file43" },
    { name: "Berita YJM Vol 42", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file42" },
    { name: "Berita YJM Vol 41", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file41" },
    { name: "Berita YJM Vol 40", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file40" },
    { name: "Berita YJM Vol 39", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file39" },
    { name: "Berita YJM Vol 38", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file38" },
    { name: "Berita YJM Vol 37", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file37" },
    { name: "Berita YJM Vol 36", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file36" },
    { name: "Berita YJM Vol 35", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file35" },
    { name: "Berita YJM Vol 34", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file34" },
    { name: "Berita YJM Vol 33", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file33" },
    { name: "Berita YJM Vol 32", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file32" },
    { name: "Berita YJM Vol 31", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file31" },
    { name: "Berita YJM Vol 30", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file30" },
    { name: "Berita YJM Vol 29", url: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://path-to-your-public-pdf-file29" }
  ];

  // State to track the current PDF index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions to navigate to the previous and next PDFs
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pdfFiles.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pdfFiles.length - 1 ? 0 : prevIndex + 1));
  };

  const handleFileClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Berita YJM</h1>
      
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Files</h2>
          <ul className={styles.fileList}>
            {pdfFiles.map((file, index) => (
              <li
                key={index}
                className={`${styles.fileItem} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => handleFileClick(index)}
              >
                {file.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.pdfViewer}>
          <div className={styles.arrowContainer}>
            <button className={styles.arrowButton} onClick={goToPrevious}>←</button>
            <p className={styles.description}>
              <iframe
                src={pdfFiles[currentIndex].url}
                width="600"
                height="800"
                style={{ border: 'none' }}
                title="PDF Preview"
              />
            </p>
            <button className={styles.arrowButton} onClick={goToNext}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
