<div align="center">
    <p>
        <img alt="408Logo图片" width="240" src="https://cdn.statically.io/gh/142vip/cdn_service@main/doc_book/408/408_logo.png" style="text-align: center;">
    </p>
    <p style="font-size: 30px">
        <strong>✨计算机408全家桶✨</strong>
    </p>
</div>

<div align="center">
    <div id="repo-info">
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/142vip/408CSFamily" style="padding: 5px">
        <img alt="release version" src="https://img.shields.io/github/v/release/142vip/408CSFamily" style="padding: 5px">
        <img alt="repo size" src="https://img.shields.io/github/repo-size/142vip/408CSFamily" style="padding: 5px">
    </div>
    <div id="repo-link">
        <a href="https://github.com/142vip/408CSFamily" target="_blank" style="padding: 5px">GitHub</a>
        |
        <a href="https://gitee.com/chufan443/408CSFamily" target="_blank" style="padding: 5px">Gitee</a>
    </div>
</div>

## 写最前面

`408CSFamily` 我的理解是：408 计算机专业课”全家桶“，而 408 相信考研 er 都知道计算机考研专业课代码；在最新的高校计算机研究生招考中，已经越来越多的学校改考 408。可见 408 所涉及到的专业课举足轻重的地位；不论是在考研或者找工作，我相信 408 的专业基础必定是难以避免的，所以话不多说、形势复杂，唯一能做的就是不停的学习、巩固基础知识，加油！

本仓库收录的大部分内容源于我自己的学习输出和相关资料的整理，
将会站在上班族的角度进行整理。若有任何疑惑和问题，
欢迎在仓库集中`PR`或`ISSUES`提出。

**阅读之前必看：**

- **大家善用快捷键 Ctrl+F，没有效访问链接的代表尚未完成**
- 注意学科学习顺序，建议：`数据结构` --> `操作系统`、`计算机组成原理` --> `计算机网络`
- **学习切忌浮于表面，需戒骄戒躁**。408 考试知识点多、杂，非常容易忘，**抓大放小、先易后难、反复多次**

## 本地浏览【推荐】

