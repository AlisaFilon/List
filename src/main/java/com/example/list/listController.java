package com.example.list;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class listController {

    private List<Lista> homeworks;

    public listController(){
        homeworks = List.of(

        );
    }

}
