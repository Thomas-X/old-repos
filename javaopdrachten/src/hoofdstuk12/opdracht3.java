package hoofdstuk12;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.reflect.Array;
import java.util.*;

/**
 * Created by Thomas-X on 10/25/2016.
 */
public class opdracht3 extends Applet {
    public int teller;
    public TextField[] textfield = new TextField[5];

    @Override
    public void init() {
        super.init();
        int teller1 = 0;
        for (teller = 0; teller < 5; teller++) {
            textfield[teller1] = new TextField("", 50);
            add(textfield[teller1]);
            teller1++;
        }
        Button button = new Button("OK");
        button.addActionListener(new buttonCheck());
        add(button);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

    }

    public class buttonCheck implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int var1 = Integer.parseInt(textfield[0].getText());
            System.out.print(var1);
            int var2 = Integer.parseInt(textfield[1].getText());
            int var3 = Integer.parseInt(textfield[2].getText());
            int var4 = Integer.parseInt(textfield[3].getText());
            int var5 = Integer.parseInt(textfield[4].getText());
            int[] vartable = {var1, var2, var3, var4, var5};
            Arrays.sort(vartable);
            int teller4 = 0;
            int y = 200;
            for (int teller3 = 0; teller3 < 5; teller3++) {
                getGraphics().drawString("" + (vartable[teller4]), 50, y);
                teller4++;
                y += 20;
            }
        }
    }
}