package com.java.springboot;


import com.java.springboot.model.Employee;
import com.java.springboot.repository.EmployeeRepository;
import org.hibernate.annotations.DialectOverride;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

    @Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Rohit");
//		employee.setLastName("Sharma");
//		employee.setEmailId("rohitsharma@gmail.com");
//    	employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Ritika");
//		employee1.setLastName("Khanna");
//		employee1.setEmailId("ritika@gmail.com");
//		employeeRepository.save(employee1);
	}
}
