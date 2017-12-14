package hoofdstuk12;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas-X on 10/25/2016.
 */
public class opdracht6 extends Applet {

    TextField textfield = new TextField("", 30);
    Button button = new Button("OK");
    int[] table = new int[10];
    boolean gevonden = false;
    int gevonden2 = 0;
    int teller = 0;

    @Override
    public void init() {
        super.init();
        button.addActionListener(new CheckButton());
        table[0] = 0;
        table[1] = 0;
        table[2] = 10;
        table[3] = 10;
        table[4] = 20;
        table[5] = 20;
        table[6] = 30;
        table[7] = 40;
        table[7] = 40;
        table[8] = 10;
        table[9] = 30;
        add(textfield);
        add(button);
    }

    public class CheckButton implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            gevonden2 = 0;
            int y = 100;
            int search = Integer.parseInt(textfield.getText());
            for (teller = 0; teller < table.length; teller++) {
                if (search == table[teller]) {
                    gevonden2++;
                }
            }
            getGraphics().clearRect(0, 0, getWidth(), getHeight());
            getGraphics().drawString("Found " + (search) + " " + (gevonden2++) + " times.", 50, 80);
            getGraphics().drawString("Also, here's the Array: ", 50, 95);
            for (int teller2 = 0; teller2 < table.length; teller2++) {
                y += 20;
                getGraphics().drawString("" + (table[teller2]), 50, y);
            }
        }
    }
    @Override
    public void paint(Graphics g) {
        super.paint(g);
    }
}


// OLD CODE, keeping it in because fun
//            while (gevonden != true) {
//                    int search = Integer.parseInt(textfield.getText());
//                    if (table[teller] == search) {
//                    if (table[teller] == table.length) {
//                    break;
//                    }
//                    gevonden2++;
//                    System.out.print("" + (gevonden2));
//                    }
//                    else {
//                    teller++;
//                    }
//                    if(teller == table.length && gevonden2 > 0) {
//                    gevonden = true;
//                    break;
//                    }
//                    if(teller == table.length && gevonden2 == 0) {
//                    gevonden = false;
//                    getGraphics().drawString("false", 50, 50);
//                    break;
//                    }
//                    if (teller == table.length) {
//                    getGraphics().drawString("Found " + (search) + " " + (gevonden2) + "times", 50, 50);
//                    for (int teller4 = 0; teller4 < table.length; teller4++) {
//        y += 20;
//        getGraphics().drawString("" + (table[teller4]), 50, y);
//        }
//        break;
//        }
//
//        }