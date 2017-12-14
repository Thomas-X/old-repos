package hoofdstuk14;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import javax.sound.sampled.*;
import javax.sound.sampled.Clip;

/**
 * Created by Thomas on 10/29/2016.
 */
public class opdracht2 extends Applet {

    Button button1;

    @Override
    public void init() {
        super.init();

        button1 = new Button("rollCardsFourPlayers");
        button1.addActionListener(new rollCardsFourPlayers());
        add(button1);
    }

    public void paint(Graphics g) {
        super.paint(g);

    }


    void roll13Cards(Graphics g, int x, int y) {

/*        int random1 = (int) (Math.random() * 4 + 0);
        int random2 = (int) (Math.random() * 13 + 0);*/

        int counter2 = 0;

        String[] cards1 = new String[4];
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

        Collections.shuffle(Arrays.asList(cards1));
        Collections.shuffle(Arrays.asList(cards2));

        for (int counter = 0; counter < 13; counter++) {
            y += 20;
            if (counter2 == 3) {
                counter2 = 0;
                Collections.shuffle(Arrays.asList(cards1));
            }
            counter2++;
            g.drawString("" + (cards1[counter2]) + " " + (cards2[counter]), x, y);
        }
    }

    class rollCardsFourPlayers implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int x = 0;
            Graphics g = getGraphics();
            g.clearRect(0, 0, getWidth(), getHeight());
            g.drawString("Player 1", 150, 60);
            g.drawString("Player 2", 300, 60);
            g.drawString("Player 3", 450, 60);
            g.drawString("Player 4", 600, 60);
            for (int counter = 0; counter < 4; counter++) {
                x += 150;
                roll13Cards(g, x, 90);
            }
            String sound = "shufflingcards.wav"; //absolute path, no idea how to use URL's yet. C:\Users\Thomas\Desktop\Muziek\cards.wav
            try {
                AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(new File("C:\\Users\\Thomas\\gitrepos\\javaopdrachten\\src\\hoofdstuk14\\shufflingcards.wav")); //absolute path, change it for your PC
                Clip clip = AudioSystem.getClip();
                clip.open(audioInputStream);
                clip.start();
            } catch (LineUnavailableException e1) {
                e1.printStackTrace();
            } catch (IOException e1) {
                e1.printStackTrace();
            } catch (UnsupportedAudioFileException e1) {
                e1.printStackTrace();
            }
        }
    }
}

