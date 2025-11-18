#!/bin/bash

# C++ 代码运行脚本
# 用法: ./run.sh [文件名]
# 例如: ./run.sh QuickSort_demo

CXX="g++"
CXXFLAGS="-std=c++11 -Wall"

if [ $# -eq 0 ]; then
    echo "=== 可运行的 C++ 演示程序 ==="
    echo ""
    echo "用法: ./run.sh [程序名]"
    echo ""
    echo "可用的程序:"
    echo "  QuickSort_demo    - 快速排序演示"
    echo "  BubbleSort_demo   - 冒泡排序演示"
    echo "  SqList_demo       - 顺序表操作演示"
    echo ""
    echo "示例: ./run.sh QuickSort_demo"
    exit 0
fi

PROGRAM=$1
SOURCE_FILE="${PROGRAM}.cpp"

if [ ! -f "$SOURCE_FILE" ]; then
    echo "错误: 找不到文件 $SOURCE_FILE"
    exit 1
fi

echo "编译 $SOURCE_FILE ..."
$CXX $CXXFLAGS -o "$PROGRAM" "$SOURCE_FILE"

if [ $? -eq 0 ]; then
    echo "编译成功！"
    echo "运行 $PROGRAM ..."
    echo "----------------------------------------"
    ./"$PROGRAM"
    echo "----------------------------------------"
    echo "运行完成！"
else
    echo "编译失败！"
    exit 1
fi

