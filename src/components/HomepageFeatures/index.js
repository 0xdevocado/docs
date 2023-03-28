import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrate Dai and Maker Vaults',
    link: '/tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn how to integrate Dai and Maker Vaults into your applications.
      </>
    ),
  },
  {
    title: 'Core Protocol',
    link: '/smart-contract-modules',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Detailed documentation for the core smart contract modules of the Maker Protocol.
      </>
    ),
  },
  {
    title: 'Multichain and Layer 2',
    link: '/layer2',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Detailed documentation for the core smart contract modules of the Maker Protocol.
      </>
    ),
  },
  {
    title: 'Governance Module',
    link: '/#',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Detailed documentation for Maker Govervance smart contracts.
      </>
    ),
  },
  {
    title: 'Governance Security',
    link: '/#',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Documentation and processes for maintaining and integrating new modules into the Maker Protocol.
      </>
    ),
  },
  {
    title: 'Protocol Security',
    link: '/security',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Audit reports and security framework documentation for Maker Protocol development.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
