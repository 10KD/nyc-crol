package com.example.usersapi;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {
	@Autowired
	private UserRepository userRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void findAllTest() {
		List<User> allUsers = userRepository.findAll();

		assertThat(allUsers.size(), is(2));
	}

}
