package com.example.demo.repositories.MythicalCreaturesRepositories;

import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.OriginLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MythicalCreaturesRepository extends JpaRepository<MythicalCreature, Long>, MythicalCreatureRepositoryCustom {
    List<MythicalCreature> findMythicalCreaturesByOriginLocation(String originLocation);
}
