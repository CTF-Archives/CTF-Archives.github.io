# ctf-docker-template

**ctf-docker-template** 是一个用于支持动态 Flag 的 Docker 容器模板项目，支持主流的各类 CTF 平台

项目存有一定局限性，但已可适用于绝大多数初中级别题目的命题需求。

本仓库内的 Docker 容器模板支持的 FLAG 注入类型如下：

- `$FLAG`
- - [CTFd](https://github.com/CTFd/CTFd)
- - [NSSCTF](https://www.nssctf.cn/)
- - 其他主流的 CTF 平台
- `$GZCTF_FLAG`
- - [GZCTF](https://github.com/GZTimeWalker/GZCTF)
- `$DASCTF`
- - DASCTF

每个容器模板均为独立封装，您可以在每个容器模板文件夹中找到对应的 README 文件，请在使用前仔细阅读，如有任何疑问请加入项目中的  **[CTF-Archives 售后快速服务群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=KFamhBpmURTZpndhc0MI7_1l3a6Xezrf&authKey=Yenwm7%2B%2F%2FT%2BtSXCSyr%2B7fYS47Ot0MwFqesH4HOLT8ZADE2e9XO6AS96HQvjxh%2B%2BG&noverify=0&group_code=894957229)**  联系维护人员获取帮助。

当然，我们也在 **[Hello-CTF 命题部分](https://hello-ctf.com/Create/)** 页面提供命题相关的教程，也附带本项目的所有文档，欢迎访问查阅。

三种动态 flag 部署方式，支持 GZCTF、CTFd、安恒 DASCTF 等支持 Docker 动态部署题目靶机的平台

:::warning 请注意架构问题！！

此仓库内的模板仅在 Linux 环境（linux/amd64）下进行测试并保证可用性

如果为 windows（windows/amd64）或者 macos（linux/arm）等其他架构，不保证可用性😔

:::

:::warning 请注意编码问题！！

Docker 是按照 Linux/Unix 的编码规范进行读取到，也就是 `UTF-8` 编码方式，以及 `LF` 换行编码

在 Windows 环境下，通过 `git clone` 方式获取模板源码的时候，会按照 `CRLF` 格式进行拉取文件，可能会导致以下问题

- Docker 提示：编码出错
- Bash 提示：脚本编码存在问题 / 无法执行脚本

建议直接在 linux 下执行 `git clone` 操作，或者直接从 Github 下载 [zip 版本的源码](https://github.com/CTF-Archives/ctf-docker-template/archive/refs/heads/main.zip)

或者通过 [Github Release](https://github.com/CTF-Archives/ctf-docker-template/releases/tag/%E5%B7%B2%E6%89%93%E5%8C%85%E6%A8%A1%E6%9D%BF%E4%B8%8B%E8%BD%BD) 下载各个模板的 zip 打包文件

:::

## 模板的文件夹结构

在一般情况下，每个模板的文件结构如下：

```plaintext
.
├── README.md
├── Dockerfile                  # Docker 容器编译文件，用于设计 docker 容器，可在其中设置换源、增添软件包等等
├── config                      # 存放着容器内服务相关的配置文件，如 `nginx` 的配置文件等等
│   ├── ......
│   └── nginx.conf              # Web + Nginx 容器专属，Nginx 配置文件
├── data                        # 容器初始化过程中需要预加载的数据
│   ├── ......
│   └── db.sql                  # Web 容器且有数据库需求容器专属
├── docker                      # Docker 测试文件
│   └── docker-compose.yml      # 测试容器一键启动 `docker compose up -d --build`
├── service                     # 容器服务启动文件
│   └── docker-entrypoint.sh    # 容器启动参数配置文件
└── src                         # 题目相关的部署文件，如 php 源码，如 python 源码，如 pwn 二进制程序
    └── ......
```
