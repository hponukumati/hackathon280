// frontend/src/components/QueryComponent.js
import React, { useState } from 'react';
import { queryBackend } from '../api';

const QueryComponent = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQuerySubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await queryBackend(query);
      setResponse(data.answer);
    } catch (err) {
      setError('Failed to fetch the answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query here"
      />
      <button onClick={handleQuerySubmit} disabled={!query || loading}>
        Submit
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default QueryComponent;
