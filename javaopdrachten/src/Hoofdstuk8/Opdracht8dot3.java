package Hoofdstuk8;

import java.awt.*;
import java.applet.*;
import java.awt.event.*;

public class Opdracht8dot3 extends Applet {
    TextField tekstvak;
    Button knop;
    String nomath;


    public void init() {
        tekstvak = new TextField("", 30);
        knop = new Button("Ok");
        knop.addActionListener(new KnopListener());
        tekstvak.addKeyListener(new testENTER());
        add(tekstvak);
        add(knop);

    }


    public void paint(Graphics g) {
        g.drawString("BTW REKENMACHINE REKENT 21% ERBIJ", 50, 60);
    }

    public class KnopListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            double txt = Integer.parseInt(tekstvak.getText());
            double somemath = txt / 100 * 21;
            double optellen = somemath + txt;
            nomath = Double.toString(optellen);
            tekstvak.setText(nomath);
            repaint();
        }
    }

    public class testENTER extends Applet implements KeyListener {

        public void init() {

        }

        public void keyTyped(KeyEvent e) {
        }

        public void keyReleased(KeyEvent e) {
        }

        public void keyPressed(KeyEvent e) {
            int key = e.getKeyCode();
            if (key == KeyEvent.VK_ENTER) {
                Toolkit.getDefaultToolkit().beep();
                System.out.println("ENTER pressed");
                double txt = Integer.parseInt(tekstvak.getText());
                double somemath = txt / 100 * 21;
                double optellen = somemath + txt;
                nomath = Double.toString(optellen);
                tekstvak.setText(nomath);
                repaint();
            }
        }
    }
}