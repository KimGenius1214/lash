package com.example.lash.core.config

import com.example.lash.core.security.JwtTokenProvider
import com.fasterxml.jackson.databind.ObjectMapper
import lombok.RequiredArgsConstructor
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
class SecurityConfig : WebSecurityConfigurerAdapter() {
    private val jwtTokenProvider: JwtTokenProvider? = null
    private val objectMapper: ObjectMapper? = null
    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http.httpBasic().disable()
            .cors().and()
            .formLogin().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeRequests()
            .antMatchers("/", "/**").permitAll()
            .antMatchers(HttpMethod.GET, "/swagger-ui/**").permitAll()
            .antMatchers("/v1/api/auth/**").permitAll()
            .anyRequest().permitAll()
        //                .and()
//                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, objectMapper), UsernamePasswordAuthenticationFilter.class);
    }

    override fun configure(web: WebSecurity) {
        web.ignoring().antMatchers(
            "/v3/api-docs", "/swagger-resources/**",
            "/swagger-ui/index.html", "/webjars/**", "/swagger/**"
        )
    }
}