package Hoofdstuk4;

import java.awt.*;
import java.applet.*;

public class Opdracht4dot5 extends Applet {

    public void init() {
    }

    public void paint(Graphics g) {
        setBackground(Color.blue);
        g.setColor(Color.yellow);
        g.fillArc(50, 50, 200, 200, 0, 360);
    }
}