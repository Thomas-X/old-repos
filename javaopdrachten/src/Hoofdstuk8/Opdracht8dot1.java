package Hoofdstuk8;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

public class Opdracht8dot1 extends Applet {
    Button okknop;
    Button resetknop;
    TextField tekstvak;
    Label label;
    String s;
    String leeg;

    @Override
    public void init() {
        super.init();

        okknop = new Button("Ok");
        resetknop = new Button("Reset");
        tekstvak = new TextField("", 10);
        label = new Label("Label");

        okknop.addActionListener(new OkListener());
        resetknop.addActionListener(new ResetListener());

        add(label);
        add(tekstvak);
        add(resetknop);
        add(okknop);

        s = "";
        leeg = "";


    }

    public class OkListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            s = tekstvak.getText();
            tekstvak.setText(leeg);
            repaint();
        }
    }

    public class ResetListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            tekstvak.setText(leeg);
            repaint();
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString(s, 50, 60);
    }
}

