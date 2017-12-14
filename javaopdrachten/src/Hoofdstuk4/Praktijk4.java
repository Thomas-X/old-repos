package Hoofdstuk4;

import java.awt.*;
import java.applet.*;

public class Praktijk4 extends Applet {

    public void init() {
    }

    public void paint(Graphics g) {
        setBackground(Color.white);
        g.setColor(Color.black);
        g.drawLine(10, 10, 210, 10);
        g.drawString("Lijn", 100, 25);

        g.drawRect(10, 40, 200, 85);
        g.drawString("Rechthoek", 85, 140);

        g.drawRoundRect(10, 150, 200, 85, 30, 30);
        g.drawString("Afgeronde rechthoek", 55, 250);

        g.setColor(Color.MAGENTA);
        g.fillRect(230, 40, 200, 85);
        g.setColor(Color.black);
        g.drawOval(230, 40, 200, 85);
        g.drawString("Gevulde rechthoek met ovaal", 250, 140);

        g.setColor(Color.MAGENTA);
        g.fillOval(230, 150, 200, 85);
        g.setColor(Color.BLACK);
        g.drawString("Gevulde ovaal", 290, 250);

        g.drawOval(450, 40, 200, 85);
        g.setColor(Color.MAGENTA);
        g.fillArc(450, 40, 200, 85, 0, 45);
        g.setColor(Color.black);
        g.drawString("Taartpunt met ovaal eromheen", 465, 140);

        g.drawOval(510, 150, 85, 85);
        g.drawString("Cirkel", 535, 250);
    }
}