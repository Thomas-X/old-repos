package hoofdstuk14;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas on 10/29/2016.
 */
public class opdracht1 extends Applet {
    Button button1;

    @Override
    public void init() {
        super.init();
        button1 = new Button("RollCards");
        button1.addActionListener(new ButtonCheck());
        add(button1);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

    }

    class ButtonCheck implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            Graphics g = getGraphics();
            g.clearRect(0,0, getWidth(), getHeight());
            int random1 = (int) (Math.random() * 4 + 0);
            int random2 = (int) (Math.random() * 13 + 0);
            String[] cards1 = new String[5];
            cards1[0] = "Clubs";
            cards1[1] = "Spades";
            cards1[2] = "Hearts";
            cards1[3] = "Diamonds";

            String[] cards2 = new String[13];
            cards2[0] = "2";
            cards2[1] = "3";
            cards2[2] = "4";
            cards2[3] = "5";
            cards2[4] = "6";
            cards2[5] = "7";
            cards2[6] = "8";
            cards2[7] = "9";
            cards2[8] = "10";
            cards2[9] = "Jack";
            cards2[10] = "Queen";
            cards2[11] = "King";
            cards2[12] = "Ace";

            g.drawString("" + (cards1[random1]) + " " + (cards2[random2]), 50, 50);

        }
    }
}
