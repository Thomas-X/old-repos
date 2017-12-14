package Hoofdstuk4;

import java.applet.Applet;
import java.awt.*;

public class Opdracht4dot2 extends Applet {


    public void init() {
        setBackground(Color.white);
    }

    public void paint(Graphics g) {
        g.drawLine(100, 50, 50, 100);
        g.drawLine(100, 50, 150, 100);
        g.drawLine(50, 100, 150, 100);
        g.drawLine(50, 100, 50, 200);
        g.drawLine(150, 100, 150, 200);
        g.drawLine(50, 200, 150, 200);
        g.drawRect(110, 150, 25, 50);
        g.drawRect(60, 120, 25, 25);
        g.drawLine(60, 132, 85, 132);
        g.drawLine(73, 120, 73, 145);
    }
}