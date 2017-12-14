package Hoofdstuk10;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas-X on 9/28/2016. And effectively coded by the only Thomas-X
 */
public class Praktijkopdracht extends Applet {

    TextField tekstvak1;
    String tekst;


    @Override
    public void init() {
        super.init();
        tekstvak1 = new TextField("", 90);
        tekstvak1.addActionListener(new onvoldoendechecker());
        add(tekstvak1);
        tekst = "";

    }

    public void paint(Graphics g) {
//        Color setkleur;
//        setkleur = Color.RED;
        g.drawString("" + tekst, 50, 50);
//        setBackground((setkleur));

    }



    public class onvoldoendechecker implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            tekstvak1.paint(getGraphics());
            if (Double.parseDouble(tekstvak1.getText()) < 4) { //Of || 3x maar ik ben lui dus je kan nu -1 etc gebruiken en dan nog steeds slecht krijgen
                tekst = "Je hebt een 'slecht', SLECHT HOOR!";
//                tekstvak1.setText("Je hebt een 'slecht', SLECHT HOOR!");
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e1) {
                    e1.printStackTrace();
                }
                tekstvak1.setText("");
                repaint();
            } else {
                if (Double.parseDouble(tekstvak1.getText()) == 4) {
//                    getGraphics().drawString("Je hebt een onvoldoende, bah!", 60, 60);
//                    tekstvak1.setText("Je hebt een onvoldoende, bah!");
                    tekst = "Je hebt een onvoldoende, bah!";
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e1) {
                        e1.printStackTrace();
                    }
                    tekstvak1.setText("");
                    repaint();
                } else {
                    if (Double.parseDouble(tekstvak1.getText()) == 5) {
//                        getGraphics().drawString("Je hebt een matig, komop, dit is bagger", 60, 60);
//                        tekstvak1.setText("Je hebt een matig, komop, dit is bagger");
                        tekst = "Je hebt een matig, komop, dit is bagger";
                        try {
                            Thread.sleep(500);
                        } catch (InterruptedException e1) {
                            e1.printStackTrace();
                        }
                        tekstvak1.setText("");
                        repaint();
                    } else {
                        if (Double.parseDouble(tekstvak1.getText()) == 6 || (Double.parseDouble(tekstvak1.getText())) == 7) {
//                            getGraphics().drawString("Je hebt een voldoende, KAN BETER HEH?", 60, 60);
//                            tekstvak1.setText("Je hebt een voldoende, KAN BETER HEH?");
                            tekst = "Je hebt een voldoende, KAN BETER HEH?";
                            try {
                                Thread.sleep(500);
                            } catch (InterruptedException e1) {
                                e1.printStackTrace();
                            }
                            tekstvak1.setText("");
                            repaint();
                        } else {
                            if (Double.parseDouble(tekstvak1.getText()) == 8 || (Double.parseDouble(tekstvak1.getText())) == 9 || (Double.parseDouble(tekstvak1.getText())) == 10) {
//                                getGraphics().drawString("Je hebt een goed, MOOI MAN", 60, 60);
//                                tekstvak1.setText("Je hebt een goed, MOOI MAN");
                                tekst = "Je hebt een goed, MOOI MAN";
                                try {
                                    Thread.sleep(500);
                                } catch (InterruptedException e1) {
                                    e1.printStackTrace();
                                }
                                tekstvak1.setText("");
                                repaint();
                            } else {
//                                tekstvak1.setText("Verkeerd cijfer ingevoerd!");
                                tekst = "Verkeerd cijfer ingevoerd!";

                                try {
                                    Thread.sleep(500);
                                } catch (InterruptedException e1) {
                                    e1.printStackTrace();
                                }
                                tekstvak1.setText("");
                                repaint();
                            }
                        }
                    }
                }
            }
        }
    }
}
