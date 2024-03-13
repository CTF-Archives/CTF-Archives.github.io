import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'CTF-Archives',
    tagline: '我们收集，我们复现，我们创造，我们开源',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://ctf-archives.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'CTF-Archives', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/CTF-Archives/CTF-Archives.github.io/edit/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/CTF-Archives/CTF-Archives.github.io/edit/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'CTF-Archives',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'CTF_Docker_Template_Sidebar',
                    position: 'left',
                    label: 'ctf-docker-template',
                },
                {to: '/blog', label: 'Blog', position: 'right'},
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'ctf-docker-template',
                            to: '/docs/ctf-docker-template',
                        },
                    ],
                },
                {
                    title: '友情链接',
                    items: [

                        {
                            label: 'Hello-CTF',
                            href: 'https://hello-ctf.com/',
                        },
                        {
                            label: 'Treasure House',
                            href: 'https://treasure-house.randark.site/',
                        },
                        {
                            label: '不看探姬女装，你就没学过 CTF！',
                            href: 'https://github.com/ProbiusOfficial/FittingRoom',
                        },
                    ],
                },
                {
                    title: 'CTF 训练平台',
                    items: [
                        {
                            label: 'NSSCTF',
                            href: 'https://www.nssctf.cn/',
                        },
                        {
                            label: 'BuuOJ',
                            href: 'https://buuoj.cn/',
                        },
                        {
                            label: 'QSNCTF - 青少年 CTF',
                            href: 'https://www.qsnctf.com/',
                        },
                        {
                            label: 'Bugku',
                            href: 'https://www.bugku.com/',
                        },
                        {
                            label: 'CTFSHOW',
                            href: 'https://ctf.show/',
                        },
                        {
                            label: 'adworld - 攻防世界',
                            href: 'https://adworld.xctf.org.cn/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} CTF-Archives. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
