package Hoofdstuk4;

import java.awt.*;
import java.applet.*;

public class Opdracht4dot3 extends Applet {

    public void init() {
    }

    public void paint(Graphics g) {
        setBackground(Color.white);
        g.setColor(Color.black);
        g.drawRect(50, 50, 200, 125);
        g.setColor(Color.RED);
        g.fillRect(50, 50, 200, 45);
        g.setColor(Color.BLUE);
        g.fillRect(50, 135, 200, 45);
        g.setColor(Color.black);
        g.fillRect(45, 50, 5, 200);
    }
}