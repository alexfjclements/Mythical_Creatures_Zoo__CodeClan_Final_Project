package com.example.demo.components;

import com.example.demo.Models.*;
import com.example.demo.repositories.EnclosureRepository;
import com.example.demo.repositories.MenagerieRepository;
import com.example.demo.repositories.MythicalCreaturesRepositories.MythicalCreaturesRepository;
import com.example.demo.repositories.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    EnclosureRepository enclosureRepository;

    @Autowired
    MenagerieRepository menagerieRepository;

    @Autowired
    MythicalCreaturesRepository mythicalCreaturesRepository;

    @Autowired
    VisitorRepository visitorRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){

        //MENAGERIE
        Menagerie mythicalMenagerie = new Menagerie("Mythical Menagerie", 10);
        menagerieRepository.save(mythicalMenagerie);

        //CREATURES GREEK
       MythicalCreature harpy1 = new MythicalCreature("Jarpy", Gender.Male, "IKillEat", "Greek", "", "Harpy");
       mythicalCreaturesRepository.save(harpy1);
       MythicalCreature harpy2 = new MythicalCreature("Flarpy", Gender.Female, "IKillEat", "Greek", "", "Harpy");
       mythicalCreaturesRepository.save(harpy2);

       MythicalCreature unicorn1 = new MythicalCreature("Melvin", Gender.Male, "IKillEat", "Greek", "", "Unicorn");
       mythicalCreaturesRepository.save(unicorn1);
       MythicalCreature unicorn2 = new MythicalCreature("Melvinetta", Gender.Female, "IKillEat", "Greek", "", "Unicorn");
       mythicalCreaturesRepository.save(unicorn2);

       //CREATURES NORSE
        MythicalCreature wolf1 = new MythicalCreature("Geri", Gender.NonBinary, "IKillEat", "Norse", "", "Wolf");
        mythicalCreaturesRepository.save(wolf1);
        MythicalCreature wolf2 = new MythicalCreature("Freki", Gender.NonBinary, "IKillEat", "Norse", "", "Wolf");
        mythicalCreaturesRepository.save(wolf2);

        MythicalCreature horse1 = new MythicalCreature("Gná", Gender.NonBinary, "IKillEat", "Norse", "", "Horse");
        mythicalCreaturesRepository.save(horse1);
        MythicalCreature horse2 = new MythicalCreature("Hófvarpnir", Gender.NonBinary, "IKillEat", "Norse", "", "Horse");
        mythicalCreaturesRepository.save(horse2);

       //ENCLOSURES
       Enclosure harpyEnclosure = new Enclosure(2, "Harpy Enclosure", "Greek"); enclosureRepository.save(harpyEnclosure);
       Enclosure unicornEnclosure = new Enclosure(2, "Scotland","Greek"); enclosureRepository.save(unicornEnclosure);
       Enclosure wolfEnclosure = new Enclosure(2, "Norse Wolves", "Norse"); enclosureRepository.save(wolfEnclosure);
       Enclosure horseEnclosure = new Enclosure(2, "Norses", "Norse"); enclosureRepository.save(horseEnclosure);

        //VISITORS
        Visitor visitor1 = new Visitor(); visitorRepository.save(visitor1);
        Visitor visitor2 = new Visitor(); visitorRepository.save(visitor2);
        Visitor visitor3 = new Visitor(); visitorRepository.save(visitor3);
        Visitor visitor4 = new Visitor(); visitorRepository.save(visitor4);
        Visitor visitor5 = new Visitor(); visitorRepository.save(visitor5);
        Visitor visitor6 = new Visitor(); visitorRepository.save(visitor6);
        Visitor visitor7 = new Visitor(); visitorRepository.save(visitor7);
        Visitor visitor8 = new Visitor(); visitorRepository.save(visitor8);
        Visitor visitor9 = new Visitor(); visitorRepository.save(visitor9);
        Visitor visitor10 = new Visitor(); visitorRepository.save(visitor10);


    }
}
