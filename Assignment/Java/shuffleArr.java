package Java;

import java.util.Random;

public class shuffleArr {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        ShuffleArray(arr);

        // Print the shuffled array
        for (int value : arr) {
            System.out.print(value + " ");
        }
    }

    public static void ShuffleArray(int[] array) {
        Random rand = new Random();

        int n = array.length;

        for (int i = n - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);

            // Swap elements at index i and j
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}



