package com.example.demo.controllers;

import com.example.demo.Models.MythicalCreature;
import com.example.demo.repositories.MythicalCreaturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/mythical-creatures")
public class MythicalCreatureController {

    @Autowired
    MythicalCreaturesRepository mythicalCreaturesRepository;
    
}
