package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "visitors")
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "menagerie_id")
    private Menagerie menagerie;

    public Visitor() {
        this.menagerie = null;
    }

    public Menagerie getMenagerie() {
        return menagerie;
    }

    public void setMenagerie(Menagerie menagerie) {
        this.menagerie = menagerie;
    }
}
