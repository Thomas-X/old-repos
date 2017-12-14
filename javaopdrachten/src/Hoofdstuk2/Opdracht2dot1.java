package Hoofdstuk2;//Voorbeeld 2.2

import java.awt.*;
import java.applet.*;

public class Opdracht2dot1 extends Applet {

    public void init() {
        setBackground(Color.blue);
    }

    public void paint(Graphics g) {
        g.setColor(Color.yellow);
        g.drawString("Barry", 50, 60);
    }
}