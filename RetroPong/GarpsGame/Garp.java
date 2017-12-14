import greenfoot.*;
import java.util.List;

/**
 * Write a description of class Garp here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Garp extends Actor {
    private GreenfootImage imageLeft;
    private GreenfootImage imageRight;

    /**
     * Act - do whatever the Garp wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public Garp() {
        imageLeft = new GreenfootImage("GarpLeft.png");
        imageRight = new GreenfootImage("GarpRight.png");
    }

    public void act() {
        movingAndTurning();
        collectingDiamonds();
        foundBomb();
    }

    protected void movingAndTurning() {
        // Knop naar rechts
        if (Greenfoot.isKeyDown("d")) {
            setImage(imageRight);
            setRotation(0);
            move(5);

            if (foundRock()) {
                move(-5);
            }
        }

        if (Greenfoot.isKeyDown("a")) {
            setImage(imageLeft);
            setRotation(0);
            move(-5);

            if (foundRock()) {
                move(5);
            }
        }

        if (Greenfoot.isKeyDown("w")) {
            setImage(imageRight);
            setRotation(-90);
            move(5);

            if (foundRock()) {
                move(-5);
            }
        }

        if (Greenfoot.isKeyDown("s")) {
            setImage(imageRight);
            setRotation(90);
            move(5);

            if (foundRock()) {
                move(-5);
            }
        }
    }

    protected void collectingDiamonds() {
        Actor diamond;
        World world;
        List lijst;
        Counter counter;

        diamond = getOneObjectAtOffset(0, 0, Diamond.class);
        if (diamond != null) { //Als Garp een diamant ziet
            world = getWorld(); //In welke wereld garp leeft
            world.removeObject(diamond); //Verwijderd de diamant van de wereld
            lijst = world.getObjects(Counter.class);
            counter = (Counter)lijst.get(0);
            counter.addScore();

            if (counter.getScore() == 12) {
                Greenfoot.stop();
            }
        }
    }

    protected boolean foundRock() {
        Actor rock;
        rock = getOneObjectAtOffset(0,0,Rock.class);
        if (rock != null) {
            return true;
        }
        return false;
    }

    public void foundBomb() {
        Actor bomb;
        World world;

        bomb = getOneObjectAtOffset(0, 0, Bomb.class);
        if (bomb != null) {
            world = getWorld();
            world.removeObject(bomb);
            world.addObject(new Explosion(), getX(), getY());
            world.removeObject(this);
        }
    }
}