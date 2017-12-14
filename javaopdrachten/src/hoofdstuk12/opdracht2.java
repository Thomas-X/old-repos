package hoofdstuk12;

import javax.swing.*;
import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * Created by Thomas-X on 10/25/2016.
 */
public class opdracht2 extends Applet {


    public int teller1 = 0;
    public int y = 0;
    public int teller = 0;
    @Override
    public void init() {
        super.init();
        Button[] buttons = new Button[25];
        buttons[0] = new Button("OK");
        buttons[1] = new Button("OK");
        buttons[2] = new Button("OK");
        buttons[3] = new Button("OK");
        buttons[4] = new Button("OK");
        buttons[5] = new Button("OK");
        buttons[6] = new Button("OK");
        buttons[7] = new Button("OK");
        buttons[8] = new Button("OK");
        buttons[9] = new Button("OK");
        buttons[10] = new Button("OK");
        buttons[11] = new Button("OK");
        buttons[12] = new Button("OK");
        buttons[13] = new Button("OK");
        buttons[14] = new Button("OK");
        buttons[15] = new Button("OK");
        buttons[16] = new Button("OK2");
        buttons[16].addActionListener(new easterEgg());
        buttons[17] = new Button("OK");
        buttons[18] = new Button("OK");
        buttons[19] = new Button("OK");
        buttons[20] = new Button("OK");
        buttons[21] = new Button("OK");
        buttons[22] = new Button("OK");
        buttons[23] = new Button("OK");
        buttons[24] = new Button("OK");
        for (int teller = 0; teller < 25; teller++) {
            add(buttons[teller]);
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

        }


    public class easterEgg implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            try {
                System.out.print("HAI");
                Desktop.getDesktop().browse(new URL("https://media.giphy.com/media/3o6Zt3KyN0vd1S97d6/giphy.gif").toURI());
            } catch (IOException e1) {
                e1.printStackTrace();
            } catch (URISyntaxException e1) {
                e1.printStackTrace();
            }
        }
    }
    }

