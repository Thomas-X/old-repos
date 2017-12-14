package Hoofdstuk4;

import java.awt.*;
import java.applet.*;

public class Opdracht4dot1 extends Applet {

    public void init() {
    }

    public void paint(Graphics g) {
        setBackground(Color.white);
        g.setColor(Color.black);
        g.drawLine(50, 100, 150, 100);
        g.drawLine(100, 20, 50, 100);
        g.drawLine(100, 20, 150, 100);
    }
}