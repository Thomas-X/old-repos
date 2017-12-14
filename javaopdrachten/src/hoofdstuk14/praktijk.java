package hoofdstuk14;

import javax.swing.*;
import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;
import java.net.URL;

/**
 * Created by Thomas on 10/29/2016.
 */
public class praktijk extends Applet {
    int curnum = 23;
    TextField textfield1;
    Button button1;
    Button button2;
//    Image image;
//    URL path;

    @Override
    public void init() {
        super.init();
        button1 = new Button("Play");
        button2 = new Button("Reset");
        button2.addActionListener(new reset());
        button1.addActionListener(new ai());
        textfield1 = new TextField("", 30);

        add(textfield1);
        add(button1);
        add(button2);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("The Guinea Pig Murder Game!", 50, 50);
        g.drawString("" + (curnum), 300, 50);
    }

    class reset implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            textfield1.setText("");
            Graphics g = getGraphics();
            curnum = 23;
            int move = 0;
            g.clearRect(0, 0, getWidth(), getHeight());
            g.drawString("The Guinea Pig Murder Game!", 50, 50);
            g.drawString("" + (curnum), 300, 50);
        }
    }

    class ai implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            Graphics g = getGraphics();

            int humanmove = Integer.parseInt(textfield1.getText());
            if (humanmove > 3 | humanmove < 1) {
                g.clearRect(0, 0, getWidth(), getHeight());
                g.drawString("INVALID INPUT", 50, 50);
            } else {
                int move = 0;
                curnum = curnum - humanmove;
                //start


//try to get 21
                if ((curnum - 1) == 21) {
                        move = 1;
                        }
                        if ((curnum - 2) == 21) {
                        move = 2;
                        }
                        if ((curnum - 3) == 21) {
                        move = 3;
                        }
                        if (curnum == 21) {
                        move = 1;
                        }
                        //try to get 17
                        if ((curnum - 1) == 17) {
                        move = 1;
                        }
                        if ((curnum - 2) == 17) {
                        move = 2;
                        }
                        if ((curnum - 3) == 17) {
                        move = 3;
                        }
                        if (curnum == 17) {
                        move = 2;
                        }
                        //try to get 13
                        if ((curnum - 1) == 13) {
                        move = 1;
                        }
                        if ((curnum - 2) == 13) {
                        move = 2;
                        }
                        if ((curnum - 3) == 13) {
                        move = 3;
                        }
                        if (curnum == 13) {
                        move = 3;
                        }
                        //try to get 9
                        if ((curnum - 1) == 9) {
                        move = 1;
                        }
                        if ((curnum - 2) == 9) {
                        move = 2;
                        }
                        if ((curnum - 3) == 9) {
                        move = 3;
                        }
                        if (curnum == 9) {
                        move = 3;
                        }
                        //try to get 5
                        if ((curnum - 1) == 5) {
                        move = 1;
                        }
                        if ((curnum - 2) == 5) {
                        move = 2;
                        }
                        if ((curnum - 3) == 5) {
                        move = 3;
                        }
                        if (curnum == 5) {
                        move = 3;
                        }
                        //try to get 1
                        if ((curnum - 1) == 1) {
                        move = 1;
                        }
                        if ((curnum - 2) == 1) {
                        move = 2;
                        }
                        if ((curnum - 3) == 1) {
                        move = 3;
                        }
                        if (curnum == 1) {
                        move = 1;
                        }


                //end
                g.clearRect(0, 0, getWidth(), getHeight());
                if (curnum < 2) {
                    String youLose = "AI LOSES"; //debug, this never happens (I promise)
                    g.drawString("" + (youLose), 50, 120);
                }
                int curnum2 = curnum - move;
                curnum = curnum2;
                if (curnum != 1) {
                    g.drawString("Amount of guinea pig left " + (curnum), 50, 100);
                } else {
                    String youLose = "YOU LOSE, YOU LET IT KILL ALL THE GUINEA PIGS, YOU MONSTER!!";
                    g.drawString("" + (youLose), 10, 100);
                }
                g.drawString("The Guinea Pig Murder Game!", 50, 50);
                g.drawString("A.I's murder count is: " + (move), 50, 70);
                System.out.println(move);
                System.out.println("curnum " + curnum);
            }
        }
    }
}

/////////////////////////////////OLD CODE

