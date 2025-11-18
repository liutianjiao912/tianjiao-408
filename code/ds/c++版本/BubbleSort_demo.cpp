#include <iostream>
#include <vector>
using namespace std;

// 冒泡排序【完整可运行版本】
void BubbleSort(vector<int>& A, int n) {
    for (int i = 0; i < n - 1; i++) {
        // 当前趟次冒泡，是否发生了元素交换，初始化为false
        bool flag = false;
        
        for (int j = n - 1; j > i; j--) {
            if (A[j - 1] > A[j]) {
                // 将两个元素A[j-1]、A[j]进行交换
                swap(A[j - 1], A[j]);
                // 确认已发生交换
                flag = true;
            }
        }
        
        // 本趟遍历后没有发生交换，说明表已经有序
        if (flag == false) {
            return;
        }
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
    cout << "=== 冒泡排序演示 ===" << endl;
    
    // 测试数据
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90, 5};
    
    cout << "排序前: ";
    printArray(arr);
    
    // 执行冒泡排序
    BubbleSort(arr, arr.size());
    
    cout << "排序后: ";
    printArray(arr);
    
    return 0;
}

