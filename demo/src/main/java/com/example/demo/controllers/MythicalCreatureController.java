package com.example.demo.controllers;

import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.OriginLocation;
import com.example.demo.repositories.MythicalCreaturesRepositories.MythicalCreaturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/mythicalCreatures")
public class MythicalCreatureController {

    @Autowired
    MythicalCreaturesRepository mythicalCreaturesRepository;

    @GetMapping(value = "/location/{originLocation}")
    public List<MythicalCreature> getAllMythicalCreaturesFromOriginLocation(@PathVariable String originLocation){
        return mythicalCreaturesRepository.findMythicalCreaturesByOriginLocation(originLocation);
    }
}
