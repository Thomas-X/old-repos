package Hoofdstuk8;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Barry on 20-9-2016.
 */
public class Opdracht8dot2 extends Applet {

    Button m;
    Button v;
    Button pv;
    Button pm;

    int man;
    int vrouw;
    int pvrouw;
    int pman;
    int totaal;


    @Override
    public void init() {
        super.init();

        m = new Button("Man");
        v = new Button("Vrouw");
        pm = new Button("PMan");
        pv = new Button("PVrouw");

        man = 0;
        vrouw = 0;
        pman = 0;
        pvrouw = 0;
        totaal = 0;

        add(m);
        add(v);
        add(pm);
        add(pv);

        m.addActionListener(new MListener());
        v.addActionListener(new VListener());
        pm.addActionListener(new PMListener());
        pv.addActionListener(new PVListener());


    }

    public class MListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            man++;
            totaal++;
            repaint();
        }
    }

    public class VListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            vrouw++;
            totaal++;
            repaint();
        }
    }

    public class PMListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            pman++;
            man++;
            totaal++;
            repaint();
        }
    }

    public class PVListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            pvrouw++;
            vrouw++;
            totaal++;
            repaint();
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("Aantal mannen: " + man, 20, 60);
        g.drawString("Aantal vrouwen: " + vrouw, 20, 80);
        g.drawString("Aantal potentiele mannen: " + pman, 20, 100);
        g.drawString("Aantal potentiele vrouwen: " + pvrouw, 20, 120);
        g.drawString("Totaal: " + totaal, 20, 140);
    }
}

