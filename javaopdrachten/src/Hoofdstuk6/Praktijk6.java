package Hoofdstuk6;

import java.applet.Applet;
import java.awt.*;

public class Praktijk6 extends Applet {

    double getal1;
    double getal2;
    double getal3;
    double antwoord;
    double antwoord2;
    int antwoordint;
    double antwoorddouble;

    @Override
    public void init() {
        super.init();

        getal1 = 5.9;
        getal2 = 6.3;
        getal3 = 6.9;
        antwoord = (getal1 + getal2 + getal3) / 3;
        antwoord2 = antwoord * 10;
        antwoordint = ((int) antwoord2);
        antwoorddouble = ((double) antwoordint) / 10;
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

        g.drawString("Het gemiddelde van de behaalde cijfers is: " + antwoord, 20, 20);
        g.drawString("Het gemiddelde * 10 = " + antwoord2, 20, 40);
        g.drawString("Double naar int: " + antwoordint, 20, 60);
        g.drawString("Int naar double gedeelt door 10: " + antwoorddouble, 20, 80);

    }
}
