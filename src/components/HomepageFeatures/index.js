import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fundamentos de IA',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aprende los conceptos fundamentales de la Inteligencia Artificial y su aplicación en diferentes contextos sobre la base de sus técnicas y algoritmos.
      </>
    ),
  },
  {
    title: 'IA Avanzada',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Comprende el uso de LLMs y sus aplicaciones en diferentes aspectos de la vida cotidiana y laboral. Aprende a utilizar los agentes de IA.
      </>
    ),
  },
  {
    title: 'Deep Learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Aprende sobre redes neuronales profundas. Elimina las cajas negras de tu modelo de IA y comprende cómo funcionan los algoritmos de aprendizaje profundo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
