package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "visitors")
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int money;

    @ManyToOne
    @JoinColumn(name = "menagerie_id", nullable = false)
    private Menagerie menagerie;

    public Visitor(int money) {
        this.money = money;
        this.menagerie = null;
    }

    public Visitor(){}

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public Menagerie getMenagerie() {
        return menagerie;
    }

    public void setMenagerie(Menagerie menagerie) {
        this.menagerie = menagerie;
    }
}
