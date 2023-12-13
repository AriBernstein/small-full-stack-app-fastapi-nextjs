import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Biological Sample Data </title>
        <link rel="icon" href="/bat.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          CRUD Operations for Biological Sample Data 
        </h1>

        <p className={styles.description}>
          Use the tools on this page to view/filter records, add a new records, modify an existing record or delete a record.
        </p>

        <div className={styles.list}>
          <a href="/get_records/" className={styles.card}>
            <h3>View Bio Samples &rarr;</h3>
            <p>View all samples or specific samples by <code>sample_id</code>, <code>sample_name</code>, or <code>date_collected</code>.</p>
          </a>

          <a href="/create_record/" className={styles.card}>
            <h3>Create new bio sample &rarr;</h3>
            <p>Add a new bio sample to the table</p>
          </a>

          <a
            href="/update_record/"
            className={styles.card}
          >
            <h3>Update bio sample &rarr;</h3>
            <p>Update a bio sample that exists in the table.</p>
          </a>

          <a
            href="/delete_record/"
            className={styles.card}
          >
            <h3>Delete bio sample &rarr;</h3>
            <p>
              Delete a given bio sample from the table.
            </p>
          </a>
        </div>
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
