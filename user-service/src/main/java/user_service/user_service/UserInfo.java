package user_service.user_service;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "users_info")
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String firstName;

    @Column(name = "second name")
    private String secondName;

    @Column(name = "email")
    private String email;

    @Column(name = "port")
    private int port;

    public UserInfo(Long id, String firstName, String secondName, String email) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
    }

}
