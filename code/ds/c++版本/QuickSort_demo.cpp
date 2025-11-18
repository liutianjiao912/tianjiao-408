#include <iostream>
#include <vector>
using namespace std;

// 快速排序【完整可运行版本】
// 分区函数
int Partition(vector<int>& A, int low, int high) {
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
void QuickSort(vector<int>& A, int low, int high) {
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
void printArray(const vector<int>& arr) {
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i];
        if (i < arr.size() - 1) {
            cout << " ";
        }
    }
    cout << endl;
}

// 主函数
int main() {
    cout << "=== 快速排序演示 ===" << endl;
    
    // 测试数据
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90, 5};
    
    cout << "排序前: ";
    printArray(arr);
    
    // 执行快速排序
    QuickSort(arr, 0, arr.size() - 1);
    
    cout << "排序后: ";
    printArray(arr);
    
    return 0;
}

