// src/Result.jsx
import React from 'react';
import './Result.css';

function Result({ searchQuery, searchType }) {
  // For demo, mock some search results based on searchQuery & searchType
  const mockResults = [
    `Result 1 for ${searchQuery} (${searchType})`,
    `Result 2 for ${searchQuery} (${searchType})`,
    `Result 3 for ${searchQuery} (${searchType})`,
  ];

  return (
    <section className="result-container">
      <h2>Search Results</h2>
      {searchQuery ? (
        <ul className="result-list">
          {mockResults.map((result, i) => (
            <li key={i} className="result-item">{result}</li>
          ))}
        </ul>
      ) : (
        <p>No search query entered.</p>
      )}
    </section>
  );
}

export default Result;
