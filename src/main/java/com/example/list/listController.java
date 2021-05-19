package com.example.list;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class listController {

    private final List<Lista> homeworks = new ArrayList<>();

    @GetMapping("/homeworks")
    public List<Lista> allhomeworks() {
        return homeworks;
    }

    @PostMapping("/homeworks")
    public RedirectView addNewHomework(Lista homework) {
        homeworks.add(homework);
        return new RedirectView("/");
    }



}


