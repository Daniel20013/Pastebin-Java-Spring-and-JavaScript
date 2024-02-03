package com.example.Pastebin;

import java.util.List;

public interface ITextService {
    List<Text> getText();

    void createText(Text text);
}
