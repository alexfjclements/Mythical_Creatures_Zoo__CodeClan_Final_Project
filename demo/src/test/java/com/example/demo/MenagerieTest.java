import com.example.demo.IEat.IEatCarnivore;
import com.example.demo.Models.*;
import com.example.demo.IEat.IEatCarnivore;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MenagerieTest {

    private MythicalCreature harpy;
    private MythicalCreature dragon;
    private IEatCarnivore eatBehaviour;
    private Menagerie menagerie;
    private Enclosure enclosure;
    private Visitor visitor;

    @Before
    public void before() {
        harpy = new MythicalCreature("Harpy", Gender.Male, eatBehaviour, OriginLocation.Greek, "");
        dragon = new MythicalCreature("bob", Gender.Female, eatBehaviour, OriginLocation.Chinese, "");
        enclosure = new Enclosure(2, "Greek", OriginLocation.Greek);
        menagerie = new Menagerie("Name", 10);
        visitor = new Visitor(10);
    }

    @Test
    public void canAddEnclosure() {
        menagerie.addEnclosure(enclosure);
        assertEquals(1, menagerie.getEnclosures().size());
    }

    @Test
    public void canRemoveEnclosure(){
        menagerie.addEnclosure(enclosure);
        menagerie.removeEnclosure(enclosure);
        assertEquals(0, menagerie.getEnclosures().size());
    }

    @Test
    public void canAddVisitor() {
        menagerie.addVisitor(visitor);
        assertEquals(1, menagerie.getVisitors().size());
    }

    @Test
    public void canRemoveVisitor(){
        menagerie.addVisitor(visitor);
        assertEquals(1, menagerie.getVisitors().size());
        menagerie.removeVisitor(visitor);
        assertEquals(0, menagerie.getVisitors().size());
    }
}