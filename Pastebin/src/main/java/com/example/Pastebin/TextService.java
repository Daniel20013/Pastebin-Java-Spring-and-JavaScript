package com.example.Pastebin;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TextService implements ITextService {
    private final TextRepository textRepository;

    public TextService(TextRepository textRepository) {
        this.textRepository = textRepository;
    }

    @Override
    public List<Text> getText() {
        return textRepository.findAll();
    }

    @Override
    public void createText(Text text) {
        validateText(text.getText());
        textRepository.save(text);
    }

    private void validateText(String text) {
        Optional<Text> textOptional = textRepository.getTextByText(text);
        if (textOptional.isPresent()) {
            throw new IllegalStateException(String.format("Text %s alerady exists", text));
        }
    }
}
