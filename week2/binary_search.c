#include <stdio.h>

/**
 * binary_search - Searches for a value in a sorted array of integers
 *                 using the Binary search algorithm
 *
 * @array: Pointer to the first element of the array to search
 * @size: Number of elements in array
 * @value: Value to search for
 *
 * Return: Index where value is located, or -1 if not found
 */
int binary_search(int arr[], int left, int right, int target)
{
    while (left <= right)
	{
	    int mid = left + (right - left) / 2;
	    if (arr[mid] == target)
	    {
		return mid;
	    }
	    else if (arr[mid] < target)
	    {
		left = mid + 1;
	    }
	    else {
		right = mid - 1;
	    }
	}
	return (-1);
}

int main()
{
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 56;
    int result = binary_search(arr, 0, n-1, target);
    if (result == -1)
    {
        printf("Element is not present in array");
    }
    else {
	printf("Element is present at index %d", result);
    }
    return (0);
}
