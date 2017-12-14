package Hoofdstuk4;

import java.awt.*;
import java.applet.*;

public class Opdracht4dot6 extends Applet {

    public void init() {
    }

    public void paint(Graphics g) {
        setBackground(Color.white);
        g.setColor(Color.black);
        g.fillRoundRect(50, 50, 75, 190, 10, 10);
        g.setColor(Color.red);
        g.fillOval(55, 55, 65, 55);
        g.setColor(Color.ORANGE);
        g.fillOval(55, 115, 65, 55);
        g.setColor(Color.GREEN);
        g.fillOval(55, 175, 65, 55);
        g.setColor(Color.GRAY);
        g.fillRect(85, 240, 10, 40);
    }
}