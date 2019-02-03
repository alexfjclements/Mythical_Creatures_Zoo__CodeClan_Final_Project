import com.example.demo.IKill.IKillEat;
import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.Gender;

import com.example.demo.Models.OriginLocation;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MythicalCreatureTest {

    private MythicalCreature harpy;
    private IKillEat eatBehaviour;

    @Before
    public void before() {
        harpy = new MythicalCreature("Harpy", Gender.Male, eatBehaviour, OriginLocation.Greek, "");
    }

    @Test
    public void hasName() {
        assertEquals("Harpy", harpy.getName());
    }

    @Test
    public void canEat(){
        assertEquals("I eat other animals", harpy.eat());
    }
}