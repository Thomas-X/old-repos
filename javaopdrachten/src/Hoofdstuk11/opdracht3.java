package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas-X on 10/15/2016.
 */
public class opdracht3 {
    public static void main(String args[]) {

        int n1 = 0;
        int n2 = 1;
        int n3;
        int i;
        int count = 999999; //verander het naar 20 voordat je het runt als je geen gefrituurde aardappel wilt
        System.out.print(n1 + " " + n2);
        for (i = 2; i < count; ++i)
        {
            n3 = n1 + n2;
            System.out.print(" " + n3);
            n1 = n2;
            n2 = n3;
        }
    }
}

