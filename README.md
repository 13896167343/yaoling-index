# 瑶玲导航

一个基于 Vue 3 的现代化静态响应式导航网站，提供简洁美观的网站导航服务。

## 🌟 项目特性

- **现代化设计**: 采用渐变背景和毛玻璃效果，提供优雅的视觉体验
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **快速搜索**: 支持网站名称、描述和分类的实时搜索
- **分类筛选**: 按网站类别快速筛选，支持"全部"分类显示所有网站
- **一键访问**: 点击即可在新标签页打开目标网站
- **链接复制**: 一键复制网站链接到剪贴板
- **图标容错**: 自动处理网站图标加载失败，提供默认图标显示
- **数据分离**: 网站数据独立管理，便于维护和扩展
- **网格布局**: 采用响应式网格卡片布局，美观实用

## 🚀 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **开发语言**: JavaScript
- **样式**: CSS3 (原生CSS，支持响应式设计)
- **部署平台**: Cloudflare Pages
- **代码托管**: GitHub

## 📁 项目结构

```
瑶玲导航/
├── public/
│   └── favicon.svg              # 网站图标
├── src/
│   ├── components/
│   │   ├── NavigationSidebar.vue # 左侧导航栏组件（已弃用）
│   │   └── ContentDisplay.vue    # 右侧内容显示组件（已弃用）
│   ├── data/
│   │   └── websites.js          # 网站数据配置文件
│   ├── App.vue                  # 主应用组件
│   ├── main.js                  # 应用入口文件
│   └── style.css                # 全局样式文件
├── index.html                   # HTML 入口文件
├── package.json                 # 项目配置和依赖
├── vite.config.js              # Vite 配置文件
└── README.md                    # 项目说明文档
```

## ⚙️ 环境变量配置

项目支持通过环境变量配置ICP备案信息和大陆域名功能：

1. 复制 `.env.example` 文件为 `.env`：
   ```bash
   cp .env.example .env
   ```

2. 编辑 `.env` 文件，设置环境变量：
   ```env
   # ICP备案号（可选）
   VITE_ICP_NUMBER=你的ICP备案号
   
   # 大陆域名（可选）
   VITE_MAINLAND_DOMAIN=你的大陆域名
   ```

**功能说明：**
- **ICP备案信息**：设置 `VITE_ICP_NUMBER` 后可在页面底部显示备案信息
- **大陆域名功能**：设置 `VITE_MAINLAND_DOMAIN` 后，访问该域名时只显示备案信息，不显示GitHub信息；访问其他域名时只显示GitHub信息

**注意**: 
- 环境变量必须以 `VITE_` 开头才能在Vite应用中使用
- 如果不设置任何环境变量，页面底部将只显示GitHub开源链接
- 大陆域名功能需要同时设置 `VITE_ICP_NUMBER` 和 `VITE_MAINLAND_DOMAIN`
- 修改环境变量后需要重启开发服务器
- 生产环境部署时，需要在Cloudflare Pages中配置相应的环境变量

## 🛠️ 开发环境

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

## 📱 功能说明

### 主要功能

1. **网站导航**: 顶部英雄区域展示网站标题和搜索功能
2. **搜索功能**: 支持网站名称、描述和分类的实时搜索
3. **分类筛选**: 横向分类标签栏，支持按类别筛选网站
4. **网格展示**: 响应式网格布局展示网站卡片
5. **快速访问**: 点击卡片直接访问网站，支持复制链接
6. **图标处理**: 自动处理图标加载失败，提供统一的默认图标
7. **全部分类**: 支持显示所有网站的"全部"分类选项

### 内置网站

项目内置了30个精选网站，涵盖以下分类：

- **实用工具**: 在线工具、代码分享、文件压缩、性能监控等
- **开发工具**: GitHub、GitLab、Stack Overflow等开发者必备工具
- **WEB开发**: Node.js、Golang、Flutter、Python等技术栈
- **新媒体工具**: 设计工具、学习资源、安全工具等

所有网站数据存储在 `src/data/websites.js` 文件中，支持自定义添加和修改。

## 🌐 部署说明

### Cloudflare Pages 部署

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Pages 中连接 GitHub 仓库
3. 设置构建配置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`
4. 部署完成后即可通过 Cloudflare 提供的域名访问

### 其他静态托管平台

本项目是纯静态网站，可以部署到任何静态托管平台：

- **Vercel**: 连接 GitHub 仓库，自动部署
- **Netlify**: 拖拽 `dist` 文件夹或连接 Git 仓库
- **GitHub Pages**: 使用 GitHub Actions 自动构建部署

## 🎨 自定义配置

### 添加新网站

在 `src/data/websites.js` 的 `websites` 数组中添加新的网站对象：

```javascript
{
  id: 31, // 唯一ID（递增）
  name: '网站名称',
  url: 'https://example.com',
  description: '网站描述',
  category: '网站分类',
  icon: 'https://example.com/favicon.ico'
}
```

同时在 `categories` 数组中添加新分类（如果需要）：

```javascript
export const categories = [
  '全部',
  '实用工具',
  '开发工具',
  'WEB开发',
  '新媒体工具',
  '新分类' // 添加新分类
]
```

### 修改样式主题

主要样式变量位于 `src/style.css` 和各组件的 `<style>` 部分，可以修改：

- 背景渐变色
- 主题色彩
- 字体样式
- 间距大小

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 GitHub Issue
- 发送邮件至项目维护者

---

**瑶玲导航** - 让网络导航更简单、更美好 ✨