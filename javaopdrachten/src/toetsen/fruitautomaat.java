package toetsen;

import java.applet.Applet;
import java.applet.AudioClip;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URL;

/**
 * Created by Thomas-X on 12/16/2016.
 */
public class fruitautomaat extends Applet {
    int credit = 10;
    Image image1;
    Image image2;
    Image image3;
    URL path;
    URL path2;
    Button playButton;
    Button buyCredit;
    int message;
    AudioClip sound;
    Boolean someBoolean = false;
    double randomMath1 = Math.random();
    double randomMath2 = Math.random();
    double randomMath3 = Math.random();

    int random1 = (int) (randomMath1 * 20); //random number 1-20
    int random2 = (int) (randomMath2 * 20);
    int random3 = (int) (randomMath3 * 20);


    String pictures[] = new String[20];



    public void init() {
        super.init();

        setSize(216, 250);
        playButton = new Button("Speel");
        buyCredit = new Button("Koop 10 kredietpunten");
        playButton.addActionListener(new playButton());
        buyCredit.addActionListener(new buyCredit());


        buyCredit.setEnabled(false);

        path = Image.class.getResource("/toetsen/resources/");
        path2 = Image.class.getResource("/toetsen/resources/");
        sound = getAudioClip(path2, "kaching.wav");
        //array stuff
        pictures[0] = "fruit_1.jpg";
        pictures[1] = "fruit_2.jpg";
        pictures[2] = "fruit_3.jpg";
        pictures[3] = "fruit_4.jpg";
        pictures[4] = "fruit_5.jpg";
        pictures[5] = "fruit_6.jpg";
        pictures[6] = "fruit_7.jpg";
        pictures[7] = "fruit_8.jpg";
        pictures[8] = "fruit_9.jpg";
        pictures[9] = "fruit_10.jpg";
        pictures[10] = "fruit_11.jpg";
        pictures[11] = "fruit_12.jpg";
        pictures[12] = "fruit_13.jpg";
        pictures[13] = "fruit_14.jpg";
        pictures[14] = "fruit_15.jpg";
        pictures[15] = "fruit_16.jpg";
        pictures[16] = "fruit_17.jpg";
        pictures[17] = "fruit_18.jpg";
        pictures[18] = "fruit_19.jpg";
        pictures[19] = "fruit_20.jpg";







        add(playButton);
        add(buyCredit);

    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

        if (!someBoolean) {
            image1 = getImage(path, pictures[random1]); //hier moet dus iets randoms
            image2 = getImage(path, pictures[random2]);
            image3 = getImage(path, pictures[random3]);
            g.drawImage(image1, 20, 40, 60, 100, this);
            g.drawImage(image2, 80, 40, 60, 100, this);
            g.drawImage(image3, 140, 40, 60, 100, this);
            g.drawString("Krediet: " + credit, 20, 170);
            g.drawString("Gewonnen: " + message + "!", 20, 180);
            someBoolean = true;
        }
        else {
            g.drawImage(image1, 20, 40, 60, 100, this);
            g.drawImage(image2, 80, 40, 60, 100, this);
            g.drawImage(image3, 140, 40, 60, 100, this);
            g.drawString("Krediet: " + credit, 20, 170);
            g.drawString("Gewonnen: " + message + "!", 20, 180);
        }


    }



    class playButton implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {

            randomMath1 = Math.random();
            randomMath2 = Math.random();
            randomMath3 = Math.random();

            random1 = (int) (randomMath1 * 20); //random number 1-20
            random2 = (int) (randomMath2 * 20);
            random3 = (int) (randomMath3 * 20);

            message = 0;
            //check for 2 pairs
            if (pictures[random1] == pictures[random2] || pictures[random1] == pictures[random3]) {
                credit += 4;
                message = 4;
                sound.play();
            }
            else if (pictures[random2] == pictures[random3] || pictures[random2] == pictures[random1]) {
                credit += 4;
                message = 4;
                sound.play();
            }
            else if (pictures[random3] == pictures[random1] || pictures[random3] == pictures[random2]) {
                credit += 4;
                message = 4;
                sound.play();
            }

            //check for 3 pairs
            if (pictures[random1] == pictures[random2] && pictures[random1] == pictures[random3]) {
                credit += 16;
                message = 20;
                sound.play();
            }
            else if (pictures[random2] == pictures[random3] && pictures[random2] == pictures[random1]) {
                credit += 16;
                message = 20;
                sound.play();
            }
            else if (pictures[random3] == pictures[random1] && pictures[random3] == pictures[random2]) {
                credit += 16;
                message = 20;
                sound.play();
            }
            credit--; //credit -1 because player played once

            if (credit <= 0) {
                buyCredit.setEnabled(true);
                playButton.setEnabled(false);
            }


            image1 = getImage(path, pictures[random1]); //hier moet dus iets randoms
            image2 = getImage(path, pictures[random2]);
            image3 = getImage(path, pictures[random3]);

            repaint();

        }
    }
    class buyCredit implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            credit += 10;
            playButton.setEnabled(true);
            buyCredit.setEnabled(false);
            repaint();

        }
    }


}
