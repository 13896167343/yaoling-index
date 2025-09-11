<!-- 瑶玲导航 - 左侧分类导航组件 -->
<template>
  <div class="category-sidebar">
    <!-- 标题 -->
    <div class="sidebar-header">
      <h2 class="sidebar-title">网站分类</h2>
      <p class="sidebar-subtitle">选择分类查看网站</p>
    </div>

    <!-- 分类列表 -->
    <div class="category-list">
      <div 
        v-for="category in categories" 
        :key="category.name"
        :class="['category-item', { active: activeCategory === category.name }]"
        @click="selectCategory(category)"
      >
        <div class="category-icon">
          <span class="icon-emoji">{{ category.icon }}</span>
        </div>
        <div class="category-info">
          <h3 class="category-name">{{ category.name }}</h3>
          <p class="category-count">{{ category.count }} 个网站</p>
        </div>
        <div class="category-arrow">›</div>
      </div>
    </div>

    <!-- 底部统计信息 -->
    <div class="sidebar-footer">
      <div class="stats-item">
        <span class="stats-icon">📊</span>
        <span class="stats-text">共 {{ totalCategories }} 个分类</span>
      </div>
      <div class="stats-item">
        <span class="stats-icon">🌐</span>
        <span class="stats-text">共 {{ totalWebsites }} 个网站</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategorySidebar',
  props: {
    // 网站列表
    websites: {
      type: Array,
      required: true,
      default: () => []
    },
    // 当前激活的分类
    activeCategory: {
      type: String,
      default: null
    }
  },
  emits: ['select-category'],
  computed: {
    /**
     * Get categories with icons and website counts
     * @returns {Array} Array of category objects
     */
    categories() {
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
      
      const categoryMap = new Map()
      
      // 统计每个分类的网站数量
      this.websites.forEach(website => {
        const category = website.category
        if (categoryMap.has(category)) {
          categoryMap.set(category, categoryMap.get(category) + 1)
        } else {
          categoryMap.set(category, 1)
        }
      })
      
      // 转换为分类对象数组
      return Array.from(categoryMap.entries()).map(([name, count]) => ({
        name,
        count,
        icon: categoryIcons[name] || '🌐'
      }))
    },
    
    /**
     * Get total number of categories
     * @returns {Number} Total categories count
     */
    totalCategories() {
      return this.categories.length
    },
    
    /**
     * Get total number of websites
     * @returns {Number} Total websites count
     */
    totalWebsites() {
      return this.websites.length
    }
  },
  methods: {
    /**
     * Handle category selection
     * @param {Object} category - Selected category object
     */
    selectCategory(category) {
      this.$emit('select-category', category.name)
    }
  },
  mounted() {
    // 默认选中第一个分类
    if (this.categories.length > 0 && !this.activeCategory) {
      this.selectCategory(this.categories[0])
    }
  }
}
</script>

<style scoped>
.category-sidebar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  height: fit-content;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 侧边栏头部样式 */
.sidebar-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.sidebar-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.sidebar-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

/* 分类列表样式 */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.category-item {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.category-item:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.category-item.active {
  background: rgba(102, 126, 234, 0.1);
  border-color: #667eea;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
}

.category-icon {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
}

.icon-emoji {
  font-size: 1.5rem;
}

.category-info {
  flex: 1;
  min-width: 0;
}

.category-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.category-count {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

.category-arrow {
  color: #999;
  font-size: 1.3rem;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
}

.category-item:hover .category-arrow {
  transform: translateX(4px);
  color: #667eea;
}

.category-item.active .category-arrow {
  color: #667eea;
  transform: translateX(4px);
}

/* 底部统计信息样式 */
.sidebar-footer {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(102, 126, 234, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stats-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.stats-icon {
  font-size: 1rem;
}

.stats-text {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .category-sidebar {
    padding: 1rem;
    max-height: none;
  }
  
  .sidebar-header {
    margin-bottom: 1.5rem;
  }
  
  .sidebar-title {
    font-size: 1.25rem;
  }
  
  .category-item {
    padding: 1rem;
  }
  
  .category-icon {
    width: 44px;
    height: 44px;
    margin-right: 0.75rem;
  }
  
  .icon-emoji {
    font-size: 1.25rem;
  }
  
  .category-name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .category-sidebar {
    padding: 0.75rem;
  }
  
  .sidebar-title {
    font-size: 1.1rem;
  }
  
  .sidebar-subtitle {
    font-size: 0.8rem;
  }
  
  .category-item {
    padding: 0.75rem;
  }
  
  .category-icon {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  }
  
  .icon-emoji {
    font-size: 1.1rem;
  }
  
  .category-name {
    font-size: 0.9rem;
  }
  
  .category-count {
    font-size: 0.75rem;
  }
  
  .stats-item {
    padding: 0.6rem;
  }
  
  .stats-text {
    font-size: 0.8rem;
  }
}
</style>