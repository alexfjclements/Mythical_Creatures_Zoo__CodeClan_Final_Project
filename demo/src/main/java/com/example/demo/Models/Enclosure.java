package com.example.demo.Models;
import java.util.ArrayList;

public class Enclosure {
    private Long id;

    private ArrayList<MythicalCreature> creatures;

    private int size;

    private String name;

    private OriginLocation type;

    public Enclosure(int size, String name, OriginLocation type) {
        this.creatures = new ArrayList<>();
        this.size = size;
        this.name = name;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Enclosure() {
    }

    public ArrayList<MythicalCreature> getCreatures() {
        return creatures;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public OriginLocation getType() {
        return type;
    }

    public void setType(OriginLocation type) {
        this.type = type;
    }

    public void addCreature(MythicalCreature creature) {
        if (creature.getOriginLocation() == type) {
            this.creatures.add(creature);
        }
    }

    public void removeCreature(MythicalCreature creature) {
        this.creatures.remove(creature);
    }

    public String feedCreature(MythicalCreature creature){
        String eatString = creature.eat();
        return eatString;
    }

    public void setCreatures(ArrayList<MythicalCreature> creatures) {
        this.creatures = creatures;
    }
}
