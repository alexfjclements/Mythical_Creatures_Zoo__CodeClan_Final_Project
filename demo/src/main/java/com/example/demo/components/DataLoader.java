package com.example.demo.components;

import com.example.demo.Models.*;
import com.example.demo.repositories.EnclosureRepository;
import com.example.demo.repositories.MenagerieRepository;
import com.example.demo.repositories.MythicalCreaturesRepository;
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
       MythicalCreature harpy = new MythicalCreature("Harpy", Gender.Male, "IKillEat", OriginLocation.Greek, "", "Harpy");
       mythicalCreaturesRepository.save(harpy);
       MythicalCreature unicorn = new MythicalCreature("Melvin", Gender.Female, "IDontKill", OriginLocation.Greek, "", "Unicorn");
       mythicalCreaturesRepository.save(unicorn);
       Enclosure enclosure = new Enclosure(2, "Greek", OriginLocation.Greek);
       enclosureRepository.save(enclosure);
       Menagerie menagerie = new Menagerie("Name", 10);
       menagerieRepository.save(menagerie);
       Visitor visitor1 = new Visitor();
       visitorRepository.save(visitor1);
    }
}
