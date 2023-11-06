package Java;
import java.util.Scanner;

public class Roman_Int{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String roman_no = scanner.nextLine();
        int res = roman_Int(roman_no);
        System.out.println("Integer value: " + res);
    }

    public static int roman_Int(String s) {
        int total = 0;
        int prev = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int curr= 0;

            switch (c) {
                case 'I' | 'i' :
                    curr = 1;
                    break;
                case 'V' | 'v':
                    curr = 5;
                    break;
                case 'X' | 'x':
                    curr = 10;
                    break;
                case 'L' | 'l':
                    curr = 50;
                    break;
                case 'C' | 'c':
                    curr = 100;
                    break;
                case 'D' | 'd':
                    curr = 500;
                    break;
                case 'M' | 'm':
                    curr = 1000;
                    break;
                
                case 'Q' | 'q':
                    curr = 50000;
                    break;
            }

            if (curr < prev) {
                total -= curr;
            } else {
                total += curr;
            }
            prev = curr;
        }

        return total;
    }
}

