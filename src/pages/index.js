import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const products = [
  {
    name: 'DadaProgressions',
    description: 'Goals, achievements, rewards, leaderboards, storage, administration, and integrations.',
    to: '/docs/dadaprogressions/intro',
  },
  {
    name: 'Structory',
    description: 'Structure configuration, recipes, options, administration, and examples.',
    to: '/docs/structory/intro',
  },
  {
    name: 'DadaGraves',
    description: 'Gravestone setup, commands, configuration, GUIs, and decorations.',
    to: '/docs/dadagraves/intro',
  },
  {
    name: 'EventDirector',
    description: 'Event setup, actions, conditions, administration, and server management.',
    to: '/docs/eventdirector/intro',
  },
  {
    name: 'DND',
    description: 'Reference material and project documentation for Dada DND content.',
    to: '/docs/dnd/intro',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/dadaprogressions/intro">
            Open DadaProgressions documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Documentation for Dada plugins, tools, and server projects.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">Documentation</Heading>
            <p>Select a project to open its maintained guides and reference pages.</p>
          </div>
          <div className={styles.grid}>
            {products.map((product) => (
              <Link key={product.name} className={styles.card} to={product.to}>
                <Heading as="h3">{product.name}</Heading>
                <p>{product.description}</p>
                <span className={styles.cardLink}>Open documentation</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
