package Hoofdstuk6;

import java.awt.*;
import java.applet.*;


public class Opdracht6dot1 extends Applet {
    int money;
    int uitkomst;

    public void init() {
        money = 113;
        uitkomst = (money / 4);
    }

    public void paint(Graphics g) {
        g.drawString("Jan krijgt " + uitkomst, 20,20);
        g.drawString("Ali krijgt " + uitkomst, 20,40);
        g.drawString("Jeannette krijgt " + uitkomst, 20,60);
        g.drawString("Ik krijgt " + uitkomst, 20,80);

    }
}
