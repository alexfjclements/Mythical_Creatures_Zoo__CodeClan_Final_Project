package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "visitors")
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int money;

    public Visitor(int money) {
        this.money = money;
    }

    public Visitor(){}

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

}
