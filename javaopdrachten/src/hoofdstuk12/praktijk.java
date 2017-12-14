package hoofdstuk12;

import javax.swing.*;
import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas-X on 10/27/2016.
 */
public class praktijk extends Applet {
    TextField textfield1;
    TextField textfield2;
    Button button;
    String input1;
    String input2;
    String[] table1 = new String[9];
    String[] table2 = new String[9];
    int teller = 0;
    int teller2 = 0;


    @Override
    public void init() {
        super.init();
        textfield1 = new TextField("Voer hier namen in", 30);
        button = new Button("OK");
        button.addActionListener(new CheckButton());
        textfield2 = new TextField("Voer hier telefoonnummers in", 30);
        add(textfield1);
        add(textfield2);
        add(button);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
    }

    public class CheckButton implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            if (teller != 10) {
                input1 = (textfield1.getText());
                input2 = (textfield2.getText());
                table1[teller] = input1;
                table2[teller] = input2;
                teller++;
                teller2++;
                textfield1.setText("");
                textfield2.setText("");
            } else {
                int y1 = 60;
                int y2 = 60;
                for (int teller3 = 0; teller3 < table1.length; teller3++) {
                    y1 += 20;
                    getGraphics().drawString("" + (table1[teller3]), 50, y1);
                }
                for (int teller4 = 0; teller4 < table2.length; teller4++) {
                    y2 += 20;
                    getGraphics().drawString("" + (table2[teller4]), 120, y2);
                }
            }
        }
    }
}
