package Hoofdstuk8;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

/**
 * Created by Barry on 22-9-2016.
 */
public class Uitbreiding8Wrong extends Applet {

    Color grafiek;
    Color achtergrond;
    Color lijn;

    Button ww;

    int p1;
    int p2;
    int p3;
    int antwoord;
    int antwoord2;
    int antwoord3;
    int valerieinput;

    TextField Valerie;
    TextField Jeroen;
    TextField Hans;

    Label Val;
    Label Jer;
    Label Han;


    @Override
    public void init() {
        super.init();
        grafiek = Color.RED;
        achtergrond = Color.WHITE;
        lijn = Color.BLACK;
        setBackground(achtergrond);

        ww = new Button("Wijzig waardes");
        ww.addActionListener(new WWListener());

        Val = new Label("Valerie");
        Jer = new Label("Jeroen");
        Han = new Label("Hans");

        Valerie = new TextField("", 1);
        Jeroen = new TextField("", 1);
        Hans = new TextField("", 1);

        p1 = valerieinput * 2;
//        p2 = Jeroen * 2;
//        p3 = Hans * 2;

        add(ww);
        add(Val);
        add(Valerie);
        add(Jer);
        add(Jeroen);
        add(Han);
        add(Hans);
    }


    @Override
    public void paint(Graphics g) {
        super.paint(g);
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
        g.fillRect(110, antwoord3, 20, (p3));


    }


    public class WWListener implements ActionListener {

        public void actionPerformed(ActionEvent e) {

            getGraphics().setColor(Color.GREEN);
            int baseline = 220;
            antwoord = (baseline - valerieinput);
            valerieinput = Integer.parseInt((Valerie.getText()));

            getGraphics().fillRect(80, antwoord, 20, (valerieinput));

            repaint();
//        Jeroen.getText();
//        Hans.getText();


//            antwoord = (baseline - p1);
//            //220 - (p1 * 2);
//
//
//            antwoord2 = (baseline - p2);
//            antwoord5 = 220 - (p1 * 2);
//            g.setColor(Color.GREEN);
//            g.fillRect(80, antwoord2, 20, (p2));
//
//            antwoord3 = (baseline - p3);
//            //220 - (p1 * 2);
//            g.setColor(Color.MAGENTA);
//            antwoord4 = g.fillRect(110, antwoord3, 20, (p3));


        }
    }
}
