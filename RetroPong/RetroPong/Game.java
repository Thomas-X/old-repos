import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;

/**
 * Write a description of class Game here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Game extends World {
    private GreenfootSound sound;
    
    //QUINCY
    Counter1 counter1 = new Counter1();
    Counter2 counter2 = new Counter2();
    //QUINCY
    public Game() {    
        super(800, 500, 1); 
        sound = new GreenfootSound("music.mp3");

        getBackground().setColor(Color.BLACK);
        getBackground().fill();
        getBackground().setColor(Color.WHITE);
        getBackground().fillRect(0, 0, 800, 10);
        getBackground().fillRect(0, 490, 800, 10);
        for(int i = 0; i < 24; ++i) getBackground().fillRect(getWidth()/2 - 3, i*40 + 26, 6, 10);

        
        
        

        populateWorld();
    }
    
    //Q - Methodes voor counters
    public Counter1 getCounter1() {
        return counter1;
    }
    
        public Counter2 getCounter2() {
        return counter2;
    }
    //Q
     

    public void populateWorld() {
        //Q coördinaten van counters op het scherm
        addObject(counter1, 275, 40);
        addObject(counter2, 525, 40);
        //Q
        
        addObject(new Player1(), 30,(getHeight()/2));
        addObject(new Player2(), 770, (getHeight()/2));
        addObject(new Ball(), (800/2), (getHeight()/2));
      
        
        setPaintOrder(Player1.class, Player2.class, Ball.class);
    }

    public void started() {
        //sound.playLoop();
    }

    public void stopped() {
        //sound.stop();
    }
}
