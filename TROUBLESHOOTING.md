# 故障排除指南

## ❌ VuePress package is not found 错误

如果遇到 `VuePress package is not found in current project!` 错误，请按以下步骤解决：

---

## 🔧 解决方案

### 步骤 1: 确认当前目录

确保你在项目根目录下运行命令：

```bash
# 检查是否在正确的目录
pwd
# 应该显示: /Users/chenyuyu/Desktop/CS/408CSFamily-main

# 如果不在项目根目录，切换到项目根目录
cd /Users/chenyuyu/Desktop/CS/408CSFamily-main
```

### 步骤 2: 检查依赖是否安装

```bash
# 检查 node_modules 是否存在
ls node_modules

# 检查 VuePress 是否安装
pnpm list vuepress
# 或
pnpm list @142vip/vuepress
```

### 步骤 3: 重新安装依赖

如果依赖未安装或损坏，重新安装：

```bash
# 清理旧的依赖（可选）
rm -rf node_modules
rm -rf pnpm-lock.yaml  # 注意：这会删除锁文件

# 重新安装依赖
pnpm install
```

### 步骤 4: 使用正确的命令

**❌ 错误的方式：**
```bash
vuepress dev docs        # 直接使用 vuepress（可能找不到）
```

**✅ 正确的方式：**
```bash
# 方式一：使用 pnpm 脚本（推荐）
pnpm dev

# 方式二：使用 npx
npx vuepress dev docs

# 方式三：使用完整路径
./node_modules/.bin/vuepress dev docs
```

---

## 🔍 常见问题排查

### 问题 1: 命令找不到

**错误信息：**
```
command not found: vuepress
```

**解决方法：**
```bash
# 使用 npx 运行
npx vuepress dev docs

# 或使用 pnpm 脚本
pnpm dev
```

### 问题 2: 依赖未安装

**错误信息：**
```
Cannot find module 'vuepress'
```

**解决方法：**
```bash
# 重新安装依赖
pnpm install
```

### 问题 3: 版本不匹配

**错误信息：**
```
VuePress version mismatch
```

**解决方法：**
```bash
# 清理并重新安装
rm -rf node_modules
pnpm install
```

### 问题 4: 权限问题

**错误信息：**
```
Permission denied
```

**解决方法：**
```bash
# 给脚本添加执行权限
chmod +x ./scripts/*

# 或使用 sudo（不推荐）
sudo pnpm install
```

---

## ✅ 验证安装

运行以下命令验证 VuePress 是否正确安装：

```bash
# 检查 VuePress 版本
npx vuepress --version

# 检查 VuePress 是否在 node_modules 中
ls node_modules/.bin/vuepress

# 检查项目依赖
pnpm list | grep vuepress
```

---

## 🚀 正确的使用方式

### 开发模式
```bash
# 在项目根目录下运行
cd /Users/chenyuyu/Desktop/CS/408CSFamily-main
pnpm dev
```

### 构建模式
```bash
# 在项目根目录下运行
cd /Users/chenyuyu/Desktop/CS/408CSFamily-main
pnpm build
```

### 构建思维导图
```bash
# 在项目根目录下运行
cd /Users/chenyuyu/Desktop/CS/408CSFamily-main
pnpm build:mark-map
```

---

## 📋 完整重置步骤

如果以上方法都不行，执行完整重置：

```bash
# 1. 进入项目根目录
cd /Users/chenyuyu/Desktop/CS/408CSFamily-main

# 2. 清理所有依赖和缓存
rm -rf node_modules
rm -rf .pnpm-store
rm -rf docs/.vuepress/.cache
rm -rf docs/.vuepress/.temp

# 3. 清理 pnpm 缓存（可选）
pnpm store prune

# 4. 重新安装依赖
pnpm install

# 5. 验证安装
npx vuepress --version

# 6. 启动开发服务器
pnpm dev
```

---

## 💡 预防措施

1. **始终在项目根目录运行命令**
   ```bash
   # 使用 pwd 确认位置
   pwd
   ```

2. **使用 pnpm 脚本而不是直接命令**
   ```bash
   # ✅ 推荐
   pnpm dev
   
   # ❌ 不推荐
   vuepress dev docs
   ```

3. **保持依赖更新**
   ```bash
   # 定期更新依赖
   pnpm update
   ```

---

## 🆘 仍然无法解决？

如果以上方法都无法解决问题，请检查：

1. **Node.js 版本**
   ```bash
   node --version  # 应该是 >= 18.x
   ```

2. **pnpm 版本**
   ```bash
   pnpm --version  # 应该是 9.6.0
   ```

3. **项目完整性**
   ```bash
   # 检查关键文件是否存在
   ls package.json
   ls vuepress.config.ts
   ls docs/
   ```

4. **查看详细错误信息**
   ```bash
   # 运行命令时添加 --debug 参数
   npx vuepress dev docs --debug
   ```

---

## 📞 获取帮助

如果问题仍然存在，请提供以下信息：

1. 错误信息的完整输出
2. Node.js 版本 (`node --version`)
3. pnpm 版本 (`pnpm --version`)
4. 当前目录 (`pwd`)
5. 执行的命令


