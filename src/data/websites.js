// 网站数据配置文件
// Website data configuration file

export const websites = [
  // 实用工具
  {
    id: 1,
    name: 'Convertio',
    url: 'https://convertio.co',
    icon: 'https://convertio.co/favicon.ico',
    category: '实用工具',
    description: '在线文件转换工具，支持300多种格式互相转换，简单易用'
  },
  {
    id: 3,
    name: 'Convert cURL',
    url: 'https://curlconverter.com',
    icon: 'https://curlconverter.com/favicon.ico',
    category: '实用工具',
    description: '将cURL命令转换为各种编程语言代码，开发者必备工具'
  },
  {
    id: 4,
    name: 'Supervisor',
    url: 'https://supervisord.org',
    icon: 'https://www.google.com/s2/favicons?domain=supervisord.org&sz=32',
    category: '实用工具',
    description: '进程监控和管理工具，确保服务稳定运行'
  },
  {
    id: 5,
    name: 'SonarQube',
    url: 'https://www.sonarqube.org',
    icon: 'https://www.google.com/s2/favicons?domain=www.sonarqube.org&sz=32',
    category: '实用工具',
    description: '代码质量检测平台，持续检查代码质量和安全性'
  },
  {
    id: 6,
    name: 'Pastebin',
    url: 'https://pastebin.com',
    icon: 'https://pastebin.com/favicon.ico',
    category: '实用工具',
    description: '在线代码分享平台，快速分享代码片段和文本'
  },
  {
    id: 7,
    name: 'UPX',
    url: 'https://upx.github.io',
    icon: 'https://www.google.com/s2/favicons?domain=upx.github.io&sz=32',
    category: '实用工具',
    description: '可执行文件压缩工具，减小程序体积'
  },
  {
    id: 8,
    name: 'Sentry',
    url: 'https://sentry.io',
    icon: 'https://www.google.com/s2/favicons?domain=sentry.io&sz=32',
    category: '实用工具',
    description: '应用性能监控和错误追踪平台，提升应用稳定性'
  },
  // 开发工具
  {
    id: 9,
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'https://github.com/favicon.ico',
    category: '开发工具',
    description: '全球最大的代码托管平台，开发者协作的首选工具'
  },
  {
    id: 10,
    name: 'GitLab',
    url: 'https://gitlab.com',
    icon: 'https://gitlab.com/favicon.ico',
    category: '开发工具',
    description: '基于Git的代码管理平台，提供完整的DevOps解决方案'
  },
  {
    id: 11,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    icon: 'https://stackoverflow.com/favicon.ico',
    category: '开发工具',
    description: '程序员问答社区，解决编程问题的最佳平台'
  },
  {
    id: 12,
    name: 'Node.js',
    url: 'https://nodejs.org',
    icon: 'https://nodejs.org/favicon.ico',
    category: 'WEB开发',
    description: 'JavaScript运行时环境，构建高性能网络应用'
  },
  {
    id: 13,
    name: 'Golang',
    url: 'https://golang.org',
    icon: 'https://www.google.com/s2/favicons?domain=golang.org&sz=32',
    category: 'WEB开发',
    description: 'Google开发的编程语言，简洁高效的系统编程'
  },
  {
    id: 14,
    name: 'Flutter',
    url: 'https://flutter.dev',
    icon: 'https://www.google.com/s2/favicons?domain=flutter.dev&sz=32',
    category: 'WEB开发',
    description: 'Google的UI工具包，构建跨平台应用'
  },
  {
    id: 15,
    name: 'Python',
    url: 'https://www.python.org',
    icon: 'https://www.python.org/favicon.ico',
    category: 'WEB开发',
    description: '简洁优雅的编程语言，广泛应用于各个领域'
  },
  {
    id: 17,
    name: 'Design',
    url: 'https://design.com',
    icon: 'https://www.google.com/s2/favicons?domain=design.com&sz=32',
    category: 'WEB开发',
    description: '在线设计工具，快速创建专业设计'
  },
  // 搜索引擎
  {
    id: 21,
    name: '百度',
    url: 'https://www.baidu.com',
    icon: 'https://www.baidu.com/favicon.ico',
    category: '搜索引擎',
    description: '全球最大的中文搜索引擎，提供网页、图片、视频等搜索服务'
  },
  {
    id: 22,
    name: '谷歌',
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
    category: '搜索引擎',
    description: '全球最大的搜索引擎，提供精准的搜索结果和丰富的在线服务'
  },
  {
    id: 23,
    name: '必应',
    url: 'https://www.bing.com',
    icon: 'https://www.bing.com/favicon.ico',
    category: '搜索引擎',
    description: '微软推出的搜索引擎，提供智能搜索和精美背景'
  },
  // 新媒体工具
  {
    id: 24,
    name: '抖音',
    url: 'https://www.douyin.com',
    icon: 'https://www.douyin.com/favicon.ico',
    category: '新媒体工具',
    description: '记录美好生活的短视频平台，发现更多有趣内容'
  },
  {
    id: 25,
    name: 'B站',
    url: 'https://www.bilibili.com',
    icon: 'https://www.bilibili.com/favicon.ico',
    category: '新媒体工具',
    description: '哔哩哔哩弹幕网，年轻人聚集的文化社区和视频平台'
  },
  {
    id: 26,
    name: '微博',
    url: 'https://weibo.com',
    icon: 'https://weibo.com/favicon.ico',
    category: '新媒体工具',
    description: '中国领先的社交媒体平台，实时分享生活动态'
  },
  {
    id: 27,
    name: '小红书',
    url: 'https://www.xiaohongshu.com',
    icon: 'https://www.xiaohongshu.com/favicon.ico',
    category: '新媒体工具',
    description: '生活方式分享平台，发现美好生活'
  },
  // 其他
  {
    id: 28,
    name: '知乎',
    url: 'https://www.zhihu.com',
    icon: 'https://www.zhihu.com/favicon.ico',
    category: '其他',
    description: '中文互联网高质量的问答社区和创作者聚集的原创内容平台'
  },
  {
    id: 29,
    name: '淘宝',
    url: 'https://www.taobao.com',
    icon: 'https://www.taobao.com/favicon.ico',
    category: '其他',
    description: '中国最大的网络零售平台，让天下没有难做的生意'
  },
  {
    id: 30,
    name: '京东',
    url: 'https://www.jd.com',
    icon: 'https://www.jd.com/favicon.ico',
    category: '其他',
    description: '京东商城，多快好省，品质保障'
  }
];

// 分类列表
// Category list
export const categories = [
  '全部',
  '实用工具',
  '开发工具',
  'WEB开发',
  '搜索引擎',
  '新媒体工具',
  '其他'
];