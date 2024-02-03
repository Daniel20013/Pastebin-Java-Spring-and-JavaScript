package com.example.Pastebin;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@RestController
@RequestMapping(path = "/api/v1/pastebin")
public class TextController {
    private final TextService textService;

    public TextController(TextService textService) {
        this.textService = textService;
    }

    @GetMapping
    public List<Text> getText() {
        return textService.getText();
    }

    @PostMapping
    public void createText(@RequestBody Text text) {
        textService.createText(text);
    }
}
