package com.example.favoritesapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FAVORITES")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FAVORITE_INFO")
    private String favoriteInfo;

    @Column(name = "CATEGORY_ID")
    private String categoryId;

    @Column(name = "USER_ID")
    private String userId;

}