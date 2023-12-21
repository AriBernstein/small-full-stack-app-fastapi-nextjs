import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function ViewData() {
    const [samples, setSamples] = useState(null);
    const [date, setDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sampleId, setSampleId] = useState('');
    const [sampleIdForLocation, setSampleIdForLocation] = useState('');

    const fetchData = async (url) => {
        setSamples(null);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setSamples(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClear = () => {
        setSamples(null);
        setDate('');
        setStartDate('');
        setEndDate('');
        setSampleId('');
    };

    return (
        <div className={styles.grid}>
            <Head>
                <title>View Biological Sample Data</title>
                <link rel="icon" href="/bat.png" />
            </Head>

            <main>
                <h1 className={styles.title}>
                    View Biological Sample Data
                </h1>

                <div className={styles.card}>
                    <button onClick={() => fetchData('http://localhost:8000/bio_samples/')}>
                        Load All Bio Samples
                    </button>
                </div>

                <div className={styles.card}>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <button onClick={() => fetchData(`http://localhost:8000/bio_samples/date/${date}`)}>
                        Load by Date
                    </button>
                </div>

                <div className={styles.card}>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    <button onClick={() => fetchData(`http://localhost:8000/bio_samples/dates/${startDate}/${endDate}`)}>
                        Load by Date Range
                    </button>
                </div>

                <div className={styles.card}>
                    <input type="text" value={sampleId} onChange={(e) => setSampleId(e.target.value)} placeholder="Sample ID" />
                    <button onClick={() => fetchData(`http://localhost:8000/bio_sample/${sampleId}`)}>
                        Load by Sample ID
                    </button>
                </div>

                <div className={styles.card}>
                    <input type="text" value={sampleIdForLocation} onChange={(e) => setSampleIdForLocation(e.target.value)} placeholder="Sample ID for location" />
                    <button onClick={() => fetchData(`http://localhost:8000/sample_storage/${sampleIdForLocation}`)}>
                        Get location of sample by Sample ID
                    </button>
                </div>

                <div className={styles.card}>
                    <button onClick={handleClear}>
                        Clear Page
                    </button>
                </div>

                <div className={styles.card}>
                    <a href="/">
                        <h3>Return home &rarr;</h3>
                    </a>
                </div>

                {samples && (
                    <div>
                        <h2>Sample Data:</h2>
                        <pre>{JSON.stringify(samples, null, 2)}</pre>
                    </div>
                )}
            </main>

            <footer>
                Made By Ari Bernstein
            </footer>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
