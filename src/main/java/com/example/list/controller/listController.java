package com.example.list.controller;

import com.example.list.models.Homework;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class listController {

    private final List<Homework> homeworks = new ArrayList<>();

    @GetMapping("/homeworks")
    public List<Homework> allHomeworks() {
        return homeworks;
    }

    @PostMapping("/homeworks")
    public RedirectView addNewHomework(Homework homework) {
        homeworks.add(homework);
        return new RedirectView("/");
    }

    @DeleteMapping("/homeworks/{index}")
    void deleteHomework(@PathVariable int index) {
        homeworks.remove(index);
    }

}


