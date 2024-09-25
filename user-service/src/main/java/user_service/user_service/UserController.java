package user_service.user_service;

import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class UserController {

    @Autowired
    public Environment environment;

    @Autowired
    public UserRepository repository;

    @GetMapping("users-service/all")
    public List<UserInfo> getUserList() {
        List<UserInfo> values = repository.findAll();
        var port = Integer.parseInt(Objects.requireNonNull(environment.getProperty("server.port")));
        for (var obj : values) {
            obj.setPort(port);
        }
        return values;
    }
}
