# 408CSFamily 项目可用命令列表

## 📦 包管理命令

### 安装依赖

```bash
# 使用 pnpm 安装依赖（推荐）
pnpm install
# 或简写
pnpm i

# 使用脚本安装（使用腾讯镜像源）
./scripts/ci
```

---

## 🚀 开发命令

### 启动开发服务器

```bash
# 启动 VuePress 开发服务器（默认端口 4200）
# 会自动构建思维导图，然后启动开发服务器
pnpm dev

# 访问地址: http://localhost:4200
```

### 构建项目

```bash
# 构建生产版本（生成静态文件到 docs/.vuepress/dist）
pnpm build
```

### 构建思维导图

```bash
# 单独构建思维导图（将 markdown 转换为 HTML）
pnpm build:mark-map

# 或使用脚本
./scripts/mark-map
```

---

## 🧹 清理命令

### 清理构建文件

```bash
# 清理所有构建产物、缓存、依赖等
pnpm clean

# 清理 Git hooks
pnpm clean:hooks
```

---

## 🔍 代码检查命令

### 代码检查

```bash
# 检查代码规范（不自动修复）
pnpm lint

# 检查并自动修复代码规范问题
pnpm lint:fix
```

### 提交检查

```bash
# 验证 Git 提交信息格式
pnpm check:commit
```

---

## 💻 C/C++ 代码运行命令

### C 语言代码

```bash
cd code/ds/c版本

# 查看可用程序
./run.sh

# 运行快速排序
./run.sh QuickSort_demo

# 运行冒泡排序
./run.sh BubbleSort_demo

# 运行顺序表操作
./run.sh SqList_demo

# 手动编译运行
gcc -Wall -std=c11 -o QuickSort_demo QuickSort_demo.c
./QuickSort_demo
```

### C++ 代码

```bash
cd code/ds/c++版本

# 查看可用程序
./run.sh

# 运行快速排序
./run.sh QuickSort_demo

# 运行冒泡排序
./run.sh BubbleSort_demo

# 运行顺序表操作
./run.sh SqList_demo

# 手动编译运行
g++ -std=c++11 -o QuickSort_demo QuickSort_demo.cpp
./QuickSort_demo
```

---

## 🔧 其他工具命令

### 查看项目信息

```bash
# 查看 Node.js 版本
node --version

# 查看 pnpm 版本
pnpm --version

# 查看项目依赖
pnpm list
```

### Git 相关（如果使用 Git）

```bash
# 查看 Git 状态
git status

# 查看提交历史
git log

# 拉取最新代码
git pull
```

---

## 📝 命令说明

### 自动执行的命令（Hooks）

这些命令会在特定时机自动执行，无需手动运行：

- **preinstall**: 安装依赖前自动执行，确保使用 pnpm 并设置脚本权限
- **postinstall**: 安装依赖后自动执行，设置 Git hooks
- **pre-commit**: 提交代码前自动执行 `pnpm lint:fix`
- **commit-msg**: 提交信息验证，自动执行 `pnpm check:commit`

---

## 🎯 常用命令组合

### 首次运行项目

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器
pnpm dev
```

### 更新代码后运行

```bash
# 1. 拉取最新代码（如果使用 Git）
git pull

# 2. 更新依赖（如果有新依赖）
pnpm install

# 3. 启动开发服务器
pnpm dev
```

### 清理并重新构建

```bash
# 1. 清理所有文件
pnpm clean

# 2. 重新安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev
```

---

## ⚠️ 注意事项

1. **必须使用 pnpm**: 项目配置了 `only-allow pnpm`，使用 npm 或 yarn 会报错
2. **Node.js 版本**: 需要 Node.js >= 18.x
3. **pnpm 版本**: 需要 pnpm 9.6.0
4. **端口占用**: 开发服务器默认使用 4200 端口，如果被占用会自动使用下一个可用端口

---

## 📚 更多信息

- 项目文档: 运行 `pnpm dev` 后访问 http://localhost:4200
- 代码示例: 查看 `code/ds/` 目录下的 C/C++ 代码
- 文档内容: 查看 `docs/` 目录下的 Markdown 文件
