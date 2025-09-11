<!-- 瑶玲导航 - 主应用组件 -->
<template>
  <div class="app">
    <!-- 头部标题栏 -->
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <img src="/favicon.svg" alt="瑶玲导航" class="logo-icon">
          <h1 class="logo-text">瑶玲导航</h1>
        </div>
        <div class="header-info">
          <span class="welcome-text">欢迎使用瑶玲导航</span>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 左侧分类导航栏 -->
      <aside class="sidebar">
        <NavigationSidebar 
          :websites="websites" 
          :activeCategory="selectedCategory"
          @select-category="handleSelectCategory"
        />
      </aside>

      <!-- 右侧内容区域 -->
      <section class="content-area">
        <ContentDisplay 
          :selectedCategory="selectedCategory"
          :allWebsites="websites"
        />
      </section>
    </main>
  </div>
</template>

<script>
import NavigationSidebar from './components/NavigationSidebar.vue'
import ContentDisplay from './components/ContentDisplay.vue'

export default {
  name: 'App',
  components: {
    NavigationSidebar,
    ContentDisplay
  },
  data() {
    return {
      // 当前选中的分类
      selectedCategory: null,
      // 网站列表数据
      websites: [
        {
          id: 1,
          name: '百度',
          url: 'https://www.baidu.com',
          icon: 'https://www.baidu.com/favicon.ico',
          category: '搜索引擎',
          description: '全球最大的中文搜索引擎，提供网页、图片、视频等搜索服务'
        },
        {
          id: 2,
          name: '谷歌',
          url: 'https://www.google.com',
          icon: 'https://www.google.com/favicon.ico',
          category: '搜索引擎',
          description: '全球最大的搜索引擎，提供精准的搜索结果和丰富的在线服务'
        },
        {
          id: 3,
          name: '必应',
          url: 'https://www.bing.com',
          icon: 'https://www.bing.com/favicon.ico',
          category: '搜索引擎',
          description: '微软推出的搜索引擎，提供智能搜索和精美背景'
        },
        {
          id: 4,
          name: '微博',
          url: 'https://weibo.com',
          icon: 'https://weibo.com/favicon.ico',
          category: '社交媒体',
          description: '中国领先的社交媒体平台，实时分享生活动态'
        },
        {
          id: 5,
          name: '微信',
          url: 'https://wx.qq.com',
          icon: 'https://wx.qq.com/favicon.ico',
          category: '社交媒体',
          description: '腾讯推出的即时通讯软件，连接你我他'
        },
        {
          id: 6,
          name: 'QQ',
          url: 'https://im.qq.com',
          icon: 'https://im.qq.com/favicon.ico',
          category: '社交媒体',
          description: '腾讯QQ，年轻人喜爱的即时通讯工具'
        },
        {
          id: 7,
          name: 'GitHub',
          url: 'https://github.com',
          icon: 'https://github.com/favicon.ico',
          category: '开发工具',
          description: '全球最大的代码托管平台，开发者协作的首选工具'
        },
        {
          id: 8,
          name: 'GitLab',
          url: 'https://gitlab.com',
          icon: 'https://gitlab.com/favicon.ico',
          category: '开发工具',
          description: '基于Git的代码管理平台，提供完整的DevOps解决方案'
        },
        {
          id: 9,
          name: 'Stack Overflow',
          url: 'https://stackoverflow.com',
          icon: 'https://stackoverflow.com/favicon.ico',
          category: '开发工具',
          description: '程序员问答社区，解决编程问题的最佳平台'
        },
        {
          id: 10,
          name: '知乎',
          url: 'https://www.zhihu.com',
          icon: 'https://www.zhihu.com/favicon.ico',
          category: '知识问答',
          description: '中文互联网高质量的问答社区和创作者聚集的原创内容平台'
        },
        {
          id: 11,
          name: '百度知道',
          url: 'https://zhidao.baidu.com',
          icon: 'https://zhidao.baidu.com/favicon.ico',
          category: '知识问答',
          description: '百度旗下的问答平台，汇聚亿万网民的智慧'
        },
        {
          id: 12,
          name: '抖音',
          url: 'https://www.douyin.com',
          icon: 'https://www.douyin.com/favicon.ico',
          category: '视频娱乐',
          description: '记录美好生活的短视频平台，发现更多有趣内容'
        },
        {
          id: 13,
          name: 'B站',
          url: 'https://www.bilibili.com',
          icon: 'https://www.bilibili.com/favicon.ico',
          category: '视频娱乐',
          description: '哔哩哔哩弹幕网，年轻人聚集的文化社区和视频平台'
        },
        {
          id: 14,
          name: '优酷',
          url: 'https://www.youku.com',
          icon: 'https://www.youku.com/favicon.ico',
          category: '视频娱乐',
          description: '优酷视频，这世界很酷'
        },
        {
          id: 15,
          name: '淘宝',
          url: 'https://www.taobao.com',
          icon: 'https://www.taobao.com/favicon.ico',
          category: '电商购物',
          description: '中国最大的网络零售平台，让天下没有难做的生意'
        },
        {
          id: 16,
          name: '京东',
          url: 'https://www.jd.com',
          icon: 'https://www.jd.com/favicon.ico',
          category: '电商购物',
          description: '京东商城，多快好省，品质保障'
        },
        {
          id: 17,
          name: '天猫',
          url: 'https://www.tmall.com',
          icon: 'https://www.tmall.com/favicon.ico',
          category: '电商购物',
          description: '天猫，理想生活上天猫'
        },
        {
          id: 18,
          name: '腾讯新闻',
          url: 'https://news.qq.com',
          icon: 'https://news.qq.com/favicon.ico',
          category: '新闻资讯',
          description: '腾讯网新闻频道，提供全面及时的新闻资讯'
        },
        {
          id: 19,
          name: '新浪新闻',
          url: 'https://news.sina.com.cn',
          icon: 'https://news.sina.com.cn/favicon.ico',
          category: '新闻资讯',
          description: '新浪新闻，24小时提供全面及时的中文资讯'
        },
        {
          id: 20,
          name: '网易新闻',
          url: 'https://news.163.com',
          icon: 'https://news.163.com/favicon.ico',
          category: '新闻资讯',
          description: '网易新闻，有态度的新闻门户'
        }
      ]
    }
  },
  computed: {
    // 获取所有分类
    categories() {
      const categorySet = new Set(this.websites.map(site => site.category))
      return Array.from(categorySet)
    }
  },
  methods: {
    /**
     * Handle category selection from sidebar
     * @param {String} category - Selected category name
     */
    handleSelectCategory(category) {
      this.selectedCategory = category
    }
  },
  mounted() {
    // 默认选中第一个分类
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0]
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 头部样式 */
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.welcome-text {
  color: #666;
  font-size: 0.9rem;
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  gap: 1.5rem;
  padding: 1.5rem;
}

/* 左侧导航栏 */
.sidebar {
  width: 300px;
  min-width: 300px;
}

/* 右侧内容区域 */
.content-area {
  flex: 1;
  min-width: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .main-content {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  
  .sidebar {
    width: 100%;
    min-width: auto;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0.75rem;
  }
  
  .main-content {
    padding: 0.75rem;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .welcome-text {
    font-size: 0.8rem;
  }
}
</style>