package Hoofdstuk10;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by BARRY of course on 30-9-2016.
 */
public class Opdracht10dot5 extends Applet {

    Label label;
    TextField input;
    Button ok;
    String output;

    int aantalcijfers;
    double totaal;
    double totaal2;
    double avg;


    @Override
    public void init() {
        super.init();

        label = new Label("Voer hier cijfer in: ");
        input = new TextField();
        ok = new Button("OK!");

        ok.addActionListener(new KnopListener());

        add(label);
        add(input);
        add(ok);

        totaal = 0;
        aantalcijfers = 0;
        totaal2 = 0.0;
        output = "";
    }

    class KnopListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            aantalcijfers++;

            totaal2 = Double.parseDouble(input.getText());
            totaal += totaal2;
            avg = totaal / aantalcijfers;
            if (totaal2 >= 5.5) {
                output = "Voldoende";
            } else {
                output = "Onvoldoende";
            }
            input.setText("");
            repaint();
        }
    }


    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("" + aantalcijfers, 20, 20);
        g.drawString("Gemiddelde: " + avg, 50, 80);
        g.drawString("" + output, 50, 100);
    }
}
