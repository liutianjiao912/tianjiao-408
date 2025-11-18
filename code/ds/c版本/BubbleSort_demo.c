#include <stdio.h>

// 冒泡排序【完整可运行版本 - C语言】

// 交换两个元素
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 冒泡排序
void BubbleSort(int A[], int n) {
    for (int i = 0; i < n - 1; i++) {
        // 当前趟次冒泡，是否发生了元素交换，初始化为0（false）
        int flag = 0;
        
        for (int j = n - 1; j > i; j--) {
            if (A[j - 1] > A[j]) {
                // 将两个元素A[j-1]、A[j]进行交换
                swap(&A[j - 1], &A[j]);
                // 确认已发生交换
                flag = 1;
            }
        }
        
        // 本趟遍历后没有发生交换，说明表已经有序
        if (flag == 0) {
            return;
        }
    }
}

// 打印数组
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i < n - 1) {
            printf(" ");
        }
    }
    printf("\n");
}

// 主函数
int main() {
    printf("=== 冒泡排序演示 (C语言) ===\n");
    
    // 测试数据
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("排序前: ");
    printArray(arr, n);
    
    // 执行冒泡排序
    BubbleSort(arr, n);
    
    printf("排序后: ");
    printArray(arr, n);
    
    return 0;
}

