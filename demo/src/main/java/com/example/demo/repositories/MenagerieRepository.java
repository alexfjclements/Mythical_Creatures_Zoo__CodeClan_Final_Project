package com.example.demo.repositories;

import com.example.demo.Models.Menagerie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenagerieRepository extends JpaRepository<Menagerie, Long> {
}
