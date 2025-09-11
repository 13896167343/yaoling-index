<!-- 瑶玲导航 - 右侧网站列表展示组件 -->
<template>
  <div class="content-display">
    <!-- 默认欢迎页面 -->
    <div v-if="!selectedCategory" class="welcome-section">
      <div class="welcome-content">
        <div class="welcome-icon">🧭</div>
        <h1 class="welcome-title">欢迎使用瑶玲导航</h1>
        <p class="welcome-subtitle">精选优质网站，让您的网络之旅更加便捷</p>
        <div class="welcome-stats">
          <div class="stat-item">
            <span class="stat-number">{{ allWebsites.length }}</span>
            <span class="stat-label">精选网站</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ uniqueCategories }}</span>
            <span class="stat-label">网站分类</span>
          </div>
        </div>
        <p class="welcome-tip">👈 选择左侧分类开始探索</p>
      </div>
    </div>

    <!-- 分类网站列表页面 -->
    <div v-else class="category-websites">
      <!-- 分类头部信息 -->
      <div class="category-header">
        <div class="category-title-section">
          <h1 class="category-title">
            <span class="category-icon">{{ getCategoryIcon(selectedCategory) }}</span>
            {{ selectedCategory }}
          </h1>
          <p class="category-subtitle">共 {{ categoryWebsites.length }} 个网站</p>
        </div>
        <div class="search-box">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="搜索网站..."
            class="search-input"
          >
          <div class="search-icon">🔍</div>
        </div>
      </div>

      <!-- 网站网格列表 -->
      <div class="websites-grid">
        <div 
          v-for="website in filteredWebsites" 
          :key="website.id"
          class="website-card"
          @click="visitWebsite(website)"
        >
          <div class="card-header">
            <div class="website-icon">
              <img 
                :src="website.icon" 
                :alt="website.name"
                @error="handleImageError"
                class="icon-img"
              >
            </div>
            <button @click.stop="copyLink(website)" class="copy-btn" title="复制链接">
              📋
            </button>
          </div>
          <div class="card-content">
            <h3 class="website-name">{{ website.name }}</h3>
            <p class="website-description">{{ website.description }}</p>
            <div class="website-url">{{ website.url }}</div>
          </div>
          <div class="card-footer">
            <span class="visit-hint">点击访问 →</span>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredWebsites.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">未找到相关网站</h3>
        <p class="empty-subtitle">尝试调整搜索关键词或选择其他分类</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryWebsites',
  props: {
    // 选中的分类
    selectedCategory: {
      type: String,
      default: null
    },
    // 所有网站列表
    allWebsites: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      // 搜索关键词
      searchQuery: ''
    }
  },
  computed: {
    /**
     * Get unique categories count
     * @returns {Number} Number of unique categories
     */
    uniqueCategories() {
      return new Set(this.allWebsites.map(site => site.category)).size
    },
    
    /**
     * Get websites in selected category
     * @returns {Array} Array of websites in current category
     */
    categoryWebsites() {
      if (!this.selectedCategory) return []
      return this.allWebsites.filter(site => site.category === this.selectedCategory)
    },
    
    /**
     * Filter websites based on search query
     * @returns {Array} Filtered websites array
     */
    filteredWebsites() {
      let websites = this.categoryWebsites
      
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim()
        websites = websites.filter(site => 
          site.name.toLowerCase().includes(query) ||
          site.description.toLowerCase().includes(query) ||
          site.url.toLowerCase().includes(query)
        )
      }
      
      return websites
    }
  },
  methods: {
    /**
     * Visit the website
     * @param {Object} website - Website object
     */
    visitWebsite(website) {
      if (website && website.url) {
        window.open(website.url, '_blank')
      }
    },
    
    /**
     * Copy website link to clipboard
     * @param {Object} website - Website object
     */
    async copyLink(website) {
      if (website && website.url) {
        try {
          await navigator.clipboard.writeText(website.url)
          // 这里可以添加成功提示
          console.log('链接已复制到剪贴板:', website.name)
        } catch (err) {
          console.error('复制失败:', err)
        }
      }
    },
    
    /**
     * Get category icon
     * @param {String} category - Category name
     * @returns {String} Category icon emoji
     */
    getCategoryIcon(category) {
      const categoryIcons = {
        '搜索引擎': '🔍',
        '社交媒体': '💬',
        '开发工具': '⚙️',
        '知识问答': '❓',
        '视频娱乐': '🎬',
        '电商购物': '🛒',
        '新闻资讯': '📰',
        '学习教育': '📚',
        '办公工具': '💼',
        '设计创意': '🎨'
      }
      return categoryIcons[category] || '🌐'
    },
    
    /**
     * Handle image loading error
     * @param {Event} event - Error event
     */
    handleImageError(event) {
      // 使用默认图标替换加载失败的图片
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNjY3ZWVhIi8+Cjwvc3ZnPgo='
    }
  },
  watch: {
    // 当分类改变时重置搜索
    selectedCategory() {
      this.searchQuery = ''
    }
  }
}
</script>

<style scoped>
.content-display {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  height: fit-content;
  min-height: calc(100vh - 120px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow-y: auto;
}

/* 欢迎页面样式 */
.welcome-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

.welcome-content {
  max-width: 500px;
}

.welcome-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.welcome-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.welcome-tip {
  font-size: 1rem;
  color: #999;
  margin: 0;
}

/* 分类网站列表页面样式 */
.category-websites {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 分类头部信息 */
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.category-title-section {
  flex: 1;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.category-icon {
  font-size: 1.8rem;
}

.category-subtitle {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* 搜索框样式 */
.search-box {
  position: relative;
  width: 300px;
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 8px;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1rem;
  pointer-events: none;
}

/* 网站网格列表 */
.websites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.website-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.website-card:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.website-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
}

.icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.copy-btn {
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.copy-btn:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: scale(1.1);
}

.card-content {
  margin-bottom: 1rem;
}

.website-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.website-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0 0 0.75rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.website-url {
  font-size: 0.8rem;
  color: #667eea;
  word-break: break-all;
  background: rgba(102, 126, 234, 0.05);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.card-footer {
  text-align: center;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.visit-hint {
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 500;
  transition: all 0.3s ease;
}

.website-card:hover .visit-hint {
  color: #5a67d8;
  transform: translateX(4px);
}

/* 空状态样式 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  color: #666;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.empty-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.empty-subtitle {
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content-display {
    padding: 1.5rem;
  }
  
  .category-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .search-box {
    width: 100%;
  }
  
  .websites-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
  
  .welcome-stats {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .content-display {
    padding: 1rem;
  }
  
  .websites-grid {
    grid-template-columns: 1fr;
  }
  
  .website-card {
    padding: 1rem;
  }
  
  .welcome-title {
    font-size: 2rem;
  }
  
  .category-title {
    font-size: 1.3rem;
  }
  
  .search-input {
    padding: 0.6rem 2rem 0.6rem 0.75rem;
    font-size: 0.85rem;
  }
}
</style>