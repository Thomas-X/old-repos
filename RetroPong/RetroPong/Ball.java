import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.List;
import java.awt.Color;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
/**
 * Write a description of class Ball here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ball extends Actor {
    boolean help = false;
    int ballMoveSpeed = 7;
    boolean playerone = false;
    boolean playertwo = false;

    public void act() 
    {
      
        moving();
        lookForPlayer();
        playerWin();
    }    


       
    public void moving() {
        move(ballMoveSpeed);
        if (help == false){
            
            int test = Greenfoot.getRandomNumber(2); //geeft 1 of 2 terug ?!??!

            if (test == 0) { //dus 1 tot 2
                move(ballMoveSpeed);
                turn(45);
                help = true;
            } else if (test == 1) { // lager dan 1 
                move(ballMoveSpeed);
                turn(-135);
                help = true;
            }
        }
        if (atWorldEdge()) {
            move(ballMoveSpeed);
            if (getX() > 420) {
                turn(90);
                move(ballMoveSpeed);
            }
            
            if (getX() >= 380 && getX() <= 420) {
                int random = Greenfoot.getRandomNumber(2);
                
                if (random == 0) {
                turn(90);
                              move(ballMoveSpeed);
            }
               
                if (random == 1) {
                turn(-90);
                              move(ballMoveSpeed);
            }
            
            
        }
            if (getX() < 380) {
                turn(-90);
                move(ballMoveSpeed);
            }
        }
    }
    public boolean atWorldEdge()
    {
        if (getX() <= 20 || getX() >= getWorld() . getWidth() -20) {
            return true;
        }
        if (getY() <= 20 || getY() >= getWorld() . getHeight() -20) {
          return true;
        }
        else {
          return false;
        }
    }

  protected void lookForPlayer() {
   Actor Player1;
   Actor Player2;
   Player1 = getOneObjectAtOffset(0,0, Player1.class);
   Player2 = getOneObjectAtOffset(0,0, Player2.class);
   if (Player1 != null) {
      turn(90);
            move(ballMoveSpeed);
  }
  if (Player2 != null) {

      turn(90);
            move(ballMoveSpeed);
  }
}

protected void playerWin() {

   // System.out.println(this);
    System.out.println(getX());
    
    World world = getWorld();
            
    
            List<Player1> Player1 = getObjectsInRange(2000, Player1.class);
            List<Player2> Player2 = getObjectsInRange(2000, Player2.class);
    
    
        //player 1
    if (getX() >= 770 && getX() <= 795) {
           
         playerone = true;
            //Q Hierdoor kan ik de Counter1 gebruiken
            World Game = getWorld();
            Game game = (Game)Game;
            Counter1 counter1 = game.getCounter1();
            counter1.addScore1();
            //Q
         }
           if (getX() >= 19 && getX() <= 24) {
            
           playertwo = true;
           //Q Hierdoor kan ik de Counter2 gebruiken
            World Game = getWorld();
            Game game = (Game)Game;
            Counter2 counter2 = game.getCounter2();
            counter2.addScore2();
            //Q
           
           
    }
    
    if(playerone || playertwo) {
            //removing objects from world for resetting

            world.removeObject(this);
            world.removeObjects(Player1);
            world.removeObjects(Player2);
              //adding objects in original positions
            world.addObject(new Ball(), 400, 250);
            world.addObject(new Player1(), 30, 250);
            world.addObject(new Player2(), 770, 250);
        }

    }
}
