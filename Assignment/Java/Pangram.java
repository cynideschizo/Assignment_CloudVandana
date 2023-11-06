package Java;

import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Sentence: ");
        String input = scanner.nextLine();

        boolean Pangram = checkPangram(input);

        if (Pangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String str) {
        boolean[] alphaflag = new boolean[26];

        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);

            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                alphaflag[index] = true;
            }
        }

        for (boolean flag : alphaflag) {
            if (!flag) {
                return false; // If any letter is missing, input is not a pangram
            }
        }

        return true; // All letters are present, input is a pangram
    }
}
