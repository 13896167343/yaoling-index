# 瑶玲导航

一个基于 Vue 3 的现代化静态响应式导航网站，提供简洁美观的网站导航服务。

## 🌟 项目特性

- **现代化设计**: 采用渐变背景和毛玻璃效果，提供优雅的视觉体验
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **快速搜索**: 支持网站名称、描述和分类的实时搜索
- **分类筛选**: 按网站类别快速筛选，提高查找效率
- **一键访问**: 点击即可在新标签页打开目标网站
- **链接复制**: 一键复制网站链接到剪贴板
- **相关推荐**: 智能推荐同类别的相关网站

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
│   │   ├── NavigationSidebar.vue # 左侧导航栏组件
│   │   └── ContentDisplay.vue    # 右侧内容显示组件
│   ├── App.vue                  # 主应用组件
│   ├── main.js                  # 应用入口文件
│   └── style.css                # 全局样式文件
├── index.html                   # HTML 入口文件
├── package.json                 # 项目配置和依赖
├── vite.config.js              # Vite 配置文件
└── README.md                    # 项目说明文档
```

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

1. **网站导航**: 左侧导航栏展示精选网站列表
2. **搜索功能**: 顶部搜索框支持实时搜索网站
3. **分类筛选**: 按网站类别（搜索引擎、社交媒体、开发工具等）筛选
4. **网站详情**: 右侧显示选中网站的详细信息
5. **快速访问**: 一键打开网站或复制链接
6. **相关推荐**: 显示同类别的其他推荐网站

### 内置网站

- **搜索引擎**: 百度、谷歌
- **社交媒体**: 抖音、微博
- **开发工具**: GitHub
- **知识问答**: 知乎
- **视频娱乐**: 哔哩哔哩
- **电商购物**: 淘宝

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

在 `src/App.vue` 的 `websites` 数组中添加新的网站对象：

```javascript
{
  id: 9, // 唯一ID
  name: '网站名称',
  url: 'https://example.com',
  description: '网站描述',
  category: '网站分类',
  icon: 'https://example.com/favicon.ico'
}
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