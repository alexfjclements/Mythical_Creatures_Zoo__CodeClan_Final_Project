package com.example.demo.repositories;

import com.example.demo.Models.MythicalCreature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MythicalCreaturesRepository extends JpaRepository<MythicalCreature, Long> {
}
