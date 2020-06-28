import React, { useState, useEffect } from 'react';

import Heading from '@theme/Heading';
import InstallationCommand from '@site/src/components/InstallationCommand';
import Jump from '@site/src/components/Jump';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SVG from 'react-inlinesvg';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

import classnames from 'classnames';
import {fetchNewHighlight} from '@site/src/exports/newHighlight';
import {fetchNewPost} from '@site/src/exports/newPost';
import {fetchNewRelease} from '@site/src/exports/newRelease';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import repoUrl from '@site/src/exports/repoUrl';

import _ from 'lodash';
import styles from './index.module.css';

import './index.css';

const AnchoredH2 = Heading('h2');

const features = [
  {
    title: 'Fast. Really.',
    icon: 'zap',
    description: (
      <>
        Built in <a href="https://www.rust-lang.org/">Rust</a>, Vector is <a href="#performance">blistering fast and
        memory efficient</a>. It's designed to handle the most demanding environments.
      </>
    ),
  },
  {
    title: 'Vendor Neutral',
    icon: 'unlock',
    description: (
      <>
        Vector does not favor any storage and fosters a fair, open ecosystem with your best interest in mind. Lock-in free and future proof.
      </>
    ),
  },
  {
    title: 'One Tool',
    icon: 'codepen',
    description: (
      <>
        Vector aims to be the single, and only, tool needed to get data from A to B, <Link to="/docs/setup/deployment/">deploying</Link> as an <Link to="/docs/setup/deployment/strategies/#daemon">daemon</Link>, <Link to="/docs/setup/deployment/strategies/#sidecar">sidecar</Link>, or <Link to="/docs/setup/deployment/strategies/#service">service</Link>.
      </>
    ),
  },
  {
    title: 'All Data',
    icon: 'shuffle',
    description: (
      <>
        Vector supports <Link to="/docs/about/data-model/log/">logs</Link>, <Link to="/docs/about/data-model/metric/">metrics</Link>, and <Link to="/docs/about/data-model/#event">events</Link>, making it easy to collect and process <i>all</i> observability data.
      </>
    ),
  },
  {
    title: 'Programmable Transforms',
    icon: 'code',
    description: (
      <>
        <Link to="/components/?functions[]=program">Programmable transforms</Link> give you the full power of programmable runtimes. Handle complex use cases without limitation.
      </>
    ),
  },
  {
    title: 'Clear Guarantees',
    icon: 'shield',
    description: (
      <>
        Guarantees matter, and Vector is <Link to="/docs/about/guarantees/">clear on it's guarantees</Link>, helping you to make the appropriate trade offs for your use case.
      </>
    ),
  },
];

function Features({features}) {
  let rows = [];

  let i,j,temparray,chunk = 3;
  for (i=0,j=features.length; i<j; i+=chunk) {
    let featuresChunk = features.slice(i,i+chunk);

    rows.push(
      <div key={`features${i}`} className="row">
        {featuresChunk.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    );
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <AnchoredH2 id="features">Why Shift'M?</AnchoredH2>
        {rows}
      </div>
    </section>
  );
}

function Feature({icon, title, description}) {
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <div className={styles.featureIcon}>
        <i className={classnames('feather', `icon-${icon}`)}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {latest_release}} = siteConfig.customFields;



  return (
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description={siteConfig.tagline}>
      <main>
        {features && features.length && <Features features={features} />}
      </main>
    </Layout>
  );
}

export default Home;
