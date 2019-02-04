package com.example.demo.IKill;

public class IKillFactory {

    public IKill getKillBehaviour(String killBehaviour){
        if (killBehaviour  == null) {
            return null;
        } else if (killBehaviour.equalsIgnoreCase("IKillEat")) {
                return new IKillEat();
            }    else if (killBehaviour.equalsIgnoreCase("IDontKill")) {
            return new IDontKill();
        }
        return null;
    }
}