package Hoofdstuk4;

import java.awt.*;
import java.applet.*;

public class Opdracht4dot7 extends Applet {

    public void init() {
    }

    public void paint(Graphics g) {
        setBackground(Color.black);
        g.setColor(Color.white);
        g.fillRoundRect(20, 20, 120, 120, 30, 30);
        g.setColor(Color.black);
        g.fillOval(30, 30, 32, 32);
        g.fillOval(98, 30, 32, 32);
        g.fillOval(30, 98, 32, 32);
        g.fillOval(98, 98, 32, 32);
    }
}