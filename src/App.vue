<!-- 瑶玲导航 - 主应用组件 -->
<template>
  <div class="app">
    <!-- 顶部区域 -->
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">瑶玲导航</h1>
        <p class="hero-subtitle">收藏优质网站 · 发现精彩内容 · 提升工作效率 · 学习技能提升</p>
        
        <!-- 搜索栏 -->
        <div class="search-container">
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="搜索网站或工具..."
              class="search-input"
              @input="handleSearch"
            >
            <button class="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- 分类标签栏 -->
    <nav class="category-nav">
      <div class="category-container">
        <button 
          v-for="category in allCategories" 
          :key="category"
          :class="['category-btn', { active: selectedCategory === category }]"
          @click="handleSelectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="content-container">
        <!-- 网站卡片网格 -->
        <div class="websites-grid">
          <div 
            v-for="website in filteredWebsites" 
            :key="website.id"
            class="website-card"
            @click="openWebsite(website.url)"
          >
            <div class="card-icon">
              <img 
                :src="website.icon" 
                :alt="website.name" 
                :data-original-src="website.icon"
                @error="handleIconError"
              >
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ website.name }}</h3>
              <p class="card-description">{{ website.description }}</p>
            </div>
            <div class="card-actions">
              <button class="action-btn" @click.stop="copyUrl(website.url)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
                </svg>
              </button>
              <button class="action-btn" @click.stop="openWebsite(website.url)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 页脚区域 -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">
          <!-- 大陆域名访问时的显示逻辑 -->
          <template v-if="isMainlandDomain">
            <!-- 如果有备案号则显示备案信息 -->
            <a 
              v-if="icpNumber"
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="footer-link beian-link"
            >
              {{ icpNumber }}
            </a>
            <!-- 没有备案号时不显示任何内容 -->
          </template>
          <!-- 非大陆域名显示GitHub信息 -->
          <template v-else>
            开源项目 · 
            <a 
              href="https://github.com/yaoyaochil/yaoyao-nav" 
              target="_blank" 
              rel="noopener noreferrer"
              class="footer-link"
            >
              GitHub
            </a>
          </template>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// 导入网站数据
// Import website data
import { websites, categories } from './data/websites.js';

export default {
  name: 'App',
  data() {
    return {
      // 当前选中的分类
      selectedCategory: null,
      // 搜索关键词
      searchQuery: '',
      // 网站列表数据
      websites,
      // ICP备案号
       icpNumber: import.meta.env.VITE_ICP_NUMBER || '',
       // 大陆域名
       mainlandDomain: import.meta.env.VITE_MAINLAND_DOMAIN || '',
       // 当前是否为大陆域名
       isMainlandDomain: false
    }
  },
  mounted() {
    // Check if current domain is mainland domain
    // 检测当前域名是否为大陆域名
    if (this.mainlandDomain) {
      const currentDomain = window.location.hostname;
      this.isMainlandDomain = currentDomain === this.mainlandDomain;
    }
  },
  computed: {
    // 获取所有分类
    allCategories() {
      return categories
    },
    // 过滤后的网站列表
    filteredWebsites() {
      let filtered = this.websites
      
      // 按分类过滤（"全部"分类显示所有网站）
      if (this.selectedCategory && this.selectedCategory !== '全部') {
        filtered = filtered.filter(site => site.category === this.selectedCategory)
      }
      
      // 按搜索关键词过滤
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim()
        filtered = filtered.filter(site => 
          site.name.toLowerCase().includes(query) ||
          site.description.toLowerCase().includes(query) ||
          site.category.toLowerCase().includes(query)
        )
      }
      
      return filtered
    }
  },
  methods: {
    /**
     * Handle category selection
     * @param {String} category - Selected category name
     */
    handleSelectCategory(category) {
      this.selectedCategory = category
    },
    /**
     * Handle search input
     */
    handleSearch() {
      // 搜索时清除分类选择，显示所有匹配结果
      if (this.searchQuery.trim()) {
        this.selectedCategory = null
      }
    },
    /**
     * Open website in new tab
     * @param {String} url - Website URL
     */
    openWebsite(url) {
      window.open(url, '_blank')
    },
    /**
     * Copy URL to clipboard
     * @param {String} url - Website URL
     */
    async copyUrl(url) {
      try {
        await navigator.clipboard.writeText(url)
        // 可以添加提示消息
        console.log('URL已复制到剪贴板')
      } catch (err) {
        console.error('复制失败:', err)
      }
    },
    /**
     * Handle icon loading error
     * @param {Event} event - Error event
     */
    handleIconError(event) {
      // 使用默认图标替换加载失败的网站图标
      event.target.src = '/favicon.svg'
      // 添加错误处理样式
      event.target.style.opacity = '0.7'
      event.target.style.filter = 'grayscale(20%)'
      // 记录加载失败的图标（仅在开发环境）
      if (process.env.NODE_ENV === 'development') {
        console.warn('网站图标加载失败:', event.target.getAttribute('alt'), '原始URL:', event.target.dataset.originalSrc || '未知')
      }
    }
  },
  mounted() {
    // 默认选中第一个分类
    if (this.allCategories.length > 0) {
      this.selectedCategory = this.allCategories[0]
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
}

/* 顶部英雄区域 */
.hero-section {
  padding: 4rem 2rem 3rem;
  text-align: center;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2.5rem;
  line-height: 1.6;
}

/* 搜索栏样式 */
.search-container {
  margin-bottom: 1rem;
}

.search-box {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  outline: none;
}

.search-input:focus {
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.search-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #666;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.search-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #333;
}

/* 分类导航栏 */
.category-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  overflow-x: auto;
}

.category-container {
  display: flex;
  gap: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  min-width: max-content;
}

.category-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
}

.category-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  transform: translateY(-2px);
}

.category-btn.active {
  background: rgba(255, 255, 255, 0.9);
  color: #1e3c72;
  font-weight: 600;
}

/* 主要内容区域 */
.main-content {
  padding: 2rem;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* 网站卡片网格 */
.websites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.website-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.website-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 36px;
  height: 36px;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.375rem;
}

.card-description {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.action-btn {
  padding: 0.375rem;
  border: none;
  border-radius: 5px;
  background: rgba(30, 60, 114, 0.1);
  color: #1e3c72;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: rgba(30, 60, 114, 0.2);
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .category-container {
    padding: 0 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .websites-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.875rem;
  }
  
  .website-card {
    padding: 0.875rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 2rem 1rem 1.5rem;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .search-input {
    padding: 0.875rem 2.5rem 0.875rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .category-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
  }
  
  .websites-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .website-card {
    padding: 0.75rem;
  }
  
  .card-title {
    font-size: 0.95rem;
  }
  
  .card-description {
    font-size: 0.8rem;
  }
}

/* Footer styles */
.footer {
  margin-top: 3rem;
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
}

.footer-link {
  color: #64b5f6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #90caf9;
  text-decoration: underline;
}


/* Footer separator and beian styles */
.footer-separator {
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0.5rem;
}

.beian-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.beian-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .footer {
    margin-top: 2rem;
    padding: 1.5rem 0;
  }
  
  .footer-text {
    font-size: 0.85rem;
  }
  
  .beian-link {
    font-size: 0.8rem;
  }
}
</style>