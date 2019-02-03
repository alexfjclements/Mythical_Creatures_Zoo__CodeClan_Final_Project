import com.example.demo.IKill.IKill;
import com.example.demo.IKill.IKillEat;
import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.Gender;

import com.example.demo.Models.OriginLocation;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MythicalCreatureTest {

    private MythicalCreature harpy;
    private IKill killBehaviour;

    @Before
    public void before() {
        killBehaviour = new IKillEat();
        harpy = new MythicalCreature("Harpy", Gender.Male, killBehaviour, OriginLocation.Greek, "");
    }

    @Test
    public void hasName() {
        assertEquals("Harpy", harpy.getName());
    }

    @Test
    public void canEat(){
        assertEquals("I eat humans, yum yum", harpy.eat());
    }
}