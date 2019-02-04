package com.example.demo.Models;

import com.example.demo.IEat.IEat;

public class MythicalCreature {
    private Long id;
    private String name;
    private Enum gender;
    private IEat eatBehaviour;
    private Enum originLocation;
    private String description;

    public MythicalCreature(String name, Enum gender, IEat eatBehaviour, Enum originLocation, String description) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.eatBehaviour = eatBehaviour;
        this.originLocation = originLocation;
        this.description = description;
    }

    public MythicalCreature(){};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Enum getGender() {
        return gender;
    }

    public void setGender(Enum gender) {
        this.gender = gender;
    }

    public IEat getEatBehaviour() {
        return eatBehaviour;
    }

    public void setEatBehaviour(IEat eatBehaviour) {
        this.eatBehaviour = eatBehaviour;
    }

    public Enum getOriginLocation() {
        return originLocation;
    }

    public void setOriginLocation(Enum originLocation) {
        this.originLocation = originLocation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
