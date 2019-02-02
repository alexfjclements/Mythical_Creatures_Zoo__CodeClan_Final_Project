import com.example.demo.IEat.IEatCarnivore;
import com.example.demo.Models.Enclosure;
import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.Gender;
import com.example.demo.Models.OriginLocation;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EnclosureTest {

    private MythicalCreature harpy;
    private IEatCarnivore eatBehaviour;
    private Enclosure enclosure;
    private OriginLocation originLocation;

    @Before
    public void before() {
        harpy = new MythicalCreature("Harpy", Gender.Male, eatBehaviour, OriginLocation.Greek);
        enclosure = new Enclosure(2, "Greek", OriginLocation.Greek);
    }

    @Test
    public void enclosureStartsEmpty(){
        assertEquals(0, enclosure.getCreatures().size());
     }

     @Test
    public void canAddCreature(){
        enclosure.addCreature(harpy);
        assertEquals(1, enclosure.getCreatures().size());
     }

     @Test
    public void canRemoveCreature(){
        enclosure.addCreature(harpy);
        enclosure.removeCreature(harpy);
        assertEquals(0, enclosure.getCreatures().size());
     }


}