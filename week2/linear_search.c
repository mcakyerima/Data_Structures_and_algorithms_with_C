#include <stdio.h>

/**
 * linear_search - searches for a value in an array of integers using
 * linear search algorithm
 *
 * @array: pointer to the first element of the array
 * @size: size of the array
 * @value: value to search for
 *
 * Return: the first index where value is located or -1 if value is not present
 */

int linear_search(int *array, size_t size, int value)
{
	size_t i;

	if (array == NULL)
		return (-1);

	for (i = 0; i < size; i++)
	{
		printf("Value checked array[%lu] = [%d]\n", i, array[i]);
		if (array[i] == value)
			return (i);
	}

	return (-1);
}

/**
 * main - Entry point
 *
 * Return: Always 0
 */

int main(void)
{
	int array[] = {10, 20, 30, 40, 50};
	int value = 30;
	size_t size = sizeof(array) / sizeof(array[0]);
	int index;

	index = linear_search(array, size, value);

	if (index == -1)
		printf("%d not found in array\n", value);
	else
		printf("%d found at index: %d\n", value, index);

	return (0);
}
