package com.tenant.Multitenant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import java.util.Arrays;

@SpringBootApplication
public class MultiTenantApplication {

	public static void main(String[] args) {
		SpringApplication.run(MultiTenantApplication.class, args);
	}
}
