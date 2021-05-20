package com.example.list;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class listController {

    private final List<Lista> homeworks = new ArrayList<>();

    @GetMapping("/homeworks")
    public List<Lista> allHomeworks() {
        return homeworks;
    }

    @PostMapping("/homeworks")
    public RedirectView addNewHomework(Lista lista) {
        homeworks.add(lista);
        return new RedirectView("/");
    }

    @DeleteMapping("/homeworks/{index}")
    void deleteHomework(@PathVariable int index) {
        homeworks.remove(index);
    }

}


