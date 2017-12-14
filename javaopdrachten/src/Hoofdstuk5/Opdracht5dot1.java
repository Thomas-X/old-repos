package Hoofdstuk5;

import java.awt.*;
import java.applet.*;

public class Opdracht5dot1 extends Applet {
    Color background;
    Color outline;
    Color coloritems1;
    int hoogte;
    int lengte;

    public void init() {
        //Kleuren
        background = Color.WHITE;
        outline = Color.BLACK;
        coloritems1 = Color.ORANGE;
        //Hoogte & lengte
        hoogte = 85;
        lengte = 200;
    }


    public void paint(Graphics g) {
        setBackground(background);
        g.setColor(outline);
        g.drawLine(10, 10, 210, 10);
        g.drawString("Lijn", 100, 25);

        g.drawRect(10, 40, lengte, hoogte);
        g.drawString("Rechthoek", 85, 140);

        g.drawRoundRect(10, 150, lengte, hoogte, 30, 30);
        g.drawString("Afgeronde rechthoek", 55, 250);

        g.setColor(coloritems1);
        g.fillRect(230, 40, lengte, hoogte);
        g.setColor(outline);
        g.drawOval(230, 40, lengte, hoogte);
        g.drawString("Gevulde rechthoek met ovaal", 250, 140);

        g.setColor(coloritems1);
        g.fillOval(230, 150, lengte, hoogte);
        g.setColor(outline);
        g.drawString("Gevulde ovaal", 290, 250);

        g.drawOval(450, 40, lengte, hoogte);
        g.setColor(coloritems1);
        g.fillArc(450, 40, lengte, hoogte, 0, 45);
        g.setColor(Color.BLACK);
        g.drawString("Taartpunt met ovaal eromheen", 465, 140);

        g.drawOval(510, 150, hoogte, hoogte);
        g.drawString("Cirkel", 535, 250);
    }
}