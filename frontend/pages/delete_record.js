import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function DeleteData() {
    const [sampleId, setSampleId] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8000/bio_sample/${sampleId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setResponseMessage('Record deleted successfully!');
        } catch (error) {
            console.error('Error deleting record:', error);
            setResponseMessage('Failed to delete record.');
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Delete Biological Sample Data</title>
                <link rel="icon" href="/bat.png" />
            </Head>

            <main>
                <h1 className={styles.title}>
                    Delete Biological Sample Data
                </h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value={sampleId}
                        onChange={(e) => setSampleId(e.target.value)}
                        placeholder="Sample ID to Delete"
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Delete Record
                    </button>
                </form>

                {responseMessage && <p>{responseMessage}</p>}


                <div className={styles.card}>
                    <a href="/">
                        <h3>Return home &rarr;</h3>
                    </a>
                </div>
            </main>
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
