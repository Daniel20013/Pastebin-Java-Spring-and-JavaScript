package com.example.Pastebin;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TextRepository extends JpaRepository<Text, Long> {
    Optional<Text> getTextByText(String text);
}
