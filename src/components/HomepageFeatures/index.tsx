import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/data-analysis-svgrepo-com.svg').default,
        description: (
            <>
                我们致力于跟随国内各个赛事的进程，将赛题与比赛信息进行归档，希望能够营造更好的 CTF 学习环境
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/recursive-server-svgrepo-com.svg').default,
        description: (
            <>
                除了赛事之外，我们也致力于创造适合入门出题者的动态靶机模板、内存取证辅助工具等等，希望能够为 CTF 比赛环境的发展尽一份力
            </>
        ),
    },
    {
        title: 'Powered by React',
        Svg: require('@site/static/img/mail-reception-svgrepo-com.svg').default,
        description: (
            <>
                仅靠个人的力量是无法坚持下去的，我们欢迎各位师傅提供建议，反馈问题，或者加入我们，为项目添柴加火
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
