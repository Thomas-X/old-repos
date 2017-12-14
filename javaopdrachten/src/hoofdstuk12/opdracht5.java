package hoofdstuk12;
import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
/**
 * Created by Thomas-X on 10/25/2016.
 */
public class opdracht5 extends Applet {
    public int[] table = {50, 10, 20, 40, 80};
    TextField textfield;
    Button button;
    @Override
    public void init() {
        super.init();
        textfield = new TextField("", 30);
        button = new Button("OK");
        button.addActionListener(new buttonCheck());
        add(textfield);
        add(button);
    }
    @Override
    public void paint(Graphics g) {
        super.paint(g);

    }
    public class buttonCheck implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int teller3 = 0;
            int y = 50;
            int teller = 0;

            int gezocht = Integer.parseInt(textfield.getText());



            boolean gevonden = false;
            while (gevonden != true) {
                if (table[teller] == gezocht) {
                    getGraphics().clearRect(0, 0, getWidth(), getHeight());
                    gevonden = true;
                    getGraphics().drawString("Found it, here's the index of the array aswell", 50, 50);
                    for (int teller2 = 0; teller2 < 5; teller2++) {
                        y += 20;
                        getGraphics().drawString("" + (table[teller3]), 50, y);
                        teller3++;
                    }
                    break;

                } else {
                    teller++;
                    getGraphics().clearRect(0, 0, getWidth(), getHeight());
                    getGraphics().drawString("404 not fo-- I mean; Not Found", 50, 50);;
                }
            }
        }
    }
}
