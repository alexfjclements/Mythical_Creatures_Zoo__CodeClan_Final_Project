package com.example.demo.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "menageries")
public class Menagerie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "enclosures_id", nullable = false)
    private ArrayList<Enclosure> enclosures;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "visitors_id", nullable = false)
    private ArrayList<Visitor> visitors;

    @Column(name = "entrance")
    private double entranceFee;

    public Menagerie(String name, double entranceFee) {
        this.name = name;
        this.enclosures = new ArrayList<>();
        this.visitors = new ArrayList<>();
        this.entranceFee = entranceFee;
    }

    public Menagerie() {
    }

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

    public ArrayList<Enclosure> getEnclosures() {
        return enclosures;
    }


    public ArrayList<Visitor> getVisitors() {
        return visitors;
    }

    public double getEntranceFee() {
        return entranceFee;
    }

    public void setEntranceFee(double entranceFee) {
        this.entranceFee = entranceFee;
    }
    public void addEnclosure(Enclosure enclosure){
        enclosures.add(enclosure);
    }

    public void removeEnclosure(Enclosure enclosure){
        enclosures.remove(enclosure);
    }

    public void addVisitor(Visitor visitor){
        visitors.add(visitor);
    }

    public void removeVisitor(Visitor visitor){
        visitors.remove(visitor);
    }

    public void setEnclosures(ArrayList<Enclosure> enclosures) {
        this.enclosures = enclosures;
    }

    public void setVisitors(ArrayList<Visitor> visitors) {
        this.visitors = visitors;
    }
}
