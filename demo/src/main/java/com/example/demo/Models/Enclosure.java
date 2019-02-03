package com.example.demo.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "enclosures")
public class Enclosure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "mythical_creature_id", nullable = false)
    private List<MythicalCreature> creatures;

    @Column(name = "size")
    private int size;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private OriginLocation type;

    @ManyToOne
    @JoinColumn(name = "menagerie_id", nullable = false)
    private Menagerie menagerie;

    public Enclosure(int size, String name, OriginLocation type) {
        this.creatures = new ArrayList<>();
        this.size = size;
        this.name = name;
        this.type = type;
        this.menagerie = null;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Enclosure() {
    }

    public List<MythicalCreature> getCreatures() {
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

    public Menagerie getMenagerie() {
        return menagerie;
    }

    public void setMenagerie(Menagerie menagerie) {
        this.menagerie = menagerie;
    }

    public void setCreatures(List<MythicalCreature> creatures) {
        this.creatures = creatures;
    }
}



