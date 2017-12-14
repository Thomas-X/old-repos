package Hoofdstuk5;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Barry on 14-9-2016.
 */
public class Variabelen extends Applet {

    Color achtergrond;
    Color tekst;
    int getal;
    int getal2;
    Font myFont;

    @Override
    public void init() {
        super.init();
        achtergrond = Color.PINK;
        tekst = Color.BLUE;
        getal = 15;
        getal2 = 20;
        setBackground(achtergrond);
        myFont = new Font("TimesRoman", Font.BOLD, 18);
        this.setSize(600, 400);
    }


    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(tekst);
        int x = 50;
        int y = 50;
        //int son = getal + getal2;
        g.drawString("Het getal is: " + (getal + getal2), x, y);
        y = y + 20;
        g.setFont(myFont);
        g.drawString("Het getal is: " + (getal + getal2), x, y);
    }
}