package com.example.demo.Models;

public class Visitor {
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
