package com.example.demo.controllers;

import com.example.demo.Models.Menagerie;
import com.example.demo.repositories.MenagerieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/menageries")
public class MenagerieController {

    @Autowired
    MenagerieRepository menagerieRepository;

}
