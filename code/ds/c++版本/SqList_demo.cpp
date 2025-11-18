#include <iostream>
#define MaxSize 50
using namespace std;

// 顺序表的基础操作【完整可运行版本】

// 基础结构体
typedef struct {
    int data[MaxSize];  // 元素类型为 int
    int length;
} SqList;

// 初始化顺序表
void InitList(SqList& L) {
    L.length = 0;
}

// 插入操作
bool ListInsert(SqList& L, int i, int e) {
    // i非法：i=1 表头，i=L.length+1 表尾
    if (i < 1 || i > L.length + 1) {
        return false;
    }
    
    // 存储空间满，无法插入
    if (L.length >= MaxSize) {
        return false;
    }
    
    // 遍历，将位置元素往后移动，注意从后往前循环，避免值被覆盖
    for (int j = L.length; j >= i; j--) {
        L.data[j] = L.data[j - 1];
    }
    
    // 此时，表L中的第i个元素和第i+1元素值一样，将新元素存入i位置即可
    // 第i个元素，对应的位置角标为i-1
    L.data[i - 1] = e;
    
    // 表长度加1
    L.length++;
    
    // 返回插入成功
    return true;
}

// 删除操作
bool ListDelete(SqList& L, int i, int& e) {
    // i非法：i=1 表头，i=L.length 表尾
    if (i < 1 || i > L.length) {
        return false;
    }
    
    // 保存被删除的元素
    e = L.data[i - 1];
    
    // 从第i个位置开始，将后面的元素前移
    for (int j = i; j < L.length; j++) {
        L.data[j - 1] = L.data[j];
    }
    
    // 表长度减1
    L.length--;
    
    // 返回删除成功
    return true;
}

// 按值查找
int LocateElem(const SqList& L, int e) {
    for (int i = 0; i < L.length; i++) {
        if (L.data[i] == e) {
            return i + 1;  // 返回位置（从1开始）
        }
    }
    return 0;  // 未找到返回0
}

// 打印顺序表
void PrintList(const SqList& L) {
    cout << "顺序表内容: ";
    for (int i = 0; i < L.length; i++) {
        cout << L.data[i];
        if (i < L.length - 1) {
            cout << " ";
        }
    }
    cout << " (长度: " << L.length << ")" << endl;
}

// 主函数
int main() {
    cout << "=== 顺序表操作演示 ===" << endl;
    
    SqList L;
    InitList(L);
    
    // 插入元素
    cout << "\n插入元素:" << endl;
    ListInsert(L, 1, 10);
    ListInsert(L, 2, 20);
    ListInsert(L, 3, 30);
    ListInsert(L, 4, 40);
    PrintList(L);
    
    // 在位置2插入元素15
    cout << "\n在位置2插入元素15:" << endl;
    ListInsert(L, 2, 15);
    PrintList(L);
    
    // 按值查找
    cout << "\n查找元素20的位置:" << endl;
    int pos = LocateElem(L, 20);
    if (pos > 0) {
        cout << "元素20在位置: " << pos << endl;
    } else {
        cout << "未找到元素20" << endl;
    }
    
    // 删除元素
    cout << "\n删除位置3的元素:" << endl;
    int deleted;
    if (ListDelete(L, 3, deleted)) {
        cout << "删除的元素值: " << deleted << endl;
        PrintList(L);
    }
    
    return 0;
}

