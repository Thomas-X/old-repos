package Hoofdstuk6;

import java.awt.*;
import java.applet.*;

/**
 * Created by Thomas-X on 9/16/2016.
 */
public class Opdracht6dot2 extends Applet {

    public int uursec;
    int uurdagsec;
    int dagjaarsec;


    public void init() {
        super.init();
        uursec = 60 * 60;
        uurdagsec = uursec * 24;
        dagjaarsec = uurdagsec * 365;
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("Aantal seconden in een uu: " + (uursec), 20, 30);
        g.drawString("Aantal seconden in een dag: " + (uurdagsec), 20, 50);
        g.drawString(" Aantal seconden in een jaar: " + (dagjaarsec), 20, 70);


    }
}
