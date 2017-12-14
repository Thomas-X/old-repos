package hoofdstuk13;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas on 10/29/2016.
 */
public class opdracht4 extends Applet {
    int y1 = 0;
    int x1 = 0;
    int y2 = 0;
    int x2 = 0;
    int counter3 = 0;
    int counter = 0;
    int toggle = 0;
    int toggle2 = 0;
    Button button1;
    Button button2;

    @Override
    public void init() {
        super.init();
        button1 = new Button("drawBrick");
        button2 = new Button("drawConcreteBrick");
        button1.addActionListener(new button1Check());
        button2.addActionListener(new button2Check());
        add(button1);
        add(button2);

    }


    //METHOD FOR DRAWBRICK/CONCRETEBRICK I DONT KNOW HOW TO IMPORT YET
    void drawBrick(Graphics g) {
        g.setColor(Color.RED);
        g.fillRect(x1, y1, 40, 20);
        g.setColor(Color.BLACK);
        g.drawRect(x1, y1, 40, 20);
    }
    void drawConcreteBrick(Graphics g) {
        g.setColor(Color.GRAY);
        g.fillRect(x2, y2, 60, 30);
        g.setColor(Color.BLACK);
        g.drawRect(x2, y2, 60, 30);
    }
    public void paint(Graphics g) {
    }
    class button1Check implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            y1 = 0;
            Graphics g = getGraphics();
                counter = 0;
                while (counter < 15) {
                    for (int counter2 = 0; counter2 < 10; counter2++) {
                        drawBrick(g);
                        x1 += 40;
                    }
                    counter++;
                    x1 = 0;
                    y1 += 20 * counter / counter;
                }
                toggle2 = 1;
            }
        }
    class button2Check implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            y2 = 0;
            Graphics g = getGraphics();
                counter3 = 0;
                while (counter3 < 15) {
                    for (int counter2 = 0; counter2 < 10; counter2++) { //WE USE COUNTER2 HERE BECAUSE IT'S A LOCALIZED VARIABLE
                        drawConcreteBrick(g);
                        x2 += 60;
                    }
                    counter3++;
                    x2 = 0;
                    y2 += 30 * counter3 / counter3;
                }
                toggle = 1;
            }
        }
    }

