package Hoofdstuk5;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Barry on 14-9-2016.
 */
public class Opdracht5dot2 extends Applet {

    Color grafiek;
    Color achtergrond;
    Color lijn;

    @Override
    public void init() {
        super.init();
        grafiek = Color.RED;
        achtergrond = Color.WHITE;
        lijn = Color.BLACK;
        setBackground(achtergrond);

    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        int baseline = 220;
        g.setColor(lijn);
        g.drawLine(40, 20, 40, 220);
        g.drawLine(40, 220, 240, 220);
        g.drawString("0", 30, 235);
        g.drawString("10", 25, 205);
        g.drawString("20", 25, 185);
        g.drawString("30", 25, 165);
        g.drawString("40", 25, 145);
        g.drawString("50", 25, 125);
        g.drawString("60", 25, 105);
        g.drawString("70", 25, 85);
        g.drawString("80", 25, 65);
        g.drawString("90", 25, 45);
        g.drawString("100", 18, 25);
        int p1 = 40 * 2;
        int antwoord = (baseline - p1);
        //220 - (p1 * 2);
        g.setColor(Color.RED);
        g.fillRect(50, antwoord, 20, (p1));

        int p2 = 80 * 2;
        int antwoord2 = (baseline - p2);
        //220 - (p1 * 2);
        g.setColor(Color.GREEN);
        g.fillRect(80, antwoord2, 20, (p2));

        int p3 = 100 * 2;
        int antwoord3 = (baseline - p3);
        //220 - (p1 * 2);
        g.setColor(Color.MAGENTA);
        g.fillRect(110, antwoord3, 20, (p3));
    }
}
