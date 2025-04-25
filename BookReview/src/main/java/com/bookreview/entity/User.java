// package com.bookreview.entity;

// import java.util.UUID;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;

// @Entity
// @Table(name = "users")
// public class User {
//     @Id
//     @GeneratedValue
//     private UUID id;

//     private String name;
//     private String email;
//     private String password;

//     @Column(nullable = false)
//     private String role;


//     //private String role; // "USER" or "ADMIN"
//     public UUID getId() {
//         return id;
//     }
//     public void setId(UUID id) {
//         this.id = id;
//     }
//     public String getName() {
//         return name;
//     }
//     public void setName(String name) {
//         this.name = name;
//     }
//     public String getEmail() {
//         return email;
//     }
//     public void setEmail(String email) {
//         this.email = email;
//     }
//     public String getPassword() {
//         return password;
//     }
//     public void setPassword(String password) {
//         this.password = password;
//     }
    
//     public void setRole(String role) {
//         if (!"USER".equals(role) && !"ADMIN".equals(role)) {
//             throw new IllegalArgumentException("Role must be either USER or ADMIN");
//         }
//         this.role = role;
//     }


//     public String getRole() {
//         return role;
//     }


//     public User(UUID id, String name, String email, String password, String role) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }

    
//     public User() {
//     }
    

    
    
// }











package com.bookreview.entity;

import java.util.Collection;
import java.util.Collections;
import java.util.UUID;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    
    @Column(unique = true)
    private String email;
    
    private String password;

    @Column(nullable = false)
    private String role;

    public User() {}
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        if (!"USER".equals(role) && !"ADMIN".equals(role)) {
            throw new IllegalArgumentException("Role must be either USER or ADMIN");
        }
        this.role = role;
    }

    // ============== UserDetails Methods ==============
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(
            new SimpleGrantedAuthority("ROLE_" + this.role)
        );
    }

    @Override
    public String getUsername() {
        return this.email; // Spring Security uses email as username
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}