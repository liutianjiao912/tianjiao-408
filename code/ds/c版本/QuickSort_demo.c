#include <stdio.h>

// 快速排序【完整可运行版本 - C语言】

// 分区函数
int Partition(int A[], int low, int high) {
    int pivot = A[low];  // 选择第一个元素作为基准
    
    while (low < high) {
        // 从右往左找小于基准的元素
        while (low < high && A[high] >= pivot) {
            --high;
        }
        A[low] = A[high];  // 比pivot小的都移到左表
        
        // 从左往右找大于基准的元素
        while (low < high && A[low] <= pivot) {
            ++low;
        }
        A[high] = A[low];  // 比pivot大的都移到右表
    }
    
    // 此时low==high，找到基准元素的最终位置
    A[low] = pivot;
    return low;  // 返回基准元素的位置
}

// 快速排序主函数
void QuickSort(int A[], int low, int high) {
    // low >= high 表示子表只有一个元素或为空，不需要排序
    if (low < high) {
        // 获取基准位置，将当前待排序表分成左右两个子表
        int pivotKey = Partition(A, low, high);
        
        // 对左边序列进行快排
        QuickSort(A, low, pivotKey - 1);
        
        // 对右边序列进行快排
        QuickSort(A, pivotKey + 1, high);
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
    printf("=== 快速排序演示 (C语言) ===\n");
    
    // 测试数据
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("排序前: ");
    printArray(arr, n);
    
    // 执行快速排序
    QuickSort(arr, 0, n - 1);
    
    printf("排序后: ");
    printArray(arr, n);
    
    return 0;
}

