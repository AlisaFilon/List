package com.example.list.controller;

import com.example.list.Homework;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;


import java.util.HashMap;
import java.util.Map;

@RestController
public class listController {

    private Map<Integer, Homework> homeworks;

    private Integer counter = 0;

    public listController() {
        homeworks = new HashMap<>();
    }

    @GetMapping("/homeworks")
    public Map<Integer, Homework> allHomeworks() {
        return homeworks;
    }

    @PostMapping("/homeworks")
    public RedirectView addNewHomework(Homework homework) {
        homeworks.put(counter++, homework);
        return new RedirectView("/");
    }

    @DeleteMapping("/homeworks/{index}")
    void deleteHomework(@PathVariable int index) {
        homeworks.remove(index);
    }

}


