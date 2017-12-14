import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class GarpsWorld here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class GarpsWorld extends World {
    private GreenfootSound sound;
    private EndScore endScore;
    private Counter counter;
    
    /**
     * Constructor for objects of class GarpsWorld.
     * 
     */
    public GarpsWorld() {    
        // Create a new world with 700x500 cells with a cell size of 1x1 pixels.
        super(700, 500, 1); 
        populateWorld();
        sound = new GreenfootSound("geemmusic.mp3"); 
    }

    protected void populateWorld() {
        int teller;
        int regel, kolom;
        
        addObject(new Garp(), 350, 250);
        addObject(new Gnomus(), Greenfoot.getRandomNumber(700), Greenfoot.getRandomNumber(500));
        for (teller = 0; teller <10; teller++) {
            addObject(new Diamond(), Greenfoot.getRandomNumber(700), Greenfoot.getRandomNumber(500));
        }
        for (teller = 0; teller < 8; teller++) {
            addObject(new Rock(), Greenfoot.getRandomNumber(700), Greenfoot.getRandomNumber(500));
        }
        for (teller = 0; teller < 4; teller++) {
            addObject(new Bomb(), Greenfoot.getRandomNumber(700), Greenfoot.getRandomNumber(500));
        }
        counter = new Counter();
        regel = getHeight() - counter.getImage().getHeight() / 2 - 2;
        kolom = counter.getImage().getWidth() / 2 + 1;
        addObject(counter, kolom, regel);
        setPaintOrder(Garp.class, Gnomus.class, Diamond.class, Bomb.class, Rock.class);
    }

    public void started() {
        sound.playLoop();
    }

    public void stopped() {
        sound.stop();
    }

}