由于平台、网络等原因，在线浏览容易出现加载面、加载不出来等常见问题，因此非常建议在本地进行浏览、学习；**下面指令默认你已经安装[Git](https://git-scm.com/download)、[NPM](https://www.npmjs.com/)、[PNPM](https://www.pnpm.cn/)、[Node](http://nodejs.cn)等环境，并对此有一定了解!**

```bash:no-line-numbers
## 进入cmd命令行，直接克隆仓库
git clone https://github.com/mmdapl/408CSFamily.git

## 进入408CSFamily文件夹中
cd 408CSFamily

## tips: 如果本地已经clone过仓库，建议执行pull指令，获取最新
git pull

## 下载依赖包
pnpm install

## 执行dev指令，本地启动项目，打开http://localhost:4200即可访问文档
pnpm dev
```

查看项目启动日志并访问：[http://127.0.0.1:4200](http://localhost:4200)，开启学习之旅吧~

## 学习资料

### 电子书 PDF

- 数据结构 2019: <https://pan.baidu.com/s/18x8AIfOkZxz197eY7HLRMg> 密码: euja
- 计算机组成原理 2019: <https://pan.baidu.com/s/1DiOBJMt9ZnZ6GK4CRCETJg> 密码: wic5
- 计算机网络 2019: <https://pan.baidu.com/s/1mmIZDugwY5YyytzIJoGQFw> 密码: dpkb
- 操作系统 2019: <https://pan.baidu.com/s/1gzuUqq09xqi8wQ8JJRF69g> 密码: o9b3

### 学习视频

> **不是王道工作人员，不做任何推销**，只是感觉看书不太行的话还是得找找视频辅助下，就发现了王道官方视频。
> **如果链接失效可以去 B 站搜！**

- [数据结构](https://www.bilibili.com/video/BV1b7411N798)
- [计算机组成原理](https://www.bilibili.com/video/BV1BE411D7ii)
- [操作系统](https://www.bilibili.com/video/BV1YE411D7nH)
- [计算机网络](https://www.bilibili.com/video/BV19E411D78Q)

## 数据结构

> 参考资料：
>
> - 《数据结构》 .
> - 《大话数据结构》.
> - 《计算机网络-王道考研》 2019 王道论坛著.

### 基础入门

- 基本概念
- 数据结构三要素
- 算法与算法评价

### 线性表

- 基础概念和基本操作
- 线性表的顺序表示
- 线性表的链式表示之单链表
- 线性表的链式表示之双链表
- 线性表的链式表示之循环链表
- 线性表的链式表示之静态链表
- 顺序表和链表的比较
- 存储结构的选取
- 零碎知识补充

### 栈

- 基本概念和操作
- 顺序存储结构
- 链式存储结构

### 队列

- 基本概念和操作
- 顺序存储结构
- 链式存储结构

### 串

- 基本概念
- 简单的模式匹配
- KMP 算法

### 树与二叉树

- 基本概念
- 二叉树
- 二叉树遍历
- 线索二叉树
- 树和森林
- 树的应用

### 图论

- 基本概念
- 图的存储
- 图的遍历
- 图的应用

### 查找

- 基本概念
- 顺序查找
- 折半查找
- B 树和 B+树
- 散列表

### 排序

- 基本概念
- 插入排序
- 交换排序
- 选择排序
- 归并排序
- 基数排序
- 外部排序

## 计算机操作系统

> 参考资料：
>
> - 《计算机操作系统》 第四版 汤小丹、梁红兵、汤子瀛著
> - 《操作系统-王道考研》 2019 王道论坛

### 系统概述

- 引论
- 发展和分类
- 运行环境
- 体系结构

### 进程管理

- 进程和线程
- 处理机调度
- 进程同步
- 死锁

### 内存管理

- 引论
- 虚拟内存
- 一些总结

### 文件管理

- 基本概念
- 文件系统
- 磁盘管理
- 一些总结

### 输入、输出管理

- 基本概述
- 核心子系统
- 高速缓存和缓冲区
- 一些总结

## 计算机组成原理

> 参考资料：
>
> - 《计算机组成原理》 第二版 唐朔飞
> - 《计算机组成原理-王道考研》 2019 王道论坛

### 计算机引论

- 发展历程
- 系统层次结构
- 性能指标

### 数据的表示和运算

- 数制和编码
- 定点数
- 浮点数
- 算数逻辑单元

### 存储系统

- 存储器介绍
- 存储器的层次化结构
- 随机存储器
- 主存和 CPU
- 双端口 RAM 和多模块存储器
- 高速缓冲存储器
- 虚拟存储器

### 指令系统

- 指令格式
- 寻址方式
- 指令集

### 中央处理器

- CPU 的基本介绍
- 指令执行过程
- 数据通路
- 控制器
- 指令流水线

### 总线

- 总线介绍
- 总线仲裁
- 总线的操作和定时
- 总线标准

### 输入输出系统

- 基本概念
- 外部设备
- 输入输出接口
- 输入输出方式

## 计算机网络

> 参考资料：
>
> - 《计算机网络-第七版》 谢希仁著.
> - 《计算机网络-王道考研》 2019 王道论坛.

### 体系机构

- 基本介绍
- 体系结构与参考模型

### 物理层

- 通信基础
- 传输介质
- 物理层设备

### 数据链路层

- 基本功能
- 组帧
- 差错控制
- 流量控制&可靠传输
- 介质访问控制
- 局域网
- 广域网
- 通信设备

### 网络层

- 基本功能
- 路由算法
- 路由协议
- IPV4
- IPV6
- IP 组播&移动 IP
- 网络层设备

### 传输层

- 提供的服务
- UDP 协议
- TCP 协议

### 应用层

- 应用模型
- DNS
- FTP 协议
- 电子邮件
- HTTP 协议

<!-- #region we-media -->

## 赞赏列表

以下排名不分先后， **赞赏过的一定要微信跟我说呀！！！！！！**

<div>
  <a href="https://github.com/ChiefPing" target="_blank" style="margin: 5px">
    <img
        src="https://avatars2.githubusercontent.com/u/34122068?s=460&v=4"
        alt="ChiefPing"
        style="border-radius:5px;" width="50px"
    />
  </a>
  <a href="https://github.com/xiaoliuxin" target="_blank" style="margin: 5px">
    <img
        src="https://avatars2.githubusercontent.com/u/60652527?s=460&v=4"
        alt="xiaoliuxin"
        style="border-radius:5px;" width="50px"
    />
  </a>
</div>

## 赞助商

以下排名不分先后! 还木有收到赞助，哈哈哈，先留坑

## 贡献

> 感谢所有参与仓库建设的开发者

<a href="https://github.com/142vip/408CSFamily/graphs/contributors">
  <img
    src="https://contrib.rocks/image?repo=142vip/408CSFamily"
    alt="感谢向仓库提交PR的所有开发者"
    title="408CSFamily"
  />
</a>

## 趋势

<div style="text-align: center" align="center">
    <img
        src="https://api.star-history.com/svg?repos=142vip/408CSFamily,142vip/JavaScriptCollection,142vip/core-x&type=Date"
        alt="Star History"
        style="border-radius: 5px"
    >
</div>

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

<!-- #endregion we-media -->
