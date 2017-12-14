package Hoofdstuk4;

import java.applet.Applet;
import java.awt.*;


public class Opdracht4dot4 extends Applet {


    public void init() {
        setBackground(Color.white);
    }


    public void paint(Graphics g) {


        g.drawLine(100, 350, 300, 350);
        g.drawLine(100, 350, 100, 50);
        g.setColor(Color.GREEN);
        g.fillRect(120, 200, 20, 150);
        g.setColor(Color.BLACK);
        g.drawString("Hans", 115, 365);
        g.drawString("80", 80, 200);
        g.drawLine(100, 200, 140, 200);
        g.setColor(Color.magenta);
        g.fillRect(170, 170, 20, 180);
        g.setColor(Color.BLACK);
        g.drawString("Jeroen", 164, 365);
        g.drawString("100", 74, 170);
        g.drawLine(100, 170, 190, 170);
        g.setColor(Color.RED);
        g.fillRect(220, 275, 20, 75);
        g.setColor(Color.BLACK);
        g.drawLine(239, 275, 100, 275);
        g.drawString("40", 80, 280);
        g.drawString("Valerie", 215, 365);
    }
}